<template>
    <div>
        <van-tree-select :active-id.sync="activeId" :main-active-index.sync="activeIndex" :items="province "></van-tree-select>
        <button type="button" class="btn btn-primary" @click="areaSubmit">提交</button>
        <div>
        <div>核酸检测机构</div>
            <table class="table table-striped table-hover" align="left">
                <!-- 表头 -->
                <thead>
                <tr>
                    <td>名字</td>
                    <td>地点</td>
                    <td>电话</td>
                </tr>
                </thead>
                <!--  -->
                <tbody>
                <tr v-for="item in detectArea" :key="item.phone">
                    <td>{{ item.name }}</td>
                    <td>{{ item.address }}</td>
                    <td>{{ item.phone }}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import api from '../../api/base.js'
export default {
    data() {
        return {
            // 右侧
            activeId: 1,
            activeIndex: 0,
            province: [],
            detectArea: [],
        }
    },
    created() {
        // 获取接口支持城市
        api.favourCity().then(res=>{
            const {data:{result}} = res
            let index = 1
            // 构建items数据结构 [{text: '',children: [{text: '',id:''}]}]
            result.forEach(item => {
                let citys = []
                // let city_id
                item.citys.forEach((params)=>{
                    citys.push({text: params.city,id:index})
                    index++
                })
                this.province.push({text:item.province, children: citys})
            });
            console.log(this.province);
        })
    },
    methods: {
        // 获取city_id并发送请求渲染核酸检测机构列表
        areaSubmit() {
            console.log(this.activeId);
            let cityid = this.activeId + 10000
            api.detectArea(cityid).then(res=>{
            const {data:{result}} = res
            this.detectArea = result.data
            console.log(this.detectArea);
        })
        }
    },
}
</script>

<style>

</style>