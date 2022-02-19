<template>
    <div class="CovInfo">
        <div class="title">病毒信息</div>
        <p>{{ covDesc.note1 }}</p>
        <p>{{ covDesc.note2 }}</p>
        <p>{{ covDesc.note3 }}</p>
        <p>{{ covDesc.remark1 }}</p>
        <p>{{ covDesc.remark2 }}</p>
        <p>{{ covDesc.remark3 }}</p>
    </div>
</template>

<script>
import api from '../../api/base.js'
// import bus from '../../eventBus.js'

export default {
    props: {
        // covDesc: {
        //     type: Object,
        //     default: {}
        // }
    },
    data() {
        return {
            covDesc: {},
            cov: {}
        }
    },
    components: {},
    created() {
        // bus.$on('share', val =>{
        //     this.cov = val;
        //     // console.log(val);
        //     console.log(this.cov);
        // })
        api.getCovInfo().then((res) => {
            const { data: response } = res
            console.log(response)
            let data = response.newslist[0]
            this.covDesc = {
                note1: data.desc.note1,
                note2: data.desc.note2,
                note3: data.desc.note3,
                remark1: data.desc.remark1,
                remark2: data.desc.remark2,
                remark3: data.desc.remark3,
            }
        })
    },
    mounted() {
        // console.log('mo',this.cov);
    }
}
</script>

<style lang="less" scoped>
.CovInfo {
    padding: 0.2rem;
    text-align: left;
    margin-bottom: 0.2rem;
    .title {
        border-left: 0.1rem solid rgb(25, 129, 136);
        padding-left: 0.1rem;
    }
    p {
        font-size: 0.8rem;
        line-height: 1rem;
        color: gray;
    }
}
</style>
