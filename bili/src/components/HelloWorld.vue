<template>
    <div class="tool">
        <div class="title">B站视频下载</div>
        <!-- <component :is="" ></component> -->
        <VideoForm style="margin-top: 2rem;"></VideoForm>
        <FormBtn id="bv" placeholder="BV1aU4y1Z72g" btnText="下载视频" @btn_bvid="submit_bvid" style="margin-top: 7rem;">
            <p slot="url" style="margin-top: 7rem; margin-left: 2rem; width: 35%">B站视频下载链接: {{ downloadUrldurl }}</p>
        </FormBtn>
        <table class="table table-striped table-hover" style="text-align: left;">
            <thead>
                <tr>
                    <td>序号</td>
                    <td>城市</td>
                    <td>名字</td>
                    <td>地点</td>
                    <td>区域</td>
                    <td>经纬度</td>
                    <td>类型</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in list" :key="item.bd">
                        <td>{{ item.bd }}</td>
                        <td>{{ item.cityname }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.address }}</td>
                        <td>{{ item.adname  }}</td>
                        <td>{{ item.location }}</td>
                        <td>{{ item.type }}</td>
                    </tr>
                </tbody>
        </table>
    </div>
</template>

<script>
import api,{ bili_download,gaode } from '../api/base.js'
import VideoForm from './UpInform/VideoForm.vue'
import FormBtn from './Common/FormBtn.vue'

export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
    components: {
        FormBtn,
        VideoForm,
    },
    data() {
        return {
            mid: '',
            bvid: '',
            list: [],
            i: 0,
            downloadUrldurl: '',
        }
    },
    methods: {
        // B站视频下载  index.html 添加<meta name="referrer" content="never">
        async getgaode(){
            let k = 0
            for (let i=0; i<=5; i++){
                await gaode(i).then(res=>{
                    const {data: {pois}} = res
                    pois.forEach(item => {
                        item.bd = k
                        this.list.push(item)
                        k++
                    });
                    // console.log(pois);
                })
            }
            console.log(this.list);
        },
        submit_bvid(bvid) {
            console.log(bvid)
            bili_download(bvid).then(res=>{
                this.downloadUrldurl = res[0].url
                console.log(this.downloadUrldurl)
                window.open(this.downloadUrldurl)
            }).catch(err=>console.log(err))
        },
    },
    created() {
        this.getgaode()
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.title {
    text-align: left;
}
.tool {
    margin: 2rem;
}
</style>

