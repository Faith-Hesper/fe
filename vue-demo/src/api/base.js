import axios from 'axios'
// `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
// 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
// axios.defaults.baseURL = '/interface'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

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
            // 设置返回类型为HTML
            responseType: 'document'
        })
    },
    favourCity() {
        return axios.get(base.juhe+'/citys'+base.juhekey)
    },
    detectArea(cityId) {
        return axios.get('/juhe/springTravel/hsjg'+base.juhekey+'&city_id='+cityId)
    },
    province_recent(json) {
        return axios.get(json)
    },
    // getvideoList(mid) {
    //     return axios.get(`/bili/x/space/arc/search?mid=${mid}&ps=30&tid=0&pn=1&keyword=&order=pubdate&jsonp=jsonp`)
    // },
    // get_aid(bvid) {
    //     return axios.get(`/bili/x/web-interface/archive/stat?bvid=${bvid}`)
    // },
    // get_cid(aid) {
    //     return axios.get(`/bili/x/web-interface/view?aid=${aid}`)
    // },
    // bili_downloadUrl(aid,cid) {
    //     return axios.get(`/bili/x/player/playurl?avid=${aid}&cid=${cid}&qn=112`)
    // }

}

export default api