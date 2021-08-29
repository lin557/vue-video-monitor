<template>
  <div class="vvm-monitor" :class="controlCls">
    <div class="vvm-view" :class="viewCls" ref="view">
      <vue-video-player
        v-for="(item, index) in videos"
        :key="item.id"
        :ref="item.id"
        :index="index"
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
        <li><a @click="splitView(1)">1</a></li>
        <li><a @click="splitView(4)">4</a></li>
        <li><a @click="splitView(6)">6</a></li>
        <li><a @click="splitView(8)">8</a></li>
        <li><a @click="splitView(9)">9</a></li>
        <li><a @click="splitView(10)">10</a></li>
        <li><a @click="splitView(16)">16</a></li>
        <li><a @click="splitView(25)">25</a></li>
        <li><a @click="splitView(36)">36</a></li>
        <li><a @click="splitView(64)">64</a></li>
        <li><a @click="closeSelected">S</a></li>
        <li><a @click="closeAll">X</a></li>
        <li><a @click="togglefill">F</a></li>
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
    closeAfterViewChange: {
      type: Boolean,
      default: false
    },
    control: {
      type: Object,
      default() {
        return {
          enabled: true,
          position: 'bottom'
        }
      }
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
      filled: true
    }
  },
  computed: {
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
      if (!this.viewMax) {
        this.viewMax.$el.classList.remove('vvp-max')
      }
      // this.videos.forEach((value) => {
      //   const player = this.getPlayerById(value.id)
      //   player.$el.classList.remove('vvp-max')
      // })
    },
    /**
     * 关闭所有视频
     */
    closeAll() {
      this.videos.forEach((value) => {
        const player = this.getPlayerById(value.id)
        player.close()
      })
    },
    closeSelected() {
      const selectPlayer = this.getPlayerById(
        VUE_PLAYER_PREFIX + this.selected.id
      )
      if (selectPlayer) {
        selectPlayer.close()
      }
    },
    createView() {
      for (let i = 0; i < this.viewCount; i++) {
        const id = VUE_PLAYER_PREFIX + i
        if (!this.isViewExist(id)) {
          this.videos.push({
            id: id,
            cls: this.calcCls(i)
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
     * 获取空闲视图
     */
    getIdleView(src) {
      if (!this.duplicate) {
        // 先查出src是否正在播放中
        const filename = this.url2Filename(src)
        for (let i = 0; i < this.viewCount; i++) {
          const player = this.getPlayerById(this.videos[i].id)
          // 报错的窗口 或 正在播放中的窗口
          if (player.status > 0) {
            if (filename === player.filename) {
              // 说明正在播放
              if (player.status < 3) {
                return null
              }
              // player.status = 3 说明出错了，可以继续使用这个窗口
              return player
            }
          }
        }
      }
      // 没有在播放
      for (let i = 0; i < this.viewCount; i++) {
        const player = this.getPlayerById(this.videos[i].id)
        // 空的窗口 或 报错的窗口
        if (player.status === 0) {
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
    play(options) {
      const player = this.getIdleView(options.src)
      if (player) {
        player.play(options)
      }
    },
    playerClick(player) {
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
    playerDbClick(player) {
      if (this.viewCount === 1) {
        return
      }
      if (this.viewMax === player) {
        // this.viewMax = null
      } else {
        this.viewMax = player
      }

      // this.viewMax = !this.viewMax
      // // 如果组件带有最大化样式
      // // 取消最大化
      // if (this.viewMax) {
      //   this.clearMaxClass()
      //   player.$el.classList.add('vvp-max')
      // }
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
$controlHeight: 49px;
$borderColor: #373d3d;

.vvm-monitor {
  width: 100%;
  height: 100%;
  position: relative;

  .vvm-control {
    width: 100%;
    height: $controlHeight;
    background: #202020;
    border-top: 1px solid $borderColor;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }

    li {
      float: left;
    }

    li a {
      display: inline-block;
      vertical-align: middle;
      color: white;
      text-align: center;
      padding: 13px 16px;
      text-decoration: none;
    }

    li a:hover {
      background-color: #111;
    }
  }

  &.vvm-control-top {
    .vvm-view {
      top: $controlHeight + 1px;
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
    height: calc(100% - #{$controlHeight + 1px});
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
