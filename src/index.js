import VueVideoMonitor from './vue-video-monitor.vue'
// 注册组件
VueVideoMonitor.install = (Vue) =>
  Vue.component(VueVideoMonitor.name, VueVideoMonitor)
export default VueVideoMonitor
