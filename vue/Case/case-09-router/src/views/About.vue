<template>


    <div class="about">

        关于

    </div>


</template>

<script>
export default {
    name: "About",
    mounted() {

        console.log(this.$route.params);            // 活动动态路由的 动态路径参数
    }
}
</script>

<style scoped>

</style>