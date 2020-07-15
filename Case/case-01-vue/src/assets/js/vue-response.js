import Vue from "vue";


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * vue-response
 *
 * vue 2.0: Object.defineProperty           // 数据劫持
 * vue 3.0: proxy
 *
 * 创建 new Vue 时，vue 会把 options.data 中的属性赋予到 当前捆绑的元素上
 *
 * 当数据改变，页面会重新渲染
 */

// const vue = new Vue({
//     el: 'demo1',
//     data: {
//         name: "demo1",
//         age: 18
//     }
// });
//
// vue.name


//- -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - -//


/**
 * $publicProp & _privateProp
 *
 *
 * $publicProp: 提供给开发者使用的属性或方法
 * _privateProp: vue 私有的属性和方法
 *
 *
 * 为了更好的解决属性名冲突
 */

// console.log(Vue);

// Vue
// $attrs: (...)
// $children: []
// $createElement: ƒ (a, b, c, d)
// $el: div#vue-render
// $listeners: (...)
// $options: {components: {…}, directives: {…}, filters: {…}, el: "#vue-render", _base: ƒ, …}
// $parent: undefined
// $refs: {}
// $root: Vue {_uid: 1, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: Vue, …}
// $scopedSlots: {}
// $slots: {}
// $vnode: undefined
// alpha: (...)
// msg: (...)
// _c: ƒ (a, b, c, d)
// _data: {__ob__: Observer}
// _directInactive: false
// _events: {}
// _hasHookEvent: false
// _inactive: null
// _isBeingDestroyed: false
// _isDestroyed: false
// _isMounted: true
// _isVue: true
// _renderProxy: Proxy {_uid: 1, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: Vue, …}
// _self: Vue {_uid: 1, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: Vue, …}
// _staticTrees: null
// _uid: 1
// _vnode: VNode {tag: "div", data: {…}, children: Array(1), text: undefined, elm: div#vue-render, …}
// _watcher: Watcher {vm: Vue, deep: false, user: false, lazy: false, sync: false, …}
// _watchers: [Watcher]
// $data: (...)
// $isServer: (...)
// $props: (...)
// $ssrContext: (...)
// get $attrs: ƒ reactiveGetter()
// set $attrs: ƒ reactiveSetter(newVal)
// get $listeners: ƒ reactiveGetter()
// set $listeners: ƒ reactiveSetter(newVal)
// get alpha: ƒ proxyGetter()
// set alpha: ƒ proxySetter(val)
// get msg: ƒ proxyGetter()
// set msg: ƒ proxySetter(val)
// __proto__: Object


//- -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - -//


/**
 * 下列情况无法重新渲染数据
 *
 *
 *
 * 1) 未经声明的: 未在 js 中声明的属性，无法通过 数据劫持 所监听
 *
 * 2) 未经使用的: 渲染DOM( 为了降低消耗性能，在 js 中未使用的 DOM 不做监听 )
 *
 */


/**
 *
 * 3) 数组: 通过索引更改数组的子项
 *         更改数组的长度
 *
 *         resolve: push(), pop(), shift(), unshift(), splice(), sort(), reverse()
 *
 *
 * vue.$set(tar: dom, key: str, val: str);
 * Vue.set(tar, key, val);
 *
 * vue.$delete(tar: dom, key: str, val: str);
 * Vue.delete(tar, key, val);
 */


/**
 * 4) 对象: 增加对象的子项
 *         删除对象的子项
 *
 *
 * vue.$set(tar: dom, key: str, val: str);
 * Vue.set(tar, key, val);
 *
 * vue.$delete(tar: dom, key: str, val: str);
 * Vue.delete(tar, key, val);
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * const vue = new Vue(options);
 *
 *
 * vue.prop === options.data.prop;          // options.data 的属性会被赋予到 实例对象上
 *
 *
 */

const vueResponse = new Vue({

    el: '#vue-response',

    data: {

        msg: 'just do it',
        alpha: {
            name: '阿尔法',
            age: 18,
            height: '183cm',
            wife: ['a', 'b', 'c']
        }
    }
});


// console.log(vueResponse);
// console.log(vueResponse.alpha.name);


//- -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - -//


/**
 * 更改数据后，页面是否会立即重新渲染
 *
 *
 * 渲染页面是异步的
 */


// 同步执行栈 <--- ( 异步队列 <--- 微任务 <--- 宏任务 )


// 同步测试，是否页面会立即渲染

vueResponse.msg = 'one';
console.log(vueResponse.msg, vueResponse.$el.innerText);            // one just do it

vueResponse.msg = 'two';
console.log(vueResponse.msg, vueResponse.$el.innerText);            // two just do it

vueResponse.msg = 'three';
console.log(vueResponse.msg, vueResponse.$el.innerText);            // three just do it


// 异步渲染( 微任务优先于宏任务 )后，页面数据才改变

// setTimeout(() => { // 宏任务，但部分有浏览不支持 setTimeout
//
//     console.log(vueResponse.msg, vueResponse.$el.innerText);        // three three
//
// }, 0);

vueResponse.$nextTick().then((function () {

    console.log(this);                  // vue

    console.log(vueResponse.msg, vueResponse.$el.innerText);        // three three

}));

Vue.nextTick().then((function () {

    console.log(this);                  // window

    console.log(vueResponse.msg, vueResponse.$el.innerText);        // three three

}));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * vue.$el: dom;
 *
 *
 * 获取指定模块的 dom
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * vue.$nextTick(): promise;                        // this => vue = new Vue();
 *
 * Vue.nextTick(): promise;                         // this => window
 *
 *
 * vue: 等待主线程，异步任务会等待 同步执行栈 处理完所有任务后再执行
 * rect: 让出主线程，主线程有空就会执行异步任务
 *
 *
 * 异步渲染页面
 */


if (typeof Promise !== 'undefined') {                       // 微任务

    // Promise.resolve.then();

} else if (typeof MutationObserver !== 'undefined') {       // 微任务

    // MutationObserver( 突变观察，创建假节点制造微改动，查看是否有返回值 )

} else if (typeof setImmediate !== 'undefined') {           // 宏任务

    // IE

} else {                                                    // 宏任务

    // setTimeout
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










