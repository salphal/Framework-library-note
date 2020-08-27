<!--
<template>

    <div class="demo">
        <slot :text="'hello world'"></slot>
    </div>
    
</template>
-->

<script>
export default {
    name: "BaseSlotHW",
    render() {

        return (

            <div>
                {
                    this.$scopedSlots.default({

                        text: 'hello world'
                    })
                }
            </div>
        )
    }
}
</script>

<style scoped>

</style>