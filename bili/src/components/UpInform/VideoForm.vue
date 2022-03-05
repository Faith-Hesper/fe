<template>
    <div>
        <label for="mid">mid号: </label>
            <input v-model.trim="mid" type="text" class="form-control" id="mid" placeholder="596324576">
            <button @click="getvideoList(mid)" type="button" class="btn btn-primary">获取视频列表</button>
            <UpSpace :mid="mid"></UpSpace>
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
                        <td>{{ item.comment | Num }}</td>
                        <td>{{ item.play | Num }}</td>
                        <td style="width:10rem"><img :src="item.pic" :alt="item.title" width="100rem" class="img-rounded"></td>
                    </tr>
                </tbody>
            </table>
    </div>
</template>

<script>
import api from '../../api/base.js'
import UpSpace from './UpSpace.vue'

export default {
    props: {
    },
    data() {
    return {
        mid: '',
        vlist: [],
        }
    },
    components: {
        UpSpace
    },
    methods: {
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
    },
    Num: val => {
    if(val >= 10000){
        val = val/10000 + '万'
        // console.log(val);
        val = val.split('.')[0] + '.' + val.split('.')[1].slice(0,1) + '万'
        // console.log(val)
    }else if(val >=1000 && val<10000){
        val = val/1000 + '千'
        // console.log(val);
        val = val.split('.')[0] + '.' + val.split('.')[1].slice(0,1) + '千'
        // console.log(val)
    }
        return val
    }
    }
}
</script>

<style>

</style>