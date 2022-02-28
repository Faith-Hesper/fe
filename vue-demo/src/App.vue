<template>
    <div id="app">
        <!-- <Home></Home> -->
        <router-view></router-view>
        <!-- <Header title="购物车"></Header> -->
        <!-- <input type="text" name="" id="" :placeholder="text"> -->
        <!-- <Content v-for="item in text" :key="item.id" :title="item.title" :content="item.description" :pic="item.picUrl"></Content> -->
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Header from './components/Header/Header.vue'
// import Content from './components/container/Content.vue'
import Home from './views/Home.vue'

export default {
    name: 'App',
    components: {
        // Home
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

<style scoped lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
