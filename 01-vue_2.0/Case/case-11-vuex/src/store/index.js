import Vue from "vue";
import Vuex from "vuex";
import {CHANGE_OBJ, COUNT_INCREMENT, UPDATE_MSG} from './mutation-types'

import count from './modules/count';
import student from './modules/student';

Vue.use(Vuex);

export default new Vuex.Store({

    strict: process.env.NODE_ENV !== 'production',

    modules: {

        count,
        student
    },

    state: {

        a: 1,
        b: 2,
        c: 3,
        obj: {a: 1},
        msg: '',

    },

    getters: {


    },

    mutations: {

        [CHANGE_OBJ](state) {

            Vue.set(state.obj, 'b', 10);
        },

        [UPDATE_MSG](state, payload) {

            state.msg = payload.value;
        }
    }
});