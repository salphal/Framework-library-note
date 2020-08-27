<!--
<template>

    <div>

        <slot name="header"></slot>

        demo

        <slot></slot>

    </div>

</template>
-->

<script>


export default {

    name: "Slot",

    render(h) {

        return (

            <div>

                {this.$slots.header}

                demo

                {this.$slots.default}

            </div>
        )
    }
}


</script>

<style scoped>

</style>