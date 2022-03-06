<template>
    <div class="tool">
        <div class="title">B站视频下载</div>
        <!-- <component :is="" ></component> -->
        <VideoForm style="margin-top: 2rem;"></VideoForm>
        <FormBtn id="bv" placeholder="BV1aU4y1Z72g" btnText="下载视频" @btn_bvid="submit_bvid" style="margin-top: 7rem;">
            <p slot="url" style="margin-top: 7rem; margin-left: 2rem; width: 35%">B站视频下载链接: {{ downloadUrldurl }}</p>
        </FormBtn>
    </div>
</template>

<script>
import api,{ bili_download } from '../api/base.js'
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
.title {
    text-align: left;
}
.tool {
    margin: 2rem;
}
</style>

