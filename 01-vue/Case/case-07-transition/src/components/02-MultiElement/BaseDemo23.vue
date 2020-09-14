<template>

    <div class="demo20">

        <button @click="handleClick">click</button>

        <transition

                mode="in-out"
        >

            <!--<div v-if="show" key="hw">hello world</div>-->
            <!--<div v-else="show" key="jdi">just do it</div>-->

            <div class="demo" :key="keyName">hello {{keyName}}</div>

        </transition>

    </div>

</template>

<script>

export default {

    name: "BaseDemo23",
    data() {

        return {

            keyName: 'world'
        }
    },
    methods: {

        handleClick() {

            const isWorld = this.keyName === 'world';

            this.keyName = isWorld ? 'alpha' : 'world';
        },
    },
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 多元素过渡                    // 绑定不同的 key
 *
 *
 * 相同 dom 元素( 未绑定 key )切换过渡时，vue 为了效率，会就近替换相同 dom 元素的标签内容
 *
 * 不同 dom 元素( 未绑定 key )切换过渡时，无法匹配就近提高效率原则
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * transition                   // 使用 v-if + v-else ... 解决
 *
 *
 * <transition></transition> 仅可在单个 dom 元素上使用
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * mode                         // 多个元素过渡应用不同的模式
 *
 *
 * in-out: 新元素先进行过渡，完成之后当前元素过渡离开
 *
 * out-in: 当前元素先进行过渡，完成之后新元素过渡进入
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

</script>

<style scoped>


.demo {
    margin-top: 10px;
    /*position: absolute;*/
    display: inline-block;
    width: 120px;
    height: 30px;
    line-height: 30px;
    background-color: gray;
    color: #fff;
    text-align: center;
}

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

.v-leave-to{

    opacity: 0;
    transform: translateX(-80px);
}


</style>