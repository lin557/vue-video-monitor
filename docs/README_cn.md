<p align="center">
  <a href="https://www.npmjs.org/package/vue-video-monitor">
    <img src="https://img.shields.io/npm/v/vue-video-monitor.svg">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
</p>

# vue-video-monitor

基于vue2.x的多窗口视频播放器，支持 mp4/flv/m3u8

![image](images/20211019153047.png)

## 目录

- [安装](#安装)
- [用法](#用法)
- [属性](#属性)
- [方法](#方法)
- [License](#license)



## 安装

video.js 7 内置了对 HLS 和 DASH 的支持，因此无需安装 videojs-contrib-hls。

如果您使用 videojs 6，则需要额外安装 videojs-http-streaming。

```sh
npm install --save vue-video-monitor
```

or

```sh
npm install --save video.js videojs-flvjs-es6 flv.js videojs-fetch-flv videojs-contextmenu-pt vue-video-monitor
```



## 用法

要在您的网站或 Web 应用程序中包含 vue-video-monitor，请使用以下任何方法。



#### 全局引用

In main.js:

```js
import Vue from 'vue'
import VueVideoMonitor from 'vue-video-monitor'
Vue.use(VueVideoMonitor)
```



#### 动态引用

```vue
<template>
  <div class="video-view center">
    <VueVideoMonitor
      :count="4"
      :control="controlBar"
      :closeAfterViewChange="false"
      :focused="true"
      :duplicate="true"
      ref="monitor"
    />
  </div>
</template>

<script>
import VueVideoMonitor from 'vue-video-monitor'

export default {
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
          'mute',
          'stop',
          'clear',
          'fill'
        ]
      }
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
      this.$refs.monitor.play({
        src: '//d2zihajmogu5jn.cloudfront.net/bipbop-advanced/gear3/prog_index.m3u8',
        hasAudio: true,
        record: {
          enabled: false,
          isLive: true
        }
      })
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
.video-view {
  width: 100%;
  max-width: 1280px;
  height: 900px;
}

.center {
  margin: auto;
}
</style>
```



## 属性



| 参数 | 说明 | 类型  | 默认值         |
| :------------ | ---------- | :------ | :------------------- |
| closeAfterViewChange | 视窗改变时是否关闭正在播放的视频。1.2.7之后默认为true | boolean | true |
| control | 控制面板参数 | object |  |
| count | 初始化视频窗口数 | number | 4 |
| duplicate | 是否允许同时播放多个相同源的视频 | boolean | false |
| focused | 显示焦点 | boolean | true |
| lockControlBar | 每个窗口的底部都会显示一个非隐藏的控制栏 | boolean | false |
| loopCreate | 播放视频时，当没有空闲窗口时，自动关闭最早打开的窗口。最好将“closeAfterViewChange”设置为 true | boolean | true |



### control 属性的参数结构说明

| 参数     | 说明                                                         | 类型    | 默认值                                                       |
| -------- | ------------------------------------------------------------ | ------- | ------------------------------------------------------------ |
| button   | 配置控制面板上的按钮。<br />['1','4','6','8','9','10','16','25','36','64','fill', 'mute', 'stop','clear'] | array   | ['1','4','6','8','9','10','16','fill','mute', 'stop','clear'] |
| enabled  | 是否显示控制面板                                             | boolean | true                                                         |
| position | 控制面板位置。'top', 'bottom'                                | string  | bottom                                                       |



## 方法



### apply(param)

申请一个空闲的视窗并占据它，同时显示加载效果

```
param = {
  unique: unique,
  text: text,
  viewIndex: null
}
```

| 参数      | 说明                                             | 类型   | 默认值       |
| --------- | ------------------------------------------------ | ------ | ------------ |
| unique    | 由play() 方法的**options.data.unique**参数指定   | string |              |
| text      | loading 文本                                     | string | empty string |
| viewIndex | 占用指定窗口，如果窗口正在播放，则关闭并重新占用 | number | null         |



### clear()

关闭所有正在播放的视频播放器



### getPlaying(unique)

指定标识符对应的播放器对象。关于**unique** param ，由 play() 方法的**options.data.unique**参数指定，如果不指定，默认使用 options.src 中的文件名。



### getSelected()

返回当前选中的播放器对象



### getUserData(unique)

关于**unique** param ，由play() 方法的**options.data.unique参数指定。**返回**options.data.user**



### mute()

将所有播放器静音



### play(options) 

播放视频，options对象格式如下：

| 参数      | 说明                                                         | 类型    | 默认值                                         |
| --------- | ------------------------------------------------------------ | ------- | ---------------------------------------------- |
| content   | 上下文菜单                                                   | array   | null                                           |
| data      | 用户数据                                                     | object  | {<br />unique: filename<br />user: null<br />} |
| hasAudio  | 是否有音频                                                   | boolean | true                                           |
| isLive    | 指定当前视频流是实时流还是文件流<br />如果为true，播放速率将根据缓冲区大小进行调整 | boolean | true                                           |
| text      | 显示自定义文本消息，默认显示文件名。<br /> 它是 1.2.6 之前是“ino” | string  | null                                           |
| record    | 录像控制参数（不支持rtmp/m3u8）                              | object  | {<br />enabled: true,<br />isLive: true<br />} |
| src       | 媒体来源                                                     | string  | -                                              |
| viewIndex | 窗口索引，如果>=0，视频会在指定窗口播放                      | number  | null                                           |



**content** 数组参数的格式如下：

```js
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
]
```



**data** 对象参数的格式如下

```
{
  unique: filename,
  user: null
}
```



### splitView(uCount)

修改视频播放器的数量。

类型: number, 仅支持以下值: 1, 4, 6, 8, 9, 10, 16, 25, 36, 64



### stop()

停止正在播放的视频播放器



### togglefill()

切换视频是否满屏



## 事件



### error

播放flv出错时触发

error(player, errType, errDetails, e)





## License

MIT. Copyright (c) lin557