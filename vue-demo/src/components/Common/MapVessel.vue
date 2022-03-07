<template>
    <div>
        <van-tabs v-model="active" type="card" color="#00bec7" sticky animated swipeable @change="onClickTab">
            <van-tab title="境外输入省级Top10">
                <div id="jwsrTop" style="width: 100%; height: 25rem"></div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    props: {
        type: 'card',
        color: '#00bec7',
        title: '',
        id: '',
        style: 'width: 100%; height: 25rem'
    },
    data() {
        return {
            active: ''
        }
    },
    methods: {
        onClickTab(){
            this.$emit('clickedTab',this.active)
        }
    },
}
</script>

<style>

</style>