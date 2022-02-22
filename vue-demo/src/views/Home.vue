<template>
    <div class="home">
        <img src="../assets/img/1.png" alt="" width="100%" />
        <div class="CovInfo">
            <router-link to="/CovInfo">
                <div class="title">病毒信息</div>
            </router-link>
        </div>
        <div class="hot">
            <div class="title">疫情热点</div>
            <div class="CovTitle" v-for="item in news" :key="item.id">
                <span class="bq">最新</span>
                <a :href="item.sourceUrl" target="_blank">{{ item.title }}</a>
            </div>
        </div>
        <div class="list">
            <router-link to="/">
                <img src="../assets/img/2.png" alt="" />
                <span>免费问诊</span>
            </router-link>
            <router-link to="/">
                <img src="../assets/img/2.png" alt="" />
                <span>核酸检测</span>
            </router-link>
            <router-link to="/">
                <img src="../assets/img/2.png" alt="" />
                <span>防疫物资</span>
            </router-link>
            <router-link to="/">
                <img src="../assets/img/2.png" alt="" />
                <span>出行政策</span>
            </router-link>
        </div>
        <CovCount :covNumChange="covNumChange"></CovCount>
        <div id="main" style="width: 100%; height: 20rem"></div>
    </div>
</template>

<script>
// import CovInfo from './CovInfo/CovInfo.vue'
import CovCount from './CovInfo/CovCount.vue'
import api from '../api/base.js'
import bus from '../eventBus.js'

export default {
    name: 'Home',
    data() {
        return {
            news: [],
            covNumChange: {},
            covDesc: {},
            provinceData: [],
            times: ''
        }
    },
    components: {
        // CovInfo,
        CovCount,
    },
    created() {
        api.getCovInfo().then((res) => {
            const { data: response } = res
            // console.log(response)
            let data = response.newslist[0]
            // 确诊信息
            this.covNumChange = {
                modifytime: data.desc.modifyTime,
                currentConfirmedIncr: data.desc.currentConfirmedIncr,
                currentConfirmedCount: data.desc.currentConfirmedCount,
                suspectedIncr: data.desc.suspectedIncr,
                suspectedCount: data.desc.suspectedCount,
                seriousIncr: data.desc.seriousIncr,
                seriousCount: data.desc.seriousCount,
                confirmedIncr: data.desc.confirmedIncr,
                confirmedCount: data.desc.confirmedCount,
                deadIncr: data.desc.deadIncr,
                deadCount: data.desc.deadCount,
                curedIncr: data.desc.curedIncr,
                curedCount: data.desc.curedCount,
            }
            // 疫情热点
            this.covDesc = {
                note1: data.desc.note1,
                note2: data.desc.note2,
                note3: data.desc.note3,
                remark1: data.desc.remark1,
                remark2: data.desc.remark2,
                remark3: data.desc.remark3,
            }
            data.news.forEach((key) => {
                this.news.push(key)
            })
        })
        
    },
    mounted() {
        // 省份数据
        api.getData().then((res) => {
            const {data: {data: {worldlist,list,times}}} = res
            this.times =  times + '累积确诊:' 
            // console.log(res);
            // console.log(worldlist,list);
            list.forEach((item,index)=>{
                // 累积确诊
                let data = {name: item.name, value: item.value}
                // console.log(data);
                this.provinceData.push(data)
            })
            // this.provinceData = list
            // console.log(this.provinceData);
        this.chart()

        })
            .catch((err) => {
                console.log(err)
            })
    },
    methods: {
        // Info () {
        //     bus.$emit('share',this.covDesc)
        // }
        chart() {
            // 基于准备好的dom，初始化echarts实例
            var main = document.getElementById('main')
            var myChart = this.$echarts.init(main)
            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: this.times,
                    left: 'center',
                    textStyle: {
                        color: '#333',
                        fontStyle: 'italic',
                        fontSize: 10,
                        fontWeight: 'normal'
                    }
                },
                tooltip: {
                    show: true,
                    trigger: 'item',
                    triggerOn: 'click',
                    position: 'bottom',
                    formatter: '地区: {b}<br>确诊:{c}',
                    textStyle: {
                        fontStyle: 'italic',
                        fontSize: 10,
                        fontWeight: 'normal'
                    }
                },
                visualMap: {
                    // 离散
                    type: 'piecewise',
                    // 图形垂直排列
                    orient: 'vertical',
                    // 图形在文字右边
                    align: 'left',
                    inRange: {
                        color: ['#ffc0b1', '#ff8c71', '#ef1717', '#9c0505'],
                    },
                    /* 不指定 min/max，表示 min/max 为无限大（Infinity）。
                    表示 value 等于 123 的情况。*/
                    pieces: [
                        { gt: 10000 },
                        { gt: 2500, lte:5000},
                        { min: 1000, max: 2500},
                        { min: 500, max: 1000 }, 
                        { min: 100, max: 500 },
                        { min: 10, max: 100 },
                        { lt: 10, color: 'grey' }, 
                    ],
                    // 文本与小块距离
                    textGap: 5,
                    // 每个小块间的距离
                    itemGap: 2,
                    showLabel: true,
                    itemWidth: 10,
                    itemHeight: 10,
                    textStyle: {
                        color: '#333',
                        fontSize: 10
                    }
                },
                series: [
                    {
                        name: '省',
                        type: 'map',
                        map: 'china',
                        zoom: 1.2,
                        // 漫遊和縮放
                        roam: true,
                        // 标签
                        label: {
                            show: true,
                            formatter: '{b}',
                            fontSize: 10,
                        },
                        itemStyle: {
                            color: '#029fd4',
                            // 选中区域高亮
                            emphasis: {
                                areaColor: '#ddb926',
                                opacity: 0.8,
                                shadowColor: 'rgba(0, 0, 0, 0.5)',
                                // 模糊度
                                shadowBlur: 10,
                                // 垂直方向上偏移量
                                shadowOffsetY: 2,
                            },
                        },
                        data: this.provinceData,
                    },
                ],
            }
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option)
            console.log(option);
        },
    },
}
</script>

<style lang="less" scoped>
.CovInfo,
.hot {
    padding-left: 0.1rem;
    text-align: left;
    margin-bottom: 0.5rem;
    .title {
        border-left: 0.3rem solid rgb(25, 129, 136);
        padding-left: 0.2rem;
    }
}
.hot {
    .CovTitle {
        display: inline-block;
        .bq {
            margin: 0rem 0.4rem 0rem 0.4rem;
            color: white;
            background-color: red;
            font-size: 0.8rem;
        }
    }
}
.list {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        display: block;
        width: 5rem;
        height: 5rem;
    }
}
</style>
