import axios from 'axios'
axios.defaults.withCredentials = true
const api = {
    getvideoList(mid,ps=30,pn=1) {
        return axios.get(`/bili/x/space/arc/search?mid=${mid}&ps=${ps}&tid=0&pn=${pn}&keyword=&order=pubdate&jsonp=jsonp`)
    },
    get_aid(bvid) {
        return axios.get(`/bili/x/web-interface/archive/stat?bvid=${bvid}`)
    },
    get_cid(aid) {
        return axios.get(`/bili/x/web-interface/view?aid=${aid}`)
    },
    bili_downloadUrl(aid, cid) {
        return axios.get(`/bili/x/player/playurl?avid=${aid}&cid=${cid}&qn=112`)
    }
}

export default api