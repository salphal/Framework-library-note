import Vue from "vue";
import Vuex from "vuex";
import {
    CHANGE_OBJ,
    COUNT_INCREMENT,
    UPDATE_MSG
} from './mutation-types'

Vue.use(Vuex);

export default new Vuex.Store({

    /**
     * vuex strict
     *
     *
     * 在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，
     * 将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到
     *
     * * 不要在发布环境下启用严格模式！严格模式会深度监测状态树来检测不合规的状态变更，要确保在发布环境下关闭严格模式，以避免性能损失
     */

    strict: process.env.NODE_ENV !== 'production',

    state: {

        count: 1,
        a: 1,
        b: 2,
        c: 3,
        obj: {a: 1},
        msg: '',

    },

    /**
     * getter
     *
     *
     *
     */

    getters: {

        countDouble: state => state.count * 2,
        countAdd: state => num => state.count + num,

        // doubleCount(state) {
        //
        //     return state.count * 2;
        // },
        //
        // addCount(state) {
        //
        //     return function (num) {
        //
        //         return state.count + num;
        //     }
        // }
    },

    /**
     * mutations
     *
     *
     *
     */

    mutations: {

        /**
         * mutations( state, param | prams: obj );
         *
         *
         * @param: 接收单个参数
         * @prams: 接收多个参数
         */

        // [COUNT_INCREMENT](state, {num}) {
        //
        //     state.count += num;
        // },

        [COUNT_INCREMENT](state, payload) {

            /**
             * @payload: 传入的参数对象
             */

            state.count += payload.num;

            /**
             * Mutation 必须是同步函数
             *
             *
             * 执行上端代码，我们会发现更改 state 的操作是在回调函数中执行的，
             * 这样会让我们的代码在 devtools 中变的不好调试：
             * * 当 mutation 触发的时候，回调函数还没有被调用，
             * * devtools 不知道什么时候回调函数实际上被调用，任何在回调函数中进行的状态的改变都是不可追踪的
             */

            // setTimeout(() => {              // 不要在 mutation 中使用异步
            //
            //     state.count += payload.num;
            //
            // }, 1000);
        },

        // countIncrement(state, {num}) {
        //
        //     state.count += num;
        // },

        [CHANGE_OBJ](state) {

            // state.obj.b = 10;                                    // 未遵守 vue  响应规则
            // 数据无法更新

            // state.obj = {...state.obj, b: 10};

            Vue.set(state.obj, 'b', 10);
        },

        [UPDATE_MSG](state, payload) {

            state.msg = payload.value;
        }
    }
});