<template>
    <div class="statistics">
        <div class="title">截止北京时间 {{ covNumChange.modifytime | time }}</div>
        <van-row>
            <van-col span="8">
                <span>现存确诊</span>
                <div class="bold">{{ covNumChange.currentConfirmedCount }}</div>
                <span v-if="covNumChange.currentConfirmedIncr" class="addrecent">较昨日{{ covNumChange.currentConfirmedIncr | symbol }}</span>
            </van-col>
            <van-col span="8">
                <span>境外输入</span>
                <div class="bold">{{ covNumChange.suspectedCount }}</div>
                <span v-if="covNumChange.suspectedIncr" class="addrecent">较昨日{{ covNumChange.suspectedIncr | symbol }}</span>
            </van-col>
            <van-col span="8">
                <span>现存无症状</span>
                <div class="bold">{{ covNumChange.seriousCount }}</div>
                <span v-if="covNumChange.seriousIncr" class="addrecent">较昨日{{ covNumChange.seriousIncr | symbol }}</span>
            </van-col>
        </van-row>
        <van-row>
            <van-col span="8">
                <span>累积确诊</span>
                <div class="bold">{{ covNumChange.confirmedCount }}</div>
                <span v-if="covNumChange.confirmedIncr" class="addrecent">较昨日{{ covNumChange.confirmedIncr | symbol }}</span>
            </van-col>
            <van-col span="8">
                <span>累积死亡</span>
                <div class="bold">{{ covNumChange.deadCount }}</div>
                <span v-if="covNumChange.deadIncr" class="addrecent">较昨日{{ covNumChange.deadIncr | symbol }}</span>
            </van-col>
            <van-col span="8">
                <span>累积治愈</span>
                <div class="bold">{{ covNumChange.curedCount }}</div>
                <span v-if="covNumChange.curedIncr" class="addrecent">较昨日{{ covNumChange.curedIncr | symbol }}</span>
            </van-col>
        </van-row>
        <div v-if="!covNumChange.currentConfirmedIncr" style="color: #999; font-size: .6875rem;">昨日变化数据：待国家卫健委公布后更新</div>
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
            list_content: [],
        }
    },
    created() {
        this.list_content = [{
            name: '现存确诊',
            num: '',
            add: '较昨日'
        },
        {
            name: '境外输入',
            num: '',
            add: '较昨日'
        },
        {
            name: '现存无症状',
            num: '',
            add: '较昨日'
        },
        {
            name: '累积确诊',
            num: '',
            add: '较昨日'
        },
        {
            name: '累积死亡',
            num: '',
            add: '较昨日'
        },
        {
            name: '累积治愈',
            num: '',
            add: '较昨日'
        },
        ]
    },
    filters: {
        // 设置加号
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
.statistics {
    // margin-top: 1rem;
}
.title{
    font-size: 1rem;
    color: #666;
    text-align: left;
}
li{
    border: none;
}
.addrecent {
    font-size: 1rem;
    color: #999;
}
</style>