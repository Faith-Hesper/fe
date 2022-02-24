<template>
    <div>
        <van-tabs v-model="active" type="card" color="#00bec7" sticky animated swipeable @change="onClickTab">
            <van-tab title="累积确诊">
                <div id="main" style="width: 100%; height: 25rem"></div>
            </van-tab>
            <van-tab title="现存确诊">
                <div id="main2" style="width: 100%; height: 25rem"></div>
            </van-tab>
        </van-tabs>
        <van-tabs v-model="active" type="card" color="#00bec7" sticky animated swipeable>
            <van-tab title="境外输入省级Top10">
                <div id="jwsrTop" style="width: 100%; height: 25rem"></div>
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
            confirmed: [],
            now_confirm: [],
            jwsr_name: [],
            jwsr_value: [],
            times: '',
            // v-model 表单数据双向绑定
            active: 0
        }
    },
    mounted() {
        // 省份数据
        // const data = api.getData() 
        api.getData().then((res)=> {
            const {data: {data: {list,jwsrTop,times}}} = res
            this.times =  times + '现有确诊病例数，排除治愈、死亡' 
            console.log(res);
            // console.log(list);
            list.forEach((item,index)=>{
                // 累积确诊
                let data = {name: item.name, value: item.value}
                // console.log(data);
                this.confirmed.push(data)
                // 现存确诊
                let now_confirm_list = {name: item.name, value: item.econNum}
                this.now_confirm.push(now_confirm_list)
            })
            jwsrTop.forEach((item)=>{
                // 境外输入Top10
                this.jwsr_name.push(item.name )
                this.jwsr_value.push(item.jwsrNum )
            })
            // console.log(this.confirmed);
            // console.log(this.now_confirm);
            this.$nextTick(()=>{
                echarts.chart('main',this.times,this.confirmed)
            })
            this.$nextTick(()=>{
                echarts.jwsrTop_chart('jwsrTop','境外输入Top10',this.jwsr_name,this.jwsr_value)
            })
        })
    },
    methods: {
        onClickTab(title) {
        // this.active = 1
        /** vant库组件在mounted前未渲染组件内DOM
          * 用change事件手动触发echarts图表渲染
          * $nextTick 延迟调用函数*/
        if(title==1){
            this.$nextTick(()=>{
            echarts.chart('main2',this.times,this.now_confirm)
            // console.log(title); 
        })}
        console.log(this.active); 
    }
    },
}
</script>

<style></style>
