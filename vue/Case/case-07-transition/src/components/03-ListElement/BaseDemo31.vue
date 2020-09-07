<template>

    <div class="demo">

        <button @click="handleAdd">add</button>
        <button @click="handleRemove">remove</button>
        <button @click="handleShuffle">shuffle</button>

        <br/>

        <transition-group tag="ul">             <!-- 必须有不同的 key 否则无法显示 -->
                                                <!-- tag: 指定最终渲染到页面的 html 标签 -->

            <li
                    v-for="item in lists"
                    :key="item"
            >
                {{ item }}
            </li>

        </transition-group>

    </div>

</template>

<script>

export default {

    name: "BaseDemo30",
    data() {

        return {

            lists: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            nextNum: 11,

        }
    },
    methods: {

        handleAdd() {

            const randomIndex = Math.floor(Math.random() * this.lists.length);

            this.lists.splice(randomIndex, 0, this.nextNum++)

        },

        handleRemove() {

            const randomIndex = Math.floor(Math.random() * this.lists.length);

            this.lists.splice(randomIndex, 1);
        },

        handleShuffle() {

            this.lists.sort(() => Math.random() - 0.5);
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 列表过渡                         // <transition-group></transition-group>
 *
 *
 * 1) 不同于 ，它会以一个真实元素呈现：默认为一个 。你也可以通过 tag attribute 更换为其他元素
 *
 * 2) 过渡模式不可用，因为我们不再相互切换特有的元素( in-out , out-in )
 *
 * 3) 内部元素 总是需要 提供唯一的 key 属性值
 *
 * 4) CSS 过渡的类将会应用在内部的元素中，而不是这个组/容器本身
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * tag="tagName"                    // 指定最终渲染到页面的 html 标签
 *
 *
 * <transition-group> 最终会渲染出一个 dom元素( 默认 <span></spn> ), tag 可指定最终渲染 dom 的标签
 *
 * <transition> 最终不会渲染出 dom元素( 和<template></template>类似 )
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * .v-move: {}                      // 组件提供了一个新的特性
 *
 *
 * 设置 dom 元素改变定位的过程中的动效
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
</script>


<style scoped>


button {
    margin-bottom: 10px;
    margin-right: 10px;
}

li {
    list-style: none;
    display: inline-block; /* 不能使用 inline */
    margin-right: 10px;
}

.v-enter,
.v-leave-to {

    opacity: 0;
    transform: translateY(30px);
}

.v-enter-active,
.v-leave-active {

    transition: all .3s;
}

.v-leave,
.v-enter-to {

    opacity: 1;
    transform: translateY(0px);
}

.v-move {

    transition: transform .3s;
}


</style>