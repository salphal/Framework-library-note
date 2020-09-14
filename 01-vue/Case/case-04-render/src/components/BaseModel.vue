<!--<template>-->
<!--    -->
<!--</template>-->

<script>
export default {
    name: "BaseModel",
    data() {

        return {

            value: 'test'
        }
    },
    render(h) {

        const self = this;

        return h('div', {}, [

            h('input', {

                attrs: {

                    value: this.value
                },
                on: {

                    // 在事件监听中 this: null;

                    input(e) {

                        self.value = e.target.value;
                    }
                }
            }),

            this.value
        ]);
    }
}
</script>

<style scoped>

</style>