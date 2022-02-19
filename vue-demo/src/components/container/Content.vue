<template>
    <div class="app-content">
        <span>{{ title }}</span>
        <p>{{ content }}</p>
        <img :src="pic" alt="" srcset="">
    </div>
</template>

<script>
export default {
    props: {
        title: {
            default: '',
            type: String
        },
        content: {
            default: '',
            type: String
        },
        pic: {
            default: ''
        }
    },
    data() {
        return {
            
        }
    },
}
</script>

<style>
    .app-content {
        background-color: aqua;
    }
</style>