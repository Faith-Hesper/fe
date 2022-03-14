<template>
    <div class="china">
        <div class="china">近期疫情分布</div>
            <table class="table table-striped table-hover" style="text-align: left;">
                <!-- 表头 -->
                <thead>
                <tr>
                    <td style="background: #e3e7f3;">地区</td>
                    <td style="background: #e69a8d;">昨日本土新增</td>
                    <td style="background: #f3bab0;">现存确诊</td>
                    <td style="background: #b4c0d5;">风险地区</td>
                    <td style="background: #e3e7f3;">疫情</td>
                </tr>
                </thead>
                <!-- <van-icon name="arrow-down" /> -->
                <tbody>
                <tr v-for="(item, index) in riskArea"  :key="index" style="text-align: left;">
                    <td style="background-color:#00bec9;"><div class="bt" @click="listClick(item.cities,index,$event)"> <img src="../../assets/img/index.png" style="width: 0.8rem; margin-right: 5px">{{ item | cityName }}</div></td>
                    <td>{{ item.yesterdayLocalConfirmedCount | data_announced}}</td>
                    <td>{{ item.currentConfirmedCount }}</td>
                    <td>{{ item.currentDangerCount }}</td>
                    <td @click.once="detail(item.provinceShortName,item.statisticsData)"><a  :href='"#/province/"+item.provinceShortName'>详情</a></td>
                </tr>
                </tbody>
            </table>
        <div class="china">
        <van-tabs v-model="active" type="card" color="#00bec7" sticky animated swipeable @change="onClickTab">
            <van-tab title="现存确诊">
                <div id="main2" style="width: 100%; height: 30rem; text-align:left; padding: auto;"></div>
            </van-tab>
            <van-tab title="风险地区">
                <div id="riskArea" style="width: 100%; height: 30rem; text-align:left; padding: auto;"></div>
            </van-tab>
            <van-tab title="累积确诊">
                <div id="main" style="width: 100%; height: 30rem; text-align:left;"></div>
            </van-tab>
        </van-tabs>
        </div>
        <div class="china">
            <!-- <MapVessel type="card" color="#00bec7" title="境外输入省级Top10" id="jwsrTop" style="width: 100%; height: 25rem"></MapVessel> -->
        <van-tabs v-model="actives" type="card" color="#00bec7" sticky animated swipeable>
            <van-tab title="境外输入省级Top10">
                <div id="jwsrTop" style="width: 100%; height: 25rem"></div>
            </van-tab>
        </van-tabs>

        </div>
    </div>
</template>

<script>
import api,{ dxyData } from '../../api/base.js'
import echarts from '../../echarts/echarts.js'
import '../../utils/css_transition'
// import MapVessel from '../Common/MapVessel.vue'

export default {
    data() {
        return {
            confirmed: [],
            now_confirm: [],
            currentDangerCount: [],
            jwsr_name: [],
            jwsr_value: [],
            riskArea: [],
            times: '',
            // v-model 表单数据双向绑定
            active: 0,
            actives: 0,
            dataStatistic: -1,
        }
    },
    components: {
        // MapVessel
    },
    created() {
        this.getRiskAreaData()
    },
    mounted() {
        this.getChinaData()
    },
    methods: {
        // 现存确诊、累积确诊、Top10境外输入数据
        getChinaData () {
        // 省份数据
        api.getData().then((res)=> {
            const {data: {data: {list,jwsrTop,times}}} = res
            this.times = times
            let title =  times + '现有确诊病例数，排除治愈、死亡' 
            // console.log(res);
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
                echarts.chart('main2',title,this.now_confirm)
            })
            this.$nextTick(()=>{
                echarts.jwsrTop_chart('jwsrTop','境外输入Top10',this.jwsr_name,this.jwsr_value)
            })
        }).catch(err=>{
            console.log(err);
        })
        },
        // 风险地区数据
        async getRiskAreaData() {
            this.riskArea = await dxyData().then(res=>{
                res.forEach(item=>{
                    let areaData = {name: item.provinceShortName,value: item.currentDangerCount}
                    this.currentDangerCount.push(areaData)
                })
                return res} )
            console.log(this.riskArea);
        },
        // 调用累积确诊
        onClickTab(index) {
        // this.active = 1
        /** vant库组件在mounted前未渲染组件内DOM
          * 用change事件手动触发echarts图表渲染
          * $nextTick 延迟调用函数*/
        let time
        if(index==2){
            this.$nextTick(()=>{
            time = this.times + '累积确诊病例数，排除治愈、死亡' 
            echarts.chart('main',time,this.confirmed)
            // console.log(title); 
        })}
        else if(index==1){
            this.$nextTick(()=>{
            time = this.times + '风险地区' 
            echarts.riskArea('riskArea',time,this.currentDangerCount)
            })
        }
        console.log(this.active); 
        },
        // 动态列表
        listClick(cityes,id,e) {

            // console.log(cityes);
            cityes.forEach(item=>{
                // 从索引 i 开始 删除 0个元素,在i的位置添加值item
                this.riskArea.splice(id+1,0,item)
            })
            // console.log(this.riskArea);
            // console.log(this.$refs[id]);
            console.log(e.target.style.backgroundColor)
        },
        detail(provinceShortName,province_json) {
            // console.log(province_json);
            // 省份疫情以来确诊信息
            api.province_recent(province_json).then((res)=>{
                const { data:{ data:datas } } = res
                // console.log(datas);
                let dateId,currentConfirmedCount,recentData
                for(let i=datas.length-18; i < datas.length; i++)
                {
                    // 格式化日期
                    let date_form
                    let date = datas[i].dateId.toString().slice(4,8)
                    if(date.slice(0,1)==0){
                        date_form = date.slice(1,2) + '.' + date.slice(2,4)
                    }else{
                        date_form = date.slice(0,2) + '.' + date.slice(2,4)
                    }
                    // console.log(date_form)
                    dateId.push(date_form)
                    // 最近18天现存确诊
                    currentConfirmedCount.push(datas[i].currentConfirmedCount)
                    // 获取最近18天数据
                    recentData.push(datas[i])
                }
                localStorage.recentData = JSON.stringify(recentData)
                localStorage.dateId = JSON.stringify(dateId)
                console.log(recentData);
                // this.$nextTick(()=>{
                //     echarts.pro('province_recent',provinceShortName,this.dateId,this.currentConfirmedCount)
                // })
            })
        }
    },
    // 局部过滤器
    filters: {
        // 昨日本土新增
        data_announced: (val)=>{
            return val>0?val:'待公布'
        },
        // 判断城市名字
        cityName: (val)=>{
            if(!val.cityName){
                return val.provinceShortName
            }
            return val.cityName
        }
    }
}
</script>

<style lang="less" scoped>
.china {
    margin-bottom: 0.2rem;
}
.bt {
    width: 100%;
    color: #f5f6f7;
    background-color:#00bec9;
}
</style>
