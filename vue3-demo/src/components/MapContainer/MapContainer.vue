<template>
    <div id="map" style="position: relative; width: 100%; height: 100%"></div>
  <!-- </el-main> -->
</template>

<script>
import { onMounted, ref } from 'vue'
import { gaode } from '../../api/base'
import L from 'leaflet'
import { tiledMapLayer } from '@supermap/iclient-leaflet'

export default {
  name: 'Map',
  setup(){
    const fill = ref(true)
    let loaction = []
    const url = 'https://iserver.supermap.io/iserver/services/map-china400/rest/maps/China'
    let map
    let myIcon = L.icon({
      iconUrl: 'https://iclient.supermap.io/web/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconSize: [25, 35],
    })
    const getGeoData = () => {
      let k = 0
      for (let i = 0; i <= 5; i++) {
        gaode(i).then((res) => {
          const {
            data: { pois },
          } = res
          console.log(res)
          pois.forEach((item) => {
            item.bd = k
            // this.list.push(item)
            let data = item.location.split(',')
            let a = L.latLng(parseFloat(data[1]), parseFloat(data[0]))
            L.marker(a, { icon: myIcon })
              .on('mousemove', (e) => {
                // console.log(e)
              })
              .bindPopup(item.name)
              .addTo(map)
            // .bindPopup(item.name).addTo(map)
            // loaction.push([parseFloat(data[1]),parseFloat(data[0])])
            k++
          })
          // console.log(pois)
        })
      }

      //     // let a =L.latLng(39.956845,118.664587)

      //     console.log(typeof(loaction))
    }
    const data = onMounted(() => {
      // console.log(loaction);
      map = L.map('map', {
        // crs: L.CRS.EPSG4326,
        center: [39, 118],
        maxZoom: 18,
        zoom: 8,
      })
      tiledMapLayer(url).addTo(map)
      getGeoData()
      //     // let a =L.latLng(39.956845,118.664587)
      //     //             L.marker(a).addTo(map)
      //     // 纬度 经度

      //     //             loaction.forEach(item=>{
      //     //   console.log(item);
      //     //         let k = L.latLng(item)
      //     // // console.log(k)
      //     // L.marker(k,{icon:myIcon}).addTo(map)
      //     // })

      let control = L.control({ position: 'topright' })
      control.onAdd = function () {
        let popup = L.DomUtil.create('div')
        popup.style.width = '350px'
        popup.innerHTML = ''
        // handleMapEvent(popup, this._map)
        return popup
      }
      control.addTo(map)
    })

    return {
      data,
      getGeoData,
      fill,
    }
  }
}
</script>

<style >
.el-main {
  padding: 0;
  border-right: none;
}
</style>