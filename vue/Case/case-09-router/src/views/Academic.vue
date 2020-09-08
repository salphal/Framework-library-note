<template>

    <ul>
        <router-link
                tag="li"
                v-for="question in questionList"
                :key="question.id"
                :to="{name: 'question', params: {id : question.id}}"
        >
            {{question.title}}
        </router-link>
    </ul>

</template>

<script>

export default {

    name: "Academic",
    data() {

        return {

            questionList: []
        }
    },
    mounted() {

        // console.log(this.$axios);

        this.$axios.get('/question').then(res => {

            this.questionList = res;
        });
    }
}

</script>

<style scoped>


li {
    margin-bottom: 15px;
    cursor: pointer;
}

li:hover {
    text-decoration: underline;
    color: #3385ff;
}


</style>