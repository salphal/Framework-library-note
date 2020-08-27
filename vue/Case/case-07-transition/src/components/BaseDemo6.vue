<template>

    <div class="class">

        <button @click="show = !show">click</button>

        <transition

                enter-active-class="bounceInRight animated"
                leave-active-class="bounceOutDown animated"
        >
            <div class="box" v-if="show">hello world</div>
        </transition>

    </div>

</template>

<script>

import "animate.css";

export default {

    name: "BaseDemo6",
    data() {

        return {

            show: true,
        };
    },
};

</script>

<style scoped>

button {
    margin-bottom: 10px;
}

.box {
    width: 120px;
    height: 80px;
    line-height: 80px;
    color: red;
    border: 1px solid red;
    border-radius: 4px;
    text-align: center;
}


</style>