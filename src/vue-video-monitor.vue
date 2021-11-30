<template>
  <div class="vvm-monitor" :class="controlCls">
    <div class="vvm-view" :class="viewCls" ref="view">
      <vue-video-player
        v-for="(item, index) in videos"
        :key="item.id"
        :ref="item.id"
        :connect="item.connect"
        :options="item.options"
        :index="index"
        :lockControlBar="item.lockControlBar"
        :tag="item.id"
        :class="item.cls"
        @click="playerClick"
        @dblclick="playerDbClick"
      ></vue-video-player>

      <!-- 边框 -->
      <div class="vvm-border vvm-h vvm-h1"></div>
      <div class="vvm-border vvm-h vvm-h2"></div>
      <div class="vvm-border vvm-h vvm-h3"></div>
      <div class="vvm-border vvm-h vvm-h4"></div>
      <div class="vvm-border vvm-h vvm-h5"></div>
      <div class="vvm-border vvm-h vvm-h6"></div>
      <div class="vvm-border vvm-h vvm-h7"></div>

      <div class="vvm-border vvm-v vvm-v1"></div>
      <div class="vvm-border vvm-v vvm-v2"></div>
      <div class="vvm-border vvm-v vvm-v3"></div>
      <div class="vvm-border vvm-v vvm-v4"></div>
      <div class="vvm-border vvm-v vvm-v5"></div>
      <div class="vvm-border vvm-v vvm-v6"></div>
      <div class="vvm-border vvm-v vvm-v7"></div>
    </div>
    <div class="vvm-control">
      <ul>
        <li v-if="btnView1">
          <a class="vvm-icon-s1" @click="splitView(1)"></a>
        </li>
        <li v-if="btnView4">
          <a class="vvm-icon-s4" @click="splitView(4)"></a>
        </li>
        <li v-if="btnView6">
          <a class="vvm-icon-s6" @click="splitView(6)"></a>
        </li>
        <li v-if="btnView8">
          <a class="vvm-icon-s8" @click="splitView(8)"></a>
        </li>
        <li v-if="btnView9">
          <a class="vvm-icon-s9" @click="splitView(9)"></a>
        </li>
        <li v-if="btnView10">
          <a class="vvm-icon-s10" @click="splitView(10)"></a>
        </li>
        <li v-if="btnView16">
          <a class="vvm-icon-s16" @click="splitView(16)"></a>
        </li>
        <li v-if="btnView25">
          <a class="vvm-icon-s25" @click="splitView(25)"></a>
        </li>
        <li v-if="btnView36">
          <a class="vvm-icon-s36" @click="splitView(36)"></a>
        </li>
        <li v-if="btnView64">
          <a class="vvm-icon-s64" @click="splitView(64)"></a>
        </li>
        <li
          v-if="btnViewMute | btnViewStop | btnViewClear"
          class="vvm-separator"
        >
          <span></span>
        </li>
        <li v-if="btnViewMute">
          <a class="vvm-icon-mute" @click="mute"></a>
        </li>
        <li v-if="btnViewStop">
          <a class="vvm-icon-stop" @click="stop"></a>
        </li>
        <li v-if="btnViewClear">
          <a class="vvm-icon-clear" @click="clear"></a>
        </li>
        <li v-if="btnViewFill" class="vvm-separator"><span></span></li>
        <li v-if="btnViewFill">
          <a class="vvm-icon-fill" @click="togglefill"></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import VueVideoPlayer from './vue-video-player.vue'

const VUE_PLAYER_PREFIX = 'vvplayer'

export default {
  name: 'VueVideoMonitor',
  components: {
    VueVideoPlayer
  },
  props: {
    closeAfterViewChange: {
      type: Boolean,
      default: true
    },
    control: {
      type: Object,
      default() {
        return {
          enabled: true,
          position: 'bottom',
          button: [
            '1',
            '4',
            '6',
            '8',
            '9',
            '10',
            '16',
            'fill',
            'mute',
            'stop',
            'clear'
          ]
        }
      }
    },
    count: {
      type: Number,
      default() {
        return 4
      }
    },
    // 是否允许使用同一个地址打开多个窗口 默认false
    duplicate: {
      type: Boolean,
      default: false
    },
    focused: {
      type: Boolean,
      default: true
    },
    /**
     * 常驻工具栏
     */
    lockControlBar: {
      type: Boolean,
      default: false
    },
    // 循环创建 不管其他窗口是否打开 关掉最先打开的窗口 并播放新的视频
    loopCreate: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      videos: [],
      viewCount: 4,
      viewList: [1, 4, 6, 8, 9, 10, 16, 25, 36, 64],
      // 最大化的视图
      viewMax: null,
      selected: {
        id: -1,
        player: null
      },
      filled: true,
      createOrder: 0
    }
  },
  computed: {
    btnView1() {
      return this.calcBtnView('1')
    },
    btnView4() {
      return this.calcBtnView('4')
    },
    btnView6() {
      return this.calcBtnView('6')
    },
    btnView8() {
      return this.calcBtnView('8')
    },
    btnView9() {
      return this.calcBtnView('9')
    },
    btnView10() {
      return this.calcBtnView('10')
    },
    btnView16() {
      return this.calcBtnView('16')
    },
    btnView25() {
      return this.calcBtnView('25')
    },
    btnView36() {
      return this.calcBtnView('36')
    },
    btnView64() {
      return this.calcBtnView('64')
    },
    btnViewFill() {
      return this.calcBtnView('fill')
    },
    btnViewMute() {
      return this.calcBtnView('mute')
    },
    btnViewStop() {
      return this.calcBtnView('stop')
    },
    btnViewClear() {
      return this.calcBtnView('clear')
    },
    controlCls() {
      if (this.control.enabled) {
        if (this.control.position === 'top') {
          return 'vvm-control-top'
        } else {
          return ''
        }
      } else {
        return 'vvm-control-hide'
      }
    },
    viewCls() {
      let cls = 'vvm-' + this.viewCount + 's'
      if (this.filled) {
        cls = cls + ' vvm-fill'
      }
      if (this.viewMax) {
        cls = cls + ' vvm-max'
      }
      return cls
    }
  },
  methods: {
    /**
     * 申请一个播放窗口
     */
    apply(param) {
      let player = null
      if (this.duplicate) {
        // 允许重复 判断有没有空的窗口
        player = this.getIdleView()
      } else {
        // 不允许重复 判断窗口是否正在播放中
        player = this.getPlaying(param.unique)
        if (player) {
          // 正在播放中 设置焦点
          this.setFocus(player)
          return -1
        } else {
          // 没有在播放 获取一个空闲窗口
          player = this.getIdleView()
        }
      }
      if (player) {
        // 有可用窗口 占用
        player.occupy(this.newOrder(), param.unique, param.text)
        this.setFocus(player)
        return player.index
      }
      // 窗口都被用了 关掉最先创建的窗口
      if (this.loopCreate) {
        // 允许关旧的创建新的
        player = this.getEarlyView()
        if (player) {
          // 存在时关闭旧的
          player.close()
          player.occupy(this.newOrder(), param.unique, param.text)
          this.setFocus(player)
          return player.index
        }
        return -1
      } else {
        return -1
      }
    },
    calcBtnView(value) {
      if (this.control.button.indexOf(value) === -1) {
        return false
      } else {
        return true
      }
    },
    calcCls(index) {
      switch (index) {
        case 0:
          return 'vvm-m1 vvm-s0'
        case 1:
          return 'vvm-m4 vvm-s1'
        case 2:
        case 3:
          return 'vvm-m4'
        case 4:
        case 5:
          return 'vvm-m6'
        case 6:
        case 7:
          return 'vvm-m8'
        case 8:
          return 'vvm-m9'
        case 9:
          return 'vvm-m10'
        default:
          if (index >= 36) {
            return 'vvm-m64'
          }
          if (index >= 25) {
            return 'vvm-m36'
          }
          if (index >= 16) {
            return 'vvm-m25'
          }
          if (index >= 10) {
            return 'vvm-m16'
          }
      }
    },
    clearMaxClass() {
      this.videos.forEach((value) => {
        const player = this.getPlayerById(value.id)
        player.$el.classList.remove('vvp-max')
      })
    },
    /**
     * 关闭所有视频
     */
    clear() {
      this.videos.forEach((value) => {
        const player = this.getPlayerById(value.id)
        player.close()
      })
    },
    createView() {
      for (let i = 0; i < this.viewCount; i++) {
        const id = VUE_PLAYER_PREFIX + i
        if (!this.isViewExist(id)) {
          this.videos.push({
            id: id,
            cls: this.calcCls(i),
            connect: {
              // 开启出错时自动重连
              auto: true,
              interval: 15
            },
            lockControlBar: this.lockControlBar,
            options: {
              controls: true,
              muted: true,
              loop: false
            }
          })
        }
      }
    },
    fill(bFill) {
      this.filled = bFill
    },
    /**
     * 只支持 1 4 6 8 9 10 16 25 36 64 分屏
     */
    fixViewCount(uCount) {
      if (this.viewList.indexOf(uCount) === -1) {
        return 4
      } else {
        return uCount
      }
    },
    /**
     * 获取最早创建的窗口
     */
    getEarlyView() {
      let lastPlayer = null
      let testOrder = this.createOrder + 100
      for (let i = 0; i < this.viewCount; i++) {
        const player = this.getPlayerById(this.videos[i].id)
        // 被占用 或 播放中 或 报错的窗口
        if (player.status > 0) {
          if (player.order <= testOrder) {
            lastPlayer = player
            testOrder = player.order
          }
        }
      }
      return lastPlayer
    },
    /**
     * 获取空闲视图
     */
    getIdleView() {
      // 没有在播放
      for (let i = 0; i < this.viewCount; i++) {
        const player = this.getPlayerById(this.videos[i].id)
        // 空的窗口 或 报错的窗口
        if (player.status === 0 || player.status === 4) {
          return player
        }
      }
      return null
    },
    /**
     * 通过id获取vue播放器对象
     */
    getPlayerById(id) {
      const ref = this.$refs[id]
      if (ref) {
        return ref[0]
      }
      return null
    },
    /**
     * 通过播放信息判断是否正在播放
     */
    getPlaying(unique) {
      if (unique == null) {
        return null
      }
      for (let i = 0; i < this.viewCount; i++) {
        const player = this.getPlayerById(this.videos[i].id)
        // 报错的窗口 或 正在播放中的窗口
        if (player.status > 0 && player.status < 4) {
          if (unique === player.getOptions().data.unique) {
            return player
          }
        }
      }
      return null
    },
    /**
     * 返回选中的窗口播放器
     */
    getSelected() {
      return this.getPlayerById(VUE_PLAYER_PREFIX + this.selected.id)
    },
    getUserData(unique) {
      const player = this.getPlaying(unique)
      if (player) {
        const opt = player.getOptions()
        if (opt && opt.data.user) {
          return opt.data.user
        }
      }
      return null
    },
    getViewCount() {
      return this.viewCount
    },
    /**
     * 判断视图窗口是否存在
     */
    isViewExist(id) {
      let ret = false
      this.videos.forEach((value) => {
        if (value.id === id) {
          ret = true
          return
        }
      })
      return ret
    },
    mute() {
      this.videos.forEach((value) => {
        const player = this.getPlayerById(value.id)
        player.mute()
      })
    },
    newOrder() {
      this.createOrder++
      return this.createOrder
    },
    play(options) {
      let unique = this.url2Filename(options.src)
      if (options.data && options.data.unique) {
        unique = options.data.unique
      }
      // 判断是否正在播放中
      let player = this.getPlaying(unique)
      if (player && player.status > 1 && !this.duplicate) {
        // 播放中 并不允许重复
        return
      }
      if (
        Object.prototype.hasOwnProperty.call(options, 'viewIndex') &&
        options.viewIndex >= 0 &&
        options.viewIndex < this.viewCount
      ) {
        // 指定播放位置
        player = this.getPlayerById(VUE_PLAYER_PREFIX + options.viewIndex)
      } else {
        // 获取空闲
        player = this.getIdleView()
      }
      if (player) {
        options.order = this.newOrder()
        player.play(options)
      }
    },
    playerClick(player) {
      this.setFocus(player)
    },
    playerDbClick(player) {
      if (this.viewCount === 1) {
        return
      }
      if (this.viewMax === player) {
        this.viewMax = null
      } else {
        this.viewMax = player
      }
    },
    setFocus(player) {
      const lastFocus = this.getPlayerById(VUE_PLAYER_PREFIX + this.selected.id)
      if (lastFocus) {
        lastFocus.focused = false
      }
      this.selected.id = player.index
      this.selected.player = player
      if (this.focused) {
        player.focused = true
      }
    },
    /**
     * 分割屏幕
     */
    splitView(uCount) {
      if (this.viewMax) {
        this.viewMax = null
      }
      this.viewCount = this.fixViewCount(uCount)
      // 如果窗口不存在 创建
      this.createView()
      // 视图数变化时
      if (this.closeAfterViewChange) {
        for (let i = this.viewCount; i < this.videos.length; i++) {
          const player = this.getPlayerById(this.videos[i].id)
          if (player) {
            player.close()
          }
        }
      }
    },
    /**
     * 关闭选中的视频窗口
     */
    stop() {
      const selectPlayer = this.getPlayerById(
        VUE_PLAYER_PREFIX + this.selected.id
      )
      if (selectPlayer) {
        selectPlayer.close()
      }
    },
    togglefill() {
      this.filled = !this.filled
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
  created() {
    this.viewCount = this.fixViewCount(this.count)
    this.createView()
  },
  watch: {
    count(value) {
      this.viewCount = this.fixViewCount(value)
      this.createView()
    },
    viewCount(value) {
      if (value === 1) {
        this.viewMax = null
      }
    },
    viewMax(value) {
      if (value) {
        value.$el.classList.add('vvp-max')
      } else {
        this.clearMaxClass()
      }
    }
  },
  mounted() {}
}
</script>
<style lang="scss">
$controlHeight: 56px;
$borderColor: #373d3d;
$controlColor: #202020;

.vvm-monitor {
  width: 100%;
  height: 100%;
  position: relative;

  .vvm-control {
    width: 100%;
    height: $controlHeight;
    background: $controlColor;
    border-top: 1px solid $borderColor;
    box-sizing: border-box;
    overflow: hidden;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    li {
      float: left;
      padding: 11px 10px;
    }

    li a {
      display: inline-block;
      vertical-align: middle;
      width: 32px;
      height: 32px;

      background-image: url(data:image/png;base64,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);
      filter: grayscale(1) brightness(1.5);
    }

    li:hover {
      background-color: #111;
      a {
        filter: brightness(1.5);
      }
    }

    .vvm-separator {
      padding: 15px 5px;
      span {
        display: block;
        width: 2px;
        height: 24px;
        background: $borderColor;
      }
    }
    .vvm-separator:hover {
      background-color: $controlColor;
    }

    .vvm-icon-s1 {
      background-position: 0px 0px;
    }

    .vvm-icon-s4 {
      background-position: -32px 0px;
    }

    .vvm-icon-s6 {
      background-position: -64px 0px;
    }

    .vvm-icon-s8 {
      background-position: -96px 0px;
    }

    .vvm-icon-s9 {
      background-position: -128px 0px;
    }

    .vvm-icon-s10 {
      background-position: -160px 0px;
    }

    .vvm-icon-s16 {
      background-position: -192px 0px;
    }

    .vvm-icon-s25 {
      background-position: 0px -32px;
    }

    .vvm-icon-s36 {
      background-position: -32px -32px;
    }

    .vvm-icon-s64 {
      background-position: -64px -32px;
    }

    .vvm-icon-mute {
      background-position: 0px -64px;
    }

    .vvm-icon-stop {
      background-position: -32px -64px;
    }

    .vvm-icon-clear {
      background-position: -64px -64px;
    }

    .vvm-icon-fill {
      background-position: -96px -64px;
    }
  }

  &.vvm-control-top {
    .vvm-view {
      top: $controlHeight;
    }
    .vvm-control {
      border-top: none;
      border-bottom: 1px solid $borderColor;
      position: absolute;
      top: 0;
    }
  }

  &.vvm-control-hide {
    .vvm-view {
      top: 0;
      height: 100%;
    }
    .vvm-control {
      display: none;
    }
  }

  .vvm-view {
    height: calc(100% - #{$controlHeight});
    overflow: hidden;
    position: relative;

    .vvp-player {
      float: left;
      font-size: 12px;
      background: black;
    }

    &.vvm-fill {
      .vvp-player {
        .video-js {
          .vjs-tech {
            object-fit: fill;
          }
        }
      }
    }

    .vvm-border {
      position: absolute;
      background-color: $borderColor;
      z-index: 5;
      pointer-events: none;
    }

    .vvm-h {
      height: 1px;
      width: 100%;
    }

    .vvm-v {
      width: 1px;
      height: 100%;
    }

    &.vvm-max {
      .vvp-player {
        height: 100% !important;
        width: 100% !important;

        .vvp-focus-show {
          display: none;
        }
      }

      .vvm-border,
      .vvm-m1,
      .vvm-m4,
      .vvm-m6,
      .vvm-m8,
      .vvm-m9,
      .vvm-m10,
      .vvm-m16,
      .vvm-m25,
      .vvm-m36,
      .vvm-m64 {
        display: none;
      }

      .vvp-max {
        display: block;
      }
    }

    &.vvm-1s {
      .vvp-player {
        height: 100%;
        width: 100%;

        .vvp-focus-show {
          display: none;
        }
      }

      .vvm-border,
      .vvm-m4,
      .vvm-m6,
      .vvm-m8,
      .vvm-m9,
      .vvm-m10,
      .vvm-m16,
      .vvm-m25,
      .vvm-m36,
      .vvm-m64 {
        display: none;
      }
    }

    &.vvm-4s {
      .vvp-player {
        height: 50%;
        width: 50%;
      }

      .vvm-h2,
      .vvm-h3,
      .vvm-h4,
      .vvm-h5,
      .vvm-h6,
      .vvm-h7,
      .vvm-v2,
      .vvm-v3,
      .vvm-v4,
      .vvm-v5,
      .vvm-v6,
      .vvm-v7,
      .vvm-m6,
      .vvm-m8,
      .vvm-m9,
      .vvm-m10,
      .vvm-m16,
      .vvm-m25,
      .vvm-m36,
      .vvm-m64 {
        display: none;
      }

      .vvm-h1 {
        top: 50%;
      }

      .vvm-v1 {
        left: 50%;
      }
    }

    &.vvm-6s {
      .vvp-player {
        height: 33.33%;
        width: 33.33%;

        .vvp-shade {
          &:before {
            font-size: 68px;
            line-height: 68px;
            top: calc(50% - 34px);
            left: calc(50% - 34px);
          }
        }
      }

      .vvm-s0 {
        height: 66.65%;
        width: 66.66%;
      }

      .vvm-h3,
      .vvm-h4,
      .vvm-h5,
      .vvm-h6,
      .vvm-h7,
      .vvm-v3,
      .vvm-v4,
      .vvm-v5,
      .vvm-v6,
      .vvm-v7,
      .vvm-m8,
      .vvm-m9,
      .vvm-m10,
      .vvm-m16,
      .vvm-m25,
      .vvm-m36,
      .vvm-m64 {
        display: none;
      }

      .vvm-h1 {
        top: 33.33333%;
        left: 66.66666%;
      }

      .vvm-h2 {
        top: 66.66666%;
      }

      .vvm-v1 {
        left: 33.33333%;
        top: 66.66666%;
      }

      .vvm-v2 {
        left: 66.66666%;
      }
    }

    &.vvm-8s {
      .vvp-player {
        height: 25%;
        width: 25%;

        .vvp-shade {
          &:before {
            font-size: 58px;
            line-height: 58px;
            top: calc(50% - 29px);
            left: calc(50% - 29px);
          }
        }
      }

      .vvm-s0 {
        height: 75%;
        width: 75%;
      }

      .vvm-h4,
      .vvm-h5,
      .vvm-h6,
      .vvm-h7,
      .vvm-v4,
      .vvm-v5,
      .vvm-v6,
      .vvm-v7,
      .vvm-m9,
      .vvm-m10,
      .vvm-m16,
      .vvm-m25,
      .vvm-m36,
      .vvm-m64 {
        display: none;
      }

      .vvm-h1 {
        top: 25%;
        left: 75%;
      }

      .vvm-h2 {
        top: 50%;
        left: 75%;
      }

      .vvm-h3 {
        top: 75%;
      }

      .vvm-v1 {
        left: 25%;
        top: 75%;
      }

      .vvm-v2 {
        left: 50%;
        top: 75%;
      }

      .vvm-v3 {
        left: 75%;
      }
    }

    &.vvm-9s {
      .vvp-player {
        height: 33.33%;
        width: 33.33%;

        .vvp-shade {
          &:before {
            font-size: 68px;
            line-height: 68px;
            top: calc(50% - 34px);
            left: calc(50% - 34px);
          }
        }
      }

      .vvm-h3,
      .vvm-h4,
      .vvm-h5,
      .vvm-h6,
      .vvm-h7,
      .vvm-v3,
      .vvm-v4,
      .vvm-v5,
      .vvm-v6,
      .vvm-v7,
      .vvm-m10,
      .vvm-m16,
      .vvm-m25,
      .vvm-m36,
      .vvm-m64 {
        display: none;
      }

      .vvm-h1 {
        top: 33.33333%;
      }

      .vvm-h2 {
        top: 66.66666%;
      }

      .vvm-v1 {
        left: 33.33333%;
      }

      .vvm-v2 {
        left: 66.66666%;
      }
    }

    &.vvm-10s {
      .vvp-player {
        height: 25%;
        width: 25%;

        .vvp-shade {
          &:before {
            font-size: 58px;
            line-height: 58px;
            top: calc(50% - 29px);
            left: calc(50% - 29px);
          }
        }
      }

      .vvm-s0,
      .vvm-s1 {
        height: 50%;
        width: 50%;
      }

      .vvm-h3,
      .vvm-h4,
      .vvm-h5,
      .vvm-h6,
      .vvm-h7,
      .vvm-v4,
      .vvm-v5,
      .vvm-v6,
      .vvm-v7,
      .vvm-m16,
      .vvm-m25,
      .vvm-m36,
      .vvm-m64 {
        display: none;
      }

      .vvm-h1 {
        top: 50%;
      }

      .vvm-h2 {
        top: 75%;
      }

      .vvm-v1 {
        left: 25%;
        top: 50%;
      }

      .vvm-v2 {
        left: 50%;
      }

      .vvm-v3 {
        left: 75%;
        top: 50%;
      }
    }

    &.vvm-16s {
      .vvp-player {
        height: 25%;
        width: 25%;

        .vvp-shade {
          &:before {
            font-size: 58px;
            line-height: 58px;
            top: calc(50% - 29px);
            left: calc(50% - 29px);
          }
        }
      }

      .vvm-h4,
      .vvm-h5,
      .vvm-h6,
      .vvm-h7,
      .vvm-v4,
      .vvm-v5,
      .vvm-v6,
      .vvm-v7,
      .vvm-m25,
      .vvm-m36,
      .vvm-m64 {
        display: none;
      }

      .vvm-h1 {
        top: 25%;
      }

      .vvm-h2 {
        top: 50%;
      }

      .vvm-h3 {
        top: 75%;
      }

      .vvm-v1 {
        left: 25%;
      }

      .vvm-v2 {
        left: 50%;
      }

      .vvm-v3 {
        left: 75%;
      }
    }

    &.vvm-25s {
      .vvp-player {
        height: 20%;
        width: 20%;

        .vvp-shade {
          &:before {
            font-size: 50px;
            line-height: 50px;
            top: calc(50% - 25px);
            left: calc(50% - 25px);
          }
        }
      }

      .vvm-h5,
      .vvm-h6,
      .vvm-h7,
      .vvm-v5,
      .vvm-v6,
      .vvm-v7,
      .vvm-m36,
      .vvm-m64 {
        display: none;
      }

      .vvm-h1 {
        top: 20%;
      }

      .vvm-h2 {
        top: 40%;
      }

      .vvm-h3 {
        top: 60%;
      }

      .vvm-h4 {
        top: 80%;
      }

      .vvm-v1 {
        left: 20%;
      }

      .vvm-v2 {
        left: 40%;
      }

      .vvm-v3 {
        left: 60%;
      }

      .vvm-v4 {
        left: 80%;
      }
    }

    &.vvm-36s {
      .vvp-player {
        height: 16.66666%;
        width: 16.66666%;
        .vvp-shade {
          &:before {
            font-size: 46px;
            line-height: 46px;
            top: calc(50% - 23px);
            left: calc(50% - 23px);
          }
        }
      }

      .vvm-h6,
      .vvm-h7,
      .vvm-v6,
      .vvm-v7,
      .vvm-m64 {
        display: none;
      }

      .vvm-h1 {
        top: 16.66666%;
      }

      .vvm-h2 {
        top: 33.33333%;
      }

      .vvm-h3 {
        top: 49.99999%;
      }

      .vvm-h4 {
        top: 66.66666%;
      }

      .vvm-h5 {
        top: 83.33333%;
      }

      .vvm-v1 {
        left: 16.66666%;
      }

      .vvm-v2 {
        left: 33.33333%;
      }

      .vvm-v3 {
        left: 49.99999%;
      }

      .vvm-v4 {
        left: 66.66666%;
      }

      .vvm-v5 {
        left: 83.33333%;
      }
    }

    &.vvm-64s {
      .vvp-player {
        height: 12.5%;
        width: 12.5%;
        .vvp-shade {
          &:before {
            font-size: 40px;
            line-height: 40px;
            top: calc(50% - 20px);
            left: calc(50% - 20px);
          }
        }
        .vvp-footer {
          .vvp-control-speed {
            display: none;
          }
        }
      }

      .vvm-h1 {
        top: 12.5%;
      }

      .vvm-h2 {
        top: 25%;
      }

      .vvm-h3 {
        top: 37.5%;
      }

      .vvm-h4 {
        top: 50%;
      }

      .vvm-h5 {
        top: 62.5%;
      }

      .vvm-h6 {
        top: 75%;
      }

      .vvm-h7 {
        top: 87.5%;
      }

      .vvm-v1 {
        left: 12.5%;
      }

      .vvm-v2 {
        left: 25%;
      }

      .vvm-v3 {
        left: 37.5%;
      }

      .vvm-v4 {
        left: 50%;
      }

      .vvm-v5 {
        left: 62.5%;
      }

      .vvm-v6 {
        left: 75%;
      }

      .vvm-v7 {
        left: 87.5%;
      }
    }
  }

  // &.vvm-theme-green {

  // }

  &.vvm-theme-blue {
    .vvp-player .vvp-focus {
      border-color: #1d2088;
    }
  }
}
</style>
