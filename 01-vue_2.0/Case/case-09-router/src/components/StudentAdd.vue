<template>


    <div class="student-add">

        <h3>添加学员</h3>

        <div>
            <label for="name"> 姓名: <input type="text" id="name" v-model="name"></label>
        </div>

        <div>
            <label for="age"> 年龄: <input type="text" id="age" v-model="age"></label>
        </div>

        <div>
            <button @click="handleClick">add</button>
        </div>

    </div>


</template>

<script>
export default {
    name: "StudentAdd",
    data() {

        return {

            name: '',
            age: null
        }
    },
    methods: {

        handleClick() {

            const {name, age} = this;

            if (!name || !age) {

                alert('请输入有效信息');

                return;
            }


            this.$store.state.studentList.push({

                name,
                age,
                id: +new Date(),
            });
        }
    }
}
</script>

<style scoped>

div {

    margin: 12px 0;
}

button {
    margin-left: 39px;
    width: 154px;
}

</style>