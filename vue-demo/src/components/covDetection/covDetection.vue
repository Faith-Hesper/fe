<template>
    <div>
        <van-tree-select :active-id.sync="activeId" :main-active-index.sync="activeIndex" :items="province ">

        </van-tree-select>
    </div>
</template>

<script>
import api from '../../api/base.js'
export default {
    data() {
        return {
            activeId: 1,
            activeIndex: 0,
            province: []
        }
    },
    created() {
        api.favourCity().then(res=>{
            const {data:{result}} = res
            result.forEach(item => {
                let citys = []
                item.citys.forEach((params,index)=>{
                    let city = {text: params.city,id:index+1}
                    citys.push(city)
                })
                this.province.push({text:item.province, children: citys})
            });
            console.log(this.province);
        })
    },
}
</script>

<style>

</style>