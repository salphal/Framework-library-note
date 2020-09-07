<template>

    <div class="demo20">

        <button @click="handleClick">click</button>

        <transition

                mode="in-out"
        >

            <component :is="cmpName"></component>

        </transition>

    </div>

</template>

<script>

import demo241 from "./BaseDemo241";
import demo242 from "./BaseDemo242";


export default {

    name: "BaseDemo23",
    components: {

        demo241,
        demo242
    },
    data() {

        return {

            cmpName: 'demo241'
        }
    },
    methods: {

        handleClick() {

            const isComponent = this.cmpName === 'demo241';

            this.cmpName = isComponent ? 'demo242' : 'demo241';
        },
    },
}

</script>

<style scoped>

button {
    display: block;
}

.v-enter,
.v-leave-to {

    opacity: 1;
    transform: translateX(30px);
}

.v-enter-active,
.v-leave-active {

    transition: all .3s;
}

.v-enter-to {

    opacity: 0;
    transform: translateX(0px);
}

.v-leave {

    opacity: 1;
    transform: translateX(0px);
}

.v-leave-to {

    opacity: 0;
    transform: translateX(-80px);
}


</style>