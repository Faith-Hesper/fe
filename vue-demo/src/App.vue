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
        getData() {
            document.cookie = 'traceid=d814dd0725;'
            document.cookie =
                'SID=033b4332fdbd406a857843c85eb4408476e3cc87360f4457a93667012d548202;'
            document.cookie = 'TOK=d814dd07258b9a0d;'
            document.cookie = 'hashkey=d814dd07;'
            document.cookie = 'optimal_cdn_domain=docs2.gtimg.com;'
            document.cookie = 'backup_cdn_domain=docs2.gtimg.com;'
            document.cookie = 'adtag=s_wx_mini_docs_1044'
            // const data = await axios.get('http://api.tianapi.com/topnews/index?key=61abdb275a0249299eeb6392a8f53e07')
            axios({
                url: `/qq/form/collect/submit?u=378577316257478d82daff4cffbaad8d`,
                method: 'post',
                data: {
                    global_padid: '300000000$JvMpfxzeUqtR',
                    data: '[{"id":"SIMPLE1599549650232ketmk94o","type":"SIMPLE","content":"陈海滨","dataType":1,"securityStatus":false},{"id":"RADIO1645514705566kzxsywte","type":"RADIO","content":["正常，36.3-37.2℃"],"dataType":1,"selectedOptionIds":["RADIOOPTkzxsywtc"]},{"id":"RADIO1645514840444kzxt1svy","type":"RADIO","content":["无"],"dataType":1,"selectedOptionIds":["RADIOOPTkzxt1svx"]},{"id":"RADIO1645514874513kzxt2j6b","type":"RADIO","content":["居家"],"dataType":1,"selectedOptionIds":["RADIOOPTkzxt2j69"]},{"id":"RADIO1645515041538kzxt641x","type":"RADIO","content":["否"],"dataType":1,"selectedOptionIds":["RADIOOPTkzxt641w"]},{"id":"RADIO1645515070444kzxt6qcu","type":"RADIO","content":["无"],"dataType":1,"selectedOptionIds":["RADIOOPTkzxt6qct"]},{"id":"LOCATION1645515086581kzxt72t1","type":"LOCATION","content":"江西省/赣州市/瑞金市/城东朗朗幼儿园东南(红都大道东)","dataType":1}]',
                    role: {
                        hideIds: [],
                        sid: 26,
                    },
                    modify_sid: 26,
                },
            }).then((response) => {
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
            // this.text = res.newslist
            // console.log(res)
        },
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
