<template>


    <div class="app">

        <h3>local-data</h3>
        <test-local></test-local>
        <div class="caption">不要在 vuex-mutations 之外更改数据状态</div>

        <hr>

        <h3>global-data</h3>
        <test-global></test-global>

        <hr>

        <h3>map-state</h3>
        <map-state></map-state>

        <hr>

        <h3>data naming conflict</h3>
        <naming-conflict></naming-conflict>

        <hr>

        <h3>getter</h3>
        <getter></getter>

        <hr>

        <h3>map-getters</h3>
        <map-getters></map-getters>

        <hr>

        <h3>mutations</h3>
        <mutations></mutations>
        <div class="ok">在严格模式下，使用 vuex-mutations 处理数据变化</div>

        <hr>

    </div>


</template>

<script>

import TestLocal from './components/TestLocal';
import TestGlobal from './components/TestGlobal';
import MapState from './components/MapState';
import NamingConflict from './components/NamingConflict'
import Getter from './components/Getter';
import MapGetters from './components/MapGetters';
import Mutations from './components/Mutations';


export default {
    name: "App",
    components: {

        TestLocal,
        TestGlobal,
        MapState,
        NamingConflict,
        Getter,
        MapGetters,
        Mutations,
    }
}

</script>

<style scoped>

.caption {
    color: red;
}

.ok {
    color: green;
}

</style>