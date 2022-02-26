import Vue from 'vue'
import App from './App.vue'
import router from '../src/router/index.js'
import { Image as VanImage,Button , Icon , Col, Row, Tab, Tabs, List, TreeSelect } from 'vant';
// import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false


Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Col)
Vue.use(Row)
Vue.use(List)
Vue.use(VanImage)
Vue.use(TreeSelect)
Vue.use(Button )
Vue.use(Icon )

new Vue({
  render: h => h(App),
  // 渲染路由实例对象
  router
}).$mount('#app')
