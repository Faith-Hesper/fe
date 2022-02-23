import Vue from 'vue'
import App from './App.vue'
import router from '../src/router/index.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
// import echarts from 'echarts'
// import 'echarts/map/js/china'
import { Tab, Tabs } from 'vant';

Vue.config.productionTip = false
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Vue.prototype.$echarts = echarts

Vue.use(Tab)
Vue.use(Tabs)

new Vue({
  render: h => h(App),
  // 渲染路由实例对象
  router
}).$mount('#app')
