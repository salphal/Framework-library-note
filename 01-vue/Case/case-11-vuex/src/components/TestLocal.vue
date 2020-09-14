<template>


    <div>

        <button @click="localCount ++">click</button>
        <div>local-data: <span>{{ localCount }}</span></div>


        <hr/>


        <button @click="$store.state.count ++">click</button>
        <div>global-data: <span>{{ globalCount }}</span></div>


    </div>


</template>

<script>

export default {
    name: "Test",

    data() {

        return {

            localCount: this.$store.state.count,
        }
    },

    computed: {

        globalCount() {

            return this.$store.state.count;
        },
    },

    mounted() {

        console.log(this.$store.state.count);
    }
}

</script>

<style scoped>


hr {
    margin: 20px 0;
}


</style>