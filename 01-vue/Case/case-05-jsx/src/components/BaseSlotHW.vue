<!--<template>

    <div class="demo">
        <slot :text="'hello world'"></slot>
    </div>

</template>-->

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
        );
    },

    mounted() {

        console.log('base-slot-hw this.$scopedSlots: ', this.$scopedSlots);
    }
}

</script>

<style scoped>

</style>