<template>
    <div class="home">
        <img src="../assets/img/1.png" alt="" height="30%" width="100%" />
        <div class="CovInfo">
            <router-link to="/CovInfo">
                <div class="title">病毒信息</div>
            </router-link>
        </div>
        <div class="hot">
            <div class="title">疫情热点</div>
            <div class="CovTitle" v-for="item in news" :key="item.id">
                <span class="bq">最新</span>
                <a :href="item.sourceUrl" target="_blank">{{ item.title }}</a>
            </div>
        </div>
        <div class="list">
            <router-link to="/">
                <img src="../assets/img/2.png" alt="" />
                <span>免费问诊</span>
            </router-link>
            <router-link to="/covDetection">
                <img src="../assets/img/2.png" alt="" />
                <span>核酸检测</span>
            </router-link>
            <router-link to="/">
                <img src="../assets/img/2.png" alt="" />
                <span>防疫物资</span>
            </router-link>
            <router-link to="/">
                <img src="../assets/img/2.png" alt="" />
                <span>出行政策</span>
            </router-link>
        </div>
        <div style="text-align: left; margin-top: .625rem; font-size: 1rem; font-weight: 700;">国内疫情</div>
        <CovCount :covNumChange="covNumChange"></CovCount>
        <China></China>
        <div style="text-align: left; margin-tip: .625rem; font-size: 1rem; font-weight: 700;">国外疫情</div>
        <World></World>
    </div>
</template>

<script>
import CovCount from './CovInfo/CovCount.vue'
import World from '../components/World/World.vue'
import China from '../components/China/China.vue'
import { getCovInfo } from '../api/base.js'
// import bus from '../eventBus.js'

export default {
    name: 'Home',
    data() {
        return {
            news: [],
            covNumChange: {},
            covDesc: {},
        }
    },
    components: {
        CovCount,
        China,
        World
    },
    created() {
        this.loadCovData()
        
    },
    mounted() {

    },
    methods: {
        async loadCovData()
        {
            await getCovInfo().then((res) => {
            this.covDesc = res.covDesc
            this.covNumChange = res.covNumChange
            this.news = res.news
            })
        }
    },
}
</script>

<style lang="less" scoped>
.CovInfo,
.hot,.tool {
    padding-left: 0.1rem;
    text-align: left;
    margin-bottom: 0.5rem;
    .title {
        border-left: 0.3rem solid rgb(25, 129, 136);
        padding-left: 0.2rem;
    }
}
.hot {
    .CovTitle {
        display: inline-block;
        .bq {
            margin: 0rem 0.4rem 0rem 0.4rem;
            color: white;
            background-color: red;
            font-size: 0.8rem;
        }
    }
}
.list {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        display: block;
        width: 5rem;
        height: 5rem;
    }
}
</style>
