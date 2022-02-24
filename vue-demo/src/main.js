import Vue from 'vue'
import App from './App.vue'
import router from '../src/router/index.js'
import { Image as VanImage, Col, Row, Tab, Tabs } from 'vant';

Vue.config.productionTip = false


Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Col)
Vue.use(Row)
Vue.use(VanImage)

new Vue({
  render: h => h(App),
  // 渲染路由实例对象
  router
}).$mount('#app')
