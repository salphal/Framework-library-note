<template>

    <div class="class">

        <button @click="show = !show">click</button>

        <transition
                enter-class="enter"
                enter-active-class="enter-active"
                enter-to-class="enter-to"
                leave-class="leave"
                leave-active-class="leave-active"
                leave-to-class="leave-to"
        >
            <div class="box" v-if="show">hello world</div>
        </transition>

    </div>

</template>

<script>


export default {

    name: "BaseDemo5",
    data() {

        return {

            show: true,
        };
    },
}


/**
 * 自定义过渡的类名
 *
 *
 * Animate.css                  // https://daneden.github.io/animate.css/
 *
 * npm install animate.css --save
 *
 * enter-class
 * enter-active-class
 * enter-to-class (2.1.8+)
 * leave-class
 * leave-active-class
 * leave-to-class (2.1.8+)
 */


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


.enter {
    opacity: 0;
}

.enter-active {
    transition: opacity 2s;
}

.enter-to {
    opacity: 1;
}

.leave {
    opacity: 1;
}

.leave-active {
    transition: opacity 2s;
}

.leave-to {
    opacity: 0;
}


</style>