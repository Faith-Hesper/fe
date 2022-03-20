<template>
  <div id="map" style="position: relative; width: 100%; height: 100%"></div>
  <!-- </el-main> -->
</template>

<script setup></script>

<script>
import { onMounted, ref } from 'vue'
// import L from 'leaflet'
// import { tiledMapLayer } from '@supermap/iclient-leaflet'
import mapInite, { map, myIcon } from '../../utils/map'
// import getCoordsPoint from '../../utils/getCoordsPoint'

export default {
  name: 'Map',
  setup() {
    const fill = ref(true)
    let loaction = []

    const getGeoData = () => {
      let k = 0
      for (let i = 0; i <= 5; i++) {}
    }
    const data = onMounted(() => {
      mapInite()
      // // 地区点位
      // getCoordsPoint(1).then((points) => {
      //   // console.log(points)
      //   points.forEach((item) => {
      //     L.marker(item.location, { icon: myIcon })
      //       .on('mousemove', (e) => {
      //         // console.log(e)
      //       })
      //       .bindPopup(`<p>地区: ${item.adname}</p><p>类型: ${item.name}</p>`)
      //       .addTo(map)
      //   })
      // })
    })
    return {
      data,
      // getGeoData,
      fill,
    }
  },
}
</script>

<style scoped>
.el-main {
  padding: 0;
  border-right: none;
}
</style>
