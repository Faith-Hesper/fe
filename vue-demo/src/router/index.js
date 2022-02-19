import Vue from "vue"
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CovInfo from '../views/CovInfo/CovInfo.vue'

// 安装为Vue项目插件
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/CovInfo',
        name: 'CovInfo',
        component: CovInfo
    }
]

// 创建路由实例对象
const router = new VueRouter({
    routes
})

// 默认导出
export default router