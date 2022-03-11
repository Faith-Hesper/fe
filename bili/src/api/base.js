import axios from 'axios'
axios.defaults.withCredentials = true

// bvid->aid->cid
async function bili_download(bvid) {
    const aid = await axios.get(`/bili/x/web-interface/archive/stat?bvid=${bvid}`).then(res => {
        const { data: { data: { aid } } } = res
        return aid
    }).catch(err => console.log(err))
    
    const cid = await axios.get(`/bili/x/web-interface/view?aid=${aid}`).then(res => {
        const { data: { data: { cid } } } = res
        return cid
    }).catch(err => console.log(err))
    
    const durl = await axios.get(`/bili/x/player/playurl?avid=${aid}&cid=${cid}&qn=112`).then(res => {
        const { data: { data: { durl } } } = res
        return durl
    }).catch(err => console.log(err))
    
    return durl
}

async function gaode(pageNum) { 
    const data = await axios.get(`/gaode/v3/place/text?key=5833fc2ab01735a6c6fd3a72d1b43459&keywords=应急&city=唐山市&page=${pageNum}`)
    return data
}

const api = {
    up_personal_inform(mid) {
        return axios.get(`/bili/x/space/acc/info?mid=${mid}&jsonp=jsonp`)
    },
    up_fan_num(mid) {
        return axios.get(`/bili/x/relation/stat?vmid=${mid}&jsonp=jsonp`)
    },
    up_video_num(mid) {
        return axios.get(`/bili/x/relation/upstat?mid=${mid}&jsonp=jsonp`)
    },
    getvideoList(mid,ps='30',pn='1') {
        return axios.get(`/bili/x/space/arc/search?mid=${mid}&ps=${ps}&tid=0&pn=${pn}&keyword=&order=pubdate&jsonp=jsonp`)
    },
}
export { bili_download,gaode }
export default api