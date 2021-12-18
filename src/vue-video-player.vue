<template>
  <!-- 默认不开启声音 跳过chrome的自动阻止策略 -->
  <div
    class="vvp-player"
    :class="fillCls"
    @click="handleClick"
    @dblclick="handleDblClick"
    ref="vvplayer"
  >
    <div class="vvp-shade" :class="loadingCls">
      <div class="vjs-loading-spinner">
        <span class="vvp-speed">{{ kb }}</span>
      </div>
      <div class="vvp-occupy">{{ infoText }}</div>
      <div class="vvp-error-ctx">
        <div class="vvp-error-button">
          <span @click="close()"></span>
        </div>
        <div class="vvp-error-text" v-html="error"></div>
      </div>
    </div>
    <div class="vvp-focus" :class="focusCls"></div>
    <!-- <div>
      <video
        class="video-js vjs-big-play-centered vjs-16-9"
        ref="player"
        controls
        muted
        preload="none"
      >
        <p class="vjs-no-js">
          Please consider upgrading to a web browser that supports HTML5 video
        </p>
      </video>
    </div> -->
    <div class="vvp-footer">
      <button
        class="vvp-control vvp-button vvp-control-mute"
        :class="mutedCls"
        type="button"
        title="Pause"
        aria-disabled="false"
        @click="toggleMuted()"
      >
        <span class="vvp-icon-placeholder" aria-hidden="true"></span>
      </button>
      <div class="vvp-control vvp-control-text vvp-control-info">
        {{ infoText }}
      </div>
      <div class="vvp-control vvp-control-text vvp-control-speed">
        {{ kbps }}
      </div>
      <button
        class="vvp-control vvp-button vvp-control-record"
        :class="recordCls"
        type="button"
        title="record"
        aria-disabled="false"
        @click="toggleRecord()"
      >
        <span class="vvp-icon-placeholder" aria-hidden="true"></span>
      </button>
      <button
        class="vvp-control vvp-button vvp-control-fullscreen"
        type="button"
        title="Fullscreen"
        aria-disabled="false"
        @click="fullscreen()"
      >
        <span class="vvp-icon-placeholder" aria-hidden="true"></span>
      </button>
      <button
        class="vvp-control vvp-button vvp-control-close"
        type="button"
        title="Close"
        aria-disabled="false"
        @click="close()"
      >
        <span class="vvp-icon-placeholder" aria-hidden="true"></span>
      </button>
    </div>
  </div>
</template>
<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.min.css'
import 'videojs-flvjs-es6'
import 'videojs-fetch-flv'
import 'videojs-fetch-flv/dist/videojs-fetch-flv.css'
import 'videojs-contextmenu-pt'
import 'videojs-contextmenu-pt/dist/videojs-contextmenu-pt.css'
import flvjs from 'flv.js'

flvjs.LoggingControl.enableDebug = false
flvjs.LoggingControl.enableVerbose = false
flvjs.LoggingControl.enableWarn = false
flvjs.LoggingControl.enableError = false

// console.log(flvjs.Events.STATISTICS_INFO)
// const FLVJS_EVENTS_STATISTICS_INFO = 'statistics_info'
// const FLVJS_EVENTS_ERROR = 'error'

// 超过5个process 都没有收到音频流 自动重载播放器
const ERR_MAX_AUDIO_COUNT = 6

const defaults = {
  autoplay: true,
  // fill: true,
  // responsive: true,
  controlBar: {
    pictureInPictureToggle: false,
    closeButton: true,
    subsCapsButton: false
  },
  // @see https://github.com/bilibili/flv.js/blob/master/docs/api.md
  flvjs: {
    mediaDataSource: {
      isLive: true,
      cors: true,
      withCredentials: false,
      hasAudio: true
    },
    config: {
      // 启用IO存储缓冲区。如果您需要实时流播放的实时（最小延迟），则设置为false
      enableStashBuffer: false,
      // 禁用音视频同步
      fixAudioTimestampGap: false
    }
  }
}

const playerOptions = {
  src: '',
  isLive: true,
  record: {
    enabled: false,
    isLive: true
  },
  // 上下文菜单
  content: null,
  data: {
    // 唯一值
    unique: null,
    // 用户数据
    user: null
  },
  hasAudio: true,
  text: ''
}

export default {
  name: 'VueVideoPlayer',
  props: {
    // 自动追帧
    autoRate: {
      type: Object,
      default() {
        return {
          enabled: true,
          max: 9.0,
          min: 3.0
        }
      }
    },
    // 当出错时自动重连
    connect: {
      type: Object,
      default() {
        return {
          auto: false,
          interval: 15
        }
      }
    },
    lockControlBar: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default() {
        return {}
      }
    },
    index: {
      type: Number,
      default: null
    },
    tag: {
      type: String,
      default: null
    },
    fill: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      id: null,
      player: null,
      // 0=空闲 1=占用中 2=请求中 3=播放中/缓冲中 4=错误
      status: 0,
      focused: false,
      error: '',
      // 当http-flv头有音视频 但http-flv没有音频流时 自动重置播放器
      autoAudio: true,
      progress: 0,
      lastOptions: null,
      filename: null,
      muted: true,
      suffix: null,
      // 加载flv时用于显示加载网速
      speed: null,
      // 创建时间(或占用时间)
      order: 0,
      // 播放速率
      rate: 1.0,
      lastDecodedFrame: 0,
      lastDecodedCount: 0
    }
  },
  computed: {
    loadingCls() {
      switch (this.status) {
        case 0:
          return ''
        case 1:
        case 2:
          return 'vjs-waiting'
        case 4:
          return 'vvp-error'
        default:
          return 'vvp-hide'
      }
    },
    fillCls() {
      let cls = ''
      if (this.lockControlBar) {
        if (this.status > 0) {
          // 开始播放或占用时才显示控制栏
          cls = 'vvp-footer-show'
        }
      }
      if (this.fill) {
        return cls + ' vvp-fill'
      } else {
        return cls
      }
    },
    focusCls() {
      if (this.focused) {
        return 'vvp-focus-show'
      } else {
        return ''
      }
    },
    kbps() {
      if (this.speed == null) {
        return ''
      } else {
        return this.speed + ' kb/s'
      }
    },
    kb() {
      if (this.speed == null) {
        return ''
      } else {
        return this.speed + 'kb'
      }
    },
    infoText() {
      if (this.lastOptions && this.lastOptions.text) {
        return this.lastOptions.text
      } else {
        return ''
      }
    },
    mutedCls() {
      if (this.muted) {
        return 'vvp-vol-0'
      } else {
        return 'vvp-vol-3'
      }
    },
    recordCls() {
      if (
        this.lastOptions &&
        this.lastOptions.record &&
        this.lastOptions.record.enabled
      ) {
        return ''
      } else {
        return 'vvp-hide'
      }
    }
  },
  methods: {
    close() {
      if (this.player) {
        // this.player.reset()
        // 如果在录像中 需要停止录像功能
        if (this.player.fetchFlv && this.player.fetchObj) {
          if (this.player.fetchObj.fetching) {
            this.player.fetchObj.stop(false)
          }
        }
        this.order = 0
      }
      this.status = 0
      this.destoryPlayer()
      this.autoAudio = true
      this.error = ''
      this.speed = null
      this.filename = null
      this.progress = 0
      this.lastOptions = null
      this.rate = 1.0
      this.muted = true
      this.lastDecodedCount = 0
      this.lastDecodedFrame = 0
    },
    createHeader(player) {
      const video = player.el()
      // Create div element
      const div = document.createElement('div')
      div.classList.add('vjs-header')
      const infoEl = document.createElement('div')
      // infoEl.classList.add('vjs-h-info')
      // infoEl.innerText = ''
      div.appendChild(infoEl)
      const speedEl = document.createElement('div')
      speedEl.classList.add('vjs-h-speed')
      div.appendChild(speedEl)
      player.header = {
        el: {
          div: div,
          info: infoEl,
          speed: speedEl
        }
      }
      video.appendChild(div)
    },
    createPlayer() {
      const el = document.createElement('video')
      el.id = this.id
      el.className = 'video-js vjs-big-play-centered'
      el.setAttribute('preload', null)
      el.innerHTML =
        '<p class="vjs-no-js">Please consider upgrading to a web browser that supports HTML5 video</p>'
      this.$refs.vvplayer.appendChild(el)
      const options = videojs.mergeOptions(defaults, this.options)
      this.player = videojs(this.id, options)
      if (options.controlBar.closeButton) {
        this.player.controlBar.closeButton.on('close', () => {
          this.close()
        })
      }
      // 创建顶部显示条
      this.createHeader(this.player)
      if (this.lockControlBar) {
        this.player.controlBar.hide()
      }
      // 正常加载流程 flv
      // ready -> loadstart -> loadedmetadata -> loadeddata -> playing
      // rtmp连接成功 但没图像
      // ready -> loadstart
      // rtmp mp4 连接不成功
      // ready -> error
      // hls连接不成功
      // ready -> loadstart -> error

      this.player.on('ready', () => {
        const flvPlayer = this.player.tech({
          IWillNotUseThisInPlugins: true
        }).flvPlayer
        if (flvPlayer) {
          flvPlayer.on(flvjs.Events.ERROR, (errType, errDetails, e) => {
            this.status = 4
            this.error = this.getError('(flv) ' + e.msg)
            switch (errType) {
              case flvjs.ErrorTypes.NETWORK_ERROR:
                // 存在多种情况 以下是常见几种
                // ERR_FAILED 504 连接到srs 超过1分钟一直没有等到流时提示  Exception
                // ERR_CONNECTION_REFUSED 访问到一个不存在的IP地址时 Exception
                // ERR_CONNECTION_TIMED_OUT IP地址存在 端口不存在时 Exception
                // ERR_INCOMPLETE_CHUNKED_ENCODING 服务器停止推流 UnrecoverableEarlyEof
                this.$emit('vvperror', this, errType, errDetails, e)
                break
              case flvjs.ErrorTypes.MEDIA_ERROR:
                break
              case flvjs.ErrorTypes.OTHER_ERROR:
                break
            }
          })
          flvPlayer.on(flvjs.Events.STATISTICS_INFO, (info) => {
            this.speed = info.speed.toFixed(0)
            this.updateSpeed()
            if (this.lastDecodedFrame === 0) {
              this.lastDecodedFrame = info.decodedFrames
              return
            }
            if (this.lastDecodedFrame !== info.decodedFrames) {
              this.lastDecodedFrame = info.decodedFrames
              this.lastDecodedCount = 0
            } else {
              this.lastDecodedCount++
              // 30 约等于18秒 画面卡死时重连
              if (this.lastDecodedCount >= 30) {
                this.lastDecodedCount = 0
                this.lastDecodedFrame = 0
                if (this.connect && this.connect.auto) {
                  this.player.setTimeout(() => {
                    window.console.warn(
                      this.lastOptions.src + ' decoded error. reconnect. '
                    )
                    this.play(this.lastOptions)
                  }, 300)
                }
              }
            }
          })
        }
        if (!this.player.fetchObj) {
          this.player.fetchObj = this.player.fetchFlv({
            isLive: true
          })
        }
      })
      this.player.on('loadeddata', () => {
        this.status = 3
      })
      this.player.on('durationchange', () => {
        if (!this.player.controlBar.liveDisplay.hasClass('vjs-hidden')) {
          // 实时关掉 播放暂停按钮
          this.player.controlBar.playToggle.hide()
          this.player.controlBar.liveDisplay.addClass('vvp-live')
        } else {
          this.player.controlBar.liveDisplay.removeClass('vvp-live')
        }
      })
      this.player.on('pause', () => {
        // 不允许隐藏时暂停
        this.player.play()
      })
      // this.player.on('playing', () => {
      //   // console.log('playing')
      //   // 一直执行
      // })
      this.player.on('progress', () => {
        // console.log('progress')
        if (this.autoAudio && this.lastOptions.hasAudio) {
          // 如果 m3u8 关闭这个功能
          if (this.filename) {
            if (this.suffix === 'm3u8') {
              this.autoAudio = false
            }
          }

          this.progress++
          if (this.progress >= ERR_MAX_AUDIO_COUNT) {
            window.console.warn(
              this.lastOptions.src +
                ' has no audio data, video will auto reset to play.'
            )
            // 关掉音频 自动重载
            this.lastOptions.hasAudio = false
            this.play(this.lastOptions)
          }
        }
      })
      this.player.on('canplay', () => {
        // console.log('canplay')
        this.autoAudio = false
      })
      this.player.on('timeupdate', () => {
        if (this.autoRate.enabled && this.lastOptions.isLive) {
          // 当前播放时间
          const cur = this.player.currentTime()
          // 缓冲区尾部时间
          const end = this.player.bufferedEnd()

          if (end - cur > this.autoRate.max) {
            this.playbackRate(1.5)
          }
          if (end - cur < this.autoRate.min) {
            this.playbackRate(1.0)
          }
        }
      })
      this.player.on('fullscreenchange', () => {
        if (this.player.isFullscreen()) {
          this.player.controlBar.show()
          this.player.header.el.div.setAttribute('style', 'display: flex')
        } else {
          if (this.lockControlBar) {
            this.player.controlBar.hide()
            this.player.header.el.div.removeAttribute('style')
          }
        }
      })
      this.player.on('volumechange', () => {
        this.muted = this.player.muted()
      })
      // this.player.on('loadeddata', () => {
      //   console.log('loadeddata')
      // })
      // this.player.on('loadedmetadata', () => {
      //   console.log('loadedmetadata')
      // })
      // 开启音频 loadedmetadata progress > 5 canplay = false playing=false 重连
      // this.player.on('useractive', () => {
      //   console.log('useractive')
      // })
      // this.player.on('userinactive', () => {
      //   console.log('userinactive')
      // })
      this.player.on('error', (e) => {
        // 播放mp4/m3u8时可以捕获 flv不行
        this.status = 4
        if (this.player.error) {
          switch (this.player.error().code) {
            case 0:
              this.error = this.getError('MEDIA_ERR_CUSTOM')
              break
            case 1:
              this.error = this.getError('MEDIA_ERR_ABORTED')
              break
            case 2:
              this.error = this.getError('MEDIA_ERR_NETWORK')
              break
            case 3:
              this.error = this.getError('MEDIA_ERR_DECODE')
              // 重连接 这里用定时器 防止跟上面的flv.error冲突
              if (this.connect && this.connect.auto) {
                this.player.setTimeout(() => {
                  window.console.warn(
                    this.lastOptions.src +
                      ' will reset and reconnect. ' +
                      this.player.error().message
                  )
                  this.play(this.lastOptions)
                }, 1280)
              }
              break
            case 4:
              this.error = this.getError(
                'network failed or format no supported'
              )
              break
            case 5:
              this.error = this.getError('MEDIA_ERR_ENCRYPTED')
              break
            default:
              this.error = this.getError('unknow error')
          }
        } else {
          this.error = this.getError(e.type)
        }
      })
      // this.player.on('abort', () => {
      //   console.log('abort')
      // })
      // })
    },
    destoryPlayer() {
      if (this.player) {
        this.player.dispose()
        this.player = null
      }
    },
    fullscreen() {
      if (this.player) {
        if (!this.player.isFullscreen()) {
          this.player.requestFullscreen()
        }
      }
    },
    getError(error) {
      return '<p>' + this.lastOptions.text + '</p><p>' + error + '</p>'
    },
    getMediaType(url) {
      if (url === null) {
        return 'video/x-flv'
      }
      const sTmp = url.toLowerCase()
      if (sTmp.indexOf('rtmp') == 0) {
        return 'rtmp/mp4'
      } else if (sTmp.indexOf('.flv') > 0) {
        return 'video/x-flv'
      } else if (sTmp.indexOf('.m3u8') > 0) {
        return 'application/x-mpegURL'
      } else if (sTmp.indexOf('.mp4') > 0) {
        return 'video/mp4'
      } else {
        // 什么都没有，默认flv
        return 'video/x-flv'
      }
    },
    getOptions() {
      return this.lastOptions
    },
    handleClick() {
      this.$emit('click', this)
    },
    handleDblClick() {
      this.$emit('dblclick', this)
    },
    mute() {
      this.player.volume(0)
    },
    /**
     * 占用
     * @param order {int} 创建顺序
     * @param text {string} 占用文本
     */
    occupy(order, unique, text) {
      if (this.status === 4) {
        this.close()
      }
      if (this.status === 0) {
        this.order = order
        this.status = 1
        this.lastOptions = {
          data: {
            unique: unique
          },
          text: text
        }
      }
    },
    play(option) {
      this.close()
      this.createPlayer()
      const options = videojs.mergeOptions(playerOptions, option)
      if (this.order === 0) {
        this.order = options.order
      }
      if (!options.hasAudio) {
        this.player.controlBar.volumePanel.hide()
        if (this.player.options().flvjs) {
          this.player.options().flvjs.mediaDataSource.hasAudio = false
        }
      }
      this.status = 2
      const type = this.getMediaType(options.src)
      if (options.content) {
        this.player.contextmenuUI({
          content: options.content
        })
      }
      if (options.record && options.record.enabled) {
        if (type === 'rtmp/mp4' || type === 'application/x-mpegURL') {
          // rtmp/m3u8不支持下载
          options.record.enabled = false
        }
      }
      if (this.player.fetchObj) {
        if (options.record.enabled) {
          this.player.fetchObj.show()
          this.player.fetchObj.updateIsLive(options.record.isLive)
        } else {
          this.player.fetchObj.hide()
        }
      }
      this.filename = this.url2Filename(options.src)
      this.suffix = this.filename.split('.').pop().toLowerCase()
      if (options.data.unique == null) {
        options.data.unique = this.filename
      }
      let text = this.filename
      if (options.text && options.text !== '') {
        text = options.text
      } else {
        options.text = text
      }
      this.updateInfo(text)
      this.player.src([{ type: type, src: options.src }])
      this.player.autoplay()
      this.lastOptions = options
    },
    /**
     * 获取或设置当前播放速率
     * @param rateopt {number} 速率值 1.0 表正常播放 0.5表半速
     */
    playbackRate(rateopt) {
      if (rateopt === null) {
        return this.rate
      }
      if (this.player) {
        if (this.rate !== rateopt) {
          this.rate = rateopt
          this.player.playbackRate(this.rate)
          window.console.warn(
            this.lastOptions.src + ' playback rate change to ' + this.rate
          )
        }
      }
    },
    randomString(len) {
      len = len || 32
      const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
      const maxPos = $chars.length
      let pwd = ''
      for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
      }
      return pwd
    },
    updateInfo(text) {
      if (this.player.header) {
        this.player.header.el.info.innerText = text
      }
    },
    updateSpeed() {
      if (this.player.header) {
        this.player.header.el.speed.innerText = this.kbps
      }
    },
    url2Filename(url) {
      if (url) {
        const vlist = url.split('?')
        return vlist[0].split('\\').pop().split('/').pop()
      } else {
        return null
      }
    },
    toggleRecord() {
      if (this.player) {
        // 如果在录像中 需要停止录像功能
        if (this.player.fetchFlv && this.player.fetchObj) {
          if (this.player.fetchObj.fetching) {
            this.player.fetchObj.stop(true)
          } else {
            this.player.fetchObj.start()
          }
        }
      }
    },
    toggleMuted() {
      if (this.player) {
        if (this.player.muted()) {
          this.player.muted(false)
        } else {
          this.player.muted(true)
        }
      }
    }
  },
  mounted() {},
  watch: {},
  created() {
    this.id = 'vvp-' + this.randomString(16)
  },
  beforeDestroy() {
    this.destoryPlayer()
  }
}
</script>

<style lang="scss">
$footerHeight: 30px;

.vvp-player {
  // cif
  width: 352px;
  height: 288px;
  position: relative;

  .vvp-shade {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
    background-color: black;
    // background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFgklEQVRoge2ZX4hc1R3HP7+785AlSCMigiJZggX/tVRbqqSL/7oJSfRBH7IVShVRX9qQiLvn3Jn4kPElM/ecyaqY+OI/VARNSkOpbSSLGol/ah5CK6W+aFiFiBJKAnmoxZ3782HPLbM7d3bn3pm1D80XhuXec36/7+c7dy9z7zlwQRc0kGRYjZIkuUhEtgA3AutEZJ2qrgMQkXOqeg44B5xU1TfjOD4/DN+BAuzdu/eSSqUyCdwObC9Yfgh4Z35+/uDu3bv/VZahdADn3H1AFbim4/S/gXdV9RRwKoqiUwBpmm4ANojIBuBWYLSj5hOgaa19uQxH4QDOuZ+oak1EJgFU9WsROZim6ZFqtXqknx7NZnNrFEVbVXVSRC4LfQ6KSMNa+7dVC5AkySMisgdYB3wD7I+iaP/09PTnRfpkarVa69M03QHsANYA51T18TiOn+y3R98BvPcvq+pvAFT1tSiKGsaYjwtT5/f+cZqmNRG5F0BEXjHG3NdPbV8BvPfPqeqDofkzxpjflcdd1ueAqv42+DxvjHlopZoVA3jvJ1X19dD0LmPMnwdHXdbvTlV9I/j9yhhzcLn5ywZwzv0CeC8cTlprDw0Hc3k557YDGfi4tfb9XnOjXgPe+7Ui8jSAiCTfFzyAtfaQiCTB+2nv/dpec3sGUNWqqt4AnDDGVFeBc1kFzxOqeoOq9vTPDZAkyc0s/EihqvtXB3FldXhXA1OXcgOISBWoAEfjOH5llfhWVPA+ClQCU5e6AoT/twkAEfmfffuZOhgm8u6FrgAiMg6sBb4yxvypqKFzbrtz7nCz2byuMG2OAsNXwNrAtkhdAdI0HQcQkWNlDEXkWuDuKIrecs6t+EPUZ89jnWydyrsHxgFU9Q8D+l4GPJskyQvNZvMHgzTqYOkrwBjAyMjI3wcxzSQiD0RR9Ffv/Z1le3SwjC0d6xng/Pnzp8oa5uhqVX3DOdcoU9zBMrZ0bFGARqORTfiiXq/PlzFbQVXv/fFms/mjIkWB5QtYxAh0X4FscJjf/iKp6ngURR+3Wq1rC5bmXoWlAebC3x8WRyukA9PT0/8sWJMxzXWeXBSgVqtlg1fMzMx0vrcOS1+r6nZr7Y4iRYHlCljECOTfxHMA7XZ72Ffh9Uql8tM4jn9ftLCDZW7pWCVn/hwwpqo/A4bxytgGdllrD5RtEFgytkXKuwLZysJEWcMOvaWqGweBX8LSteqR9yx0HEBVJ+r1et4V6kthiWQijuMTZXsA1Ov1iqpmD5fHl453BTDGfAicFpFLR0dHtxU1NMY83m63bzfG7C5FvESjo6PbRORS4HRgW6Tc9wFV/SNAFEVTZUxrtdqxMnV5yhgypq7xvJMiMqOqZ1T1FufcrmHBFJVzbpeq3qKqZ0RkJm9ObgBr7WcdBVOtVuvqVaPsoeA5BQtfqLX2s7x5PV/q16xZ8wRwErgyTdMXV4VyGQXPK4GTgSVXPQPs3LnzP0AtHN7snOtr4XYYCl7ZS3wtsOSqZwAAa+1R4OFwuMV7v2c4iL0VPLaEw4cDQ0+NrNRwdnb25KZNm74FfgnctnnzZmZnZ98dHLVb3vs9qloPh49Za59aqabv1emwpv+XcPiqiLhhrk6rqgV+DZCm6bZ+9xoK7Q/s27dv4/z8/EsichWrsD+gqp9WKpX7p6amPui3R+EdGu/99cCjqvoA/HeH5jDwdr/rp2Hx9g5VvSfboRGRF4EZY8w/ivCU3iNrNBp3jIyM7ADu6Tj9DQur2WeBsyJyFkBVLwayzzgLuzGZDrfb7f21Wu3tMhwDb7N6728CtqjqVuCmPss+EpEjwJvGmI8G8R/aPjFAkiSXAz8HxqIoWq+qYwAiMpem6ecsPM+fiOP4y2H6XtAF/T/rO5a/KSO6RwxkAAAAAElFTkSuQmCC');
    // background-repeat: no-repeat;
    // background-position: center;
    font-family: VideoJs;
    &:before {
      display: block;
      content: '\f102';
      font-size: 72px;
      line-height: 72px;
      color: gray;
      opacity: 0.8;
      top: calc(50% - 36px);
      left: calc(50% - 36px);
      position: absolute;
    }

    &.vjs-waiting {
      &:before {
        content: '';
      }

      .vjs-loading-spinner {
        margin: -27px 0 0 -27px;
        width: 54px;
        height: 54px;
        border-radius: 27px;
      }

      .vvp-occupy {
        display: block;
      }
    }

    .vvp-speed {
      position: absolute;
      color: #aaa;
      text-align: center;
      width: 42px;
      top: 15px;
      font-family: Avenir, Helvetica, Arial, sans-serif;
      font-size: 10px;
    }

    .vvp-occupy {
      display: none;
      position: absolute;
      width: 100%;
      top: calc(50% + 33px);
      color: #aaa;
      text-align: center;
    }

    .vvp-error-ctx {
      display: none;
    }

    &.vvp-error {
      &:before {
        content: '';
      }

      display: table;

      .vvp-error-ctx {
        display: table-cell;
        vertical-align: middle;
        font-family: VideoJs;
        text-align: center;
        opacity: 0.8;
        &:before {
          display: block;
          content: '\f115';
          font-size: 48px;
          color: gray;
        }

        .vvp-error-text {
          font-size: 12px;
          color: #aaa;
          position: absolute;
          top: calc(50% + 25px);
          width: 100%;

          p {
            margin: 3px 0;
          }
        }

        .vvp-error-button {
          position: absolute;
          top: calc(50% - 24px);
          width: 100%;

          span {
            cursor: pointer;
            display: block;
            height: 48px;
            width: 48px;
            margin: 0 auto;
          }
        }
      }
    }
  }

  .vvp-footer {
    position: absolute;
    bottom: 0;
    height: $footerHeight;
    width: 100%;
    background: rgba(30, 30, 30, 72%);
    display: none;

    .vvp-control {
      position: relative;
      text-align: center;
      margin: 0;
      padding: 0;
      height: 100%;
      flex: none;
      color: #aaa;
    }

    .vvp-button {
      background: 0 0;
      border: none;
      cursor: pointer;
      display: inline-block;
      text-transform: none;
      text-decoration: none;
      transition: none;
      appearance: none;
      width: 36px;
      font-size: 18px;
      line-height: $footerHeight;
    }

    .vvp-button:hover {
      text-shadow: 0 0 1em #fff;
      color: #ccc;
    }

    .vvp-button:active {
      text-shadow: 0 0 1em #fff;
      color: #fff;
    }

    .vvp-control-text {
      line-height: $footerHeight;
    }

    .vvp-control-speed {
      width: 55px;
    }

    .vvp-control-info {
      width: auto;
      flex-grow: 1;
      text-align: left;
      margin: 0 5px;
    }

    .vvp-icon-placeholder {
      font-family: VideoJS;
      font-weight: 400;
      font-style: normal;
    }

    .vvp-control-mute {
      .vvp-icon-placeholder:before {
        content: '\f104';
      }
    }

    .vvp-vol-0 {
      .vvp-icon-placeholder:before {
        content: '\f104';
      }
    }

    .vvp-vol-3 {
      .vvp-icon-placeholder:before {
        content: '\f107';
      }
    }

    .vvp-control-fullscreen {
      .vvp-icon-placeholder:before {
        content: '\f108';
        font-size: 22px;
        line-height: $footerHeight;
      }
    }

    .vvp-control-record {
      .vvp-icon-placeholder:before {
        content: '\f111';
      }
    }

    .vvp-control-close {
      .vvp-icon-placeholder:before {
        content: '\f115';
      }
    }

    .vvp-control-snap {
      .vvp-icon-placeholder:before {
        content: '\f10B';
      }
    }
  }

  .vvp-focus {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px green solid;
    box-sizing: border-box;
    z-index: 6;
    display: none;
    pointer-events: none;
  }

  .vvp-focus-show {
    display: block;
  }

  .video-js {
    width: 100%;
    height: 100%;

    /**
    * 禁用单击暂停
    */
    &.vjs-playing .vjs-tech {
      pointer-events: none;
    }

    .vjs-close-button {
      position: relative;
      height: 100%;
      top: 3px;
      font-size: 0.85em;
    }

    .vvp-live {
      .vjs-live-display {
        padding-left: 6px;
      }
    }
  }

  .vjs-header {
    position: absolute;
    top: 0px;
    display: none;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    height: 3em;
    background-color: rgba(43, 51, 63, 0.7);
    pointer-events: none;

    > div {
      display: inline-block;
      line-height: 3em;
      padding: 0 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .vjs-h-speed {
      min-width: 75px;
      text-align: right;
    }
  }

  .vjs-has-started .vjs-header {
    display: flex;
    visibility: visible;
    opacity: 1;
    transition: visibility 0.1s, opacity 0.1s;
  }

  .vjs-has-started .vjs-fetch-flv-ctx {
    top: 25px !important;
  }

  .vjs-has-started.vjs-user-inactive.vjs-playing .vjs-header {
    visibility: visible;
    opacity: 0;
    pointer-events: none;
    transition: visibility 1s, opacity 1s;
  }

  .vjs-has-started.vjs-user-inactive.vjs-playing .vjs-fetch-flv-ctx {
    top: 0px !important;
    transition: top 1.1s;
  }

  .vvp-hide {
    display: none !important;
  }

  /**
   * 视频图像全屏显示 不支持ie
   */
  &.vvp-fill {
    .video-js {
      .vjs-tech {
        object-fit: fill;
      }
    }
  }

  &.vvp-footer-show {
    .vvp-shade {
      height: calc(100% - #{$footerHeight});
    }

    .vvp-footer {
      display: flex;
    }

    .video-js {
      height: calc(100% - #{$footerHeight});

      .vjs-header {
        display: none;
      }
    }

    .vjs-has-started .vjs-fetch-flv-ctx {
      top: 0px !important;
    }
  }
}
</style>
