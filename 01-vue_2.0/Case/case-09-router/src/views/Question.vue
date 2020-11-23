<template>

    <div class="question" v-if="question">

        <div class="main">
            问题: {{ question.title }}
        </div>


        <div class="other">

            <div
                    v-for="other in otherQuestionList"
                    :key="other.id"
                    :class="other.type"
                    @click="handleClick(other.id)"
            >
                {{ other.title }}
            </div>

            <!--<div class="prev" :title="question.prev">{{ question.prev }}</div>-->
            <!--<div class="prev" :title="question.next">{{ question.next }}</div>-->

        </div>

    </div>

</template>

<script>

export default {
    name: "Question",
    props: {

        id: {
            type: [String, Number]
        },
        name: {
            type: [String],
            default: 'question'
        }
    },
    data() {

        return {

            question: null
        }
    },
    mounted() {

        // this.getData();

        console.log(this.id);

        console.log(this.name);             // 必须开启路由函数传参模式
    },

    beforeRouteUpdate(to, from, next) {


        // console.log('before-route-update');

        next();

    },
    beforeRouteLeave(to, from, next) {


        // console.log('before-route-leave');

        // next();


        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        const isGo = window.confirm('是否要离开，不再看看嘛');

        isGo ? next() : next(false);
    },

    methods: {

        handleClick(id) {

            const {name} = this.$route;

            this.$router.push({

                name,
                params: {
                    id
                }
            });
        },
        getData() {

            // const {id} = this.$route.params;

            const {id} = this;

            this.$axios.get(`/question/${id}`).then(res => {

                this.question = res;
            });
        }
    },
    computed: {

        otherQuestionList() {

            const arr = [];

            if (this.question.prev) {

                const {prev, prevId} = this.question;

                arr.push({

                    type: 'prev',
                    title: prev,
                    id: prevId
                });
            }

            if (this.question.next) {

                const {next, nextId} = this.question;

                arr.push({

                    type: 'next',
                    title: next,
                    id: nextId
                });
            }

            return arr;
        }
    },
    watch: {

        '$route': {

            handler() {

                this.getData();
            },
            immediate: true
        }
    }
}
</script>

<style scoped>


.main {
    margin-bottom: 200px;
}

.prev {
    float: left;
}

.next {
    float: right;
}

.prev,
.next {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #3385ff;
    text-decoration: underline;
    cursor: pointer;
}


</style>