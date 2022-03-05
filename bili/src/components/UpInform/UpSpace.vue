<template>
    <div>

    </div>
</template>

<script>
import api from '../../api/base.js'

export default {
    props: {
        mid: ''
    },
    data() {
        return {
            
        }
    },
    methods: {
        get_personal_inform(){
            api.up_personal_inform(mid).then(res=>{
                const {data:{data:datas}} = res
            })
        }
    },
    created() {
        
    },
}
</script>

<style>

</style>