<template>


    <div id="app">

        <base-level :level="1">Title</base-level>
        <base-level :level="2">Title</base-level>
        <base-level :level="3">Title</base-level>
        <base-level :level="4">Title</base-level>
        <base-level :level="5">Title</base-level>
        <base-level :level="6">Title</base-level>

        <hr>

        <base-data></base-data>

        <hr>

        <base-slots v-slot="slotProps">


            {{ slotProps.text }}

        </base-slots>


    </div>


</template>

<script>

import BaseLevel from './components/BaseLevel';
import BaseData from './components/BaseData';
import BaseSlots from "./components/BaseSlots";

export default {

    name: 'App',
    components: {
        BaseSlots,
        BaseLevel,
        BaseData,
    },

    render(h) {

        return h('div', {

            class: 'app',
            id: 'app',

        }, [

            h('base-slots', {

                scopedSlots: function (props) {

                    return props.text;
                }
            })
        ]);
    }
}

</script>

<style>


</style>
