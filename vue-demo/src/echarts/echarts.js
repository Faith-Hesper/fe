/*echarts 函数封装
*/
import echarts from 'echarts'
// 汉英转换大对象
import country from './world'

import map from './map'
const chart = {
    chart(id, title, data) {
        // 基于准备好的dom，初始化echarts实例
        var main = document.getElementById(id)
        var myChart = echarts.init(main)
        // 指定图表的配置项和数据
        var option = {
            title: {
                text: title,
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
                // 点击触发提示框
                triggerOn: 'click',
                alwaysShowContent: true,
                // 进入提示框中，添加链接
                enterable: true,
                position: 'bottom',
                formatter(item) {
                    return '<a href="#/province/'+item.name + '">地区: '+ item.name + '<br/>确诊:'+item.value+'</a>'
                },
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
                    color: ['#FFFFFF', '#ffc0b1', '#ff8c71', '#ef1717', '#9c0505'],
                },
                /* 不指定 min/max，表示 min/max 为无限大（Infinity
                表示 value 等于 123 的情况。*/
                pieces: [
                    { gt: 10000 },
                    { gt: 2500, lte: 5000 },
                    { min: 1000, max: 2500 },
                    { min: 500, max: 1000 },
                    { min: 100, max: 500 },
                    { min: 10, max: 100 },
                    { lt: 10 },
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
                    data: data,
                },
            ],
        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
        console.log(option);
    },
    world_chart(id, title, data) {
        // 基于准备好的dom，初始化echarts实例
        var main = document.getElementById(id)
        var myChart = echarts.init(main)
        // 指定图表的配置项和数据
        var option = {
            title: {
                text: title,
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
                // triggerOn: 'click',
                position: 'bottom',
                formatter: '地区: {b}<br/>确诊:{c}',
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
                    color: ['#FFFFFF', '#ffc0b1', '#ff8c71', '#ef1717', '#9c0505'],
                },
                /* 不指定 min/max，表示 min/max 为无限大（Infinity
                表示 value 等于 123 的情况。*/
                pieces: [
                    { gt: 10000000, label: '>=1000万' },
                    { gt: 5000000, lte: 10000000, label: '500万-1000万' },
                    { min: 1000000, max: 5000000, label: '100万-500万' },
                    { min: 100000, max: 1000000, label: '1万-100万' },
                    { min: 10000, max: 100000, label: '1万-10万'},
                    { min: 5000, max: 10000},
                    { gt:0, lt: 5000},
                    { value: 0}
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
                    name: '国',
                    type: 'map',
                    nameMap: country,
                    map: 'world',
                    zoom: 1.2,
                    // 漫遊和縮放
                    roam: true,
                    // 标签
                    label: {
                        show: false,
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
                    data: data,
                },
            ],
        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
        // console.log(option);
    },
    province_chart(id, cityName, title, data) {
        // 基于准备好的dom，初始化echarts实例
        var main = document.getElementById(id)
        var myChart = echarts.init(main)
        // 指定图表的配置项和数据
        var option = {
            title: {
                text: title,
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
                // 点击触发提示框
                triggerOn: 'click',
                alwaysShowContent: true,
                // 进入提示框中，添加链接
                enterable: true,
                position: 'bottom',
                formatter(item) {
                    return '">地区: '+ item.name + '<br/>确诊:'+item.value
                },
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
                    color: ['#FFFFFF', '#ffc0b1', '#ff8c71', '#ef1717', '#9c0505'],
                },
                /* 不指定 min/max，表示 min/max 为无限大（Infinity
                表示 value 等于 123 的情况。*/
                pieces: [
                    { gt: 10000 },
                    { gt: 2500, lte: 5000 },
                    { min: 1000, max: 2500 },
                    { min: 500, max: 1000 },
                    { min: 100, max: 500 },
                    { min: 10, max: 100 },
                    { lt: 10 },
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
                    map: cityName,
                    zoom: 1.5,
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
                    data: data,
                },
            ],
        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
        console.log(option);
    },
}
export default chart 
