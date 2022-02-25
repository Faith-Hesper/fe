import axios from 'axios'
// `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
// 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
// axios.defaults.baseURL = '/interface'

const base = {
    host: 'https://api.tianapi.com/',
    covInfo: 'ncov/index?key=61abdb275a0249299eeb6392a8f53e07',
    dxy: '/ncov',
    dxyData: '/ncovh5/view/pneumonia',
    provinceData: '/news/wap/fymap2020_data.d.json',
    juhe: '/juhe/springTravel',
    juhekey: '?key=b41e206fa99981c23b6c876ea97f7553'
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
            url: '/interface/'+base.provinceData,
            method: 'get',
            headers: headers,
            responseType: 'json'
        })
    },
    getDxy() {
        return axios.get(base.dxy + base.dxyData, {
            responseType: 'document'
        })
    },
    favourCity() {
        return axios.get(base.juhe+'/citys'+base.juhekey)
    }
}

export default api