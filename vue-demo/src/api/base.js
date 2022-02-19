import axios from 'axios'

const base = {
    host: 'http://api.tianapi.com/',
    covInfo: 'ncov/index?key=61abdb275a0249299eeb6392a8f53e07'
}
const api = {
    getCovInfo(){
        return axios.get(base.host+base.covInfo)
    }
}

export default api