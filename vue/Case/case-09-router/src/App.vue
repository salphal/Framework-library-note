<template>

    <div class="app">

        <div class="nav-box">

            <div class="logo" @click="handleClick">Vue-Router</div>

            <!--<router-link to="/home" tag="div" class="logo">Vue-Router</router-link>-->

            <div class="nav-list">

                <!-- 使用 router-link 组件来导航. -->
                <!-- 通过传入 `to` 属性指定链接. -->
                <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
                <router-link to="/home">首页</router-link>
                <router-link to="/learn">课程学习</router-link>
                <router-link to="/student">学员展示</router-link>
                <router-link to="/about">关于</router-link>
                <router-link to="/activity">社区</router-link>

            </div>
        </div>

        <div class="container">

            <!-- 路由出口 -->
            <!-- 路由匹配到的组件将渲染在这里 -->
            <router-view></router-view>
        </div>

    </div>

</template>


<script>


export default {

    name: 'app',
    components: {},
    methods: {

        handleClick() {

            console.log(this.$router);


            /**
             * $route
             *
             *
             * $route.path          // 字符串，对应当前路由的路径，总是解析为绝对路径
             *
             * $route.params        // 一个 key/value 对象，包含了动态片段和全匹配片段，如果没有路由参数，就是一个空对象
             *
             * $route.query         // 一个 key/value 对象，表示 URL 查询参数, 如果没有查询参数，则是个空对象
             *
             * $route.hash          // 路由的 hash 值 (带 #) ，如果没有 hash 值，则为空字符串
             *
             * $route.fullPath      // 完成解析后的 URL，包含查询参数和 hash 的完整路径
             *
             * $route.matched       // 一个数组，包含当前路由的所有嵌套路径片段的路由记录
             *
             * $route.name              // 当前路由的名称，如果有的话
             *
             * $route.redirectedFrom    // 如果存在重定向，即为重定向来源的路由的名字
             */

            /**
             * $router.push();
             *
             *
             * 向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL
             */

            // this.$router.push('/home');

            /**
             * $router.replace();
             *
             *
             * 会向 history 添加新记录，而是替换掉当前的 history 记录
             */

            // this.$router.replace('/home');

            /**
             * $router.go(num);
             *
             *
             * 在 history 记录中向前或者后退多少步
             */

            this.$router.go(-1);

            // // 在浏览器记录中前进一步，等同于 history.forward()
            // this.$router.go(1);

            // // 后退一步记录，等同于 history.back()
            // this.$router.go(-1);

            // // 前进 3 步记录
            // this.$router.go(3);

            // // 如果 history 记录不够用，那就默默地失败呗
            // this.$router.go(-100);
            // this.$router.go(100);
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 什么是路由
 *
 *
 * 路由是根据不同的url地址展现不同的内容或页面。
 * 早期的路由都是后端直接根据url来重载页面实现的，即后端控制路由。
 * 后来页面越来越复杂，服务器压力越来越大，
 * 随着ajax（异步刷新技术）的出现，页面的实现非重载就能刷新数据，让前端也可以控制url自行管理，前端路由由此而生
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 什么时候使用前端路由               // 单页面应用( single page web application )
 *
 *
 * 在单页面应用中，大部分页面结果不变，只改变部分内容的使用
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 安装 vue-router
 *
 *
 * npm install vue-router
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 引入路由
 *
 *
 * import VueRouter from 'vue-router';
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 使用路由
 *
 *
 * Vue.use(VueRouter);
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 定义路由组件               // 可以从其他文件 import 进来
 *
 *
 * const Foo = { template: '<div>foo</div>}
 * const Bar = { template: '<div>bar</div>}
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 定义路由                 // 每个路由应该映射一个组件
 *
 *
 * const routes = [
 *      { path: '/foo', component: Foo },
 *      { path: '/bar', component: Bar },
 * ];
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 创建 router 实例，并传入 routes 配置
 *
 *
 *
 * const router = new VueRouter({
 *
 *     routes
 * });
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 创建和挂载根实例
 *
 *
 * const app = new Vue({
 *
 *     router
 *
 * }).$mount('#app');
 */


//-------------------------------------------------------------------------------------------------------------------//


/** vue router class **/


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * .router-link-exact-active
 *
 *
 * 当前展示路径 "完全匹配" 组件 to 属性的值
 */

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * .router-link-active
 *
 *
 * 当前展示路径 "包含" 组件 to 属性的值
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * hash 模式
 *
 *
 * vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * history 模式
 *
 *
 * 如果不想要很丑的 hash，我们可以用路由的 history 模式，
 * 这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。 在路由配置中设置
 *
 * VueRouter({
 *   mode: 'history',
 * })
 */



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
</script>


<style scoped>

@import "./assets/reset.css";

.nav-box {
    display: flex;
    justify-content: space-between;
    height: 60px;
    line-height: 60px;
    background-color: #3385ff;
}

.nav-box,
.container {
    padding: 0 40px;
}

.nav-box .logo {
    color: #fff;
}

.nav-list a {
    margin-left: 40px;
    text-decoration: none;
    color: #fff;
}

.nav-list a.router-link-exact-active {
    font-weight: bold;
}

.container {
    margin-top: 60px;
}

</style>