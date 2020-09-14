<template>


    <div>

        globalCount: {{ $store.state.count }}

        <hr>

        doubleCount: {{$store.getters.countDouble }}

        <hr>

        addCount: {{$store.getters.countAdd(3) }}

    </div>


</template>

<script>
export default {
    name: "Getter"
}
</script>

<style scoped>

</style>