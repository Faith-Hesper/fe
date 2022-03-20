<template>
  <!-- <el-header> -->
  <div class="search">
    <span class="example-demonstration">搜索</span>
    <el-cascader
      v-model="searchText"
      placeholder="搜索"
      :options="areaList"
      :show-all-levels="false"
      :clearable="true"
      :props="prop"
      filterable
      @change="text"
    />
  </div>
  Header

  <!-- </el-header> -->
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue'
// import { dataPro } from '../../utils/typeTransform'
import { areaList } from '../../utils/areaList'
import mapInite, { map, myIcon } from '../../utils/map'
import getCoordsPoint from '../../utils/getCoordsPoint'

const searchText = ref('110000')
let pointsLocation = []
let earthQuakePoint = reactive({})
const prop = reactive({
  // expandTrigger: 'hover',
  checkStrictly: true,
  emitPath: false,
})
// const options = areaList
const text = async (value)=>{
  let markers = []
  if (pointsLocation.length!=0) {
    map.removeLayer(earthQuakePoint.value)
    earthQuakePoint.value = null
  }
  // 地区点位
  // L.marker.remove()
  let points = await getCoordsPoint(1, value)
  await new Promise((resolve, reject) => {
    map.flyTo(points[0].location,10)
    points.forEach((item) => {
      pointsLocation.push(item.location)
      let marker = L.marker(item.location, { icon: myIcon })
        marker.on('mousemove', (e) => {
          e.target.bindPopup(`<p>地区: ${item.adname}</p><p>类型: ${item.name}</p>`).openPopup()
        })
        marker.on('mouseout', (e) => {
          e.target.closePopup()
        })
        markers.push(marker)
    })
    earthQuakePoint.value = L.layerGroup(markers).addTo(map)
  })
}

onMounted(() => {
  // dataPro()
})
</script>

<script>
export default {
  name: 'Header',
  
}
</script>

<style scoped>
.search {
  position: absolute;
  text-align: left;
  padding-left: 10px;
  left: 0%;
}
.el-header {
  height: 50px;
  position: relative;
  padding: 0;
  background-color: #b3c0d1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
