<!--<template>

    <div class="demo">

        <button  @click="show = !show">click</button>

        <transition>

            <slot></slot>

        </transition>

    </div>

</template>-->

<script>

export default {
    name: "BaseDemo41",
    functional: true,
    render(h, context) {

        const {slots} = context;

        return (

            <transition name="single">

                {slots().default}

            </transition>
        );
    }
}

</script>

<style>


.single-enter,
.single-leave-to {

    opacity: 0;
}

.single-enter-active,
.single-leave-active {

    transition: all .3s;
}

.single-leave,
.single-enter-to {

    opacity: 1;
}


</style>