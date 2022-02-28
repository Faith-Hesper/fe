<template>
    <div class="world">
        <van-tabs v-model="active" type="card" color="#00bec7" sticky animated swipeable @change="change">
            <van-tab title="现存确诊">
                <div id="main4" style="width: 100%; height: 25rem; text-align:left;"></div>
            </van-tab>
            <van-tab title="累积确诊">
                <div id="main3" style="width: 100%; height: 25rem; text-align:left;"></div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import api from '../../api/base.js'
import echarts from '../../echarts/echarts.js'

export default {
    data() {
        return {
            world_confirmed: [],
            world_now_confirm: [],
            times: '',
            // v-model 表单数据双向绑定
            active: 0
        }
    },
    created() {
        
    },
    mounted() {
         // 省份数据
        api.getData().then((res) => {
            const {data: {data: {worldlist,times}}} = res
            this.times =  times + '现有确诊病例数，排除治愈、死亡' 
            // console.log(worldlist);
            worldlist.forEach((item,index)=>{
                // 累积确诊
                let data = {name: item.name, value: item.value}
                // console.log(data);
                this.world_confirmed.push(data)
                // 现存确诊
                let now_confirm_list = {name: item.name, value: item.econNum}
                this.world_now_confirm.push(now_confirm_list)
            })
            // console.log(this.world_confirmed);
            // console.log(this.now_confirm);
            this.$nextTick(()=>{
                echarts.world_chart('main4',this.times,this.world_now_confirm)
            })
        })
            
    },
    methods: {
        change(title) {
            // this.active = 1
            /** vant库组件在mounted前未渲染组件内DOM
             *  用change事件手动触发echarts图表渲染
             * $nextTick 延迟调用函数
             */
            if(title==1){
                this.$nextTick(()=>{
                echarts.world_chart('main3',this.times,this.world_confirmed)
                // console.log(title); 
            })}
            console.log(this.active); 
        }
    },
}
</script>

<style lang="less" scoped>
.world {
    margin-top: 1rem;
}
</style>
