<template>


    <div class="student-list">


        <div>学生总人数: {{ studentLength }}</div>

        <div class="headline">学生列表</div>
        <ul>
            <li
                    v-for="student in studentList"
                    :key="student.id"
            >
                姓名: {{ student.name }} 年龄: {{ student.age }}
            </li>
        </ul>

        <div class="headline">未成年学生列表</div>

        <ul>
            <li
                    v-for="juveniles in studentJuveniles"
            >
                姓名: {{ juveniles.name }} 年龄: {{ juveniles.age }}

            </li>
        </ul>


    </div>


</template>

<script>

import {mapState, mapGetters} from 'vuex';

export default {
    name: "StudentList",
    computed: {

        ...mapState(['studentList']),
        ...mapGetters(['studentLength','studentJuveniles']),
    }

}
</script>

<style scoped>


li {
    margin: 10px 0;
    color: #666;
}

.headline {
    margin-top: 20px;
    font-size: 22px;
    font-weight: bold;
}

</style>