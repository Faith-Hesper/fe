<template>
    <div class="statistics container-fluid">
        <div class="title">截止北京时间 {{ covNumChange.modifytime | time }}</div>
        <b-list-group horizontal class="list-unstyled">
            <li class="list-group-item flex-fill">
                <span>较昨日{{ covNumChange.currentConfirmedIncr | symbol }}</span>
                <div class="bold">{{ covNumChange.currentConfirmedCount }}</div>
                <span>现存确诊</span>
            </li>
            <li class="list-group-item flex-fill">
                <span>较昨日{{ covNumChange.suspectedIncr | symbol }}</span>
                <div class="bold">{{ covNumChange.suspectedCount }}</div>
                <span>境外输入</span>
            </li>
            <li class="list-group-item flex-fill">
                <span>较昨日{{ covNumChange.seriousIncr | symbol }}</span>
                <div class="bold">{{ covNumChange.seriousCount }}</div>
                <span>现存无症状</span>
            </li>
        </b-list-group>
        <b-list-group horizontal class="list-unstyled">
            <li class="list-group-item flex-fill">
                <span>较昨日{{ covNumChange.confirmedIncr | symbol }}</span>
                <div class="bold">{{ covNumChange.confirmedCount }}</div>
                <span>累积确诊</span>
            </li>
            <li class="list-group-item flex-fill">
                <span>较昨日{{ covNumChange.deadIncr | symbol }}</span>
                <div class="bold">{{ covNumChange.deadCount }}</div>
                <span>累积死亡</span>
            </li>
            <li class="list-group-item flex-fill">
                <span>较昨日{{ covNumChange.curedIncr | symbol }}</span>
                <div class="bold">{{ covNumChange.curedCount }}</div>
                <span>累积治愈</span>
            </li>
        </b-list-group>
    </div>
</template>

<script>
export default {
    name: 'CovCount',
    props: {
        covNumChange: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            
        }
    },
    filters: {
        symbol: function (val) {
            val = val>0?'+'+val:val;
            return val;
        },
        time: function (num) {
            var data = new Date(num);
            return data.toLocaleString();
        }
    }
}
</script>

<style lang="less" scoped>
.title{
    font-size: 0.8rem;
    color: #666;
    text-align: left;
}
li{
    border: none;
}
</style>