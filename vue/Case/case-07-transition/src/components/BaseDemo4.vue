<template>

    <div class="class">

        <button @click="show = !show">click</button>

        <transition>
            <div class="box" v-if="show">hello world</div>
        </transition>

    </div>

</template>

<script>


export default {

    name: "BaseDemo4",
    data() {

        return {

            show: true,
        };
    },
}


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


.v-enter-active {
    animation: animate .5s;
}

.v-leave-active {
    animation: animate .5s reverse;
}

@keyframes animate {

    0% {
        opacity: 0;
        transform: translateX(400px) scale(1);
    }

    50% {
        opacity: .5;
        transform: translateX(200px) scale(1.5);
    }

    100% {

        opacity: 1;
        transform: translateX(0px) scale(1);
    }
}


</style>