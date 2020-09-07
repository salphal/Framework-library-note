<template>

    <div class="demo6">

        <button @click="show = !show">click</button>

        <!-- enter-class="enter"-->
        <!-- enter-active-class="enter-active"-->
        <!-- enter-to-class="enter-to"-->

        <transition

                enter-active-class="animate__animated animate__bounceInRight"
                leave-active-class="animate__animated animate__bounceOutDown"
        >
            <div class="box" v-if="show">hello world</div>
        </transition>

    </div>

</template>

<script>

import "../../../node_modules/animate.css/animate.css";

export default {

    name: "BaseDemo6",
    data() {

        return {

            show: true,
        };
    },
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * animate
 *
 *
 * https://animate.style/
 */


//-------------------------------------------------------------------------------------------------------------------//






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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