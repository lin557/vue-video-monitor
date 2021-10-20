<template>
  <!-- 默认不开启声音 跳过chrome的自动阻止策略 -->
  <div
    class="vvp-player"
    :class="fillCls"
    @click="handleClick"
    @dblclick="handleDblClick"
  >
    <div class="vvp-shade" :class="loadingCls">
      <div class="vjs-loading-spinner"></div>
      <div class="vvp-error-ctx">
        <span ref="vvperror">{{ error }}</span>
      </div>
    </div>
    <div class="vvp-focus" :class="focusCls"></div>
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
// 网络超时25秒
const ERR_NETWORK_TIMEOUT = 25000

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
  record: {
    enabled: false,
    isLive: true
  }
}

export default {
  name: 'VueVideoPlayer',
  props: {
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
      player: null,
      // 0=空闲 1=请求中 2=播放中/缓冲中 3=错误
      status: 0,
      focused: false,
      error: '',
      // 当http-flv头有音视频 但http-flv没有音频流时 自动重置播放器
      autoAudio: true,
      procgress: 0,
      lastOptions: null,
      // 连接超时定时器
      timer: null,
      filename: null
    }
  },
  computed: {
    loadingCls() {
      switch (this.status) {
        case 0:
          return ''
        case 1:
          return 'vjs-waiting'
        case 3:
          return 'vvp-error'
        default:
          return 'vvp-hide'
      }
    },
    fillCls() {
      if (this.fill) {
        return 'vvp-fill'
      } else {
        return ''
      }
    },
    focusCls() {
      if (this.focused) {
        return 'vvp-focus-show'
      } else {
        return ''
      }
    }
  },
  methods: {
    clearTimer() {
      if (this.timer) {
        this.player.clearTimeout(this.timer)
        this.timer = null
      }
    },
    close() {
      this.player.reset()
      this.clearTimer()
      // 如果在录像中 需要停止录像功能
      if (
        this.player &&
        this.player.fetchFlv &&
        this.player.fetchFlv().fetching
      ) {
        this.player.fetchFlv().stop(false)
      }
      this.status = 0
      this.procgress = 0
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
          info: infoEl,
          speed: speedEl
        }
      }
      video.appendChild(div)
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
    handleClick() {
      this.$emit('click', this)
    },
    handleDblClick() {
      this.$emit('dblclick', this)
    },
    mute() {
      this.player.volume(0)
    },
    play(option) {
      this.close()
      const options = videojs.mergeOptions(playerOptions, option)
      if (!options.hasAudio) {
        this.player.controlBar.volumePanel.hide()
        if (this.player.options().flvjs) {
          this.player.options().flvjs.mediaDataSource.hasAudio = false
        }
      }
      this.status = 1
      const type = this.getMediaType(options.src)
      if (options.record.enabled) {
        if (type === 'rtmp/mp4' || type === 'application/x-mpegURL') {
          // rtmp/m3u8不支持下载
        } else {
          this.player.fetchFlv({ isLive: options.record.isLive })
        }
      }
      if (options.content) {
        this.player.contextmenuUI({
          content: options.content
        })
      }
      this.filename = this.url2Filename(options.src)
      let info = this.filename
      if (options.info && options.info !== '') {
        info = options.info
      }
      this.updateInfo(info)
      this.player.src([{ type: type, src: options.src }])
      this.player.autoplay()
      this.lastOptions = options
    },
    updateInfo(info) {
      if (this.player.header) {
        this.player.header.el.info.innerText = info
      }
    },
    updateSpeed(speed) {
      if (this.player.header) {
        this.player.header.el.speed.innerText = speed
      }
    },
    url2Filename(url) {
      if (url) {
        const vlist = url.split('?')
        return vlist[0].split('\\').pop().split('/').pop()
      } else {
        return null
      }
    }
  },
  mounted() {
    const options = videojs.mergeOptions(defaults, this.options)
    this.player = videojs(this.$refs.player, options)
    if (options.controlBar.closeButton) {
      this.player.controlBar.closeButton.on('close', () => {
        this.close()
      })
    }
    // 创建顶部显示条
    this.createHeader(this.player)
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
          this.status = 3
          this.error = e.msg
        })
        flvPlayer.on(flvjs.Events.STATISTICS_INFO, (info) => {
          this.updateSpeed(info.speed.toFixed(0) + ' kb/s')
        })
        this.timer = this.player.setTimeout(() => {
          this.status = 3
          this.error = 'connect timeout'
        }, ERR_NETWORK_TIMEOUT)
      }
    })
    this.player.on('loadeddata', () => {
      this.status = 2
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
          if (this.filename.split('.').pop().toLowerCase() === 'm3u8') {
            this.autoAudio = false
          }
        }

        this.procgress++
        if (this.procgress >= ERR_MAX_AUDIO_COUNT) {
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
      this.status = 3
      if (this.player.error) {
        switch (this.player.error().code) {
          case 0:
            this.error = 'MEDIA_ERR_CUSTOM'
            break
          case 1:
            this.error = 'MEDIA_ERR_ABORTED'
            break
          case 2:
            this.error = 'MEDIA_ERR_NETWORK'
            break
          case 3:
            this.error = 'MEDIA_ERR_DECODE'
            break
          case 4:
            this.error = 'network failed or format no supported'
            break
          case 5:
            this.error = 'MEDIA_ERR_ENCRYPTED'
            break
          default:
            this.error = 'error'
        }
      } else {
        this.error = e.type
      }
    })
    // this.player.on('abort', () => {
    //   console.log('abort')
    // })
  },
  watch: {
    status(value) {
      if (value > 1) {
        this.clearTimer()
      }
    }
  },
  beforeDestroy() {
    if (this.player) {
      this.clearTimer()
      this.player.dispose()
    }
  }
}
</script>

<style lang="scss">
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
      font-size: 50px;
      color: gray;
      opacity: 0.8;
      top: calc(50% - 25px);
      left: calc(50% - 25px);
      position: absolute;
    }

    &.vjs-waiting {
      &:before {
        content: '';
      }
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
        opacity: 0.8;
        &:before {
          display: block;
          content: '\f115';
          font-size: 48px;
          color: gray;
        }

        span {
          font-size: 12px;
          color: #aaa;
          position: absolute;
          top: calc(50% + 25px);
          width: 100%;
          left: 0;
        }
      }
    }
  }

  .vvp-focus {
    position: absolute;
    border: 1px green solid;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
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
    display: none;
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
}
</style>
