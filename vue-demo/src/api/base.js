import axios from 'axios'
axios.defaults.baseURL = '/interface.sina.cn'

const base = {
    host: 'http://api.tianapi.com/',
    covInfo: 'ncov/index?key=61abdb275a0249299eeb6392a8f53e07',
    provinceData: '/news/wap/fymap2020_data.d.json'
}

const headers = {
    // 'Content-Type':'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Credentials': 'true',
}
const api = {
    getCovInfo(){
        return axios.get(base.host+base.covInfo)
    },
    getData() {
        return axios({
            url: base.provinceData,
            method: 'get',
            headers: headers
        })
    }
}

export default api