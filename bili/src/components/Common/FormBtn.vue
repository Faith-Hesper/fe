<template>
    <div>
        <form class="form-horizontal">
            <div class="form-group">
                <!-- 标签与input绑定 -->
                <label :for="id" class="  col-lg-1 col-sm-2">{{ id }}号: </label>
                <input
                    v-model.trim="bv"
                    type="text"
                    class=" col-lg-2  col-sm-6 "
                    :id="id"
                    :placeholder="placeholder"
                />
            </div>
            <button @click="submit_bvid" type="button" class="btn btn-primary col-lg-1 col-lg-offset-1 col-sm-4">
                {{ btnText }}
            </button>
        </form>
        <slot name="url"></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bv: ''
        }
    },
    props: {
        id: '',
        placeholder: '',
        btnText: ''
    },
    methods: {
        // 将获取的bvid / mid发送到父组件,并调用click事件
        submit_bvid() {
            if(!this.bv){
                return 
            }
            this.$emit('btn_bvid',this.bv)
        }
    },
}
</script>

<style>

</style>