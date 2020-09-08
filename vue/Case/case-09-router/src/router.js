import Vue from 'vue';

import VueRouter from 'vue-router';

import Home from './views/Home';

Vue.use(VueRouter);

const routes = [

    {                                               // 重定向根目录
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/learn',
        component: () => import('./views/Learn'),
    },
    {
        path: '/about',
        component: () => import('./views/About'),
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
         *
         *
         *
         *
         */

        path: '/course/:id',
        component: () => import('/views/About')
    }
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
];

export default new VueRouter({

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

});