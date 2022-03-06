<template>
    <div>
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
export default {
    props: {
        vlist: [],
    },
    methods: {
        
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
        val = val.split('.')[0] + '.' + val.split('.')[1].slice(0,1) + '万'
        // console.log(val)
    }else if(val >=1000 && val<10000){
        val = val/1000 + '千'
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