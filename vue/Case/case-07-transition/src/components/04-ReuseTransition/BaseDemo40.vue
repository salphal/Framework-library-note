<template>


    <div class="demo">

        <transition>

            <slot></slot>

        </transition>

    </div>


</template>

<script>


export default {
    name: "BaseDemo40",
    data() {

        return {

            show: true
        }
    }
}


</script>

<style scoped>


.v-enter,
.v-leave-to {

    opacity: 0;
}

.v-enter-active,
.v-leave-active {

    transition: all .3s;
}

.v-leave,
.v-enter-to {

    opacity: 1;
}


</style>