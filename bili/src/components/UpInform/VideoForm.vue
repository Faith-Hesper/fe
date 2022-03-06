<template>
    <div class="videoList">
        <FormBtn id="mid" placeholder="596324576" btnText="获取视频列表" @btn_bvid="getvideoList"></FormBtn>
        <UpSpace :mid="mid"></UpSpace>
        <component :is="form_component" :vlist="vlist"></component>
        <!-- <FormList :vlist="vlist"></FormList> -->
        <!-- <button @click="load_more" class="btn  btn-primary" >加载更多</button> -->
    </div>
</template>

<script>
import api from '../../api/base.js'
import UpSpace from './UpSpace.vue'
import FormBtn from '../Common/FormBtn.vue'
import FormList from '../Common/FormList.vue'

export default {
    props: {
    },
    data() {
    return {
        mid: '',
        vlist: [],
        form_component: null,
        ps: '30',
        pn: '1'
        }
    },
    components: {
        FormBtn,
        FormList,
        UpSpace
    },
    methods: {
        // 获取视频列表
        getvideoList(mid) {
            this.form_component = FormList
            console.log(this.ps);
            api.getvideoList(mid,this.ps,this.pn).then(res=>{
                console.log(res);
                const { data:{data} } = res
                this.vlist = data.list.vlist
            }).catch(err=> console.log(err))
        },
        load_more() {
            this.ps=60,this.pn=1
            // this.getvideoList
        }
    },
    filters: {
    
    }
}
</script>

<style scoped lang="less">
// .videoList {
//     padding: auto;
//     margin-top: 2rem;
// }
</style>