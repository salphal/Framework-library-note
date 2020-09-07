<template>

    <div class="demo">

        <button @click="show = !show">click</button>

        <transition-group>          <!-- 必须有不同的 key 否则无法显示 -->

            <div key="world" v-if="show">hello world</div>
            <div key="alpha" v-if="show">hello alpha</div>


        </transition-group>

    </div>

</template>

<script>


export default {

    name: "BaseDemo30",
    data() {

        return {

            show: true,
        }
    },
    methods: {

    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 列表过渡                // transition-group
 *
 *
 * 1) 不同于 ，它会以一个真实元素呈现：默认为一个 。你也可以通过 tag attribute 更换为其他元素
 *
 * 2) 过渡模式不可用，因为我们不再相互切换特有的元素
 *
 * 3) 内部元素 总是需要 提供唯一的 key 属性值
 *
 * 4) CSS 过渡的类将会应用在内部的元素中，而不是这个组/容器本身
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 列表的排序过渡
 *
 *
 *
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
</script>


<style scoped>


button{
    display: block;
    margin-bottom: 10px;
}

li {
    list-style: none;
    display: inline;
}

.v-enter,
.v-leave-to {

    opacity: 0;
}

.v-enter-active,
.v-leave-active {

    transition: all .3s;
}

.v-enter-to,
.v-leave {

    opacity: 1;
}


</style>