<!--<template>-->
<!--    -->
<!--</template>-->

<script>

export default {

    name: "BaseIfFor",
    props: {

        items: Array,
    },
    mounted() {

        console.log(this.$refs);
    },
    render(h) {

        if (this.items.length) {

            return h('ul', this.items.map(item => h('li', {

                key: item,              // 循环必须绑定唯一标示

                ref: 'li',              //

                refInFor: true,         // $refs 为数组集合

            }, item)));

        } else {

            return h('p', 'no items found');
        }
    }
};

</script>

<style scoped>

</style>