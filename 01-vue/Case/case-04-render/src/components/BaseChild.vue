<!--<template>-->

<!--    <div class="child">-->
<!--        {{ name }}-->

<!--        <hr>-->

<!--        <slot name="my-slot"></slot>-->
<!--        <slot></slot>-->


<!--        <hr>-->

<!--    </div>-->

<!--</template>-->

<script>
export default {
    name: "BaseChild",
    props: {
        name: String
    },
    render(h) {

        return h('div', {

                class: 'child'
            },
            [
                this.name,
                this.$slots['my-slot'],
                this.$slots.default
            ]);
    }

}
</script>

<style scoped>


</style>