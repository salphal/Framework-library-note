<template>

    <div class="demo1">

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

/**
 * 过渡的类名
 *
 *
 * .v-enter                 // 定义进入过渡的开始状态
 *
 * .v-enter-active          // 定义进入过渡生效时的状态
 *
 * .v-enter-to              // 定义进入过渡的结束状态(2.1.8+)
 *
 *
 * .v-leave                 // 定义离开过渡的开始状态
 *
 * .v-leave-active          // 定义离开过渡生效时的状态
 *
 * .v-leave-to              // 定义离开过渡的结束状态(2.1.8+)
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


.v-enter {                          /* 在元素被插入之前生效，在元素被插入之后的下一帧移除 */
    opacity: 0;
}

.v-enter-active {                   /* 在整个进入过渡的阶段中应用，在元素被插入之前生效，在 过渡/动画完成之后 移除 */
    transition: opacity 2s;
}

.v-enter-to {                       /* 在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在 过渡/动画完成之后 移除 */
    opacity: 1;
}

.v-leave {                          /* 在离开过渡被触发时立刻生效，下一帧被移除 */
    opacity: 1;
}

.v-leave-active {                   /* 在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在 过渡/动画完成之后 移除 */
    transition: opacity 2s;
}

.v-leave-to {                       /* 在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在 过渡/动画完成之后 移除 */
    opacity: 0;
}


</style>