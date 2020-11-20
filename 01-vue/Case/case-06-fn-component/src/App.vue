<template>


    <base-level
            :level="1"
            @click="handleClick"
    >

        <template #default="{text}">

            content: {{ text }}

        </template>

        <template #header="{text}">

            content: {{ text }}

        </template>

        <div>div</div>

        <p>p</p>

    </base-level>


</template>


<script>

import BaseLevel from './components/BaseLevel'

export default {

    components: {

        BaseLevel
    },

    provide() {

        return {

            name: 'alpha'
        }
    },

    methods: {

        handleClick() {

            console.log('clicked');
        }
    }
}


</script>


<style>


</style>