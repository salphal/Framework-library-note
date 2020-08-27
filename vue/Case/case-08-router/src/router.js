import Vue from 'vue';

import VueRouter from 'vue-router';

import Home from './views/Home';

Vue.use(VueRouter);

const routes = [

    {
        path: '/',
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
        path: '/activity',
        component: () => import('./views/Activity'),
    },
    {
        path: '/student',
        component: () => import('./views/Student'),
    },
];

export default new VueRouter({

    routes,

    // linkActiveClass: 'link-active',
    // linkExactActiveClass: 'link-exact-active',
    mode: 'history',

});