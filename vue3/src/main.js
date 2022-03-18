import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'leaflet/dist/leaflet.css'
// import { Area } from 'vant';
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { Button } from 'element-ui'

// import './plugins/element.js'


const app = createApp(App)
// app.use(ElementPlus)
// app.use(Button)
app.component(Button.name,Button)
app.use(router)



// app.use(Area)

app.mount('#app')
