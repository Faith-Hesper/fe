<template>
    <div>
        <div id="province" style="width: 100%; height: 30rem"></div>
    </div>
</template>

<script>
import echarts from '../../echarts/echarts.js'

export default {
    props: {
        cityName: ''
    },
    data() {
        return {
            
        }
    },
    mounted() {
        this.$nextTick(()=>{
                echarts.province_chart('province',this.cityName,'this.times','this.world_confirmed')
            })
    },
    methods: {
        
    },
}
</script>

<style>

</style>