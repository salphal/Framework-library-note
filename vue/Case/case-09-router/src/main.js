import Vue from 'vue'
import App from './App.vue'

import router from './router';
import './assets/reset.css';


/**
 * 将 axios 挂载在 Vue 原型上，以方便每个组件都可用
 *
 *
 * 否则需要在每个组件单独引用 import axios 才可使用
 */

import axios from './http';
Vue.prototype.$axios = axios;           // 将 axios 挂载到 Vue 原型上


Vue.config.productionTip = false;


new Vue({

    render: h => h(App),
    router,

}).$mount('#app');