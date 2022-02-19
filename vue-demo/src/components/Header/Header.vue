<template>
    <div class="app-header">
    {{ title }}
    </div>
</template>

<script>
export default {
    props: {
        title: {
            default: '',
            type: String
        }
    },
    data() {
        return {
            // title: ""
        }
    },
}
</script>

<style>
    .app-header{
        margin: 0;
        padding: 0;
        background-color: rgb(0, 102, 255);
    }
</style>