<template>


    <div>

        <div>a: {{ a }}</div>
        <div>b: {{ b }}</div>
        <div>c: {{ c }}</div>

    </div>


</template>

<script>

import {mapState} from 'vuex';

export default {
    name: "MapState",
    computed: {

        ...mapState(['a', 'b', 'c']),                   // 减少代码冗余

        // globalA() {
        //
        //     return this.$store.state.a;
        // },
        // globalB() {
        //
        //     return this.$store.state.b;
        // },
        // globalC() {
        //
        //     return this.$store.state.c;
        // }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * mapState();
 *
 *
 *
 */



//-------------------------------------------------------------------------------------------------------------------//


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

</script>

<style scoped>

</style>