<template>

    <div className="demo">

        <input type="text" v-model="query">

        <br/>

        <transition-group

                tag="ul"
                @before-enter="beforeEnter"
                @enter="enter"
                @leave="leave"

        >   <!-- 必须有不同的 key 否则无法显示 -->
            <!-- tag: 指定最终渲染到页面的 html 标签 -->

            <li
                    v-for="item in computedLists"
                    :key="item.name"
            >
                {{ item.name }}
            </li>

        </transition-group>

    </div>

</template>

<script>

export default {

    name: "BaseDemo32",
    data() {

        return {

            query: '',
            lists: [

                {name: 'alpha'},
                {name: 'beta'},
                {name: 'omega'},
            ]
        }
    },
    methods: {

        beforeEnter(el) {


            el.style = {

                opacity: 0,
                height: 0,
            };
        },

        enter(el, done) {

            Velocity(el,

                {
                    opacity: 1,
                    height: '24px'
                },

                {
                    duration: 300,
                    complete: done
                }
            );
        },

        leave(el, done) {

            Velocity(el,

                {
                    opacity: 0,
                    height: '0px'
                },

                {
                    duration: 300,
                    complete: done
                }
            );
        }
    },
    computed: {

        computedLists() {

            return this.lists.filter(item => item.name.includes(this.query));
        },
    },

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
</script>


<style scoped>

ul,
li {
    margin: 0;
    padding: 0;
}

input {
    margin-bottom: 10px;
}

li {
    list-style: none;
    height: 24px;
    margin-right: 10px;
    margin-left: 10px;
}

.v-enter,
.v-leave-to {

    opacity: 0;
    height: 0;

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
    height: 24px;
}


</style>