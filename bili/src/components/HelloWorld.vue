<template>
    <div class="tool">
        <div class="title">B站视频下载</div>
        <!-- <component :is=""></component> -->
        <VideoForm />
        <form class="form-inline">
            <div class="form-group">
                <label for="bv">BV号: </label>
                <input
                    v-model.trim="bvid"
                    type="text"
                    class="form-control"
                    id="bv"
                    placeholder="BV1aU4y1Z72g"
                />
            </div>
            <button @click="submit_bvid(bvid)" type="button" class="btn btn-primary">
                下载视频
            </button>
        </form>
        <p>B站视频下载链接:{{ downloadUrldurl }}</p>
    </div>
</template>

<script>
import api,{ bili_download } from '../api/base.js'
import VideoForm from './UpInform/VideoForm.vue'

export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
    components: {
        VideoForm,
    },
    data() {
        return {
            mid: '',
            bvid: '',
            downloadUrldurl: '',
        }
    },
    methods: {
        // B站视频下载  index.html 添加<meta name="referrer" content="never">
        submit_bvid(bvid) {
            console.log(bvid)
            bili_download(bvid).then(res=>{
                this.downloadUrldurl = res[0].url
                console.log(this.downloadUrldurl)
                window.open(this.downloadUrldurl)
            }).catch(err=>console.log(err))
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.title,
label {
    text-align: left;
}
</style>

