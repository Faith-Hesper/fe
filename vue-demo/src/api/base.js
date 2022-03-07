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

// 丁香园
async function dxyData() {
    const riskArea = await axios.get(base.dxy + base.dxyData, {
        // 设置返回类型为HTML
        responseType: 'document'
    }).then(res => {
        let { data: dom } = res
        // 解析丁香园dom得到数据
        let riskArea = JSON.parse(dom.getElementById('fetchRecentStatV2').text.split('=')[1].slice(0, -11))
        // 添加id
        riskArea = riskArea.map((item, index) => {
            item.id = index
            return item
        })
        return riskArea
    }).catch(err=>console.log(err))
    return riskArea
}

// 病毒新增等信息
async function getCovInfo() {
    const covInfo = await axios.get(base.host + base.covInfo).then(res => {
        const { data: response } = res
        // console.log(response)
        let data = response.newslist[0]
        // 确诊信息
        let covNumChange = {
            modifytime: data.desc.modifyTime,
            currentConfirmedIncr: data.desc.currentConfirmedIncr,
            currentConfirmedCount: data.desc.currentConfirmedCount,
            suspectedIncr: data.desc.suspectedIncr,
            suspectedCount: data.desc.suspectedCount,
            seriousIncr: data.desc.seriousIncr,
            seriousCount: data.desc.seriousCount,
            confirmedIncr: data.desc.confirmedIncr,
            confirmedCount: data.desc.confirmedCount,
            deadIncr: data.desc.deadIncr,
            deadCount: data.desc.deadCount,
            curedIncr: data.desc.curedIncr,
            curedCount: data.desc.curedCount,
        }
        // 疫情热点
        let covDesc = {
            note1: data.desc.note1,
            note2: data.desc.note2,
            note3: data.desc.note3,
            remark1: data.desc.remark1,
            remark2: data.desc.remark2,
            remark3: data.desc.remark3,
        }
        let news= []
        data.news.forEach((key) => {
            news.push(key)
        })
        let covInfo = {
            covNumChange,
            covDesc,
            news
        }
        return covInfo
    }).catch(err => console.log(err))
    return covInfo
}

const api = {

    getData() {
        return axios({
            url: '/interface/'+base.provinceData,
            method: 'get',
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

}

export { dxyData, getCovInfo }
export default api