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
      text: []
    }
  },
  methods: {
    getData(){
      // const data = await axios.get('http://api.tianapi.com/topnews/index?key=61abdb275a0249299eeb6392a8f53e07')
      const {data: res} =  axios.get({
        url: `https://api.m.jd.com/?functionId=signFreeProducts&body={%22linkId%22:%22PiuLvM8vamONsWzC0wqBGQ%22,%22productType%22:1,%22pageNum%22:1,%22pageSize%22:10}&t=${Date.now()}&appid=activities_platform&client=H5&clientVersion=1.0.0`,
        headers: {
            Cookie: `pt_key=AAJiBGGpADCKrrfCpDrPV-etZxeV9VLvxYwrntlgUC6Eeowug7mfT131lYjxxE0YN8o3kiBFC6c;pt_pin=jd_unAznmRyPSmQ;`,
            Accept: `*/*`,
            Connection: `keep-alive`,
            Origin: `https://signfree.jd.com`,
            Referer: `https://signfree.jd.com/`,
            'Accept-Encoding': `gzip, deflate, br`,
            Host: `api.m.jd.com`,
            'User-Agent': `jdpingou;android;3.6.6;10;9366134603335346-2356564626532336;network/wifi;model/PCCM00;addressid/2724627094;aid/9f1d035d2eedb52c;oaid/0990A8DEE8484D29A1F033DCEFB178E3e82dce91adda643738be64a5c1dbd373;osVer/29;appBuild/1830;psn/Y3zi9DfAnZ9m /CaT1 855ftH5Ommmjk|80;psq/17;adk/;ads/;pap/JA2020_3112531|3.6.6|ANDROID 10;osv/10;pv/58.17;installationId/64c27574699b447f9e83bb051482e0bc;jdv/0|androidapp|t_335139774|appshare|Wxfriends|1629270186766|1629270192;ref/HomeFragment;partner/oppo;apprpd/Home_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; PCCM00 Build/QKQ1.191021.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045135 Mobile Safari/537.36`,
            'Accept-Language': `zh-cn`,
        }
        }).then((response)=>{
          console.log(response);
        }).catch((error)=>{
          console.log(error);
        })
      // this.text = res.newslist
      console.log(res);
    }
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
