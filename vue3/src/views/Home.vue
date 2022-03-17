<template>
  <div class="home">
    <!-- <van-area title="标题" :area-list="areaList" :columns-num="3" /> -->
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <el-row :gutter="10">
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
      ><div class="grid-content bg-purple"
    /></el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
      ><div class="grid-content bg-purple-light"
    /></el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
      ><div class="grid-content bg-purple"
    /></el-col>
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
      ><div class="grid-content bg-purple-light"
    /></el-col>
  </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import { areaList } from '@vant/area-data'


export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup(props) {

    return { 
    }
  }
}
</script>
<style>
.home{
  height: 500px;
  width: 500px;
}


.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

</style>