<template>


    <div class="about">

        关于


        <div id="scroll-behavior">scrollBehavior</div>

    </div>


</template>

<script>

export default {
    name: "About",
    mounted() {

        // console.log(' 动态路由的 动态路径参数', this.$route.params);            // 动态路由的 动态路径参数

        /**
         * 获取路由元信息
         *
         *
         */

        console.log(this.$route.meta);
    }
}

</script>

<style scoped>


#scroll-behavior {
    margin-top: 1500px;
}

</style>