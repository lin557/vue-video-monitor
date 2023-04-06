<template>
  <div
    ref="bar"
    class="vvp-bar-wrapper"
    @mousemove="handleMouseMove"
    @click="handleClick"
    @mousedown="handleMouseDown"
    @mouseover="handleMouseOver"
  >
    <div class="vvp-bar-time" ref="time" :style="timeStyle">{{ timeText }}</div>
    <div class="vvp-bar-inner">
      <div class="vvp-bar-played" ref="played" :style="barWidth">
        <span class="vvp-bar-thumb" :style="thumbStyle"></span>
      </div>
    </div>
    <div class="vvp-bar-border"></div>
  </div>
</template>
<script>
import { time2Str } from './utils'
export default {
  name: 'VueVideoProcess',
  props: {
    position: {
      type: Number,
      default() {
        return 0
      }
    },
    duration: {
      type: Number,
      default() {
        return 100
      }
    },
    themeColor: {
      type: String,
      default: '#2d4edf'
    }
  },
  computed: {
    thumbStyle() {
      return 'background: ' + this.themeColor
    },
    barWidth() {
      if (this.duration === 0) {
        return 'display:none'
      }
      let cur = (this.position / this.duration) * 100
      if (cur < 0) {
        cur = 0
      }
      if (cur > 100) {
        cur = 100
      }
      let style = 'background:' + this.themeColor + ';'
      if (this.mouseDown) {
        return style + 'width:' + this.tempWidth + 'px'
      } else {
        return style + 'width:' + cur + '%'
      }
    },
    timeStyle() {
      return 'left:' + this.timeLeft + 'px'
    },
    timeText() {
      if (this.timeMove === 0 && this.position > 0) {
        this.updateTimeMove()
      }
      return time2Str(this.timeMove, this.duration)
    }
  },
  data() {
    return {
      timeLeft: 0,
      timeMove: 0,
      tempWidth: 0,
      mouseDown: false
    }
  },
  methods: {
    updateTimeMove() {
      this.timeMove = this.position
      this.timeLeft = 8000
    },
    handleMouseMove(e) {
      this.tempWidth = e.offsetX
      this.timeLeft = e.offsetX - this.$refs.time.clientWidth / 2
      this.timeMove = this.px2second(e.offsetX)
    },
    handleMouseDown(e) {
      this.tempWidth = e.offsetX
      this.mouseDown = true
    },
    handleMouseOver() {
      this.mouseDown = false
    },
    handleClick(e) {
      this.mouseDown = false
      this.timeMove = this.px2second(e.offsetX)
      this.$emit('vvpposition', this, this.timeMove)
    },
    getWidth() {
      if (this.$refs.bar) {
        return this.$refs.bar.clientWidth
      } else {
        return 0
      }
    },
    /**
     * 像素转秒
     */
    px2second(offsetX) {
      let width = this.getWidth()
      if (width === 0) {
        return 0
      }
      // 1像素多长时间
      let pxTime = this.duration / width
      return offsetX * pxTime
    }
  }
}
</script>

<style lang="scss">
.vvp-bar-wrapper {
  position: absolute;
  top: -11px;
  height: 13px;
  width: 100%;
  z-index: 5;
  cursor: pointer;
  //background-color: rgba(0, 255, 0, 0.62);

  .vvp-bar-border {
    border-top: 1px solid rgba(0, 0, 0, 0.62);
    pointer-events: none;
  }

  .vvp-bar-time {
    position: absolute;
    left: 0px;
    top: -22px;
    border-radius: 4px;
    padding: 5px 7px;
    background-color: rgba(0, 0, 0, 0.62);
    color: #fff;
    font-size: 12px;
    text-align: center;
    opacity: 1;
    transition: opacity 0.1s ease-in-out;
    word-wrap: normal;
    word-break: normal;
    z-index: 2;
    pointer-events: none;
    display: none;
    font-family: Verdana, Tahoma, sans-serif;
  }

  .vvp-bar-inner {
    margin-top: 7px;
    height: 3px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.4);
    pointer-events: none;

    .vvp-bar-played {
      height: 100%;
      width: 100px;
      // background-color: $barColor;
      z-index: 1;
      position: relative;

      .vvp-bar-thumb {
        width: 9px;
        height: 9px;
        z-index: 2;
        // background-color: $barColor;
        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: 5px;
        position: absolute;
        right: -4px;
        top: -2px;
        transition: all 0.2s ease-in-out;
        transform: scale(0);
        pointer-events: none;
      }
    }
  }
}
.vvp-bar-wrapper:hover {
  height: 20px;
  .vvp-bar-inner {
    margin-top: 6px;
    height: 5px;

    .vvp-bar-played {
      .vvp-bar-thumb {
        top: -3px;
        transform: scale(1);
      }
    }
  }
  .vvp-bar-time {
    display: block;
  }
  .vvp-bar-border {
    display: none;
  }
}
</style>
