<template>

    <div class="app">

        <base-demo1></base-demo1>

        <hr>

        <base-demo2></base-demo2>

        <hr>

        <base-demo3></base-demo3>

        <hr>

        <base-demo4></base-demo4>

        <hr>

        <base-demo5></base-demo5>

        <hr>

        <base-demo6></base-demo6>

        <hr>

        <base-demo7></base-demo7>

        <hr>

        <base-demo8></base-demo8>

        <hr>

    </div>

</template>


<script>


import BaseDemo1 from './components/BaseDemo1';
import BaseDemo2 from './components/BaseDemo2';
import BaseDemo3 from './components/BaseDemo3';
import BaseDemo4 from './components/BaseDemo4';
import BaseDemo5 from './components/BaseDemo5';
import BaseDemo6 from './components/BaseDemo6';
import BaseDemo7 from './components/BaseDemo7';
import BaseDemo8 from './components/BaseDemo8';


export default {

    name: 'app',
    components: {

        BaseDemo1,
        BaseDemo2,
        BaseDemo3,
        BaseDemo4,
        BaseDemo5,
        BaseDemo6,
        BaseDemo7,
        BaseDemo8,
    },
}


</script>


<style scoped>


.app {
    margin-bottom: 1000px;
}


</style>