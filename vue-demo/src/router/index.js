import Vue from "vue"
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CovInfo from '../views/CovInfo/CovInfo.vue'
import Province from '../components/Province/Province.vue'

// 安装为Vue项目插件
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/covInfo',
        name: 'CovInfo',
        component: CovInfo
    },
    {
        path: '/province/:cityName',
        name: 'Province',
        component: Province,
        props: true
    }
]

// 创建路由实例对象
const router = new VueRouter({
    routes
})

// 默认导出
export default router