import {COUNT_INCREMENT} from "../mutation-types";

export default {

    /**
     *
     *
     *
     *
     */

    namespaced: true,               // 开启命名模块

    state: {

        count: 1,
    },

    getters: {

        countDouble: state => state.count * 2,
        countAdd: state => num => state.count + num,
    },

    mutations: {

        [COUNT_INCREMENT](state, payload) {

            state.count += payload.num;

        },

    },

    actions: {

        countIncrement() {

            return new Promise((resolve, reject) => {

                setTimeout(() => {

                    context.commit(COUNT_INCREMENT, payload);

                }, 1000);

                resolve();
            });
        }
    }
}