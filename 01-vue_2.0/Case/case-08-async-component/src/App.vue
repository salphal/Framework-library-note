<template>


    <div class="app">

        <button @click="show01 = true">click</button>

        <async-cmp01 v-if="show01"/>
        <async-cmp02 v-if="show01"/>

    </div>


</template>

<script>


// import AsyncCmp01 from "./components/AsyncCmp01";


/**
 * 异步组件
 *
 *
 * 当执行某些操作后，才将指定模块加载进来
 */


export default {

    name: 'app',
    components: {

        /**
         * webpackChunkName: "async"
         *
         *
         * 异步加载的文件，会在link标签上设置 el="prefech"。浏览器会在空闲时间内下载对应的资源，
         * 使用时可以直接从缓存中获取。与之对应的 el="preload"，会及时下载对应的资源
         */

        AsyncCmp01: ()=> import(/*webpackChunkName: "async"*/'./components/AsyncCmp01'),
        AsyncCmp02: ()=> import(/*webpackChunkName: "async"*/'./components/AsyncCmp02'),
    },
    data() {

        return {

            show01: false
        }
    }
}

</script>


<style>


</style>