<template>


    <div>

        <div> {{ count }}  </div>
        <div> {{ storeCount}} </div>

    </div>


</template>

<script>

import {mapState} from 'vuex';

export default {
    name: "NamingConflict",
    data() {

        return {

            count: -1,
        }
    },
    computed: {

        ...mapState({

            // storeCount: state => state.count,

            storeCount: 'count',                // 数据不更改时，可以简写
        })
    }
}
</script>

<style scoped>


</style>