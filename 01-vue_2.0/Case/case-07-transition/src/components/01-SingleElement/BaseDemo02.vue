<template>

    <div class="demo2">

        <button @click="show = !show">click</button>

        <transition>
            <div class="box" v-if="show">hello world</div>
        </transition>

    </div>

</template>

<script>


export default {

    name: "BaseDemo1",
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


.v-enter {
    opacity: 0;
    transform: translateX(200px);
}

.v-enter-active {
    transition: all .3s;
}

.v-enter-to {
    opacity: 1;
    transform: translateX(0px);

}

.v-leave {
    opacity: 1;
    transform: translateY(0px);
}

.v-leave-active {
    transition: all .3s;
}

.v-leave-to {
    opacity: 0;
    transform: translateY(200px);
}


</style>