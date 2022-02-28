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
// import CovInfo from './CovInfo/CovInfo.vue'
import axios from 'axios'
import CovCount from './CovInfo/CovCount.vue'
import World from '../components/World/World.vue'
import China from '../components/China/China.vue'
import api from '../api/base.js'
import bus from '../eventBus.js'

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
        // CovInfo,
        CovCount,
        China,
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
        this.getData()
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
