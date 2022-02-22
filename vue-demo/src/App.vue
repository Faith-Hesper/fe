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
import axios from 'axios'
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
        getData() {
            // const data = await axios.get('http://api.tianapi.com/topnews/index?key=61abdb275a0249299eeb6392a8f53e07')
            const { data: res } = axios
                .get({
                    url: `https://interface.sina.cn/news/wap/fymap2020_data.d.json`,
                    headers: {
                        'User-Agent':
                            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0',
                        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
                        'Accept-Language':
                            'zh-CN,en-US;q=0.8,zh;q=0.7,zh-TW;q=0.5,zh-HK;q=0.3,en;q=0.2',
                        'Accept-Encoding': 'gzip, deflate, br',
                        Connection: 'keep-alive',
                    },
                })
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
            // this.text = res.newslist
            console.log(res)
        },
    },
    created() {
        // this.getData()
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
