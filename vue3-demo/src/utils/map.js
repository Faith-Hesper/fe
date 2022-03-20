import L from 'leaflet'
import { tiledMapLayer } from '@supermap/iclient-leaflet'
let map 
const url = 'https://iserver.supermap.io/iserver/services/map-china400/rest/maps/China'

const myIcon = L.icon({
  iconUrl: 'https://iclient.supermap.io/web/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconSize: [25, 35],
})

function mapInite() {
    map = L.map('map', {
    // crs: L.CRS.EPSG4326,
    center: [39, 118],
    maxZoom: 18,
    zoom: 8,
    })
  // console.log(map);
  tiledMapLayer(url).addTo(map)

  let control = L.control({ position: 'topright' })
      control.onAdd = function () {
        let popup = L.DomUtil.create('div')
        popup.style.width = '350px'
        popup.innerHTML = ''
        // handleMapEvent(popup, this._map)
        return popup
      }
  control.addTo(map)
}

export {
  map,
  myIcon
}
export default mapInite