<!--
<template>

    <h1 v-if="level === 1">
        <slot></slot>
    </h1>
    <h2 v-else-if="level === 2">
        <slot></slot>
    </h2>
    <h3 v-else-if="level === 3">
        <slot></slot>
    </h3>
    <h4 v-else-if="level === 4">
        <slot></slot>
    </h4>
    <h5 v-else-if="level === 5">
        <slot></slot>
    </h5>
    <h6 v-else-if="level === 6">
        <slot></slot>
    </h6>

</template>
-->

<script>
export default {
    name: "BaseLevel",
    props: {

        level: {
            type: Number,
        },
        tag: String,
    },
    render(createElement) {

        return createElement(

            'h' + this.level,           // 标签名称
            this.$slots.default,        // 子节点数组
        );
    }
}
</script>

<style scoped>

</style>