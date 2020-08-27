<!--<template>

</template>-->


<script>

import BaseChild from './BaseChild';
import BaseIfFor from './BaseIfFor';
import BaseModel from './BaseModel';

export default {

    name: "BaseData",

    components: {

        BaseChild,
        BaseIfFor,
        BaseModel,
    },

    // render(); 和 <template><template/> 不能共存，必须注释 template-tag 才能使用 render();
    render(createElement) {

        return createElement('div', {

                // 与 `v-bind:class` 的 API 相同，接受一个字符串、对象或字符串和对象组成的数组
                class: {
                    foo: true,
                    bar: false
                },

                // 与 `v-bind:style` 的 API 相同，接受一个字符串、对象，或对象组成的数组
                style: {
                    color: 'red',
                    fontSize: '24px'
                },

                // 普通的 HTML attribute
                attrs: {

                    id: 'foo'
                },

                // 组件 prop
                // props: {
                //
                //     myProp: 'bar'
                // },

                // DOM属性            // 会覆盖子节点的内容
                //
                // domProps: {
                //
                //     innerHTML: 'just so so'
                // },

                // 事件监听器，不支持如“v-on:keyup.enter”这样的修饰器
                on: {
                    click() {

                        console.log('clicked');
                    }
                },

                // 自定义指令。注意，无法对 `binding` 中的 `oldValue`赋值，因为 Vue 已经自动为你进行了同步
                // directives: [
                //     {
                //         name: 'my-custom-directive',
                //         value: '2',
                //         expression: '1 + 1',
                //         arg: 'foo',
                //         modifiers: {
                //             bar: true
                //         }
                //     }
                // ],
            },

            [
                'just do it',

                createElement('base-child', {

                        props: {

                            name: 'base-child-component'
                        },

                        // 仅用于组件，用于监听原生事件，而不是组件内部使用 vm.$emit 触发的事件
                        nativeOn: {

                            click() {

                                console.log('base-child clicked');
                            }
                        }
                    },

                    [
                        createElement('p',{

                            slot: 'default'

                        }, 'default-slot'),

                        createElement('div', {

                            slot: 'my-slot'

                        }, 'my-slot')

                    ]),


                createElement('base-if-for', {

                    props: {

                        items: [1, 2, 3, 4]
                    }
                }),

                createElement('base-model'),

            ]
        );
    },
}


</script>

<style scoped>

</style>