<template>


    <div class="student">

        学员展示

    </div>


</template>

<script>
export default {
    name: "Student",
    data() {

        return {

            name: 'student'
        }
    },
    beforeRouteEnter(to, from, next) {

        // console.log(this);              // undefined: 无法访问 this


        // next(vm => {                        // 利用 回掉函数，可调用 this
        //                                     // 在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数
        //
        //     console.log('vm === this', vm);
        //     console.log('component.name: ', vm.name);
        // });


        next();

    },
    beforeRouteUpdate(to, from, next) {


        console.log('before-route-update');

        next();

    },
    beforeRouteLeave(to, from, next) {


        next();

    },
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/** 组件内守卫: 在组件内执行的钩子函数，类似于组件内的生命周期，相当于为配置路由的组件添加的生命周期钩子函数 **/


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * beforeRouteEnter((to, from, next) => {           // 路由进入之前调用
 *
 *     // ...
 *     // axios(): required-data;                   // 因无法访问 this，则可以请求数据
 *
 *
 *     next(vm => {
 *
 *         vm.data = required-data;                 // 通过回掉访问 this，再存储数据
 *     })
 *
 * });
 *
 *
 * * 在该守卫内访问不到组件的实例，this值为undefined
 *
 * * 可以通过给 next(vm => {}); 传一个回调给 访问组件实例
 * * 在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数
 *
 * * 当成功获取并能进入路由时，调用next并在回调中通过 vm访问组件实例进行赋值等操作，
 * * ( next中函数的调用在mounted之后: 为了确保能对组件实例的完整访问 )
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * beforeRouteUpdate((to, from, next) => {          // 在当前路由改变时
 *                                                  // 并且该组件被复用时调用
 *                                                  // 可以通过 this 访问实例
 *     // ...
 *
 * });
 *
 *
 * *  组件何时会被服用: 1) 动态路由间互相跳转
 * *                  2) 路由query变更
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * beforeRouteLeave((to, from, next) => {           // 导航离开该组件的对应路由时调用
 *                                                  // 可以访问组件实例this
 *
 *     // ...
 *
 * });
 *
 *
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 完整的导航解析流程
 *
 *
 * 01) 导航被触发
 *
 * 02) 在失活的组件里调用离开守卫
 *
 * 03) 调用全局的 beforeEach 守卫
 *
 * 04) 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)
 *
 * 05) 在路由配置里调用 beforeEnter
 *
 * 06) 解析异步路由组件
 *
 * 07) 在被激活的组件里调用 beforeRouteEnter
 *
 * 08) 调用全局的 beforeResolve 守卫 (2.5+)
 *
 * 09) 导航被确认
 *
 * 10) 调用全局的 afterEach 钩子
 *
 * 11) 触发 DOM 更新
 *
 * 12) 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

</script>

<style scoped>

</style>