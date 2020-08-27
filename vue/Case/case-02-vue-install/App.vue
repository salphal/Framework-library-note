<template>


    <div class="father">

        {{ msg }}

        <p>just do it</p>

        <base-son></base-son>
    </div>


</template>


<script>


import baseSon from './Son';

export default {

    components: {

        baseSon,
    },
    data() {

        return {

            msg: 'hello world'
        };
    }
}


</script>


<style>


.father {

    background-color: red;
    height: 50px;
}


</style>







