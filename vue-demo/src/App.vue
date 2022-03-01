<template>
    <div id="app">
        <!--使用 router-link 组件进行导航 -->
        <!-- <Home></Home> -->
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
    </div>
</template>

<script>
import Home from './views/Home.vue'
export default {
    name: 'App',
    components: {
        Home
    },
    data() {
        return {
            text: [],
        }
    },
    methods: {
        
    },
    created() {
        
    },
}
</script>

<style>

</style>
