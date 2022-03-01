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
        <div class="tool">
            <div class="title">B站视频下载</div>
            <label for="mid">mid号: </label>
            <input v-model="mid" type="text" class="form-control" id="mid" placeholder="596324576">
            <button @click="getvideoList(mid)" type="button" class="btn btn-primary">获取视频列表</button>
            <table class="table table-striped table-hover" style="text-align: left;">
                <thead>
                    <tr>
                        <td>作者</td>
                        <td>标题</td>
                        <td>BV号</td>
                        <td>评论</td>
                        <td>播放量</td>
                        <td>图片</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in vlist" :key="item.aid">
                        <td>{{ item.author }}</td>
                        <td>{{ item.title }}</td>
                        <td>{{ item.bvid }}</td>
                        <td>{{ item.comment }}</td>
                        <td>{{ item.play }}</td>
                        <td style="width:10rem"><img :src="item.pic" :alt="item.title" width="100rem" class="img-rounded"></td>
                    </tr>
                </tbody>
            </table>
            <form class="form-inline">
            <div class="form-group">
            <label for="bv">BV号: </label>
            <input v-model="bvid" type="text" class="form-control" id="bv" placeholder="BV1aU4y1Z72g">
            </div>
            <button @click="submit_bvid(bvid)" type="button" class="btn btn-primary">下载视频</button>
            </form>
            <p>B站视频下载链接:{{ downloadUrldurl }}</p>
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
import api from '../api/base.js'
// import bus from '../eventBus.js'

export default {
    name: 'Home',
    data() {
        return {
            news: [],
            covNumChange: {},
            covDesc: {},
            mid: '',
            bvid: '',
            vlist: [],
            downloadUrldurl: ''
        }
    },
    components: {
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

    },
    methods: {
        // B站视频下载  index.html 添加<meta name="referrer" content="never">
        submit_bvid(bvid) {
            console.log(bvid);
            api.get_aid(bvid).then((res)=>{
                // console.log(res);
                const { data:{data: { aid }} } = res
                // console.log(aid);
                api.get_cid(aid).then((res)=>{
                    const { data:{data: { cid }} } = res
                    // console.log(cid);
                    api.bili_downloadUrl(aid,cid).then((res)=>{
                        const { data:{data: { durl }} } = res
                        this.downloadUrldurl = durl[0].url
                        console.log(this.downloadUrldurl);
                        window.open(this.downloadUrldurl)
                    }).catch(err=> console.log(err))
                }).catch(err=> console.log(err))
            }).catch(err=> console.log(err))
        },
        getvideoList(mid) {
            api.getvideoList(mid).then(res=>{
                console.log(res);
                const { data:{data} } = res
                this.vlist = data.list.vlist
            }).catch(err=> console.log(err))
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
