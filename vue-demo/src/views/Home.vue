<template>
    <div class="home">
        <img src="../assets/img/1.png" alt="" width="100%" />
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
            <router-link to="/">
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
        <CovCount :covNumChange="covNumChange"></CovCount>
        <van-tabs v-model="active" type="card" animated swipeable @change="onClickTab">
            <van-tab title="累积确诊">
                <div id="main" style="width: 100%; height: 25rem;"></div>
            </van-tab>
            <van-tab title="现存确诊">
                <div id="main2" style="width: 100%; height: 25rem;"></div>
            </van-tab>
        </van-tabs>
        <World></World>
    </div>
</template>

<script>
// import CovInfo from './CovInfo/CovInfo.vue'
import CovCount from './CovInfo/CovCount.vue'
import World from '../components/World/World.vue'
import api from '../api/base.js'
import bus from '../eventBus.js'
import echarts from '../echarts/echarts.js'

export default {
    name: 'Home',
    data() {
        return {
            news: [],
            covNumChange: {},
            covDesc: {},
            confirmed: [],
            now_confirm: [],
            times: '',
            // v-model 表单数据双向绑定
            active: 0
        }
    },
    components: {
        // CovInfo,
        CovCount,
        World
    },
    created() {
        api.getCovInfo().then((res) => {
            const { data: response } = res
            // console.log(response)
            let data = response.newslist[0]
            // 确诊信息
            this.covNumChange = {
                modifytime: data.desc.modifyTime,
                currentConfirmedIncr: data.desc.currentConfirmedIncr,
                currentConfirmedCount: data.desc.currentConfirmedCount,
                suspectedIncr: data.desc.suspectedIncr,
                suspectedCount: data.desc.suspectedCount,
                seriousIncr: data.desc.seriousIncr,
                seriousCount: data.desc.seriousCount,
                confirmedIncr: data.desc.confirmedIncr,
                confirmedCount: data.desc.confirmedCount,
                deadIncr: data.desc.deadIncr,
                deadCount: data.desc.deadCount,
                curedIncr: data.desc.curedIncr,
                curedCount: data.desc.curedCount,
            }
            // 疫情热点
            this.covDesc = {
                note1: data.desc.note1,
                note2: data.desc.note2,
                note3: data.desc.note3,
                remark1: data.desc.remark1,
                remark2: data.desc.remark2,
                remark3: data.desc.remark3,
            }
            data.news.forEach((key) => {
                this.news.push(key)
            })
        })
        
    },
    mounted() {
        // 省份数据
        // const data = api.getData() 
        api.getData().then((res)=> {
            const {data: {data: {list,times}}} = res
            this.times =  times + '现有确诊病例数，排除治愈、死亡' 
            console.log(res);
            // console.log(list);
            list.forEach((item,index)=>{
                // 累积确诊
                let data = {name: item.name, value: item.value}
                // console.log(data);
                this.confirmed.push(data)
                // 现存确诊
                let now_confirm_list = {name: item.name, value: item.econNum}
                this.now_confirm.push(now_confirm_list)
            })
            // console.log(this.confirmed);
            // console.log(this.now_confirm);
            this.$nextTick(()=>{
                echarts.chart('main',this.times,this.confirmed)
            })
        })
        
            
    },
    methods: {
        onClickTab(title) {
            // this.active = 1
            /** vant库组件在mounted前未渲染组件内DOM
             *  用change事件手动触发echarts图表渲染
             * $nextTick 延迟调用函数
             */
            if(title==1){
                this.$nextTick(()=>{
                echarts.chart('main2',this.times,this.now_confirm)
                // console.log(title); 
            })}
            console.log(this.active); 
        }
    },
}
</script>

<style lang="less" scoped>
.CovInfo,
.hot {
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
