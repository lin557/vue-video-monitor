<template>
  <div id="app">
    <div class="video-view center">
      <VueVideoMonitor
        :count="4"
        :control="controlBar"
        :closeAfterViewChange="true"
        :lockControlBar="true"
        :focused="true"
        :duplicate="false"
        @error="doError"
        ref="monitor"
      />
      <div class="demo">
        <button @click="controlHide">hide bar</button>
        <button @click="controlShow">show bar</button>
        <button @click="setViewCount(4)">view(4)</button>
        <button @click="setViewCount(9)">view(9)</button>
        <button @click="togglefill">togglefill()</button>
        <select v-model="selectItem">
          <!--选择项的value值默认选择项文本 可动态绑定选择项的value值 更改v-model指令绑定数据-->
          <option v-for="item in medias" :value="item.src" :key="item.title">
            {{ item.title }}
          </option>
        </select>
        <button v-on:click="play">play</button>
        <button @click="test">test</button>
      </div>
      <div class="demo">
        <button @click="getSelected()">getSelected()</button>
      </div>
    </div>
  </div>
</template>

<script>
import VueVideoMonitor from './vue-video-monitor.vue'

export default {
  name: 'App',
  components: {
    VueVideoMonitor
  },
  data() {
    return {
      controlBar: {
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
          '25',
          '36',
          '64',
          'mute',
          'stop',
          'clear',
          'fill'
        ]
      },
      selectItem:
        '//d2zihajmogu5jn.cloudfront.net/bipbop-advanced/gear3/prog_index.m3u8',
      medias: [
        {
          src: '//d2zihajmogu5jn.cloudfront.net/bipbop-advanced/gear3/prog_index.m3u8',
          title: 'prog_index.m3u8'
        },
        {
          src: 'https://d2zihajmogu5jn.cloudfront.net/sintel/master.m3u8',
          title: 'master.m3u8'
        },
        {
          src: 'https://vjs.zencdn.net/v/oceans.mp4',
          title: 'oceans.mp4'
        },
        {
          src: 'http://219.138.167.86:58588/mdvr/live/16800002099_2.flv',
          title: 'v.laifeng.flv'
        },
        {
          src: 'http://219.138.167.86:8586/mdvr/live/16800002099_1.flv',
          title: '15981010746_1.flv'
        }
      ]
    }
  },
  methods: {
    controlHide() {
      this.controlBar.enabled = false
    },
    controlShow() {
      this.controlBar.enabled = true
    },
    doError(player, errType, errDetails, e) {
      console.log(player, errType, errDetails, e)
    },
    getSelected() {
      console.log(this.$refs.monitor.getSelected())
    },
    play() {
      this.$refs.monitor.play({
        src: this.selectItem,
        // text: '粤B-8125L CH3',
        content: [
          {
            // A plain old link.
            href: 'https://www.brightcove.com/',
            label: 'Brightcove'
          },
          {
            // A link with a listener. Its `href` will automatically be `#`.
            label: 'Example Link',
            listener: function () {
              alert('you clicked the example link!')
            }
          }
        ],
        isLive: false,
        // viewIndex: 1,
        hasAudio: true,
        data: {
          //unique: 'aaa',
          user: {
            a: 1,
            b: 2
          }
        },
        record: {
          enabled: true,
          isLive: true
        }
        //text: '00209 CH2'
      })
    },
    test() {
      this.$refs.monitor.apply({ unique: 'aaaa', text: '00209 CH1' })
    },
    togglefill() {
      this.$refs.monitor.togglefill()
    },
    setViewCount(value) {
      this.$refs.monitor.splitView(value)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 15px;

  .demo {
    padding: 6px;

    button {
      height: 25px;
      margin-left: 3px;
      margin-right: 3px;
    }

    select {
      height: 25px;
      margin-left: 3px;
      margin-right: 3px;
    }
  }
}

body {
  background-color: #666;
  padding: 0 10px;
}

.video-view {
  width: 100%;
  max-width: 1280px;
  height: 850px;
}

.center {
  margin: auto;
}
</style>
