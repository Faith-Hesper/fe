<template>
    <div>
        <div id="province" style="width: 100%; height: 50rem"></div>
        <div id="province_recent" style="width: 100%; height: 50rem"></div>
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
    mounted() {
        api.getData().then((res)=> {
            const {data: {data: {list,times}}} = res
            this.times =  times + '现有确诊病例数，排除治愈、死亡' 
            // console.log(list);
            let provinceName = list.find((item,index)=>{return item.name==this.cityName})
            const { city } = provinceName
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