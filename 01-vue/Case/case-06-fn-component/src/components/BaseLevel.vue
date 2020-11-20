<!--<template>-->


<!--</template>-->


<script>

export default {

    functional: true,                   // 开启函数式组件

    props: {

        level: {

            type: Number,
            required: true
        }
    },

    inject: ['name'],

    render(h, context) {

        const {props, slots, scopedSlots, data, parent, listeners, injections, children} = context;

        console.log("context: ", context);
        console.log("props: ", props);
        console.log("slots: ", slots());
        console.log("scopedSlots: ", scopedSlots);
        console.log("data: ", data);
        console.log("parent: ", parent);
        console.log("listeners: ", listeners);
        console.log("injections: ", injections);
        console.log("children: ", children);

        let tag = 'h' + props.level;

        return (

            <tag>

                {
                    // slots().default
                }

                {scopedSlots.default({text: '默认插槽'})}


                <hr/>


                {scopedSlots.header({text: '具名插槽'})}


                <hr/>


                {injections.name}

                <div> {children}</div>


            </tag>
        );
    }
};


/**
 * 函数式组件                // 因为函数式组件只是函数，所以渲染开销会低很多
 *
 *
 * 当一个组件不需要状态（即响应式数据）、不需要任何生命周期场景、只接受一些props来显示组件时，可以将其标记为函数式组件
 *
 *
 ** 2.3.0 之前的版本中，如果一个函数式组件想要接收 props，则 props 选项是必须的
 ** 2.3.0 或以上的版本中，可以省略 props 选项，所有组件上的 attribute 都会被自动隐式解析为 prop
 */


/**
 * 函数式组件仅可使用 render(h, context); 中 context( 上下文 ) 中的属性
 *
 *
 * context: {
 *
 *      props:          提供所有 prop 的对象
 *
 *      slots:          一个函数，返回了包含所有插槽(非作用域)的对象
 *
 *      scopedSlots:    (2.6.0+) 一个暴露传入的作用域插槽的对象。也以函数形式暴露普通插槽。
 *
 *      data:           传递给组件的整个数据对象，作为 createElement 的第二个参数传入组件
 *
 *      parent:         对父组件的引用
 *
 *      listeners:      (2.3.0+) 一个包含了所有父组件为当前组件注册的事件监听器的对象。这是 data.on 的一个别名
 *
 *      injections:     (2.3.0+) 如果使用了 inject 选项，则该对象包含了应当被注入的属性。
 *
 *      children:       VNode 子节点的数组，包含了所有的非作用域插槽和非具名插槽
 * }
 */


/**
 * slots() vs children
 *
 *
 * 1) children 仅使用默认插槽
 *
 * 2) 当含有自定义插槽时，slots() 会自动识别并仅包含自定义的默认插槽()，并忽略默认的自定义插槽
 *    当没有自定义插槽时，会自动识别并包含所有默认插槽
 */


/**
 * 函数式组件模版              // 2.5.0 及以上版本中才可使用
 *
 *
 * <template functional>
 *
 * </template>
 */


</script>


<style>


</style>