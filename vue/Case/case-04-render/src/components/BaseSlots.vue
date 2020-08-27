<!--<template>-->
<!--    -->
<!--</template>-->

<script>
export default {
    name: "BaseSlots",
    data() {

        return {

            msg: 'hello world'
        }
    },
    render(h) {

        return h('div', {


        },[

            this.$scopedSlots.default({

                text: this.msg
            })
        ]);
    }
}
</script>

<style scoped>

</style>