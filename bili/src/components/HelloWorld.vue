<template>
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
                        <td>发布时间</td>
                        <td>时长</td>
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
                        <td>{{ item.created | time }}</td>
                        <td>{{ item.length }}</td>
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
</template>

<script>
import api from '../api/base.js'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
        mid: '',
        bvid: '',
        vlist: [],
        downloadUrldurl: ''
    }
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
  filters: {
    time: val => {
      val += '000'
      // console.log(val);
      val = parseInt(val)
      let t = new Date(val).toLocaleString()
      return t
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.title,label {
  text-align: left;
}
</style>
