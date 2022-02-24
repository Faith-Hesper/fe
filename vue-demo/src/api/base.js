import axios from 'axios'
// `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
// 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
axios.defaults.baseURL = '/interface'

const base = {
    host: 'https://api.tianapi.com/',
    covInfo: 'ncov/index?key=61abdb275a0249299eeb6392a8f53e07',
    prohost: 'https://interface.sina.cn/',
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
            headers: headers,
            responseType: 'json'
        })
    }
}

export default api