<template>


    <div>

        <button @click="handleClick">click</button>

        <br>

        globalCount: {{ count }}

        <br>

        doubleCount:
        <!--{{ countDouble }}-->                            <!-- 未开启命名空间 -->
        {{ $store.getters['count/countDouble'] }}           <!-- 开启命名空间 -->

        <br>

        addCount: {{ countAdd(3) }}

        <br>

        obj: {{ obj }}

        <br>

        <input type="text" :value="msg" @input="handleInput"> content: {{ msg }}


        <mutation-v-model></mutation-v-model>

    </div>


</template>

<script>

import {mapMutations, mapState, mapGetters} from 'vuex';

import MutationVModel from './MutationsVModel';

import {
    COUNT_INCREMENT,
    CHANGE_OBJ,
    UPDATE_MSG,
} from '../store/mutation-types'

export default {

    name: "Mutations",
    components: {

        MutationVModel
    },
    computed: {

        ...mapState('count', ['count', 'msg', 'obj']),
        ...mapGetters('count', ['countAdd', 'countDouble']),
    },
    methods: {

        ...mapMutations('count', ['countIncrement']),

        handleClick() {

            /**
             * 提交载荷( payload )
             *
             *
             * this.$store.commit(changeDataMethod: str, param | ... params: obj)
             *
             *
             * @param: 传入单个参数
             * @params: 传入多个参数
             */

                // this.countIncrement();


                // this.$store.commit('countIncrement');                // 未传参，仅提交载荷

                // this.$store.commit('countIncrement', 10);            // 传入单个参数，并提交载荷

                // this.$store.commit('countIncrement', {num: 10});     // 传入多个参数，并提交载荷

                // this.$store.commit({                                 // 以对象的形式提交
                //
                //     type: "COUNT_INCREMENT",                         // 使用常量替代 Mutation 事件类型
                //
                //     // type: "countIncrement",
                //
                //     num: 10,
                // });

                // this.$store.commit(CHANGE_OBJ);


            const num = Math.floor(Math.random() * 10);

            this.$store.dispatch('count/countIncrement', {num}).then(() => {

                alert('count值已增加');
            });
        },

        handleInput(e) {

            this.$store.commit(UPDATE_MSG, {value: e.target.value});
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * Mutation 需遵守 Vue 的响应规则
 *
 *
 *  Vuex 的 store 中的状态是响应式的，那么当我们变更状态时，监视状态的 Vue 组件也会自动更新
 *  这也意味着 Vuex 中的 mutation 也需要与使用 Vue 一样遵守一些注意事项
 *
 *
 * * 最好提前在你的 store 中初始化好所有所需属性
 * * 当需要在对象上添加新属性时( 使用 Vue.set(obj, 'newProp', val) 或者 以新对象替换老对象 )
 */


//-------------------------------------------------------------------------------------------------------------------//


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
</script>

<style scoped>

</style>