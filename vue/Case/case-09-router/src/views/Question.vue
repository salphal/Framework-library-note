<template>

    <div class="question">
        问题组件
    </div>

</template>

<script>
export default {
    name: "Question",
    mounted() {

        const {id} = this.$route.params;

        this.$axios.get(`/question/${id}`).then(res=> {

            console.log(res);
        });
    }
}
</script>

<style scoped>


</style>