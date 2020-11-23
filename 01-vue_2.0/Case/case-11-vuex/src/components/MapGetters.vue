<template>

        <div>

            countDouble: {{ countDouble }}

            <br/>

            countAdd: {{ countAdd(3) }}

        </div>

</template>

<script>

import {mapGetters} from 'vuex';

export default {
    name: "MapGetters",
    computed: {

        ...mapGetters('count', ['countDouble', 'countAdd'])
    }
}
</script>

<style scoped>

</style>