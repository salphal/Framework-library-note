import Vue from 'vue';

import VueRouter from 'vue-router';

import Home from './views/Home';

import auth from './utils/auth';

Vue.use(VueRouter);

const routes = [

    {                                                   // 重定向根目录
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/learn',

        // component: () => import('./views/Learn'),    // 对应单个视口

        components: {                                   // 一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件

            /**
             * 命名视图
             *
             *
             * 同时展示多个视图时，并且每个视图展示不同的组件
             *
             * * 可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口
             * * 如果 router-view 没有设置名字，那么默认为 default
             */

            default: () => import('./views/Learn'),
            student: () => import('./views/Student'),
        }
    },
    {
        path: '/about',
        component: () => import('./views/About'),

        /**
         * 路由独享守卫
         *
         *
         * 在单个路由配置的时候也可以设置的钩子函数
         */

        beforeEnter(to, from, next) {

            next();
        },

        /**
         * 设置路由元信息
         *
         *
         *
         */

        meta: {                             // 路由元信息

            a: 1,
            b: 2,
            c: 3,

            requiresLogin: true,            // 验证是否要登陆
        }
    },
    {
        path: '/student',
        component: () => import('./views/Student'),
    },
    {
        /**
         * 重定向
         *
         *
         * 可以重定向为: 路径, 命名路由, 方法
         *
         * “重定向”的意思是，当用户访问 /a时，URL 将会被替换成 /b，然后匹配路由为 /b
         */

        /**
         * 别名
         *
         *
         * /a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样
         */

        path: '/activity',

        /**
         * 设置路由元信息
         *
         *
         *
         */

        meta: {

            requiresLogin: true,
            backAsk: true,
        },


        component: () => import(/*webpackChunkName: 'academic'*/'./views/Activity'),

        redirect: '/activity/academic',                     // 重定向
        alias: '/',                                         // 别名

        // redirect(to) {           // to:
        //
        //     // 方法接收 目标路由 作为参数
        //     // return 重定向的 字符串路径/路径对象
        //
        //     console.log(to);
        //
        //     return {
        //
        //         name:  'academic'
        //     }
        // },

        /**
         * 命名路由                 // 解决 <router-link> 标签中 路径过长的问题
         *
         *
         * routes = [
         *  {
         *   path: '/activity/personal',
         *   name: 'personal',
         *   component: Personal,
         * }
         * ];
         *
         *
         * <router-link :to="{ name: 'personal' }">个人中心</router-link>
         *
         */

        /**
         * 嵌套路由                 // 解决路由嵌套时，造成的问题
         *
         *
         * router-view 渲染的组件想要包含自己的嵌套 router-view 时，可以使用嵌套路由
         *
         *
         * {                                            // father-view
         *     path: '/student',
         *     component: () => import('./views/Student'),
         *     children: [
         *
         *          {
         *            path: '/activity/academic',       // son-view
         *            name: 'academic',
         *            component: () => import('./views/Academic'),
         *          },
         *     ]
         * },
         */

        children: [

            {
                path: 'academic',
                name: 'academic',
                component: () => import(/*webpackChunkName: 'academic'*/'./views/Academic'),
            },
            {
                path: 'download',
                name: 'download',
                component: () => import('./views/Download'),
            },
            {
                path: 'personal',
                name: 'personal',
                component: () => import('./views/Personal'),
            },
        ]
    },
    {
        /**
         * :id
         *
         *
         * 对于所有 ID 各不相同的用户，都使用这个组件来渲染
         *
         * * 当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用
         */

        path: '/course/:id',            // 动态路径参数 以冒号开头
        component: () => import('./views/About')
    },
    // {
    //     path: '/course',
    //     children: [                  // 代码冗余
    //         {
    //             path: '331578',
    //             component: () => import('/views/About')
    //         },
    //         {
    //             path: '231578',
    //             component: () => import('/views/About')
    //         }
    //     ]
    // }
    {
        path: '/question/:id',
        name: 'question',

        /**
         * 路由组件传参
         *
         *
         * 组件中使用 $route 会使之与其对应路由形成高度耦合( 当使用 this.$route.params 时，仅会获取当前组件的 参数信息 )
         * 从而使组件只能在某些特定的 URL 上使用，限制了其灵活性
         *
         *
         * * 1) 布尔模式: 路由设置中 props:true，则 route.params 将会被设置为组件属性
         *
         * * 2) 对象模式: 如果 props 是一个对象，它会被按原样设置为组件属性。当 props 是静态的时候有用     // 被写死，无法更改
         *
         * * 3) 函数模式:
         */

        props: true,                            // 布尔模式: route.params 将会被设置为组件属性

        // props: {                             // 对象模式: 数据按原样设置为组件属性
        //
        //     id: 90878976
        // }

        // props(route) {                       // 函数模式: 函数的第一个参数是 route （即$route）
        //
        //     return {
        //
        //         name: route.name,
        //         id: route.params.id
        //     }
        // },

        component: () => import('./views/Question')
    },
    {
        path: '/login',
        component: () => import('./views/Login'),
    }
];

const router = new VueRouter({

    routes,

    // linkActiveClass: 'link-active',
    // linkExactActiveClass: 'link-exact-active',

    /**
     *  mode: 'history'
     *
     *
     * 当使用 history 模式时，URL 就像正常的 url，例如 http://yoursite.com/user/id, 也好看
     *
     * 需要后台配置支持。因为我们的应用是个单页客户端应用，如果后台没有正确的配置，
     * 当用户在浏览器直接访问 http://oursite.com/user/id 就会返回 404，这就不好看了
     *
     * 在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，
     * 则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面
     */

    mode: 'history',

    /**
     * scrollBehavior (to, from, savedPosition) {
     *
     *       // return 期望滚动到哪个的位置
     *}
     *
     * @savedPosition:  当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用
     *
     *                  1) { x: number, y: number }
     *
     *                  2) { selector: string, offset? : { x: number, y: number }} (offset 只在 2.6.0+ 支持)
     */

    scrollBehavior(to, from, savedPosition) {

        // console.log(savedPosition);

        if (savedPosition) {

            return savedPosition;

        } else {

            if (to.hash) {

                return {

                    selector: to.hash,
                };

            } else {

                return {

                    x: 0,
                    y: 0,
                };
            }
        }
    }
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/** VueRouter 导航 & 守卫 **/


//
//                  + ------ +                  + ------ +
//                  |        |                  |        |      |
//                  |  from  |         |        |   to   |      |
//          |       |        |         |        |        |      |
//          |       + ------ +         |        + ------ +      |
//          |                          |                        |
// -------- + ------------------------ + ---------------------- + ------>
//          |                          |                        |
//      beforeEach               beforeResolve               afterEach
//


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 导航:          // 路由正在发生变化
 *
 * 守卫:          // 导航守卫主要用来通过跳转或取消的方式守卫导航
 *
 *
 * 导航 & 守卫:    // 全局的、单个路由独享的、组件内的
 */


//-------------------------------------------------------------------------------------------------------------------//


/** 全局守卫: 是指路由实例上直接操作的钩子函数，触发路由就会触发这些钩子函数 **/


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * beforeEach((to, from, next) => {             // 在路由跳转前触发，一般被用于登录验证
 *
 *     // ...
 *
 * });
 *
 *
 * @to:     目标路由对象
 * @from:   即将要离开的路由对象
 *
 * @next:   1) 必须调用next()，才能继续往下执行一个钩子，否则路由跳转会停止
 *
 *          2) 若要中断当前的导航，可以调用next(false)
 *
 *          3) 可以使用 next 跳转到一个不同的地址。终止当前导航，进入一个新的导航。
 *             next参数值 和 $routet.push 一致
 *
 *          4) next(error)。2.4+，如果传入的参数是一个Error实例，则导航会被终止，
 *             且该错误会被传递给router.onError() 注册过的回调
 *
 *
 * * next(); 必须执行
 */

router.beforeEach((to, from, next) => {

    // console.log('router-beforeEach');

    // console.log('to: ',to);
    // console.log('from: ',from);
    // console.log('next: ', next);


    // next(false);                        // 禁止路由跳转


    // if (to.path === '/student') {
    //
    //     next('/about');                 // 终止当前路由导航，跳转指定路由导航
    //
    // } else {
    //
    //     next();                         // 默认路由导航执行，若不执行则无法正常跳转
    // }


    // next(new Error('No jump !'));       // 抛出错误

    // next();


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    const isRequiresLogin = to.matched.some(item => item.meta.requiresLogin);

    if (isRequiresLogin) {

        // const isLogin = document.cookie.includes('login=true');
        const isLogin = auth.isLogin();

        if (isLogin) {

            next();

        } else {

            const isToLogin = window.confirm('登陆后才可浏览，点击跳转至登陆');

            isToLogin ? next('/login') : next();
        }

        next(false);

    } else {

        next();
    }

});


router.onError(err => {             // 获取错误信息

    console.log('err.message: ', err.message);
});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * beforeResolve((to, from, next) => {          // 路由跳转前触发
 *
 *     // ...
 *
 * });
 *
 *
 * @to:     目标路由对象
 * @from:   即将要离开的路由对象
 *
 * @next:   1) 必须调用next()，才能继续往下执行一个钩子，否则路由跳转会停止
 *
 *          2) 若要中断当前的导航，可以调用next(false)
 *
 *          3) 可以使用 next 跳转到一个不同的地址。终止当前导航，进入一个新的导航。
 *             next参数值 和 $routet.push 一致
 *
 *          4) next(error)。2.4+，如果传入的参数是一个Error实例，则导航会被终止，
 *             且该错误会被传递给router.onError() 注册过的回调
 *
 *
 * * next(); 必须执行
 */

router.beforeResolve((to, from, next) => {

    // console.log('router-beforeEach');

    next();
});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * afterEach((to, from) => {                // 路由跳转完成后触发
 *
 *     // ...
 *
 * });
 *
 *
 * @to:     目标路由对象
 * @from:   即将要离开的路由对象
 */

router.afterEach((to, from) => {

    // console.log('router-beforeEach');
});


//-------------------------------------------------------------------------------------------------------------------//


/** 路由独享守卫: 在单个路由配置的时候也可以设置的钩子函数 **/


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * beforeEnter((to, from, next) => {        // 和beforeEach完全相同，如果都设置则在beforeEach之后紧随执行
 *
 *     // ...
 *
 * });
 *
 *
 * @to:     目标路由对象
 * @from:   即将要离开的路由对象
 *
 * @next:   1) 必须调用next()，才能继续往下执行一个钩子，否则路由跳转会停止
 *
 *          2) 若要中断当前的导航，可以调用next(false)
 *
 *          3) 可以使用 next 跳转到一个不同的地址。终止当前导航，进入一个新的导航。
 *             next参数值 和 $routet.push 一致
 *
 *          4) next(error)。2.4+，如果传入的参数是一个Error实例，则导航会被终止，
 *             且该错误会被传递给router.onError() 注册过的回调
 *
 *
 * * next(); 必须执行
 */


//-------------------------------------------------------------------------------------------------------------------//

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


/** 完整的导航解析流程 **/


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
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


export default router;