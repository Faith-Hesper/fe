<template>
    <div>
        <div id="province" style="width: 100%; height: 50rem; text-align:left;"></div>
        <div id="province_recent" style="width: 100%; height: 50rem; text-align:left;"></div>
    </div>
</template>

<script>
import echarts from '../../echarts/echarts.js'
import api from '../../api/base'

export default {
    props: {
        cityName: ''
    },
    data() {
        return {
            confirmed: [],
            now_confirm: []
        }
    },
    created() {
        let recentData = JSON.parse(localStorage.recentData)
        let dateId = JSON.parse(localStorage.dateId)
        let confirmedIncr = []
        let  curedIncr = []
        let  deadIncr = []
        let  currentConfirmedIncr = []
        // console.log(recentData);
        recentData.forEach(item => {
            confirmedIncr.push(item.confirmedIncr)
            curedIncr.push(item.curedIncr)
            deadIncr.push(item.deadIncr)
            currentConfirmedIncr.push(item.currentConfirmedIncr)
        });
        this.$nextTick(()=>{

            echarts.province_recentData('province_recent',this.cityName,dateId,confirmedIncr,curedIncr,deadIncr,currentConfirmedIncr)
        })
    },
    mounted() {
        console.log(this.cityName);
        api.getData().then((res)=> {
            const {data: {data: {list,times}}} = res
            this.times =  times + '现有确诊病例数，排除治愈、死亡' 
            // console.log(list);
            const { city } = list.find((item,index)=>{return item.name==this.cityName})
            // console.log(city);
            city.forEach((item,index) => {
                if(index!=0){
                    // 累积确诊
                    let data = {name: item.mapName, value: item.conNum}
                    // console.log(data);
                    this.confirmed.push(data)
                    // 现存确诊
                    let now_confirm_list = {name: item.mapName, value: item.econNum}
                    this.now_confirm.push(now_confirm_list)
                }
            });
            // console.log(this.confirmed);
            // console.log(this.now_confirm);
            this.$nextTick(()=>{
                echarts.province_chart('province',this.cityName,this.times,this.confirmed)
            })
        })
    },
    methods: {
        
    },
}
</script>

<style>

</style>