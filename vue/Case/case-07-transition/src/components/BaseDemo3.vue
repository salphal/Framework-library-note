<template>

    <div class="demo3">

        <button @click="show = !show">click</button>

        <transition name="box1">
            <div class="box" v-if="show">hello world</div>
        </transition>

        <transition name="box2">
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


.box {
    margin-bottom: 10px;
}


.box1-enter {
    opacity: 0;
    transform: translateX(200px);
}

.box1-enter-active {
    transition: all .3s;
}

.box1-enter-to {
    opacity: 1;
    transform: translateX(0px);

}

.box1-leave {
    opacity: 1;
    transform: translateX(0px);
}

.box1-leave-active {
    transition: all .3s;
}

.box1-leave-to {
    opacity: 0;
    transform: translateX(200px);
}


.box2-enter {
    opacity: 0;
    transform: translateY(200px);
}

.box2-enter-active {
    transition: all .3s;
}

.box2-enter-to {
    opacity: 1;
    transform: translateX(0px);

}

.box2-leave {
    opacity: 1;
    transform: translateY(0px);
}

.box2-leave-active {
    transition: all .3s;
}

.box2-leave-to {
    opacity: 0;
    transform: translateY(200px);
}


</style>