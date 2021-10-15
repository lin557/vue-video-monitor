<template>
  <div id="app">
    <div class="video-view center">
      <VueVideoMonitor
        :count="viewCount"
        :control="controlBar"
        :closeAfterViewChange="false"
        :focused="true"
        :duplicate="false"
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
      </div>
    </div>
  </div>
</template>

<script>
import VueVideoMonitor from './components/vue-video-monitor.vue'

export default {
  name: 'App',
  components: {
    VueVideoMonitor
  },
  data() {
    return {
      viewCount: 4,
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
          'mute',
          'stop',
          'clear',
          'fill'
        ]
      },
      selectItem:
        'http://hlsflv-liveshow.bdstatic.com/live/stream_bduid_4889051902_4693249733-L3.flv',
      medias: [
        {
          src: 'http://hlsflv-liveshow.bdstaticxx.com/live/stream_bduid_4889051902_4693249733-L3.flv',
          title: 'stream_bduid_4889051902_4693249733-L3.flv'
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
    play() {
      // this.$refs.monitor.play({
      //   src: '//192.168.0.250:8080/record/15981010747_2.flv',
      //   hasAudio: true,
      //   record: {
      //     enabled: true,
      //     isLive: true
      //   }
      // })
      // this.$refs.monitor.play({
      //   src: '//192.168.0.250:8080/record/15981010747_3.flv',
      //   hasAudio: true,
      //   record: {
      //     enabled: true,
      //     isLive: true
      //   }
      // })
      // this.$refs.monitor.play({
      //   src: '//192.168.0.250:8080/record/15981010747_4.flv',
      //   hasAudio: true,
      //   record: {
      //     enabled: true,
      //     isLive: true
      //   }
      // })
      // // //81.71.36.80:9199/qinghuachi.flv
      // this.$refs.monitor.play({
      //   // src: '//159.75.221.205:8090/live/13900012347_1.flv',
      //   // src: '//221.237.209.57:9085/mdvr/record/15981010714_1.flv',
      //   // src: '//159.75.221.205:8090/live/15981010714_3.flv',
      //   // src: '//159.75.221.205:8090/live/15981010714_4.flv',
      //   // src: '//221.237.209.57:9087/mdvr/live/15981010769_1.flv',
      //   // src: '//221.237.209.57:9088/mdvr/live/15981010703_1.flv',
      //   // src: '//hlsflv-liveshow.bdstatic.com/live/stream_bduid_4889051902_4693249733-L3.flv',
      //   // src: '//81.71.36.80:8080/live/15981010700_2.flv',
      //   // src: '//81.71.36.80:9199/qinghuachi.flv',
      //   // src: '//81.71.36.80:9199/test.mp4',
      //   // src: '//www.mvbox.net/mv/Z51-7QshVUM/%E6%88%B4%E7%BE%BD%E5%BD%A4%20-%20%E6%9D%A5%E8%BF%9F%20_%20d%C3%A0i%20y%C7%94%20t%C3%B3ng%20-%20l%C3%A1i%20ch%C3%AD%20_%20Coming%20Late%20-%20Dai%20Yutong%E3%80%8C%E6%88%91%E9%80%99%E4%B8%80%E6%AC%A1%E7%B5%82%E7%A9%B6%E9%82%84%E6%98%AF%E4%BE%86%E5%BE%97%E5%A4%AA%E9%81%B2%EF%BC%8C%E9%8C%AF%E9%81%8E%E4%BA%86%E4%BD%A0%EF%BC%8C%E6%AD%A4%E5%BE%8C%E6%89%80%E6%9C%89%E7%9A%84%E6%95%85%E4%BA%8B%E3%80%82%E3%80%8D%E2%99%AB%E5%8B%95%E6%85%8B%E6%AD%8C%E8%A9%9Elyrics%20%E2%99%AB.mp4',
      //   // src: 'http://221.237.209.57:9087/mdvr/live/15981010700_4.flv',
      //   // src: '//d2zihajmogu5jn.cloudfront.net/bipbop-advanced/gear3/prog_index.m3u8?qq=2',
      //   src: '//192.168.0.250:8080/record/15981010747_5.flv',
      //   hasAudio: true,
      //   record: {
      //     enabled: true,
      //     isLive: true
      //   }
      // })
      // this.$refs.monitor.play({
      //   src: '//192.168.0.250:8080/record/15981010747_6.flv',
      //   hasAudio: true,
      //   record: {
      //     enabled: true,
      //     isLive: true
      //   }
      // })
      // this.$refs.monitor.play({
      //   src: '//192.168.0.250:8080/record/15981010747_7.flv',
      //   hasAudio: true,
      //   record: {
      //     enabled: true,
      //     isLive: true
      //   }
      // })
      // this.$refs.monitor.play({
      //   src: '//192.168.0.250:8080/record/15981010747_8.flv',
      //   hasAudio: true,
      //   record: {
      //     enabled: true,
      //     isLive: true
      //   }
      // })
      this.$refs.monitor.play({
        // src: '//159.75.221.205:8090/live/13900012347_1.flv',
        // src: '//221.237.209.57:9085/mdvr/record/15981010714_1.flv',
        // src: '//159.75.221.205:8090/live/15981010714_3.flv',
        // src: '//159.75.221.205:8090/live/15981010714_4.flv',
        // src: '//221.237.209.57:9087/mdvr/live/15981010769_1.flv',
        // src: '//221.237.209.57:9088/mdvr/live/15981010703_1.flv',
        // src: '//hlsflv-liveshow.bdstatic.com/live/stream_bduid_4889051902_4693249733-L3.flv',
        // src: '//81.71.36.80:8080/live/15981010700_3.flv',
        // src: '//81.71.36.80:9199/qinghuachi.flv',
        // src: '//81.71.36.80:9199/test.mp4',
        // src: '//www.mvbox.net/mv/Z51-7QshVUM/%E6%88%B4%E7%BE%BD%E5%BD%A4%20-%20%E6%9D%A5%E8%BF%9F%20_%20d%C3%A0i%20y%C7%94%20t%C3%B3ng%20-%20l%C3%A1i%20ch%C3%AD%20_%20Coming%20Late%20-%20Dai%20Yutong%E3%80%8C%E6%88%91%E9%80%99%E4%B8%80%E6%AC%A1%E7%B5%82%E7%A9%B6%E9%82%84%E6%98%AF%E4%BE%86%E5%BE%97%E5%A4%AA%E9%81%B2%EF%BC%8C%E9%8C%AF%E9%81%8E%E4%BA%86%E4%BD%A0%EF%BC%8C%E6%AD%A4%E5%BE%8C%E6%89%80%E6%9C%89%E7%9A%84%E6%95%85%E4%BA%8B%E3%80%82%E3%80%8D%E2%99%AB%E5%8B%95%E6%85%8B%E6%AD%8C%E8%A9%9Elyrics%20%E2%99%AB.mp4',
        // src: 'http://221.237.209.57:9087/mdvr/live/15981010700_4.flv',
        src: '//d2zihajmogu5jn.cloudfront.net/bipbop-advanced/gear3/prog_index.m3u8',
        hasAudio: true,
        record: {
          enabled: true,
          isLive: true
        }
      })
    },
    togglefill() {
      this.$refs.monitor.togglefill()
    },
    setViewCount(value) {
      this.viewCount = value
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
  margin-top: 20px;

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
  height: 900px;
}

.center {
  margin: auto;
}
</style>
