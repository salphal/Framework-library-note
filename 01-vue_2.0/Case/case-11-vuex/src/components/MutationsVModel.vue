<template>


    <div>

        <input type="text" v-model="msg"> content: {{ msg }}

    </div>


</template>

<script>

import {mapMutations, mapState, mapGetters} from 'vuex';

import {

    COUNT_INCREMENT,
    CHANGE_OBJ,

    UPDATE_MSG,

} from '../store/mutation-types'

export default {

    name: "Mutations",
    computed: {

        ...mapState(['msg']),

        msg: {

            get() {

                return this.$store.state.msg;
            },

            set(value) {

                this.$store.commit(UPDATE_MSG, {value});
            }
        }
    },
    methods: {

        ...mapMutations('count',['countIncrement']),

        handleInput(e) {

            this.$store.commit(UPDATE_MSG, {value: e.target.value});
        }
    }
}


</script>

<style scoped>

</style>