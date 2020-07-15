import Vue from "vue";


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * new Vue(options?: obj): fn;
 *
 *
 * 返回一个 vue 实例对象
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// vueModule - usage 1

// const vueModule1 = new Vue({
//
//     /**
//      * el: element | selector;
//      *
//      *
//      * 用于设置 vue-module 控制的区域
//      */
//
//     el: '#vue-module',
//
//     /**
//      * data: obj;
//      *
//      *
//      * 用于存放需要用的数据( 响应式数据 )
//      */
//
//     data: {
//         msg: 'hello world'
//     }
//
// });


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// vueModule - usage 2

// const vueModule2 = new Vue();
//
// /**
//  * $mount               // 与第一种配置方法作用相同
//  *
//  *
//  * 在项目中有时要进行延迟挂载使用
//  */
//
// vueModule2.$mount(#vue-module);


//-------------------------------------------------------------------------------------------------------------------//


/**
 * {{ content: variable | express }}                    // 插值表达式
 *
 *
 * variable: 除了在data 中声明的变量( 无法使用在 data 中 未声明的变量 )
 *           还可以直接填入 number, string, boolean, object, undefined, null
 *
 * express: 运算表达式
 *          逻辑表达式
 *          三元表达式
 *          函数表达式
 */


// <!-- variable: number, string, boolean, object, undefined, null -->
//
// {{ msg }}                                   <!-- variable -->
//
// {{ 'number: ' + 5201314 }}                  <!-- number -->
// {{ 'string' }}                              <!-- string -->
// {{ true }}                                  <!-- boolean -->
// {{ ['a','b','c'] }}                         <!-- array -->
// {{ {name:'alpha',age:18} }}                 <!-- object -->


// <!-- basic express -->
//
// {{ 1 + 1 }}
// {{ !0 }}
// {{ 1 + 1 === 2 ? 'do it' : 'just' }}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








