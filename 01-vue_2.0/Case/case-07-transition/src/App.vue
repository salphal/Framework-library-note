<template>

    <div class="app">

        <h1>Single Element</h1>

        <hr>

        <base-demo01></base-demo01>

        <hr>

        <base-demo02></base-demo02>

        <hr>

        <base-demo03></base-demo03>

        <hr>

        <base-demo04></base-demo04>

        <hr>

        <base-demo05></base-demo05>

        <hr>

        <base-demo06></base-demo06>

        <hr>

        <base-demo07></base-demo07>

        <hr>

        <base-demo08></base-demo08>

        <hr>

        <base-demo09></base-demo09>

        <hr>

        <base-demo10></base-demo10>

        <hr>

        <base-demo11></base-demo11>

        <hr>

        <base-demo12></base-demo12>

        <hr>

        <base-demo13></base-demo13>

        <hr>

        <h1>Multi Element</h1>

        <hr>

        <base-demo20></base-demo20>

        <hr>

        <base-demo21></base-demo21>

        <hr>

        <base-demo22></base-demo22>

        <hr>

        <base-demo23></base-demo23>

        <hr>

        <base-demo24></base-demo24>

        <hr>

        <base-demo30></base-demo30>

        <hr>

        <base-demo31></base-demo31>

        <hr>

        <base-demo32></base-demo32>

        <hr>

        <base-demo33></base-demo33>

        <hr>

        <button  @click="show40 = !show40">click</button>

        <base-demo40>

            <transition>

                <div v-if="show40">hello world</div>

            </transition>

        </base-demo40>

        <hr>

        <hr>

        <button  @click="show41 = !show41">click</button>

        <base-demo41>

            <transition>

                <div v-if="show41">just do it</div>

            </transition>

        </base-demo41>

        <hr>

        <button  @click="show42 = !show42">click</button>

        <base-demo41>

            <transition>

                <div key="jd1" v-if="show42">just do it - 1</div>
                <div key="jd2" v-else="show42">just do it - 2</div>

            </transition>

        </base-demo41>

        <hr>

    </div>

</template>


<script>


import BaseDemo01 from './components/01-SingleElement/BaseDemo01';
import BaseDemo02 from './components/01-SingleElement/BaseDemo02';
import BaseDemo03 from './components/01-SingleElement/BaseDemo03';
import BaseDemo04 from './components/01-SingleElement/BaseDemo04';
import BaseDemo05 from './components/01-SingleElement/BaseDemo05';
import BaseDemo06 from './components/01-SingleElement/BaseDemo06';
import BaseDemo07 from './components/01-SingleElement/BaseDemo07';
import BaseDemo08 from './components/01-SingleElement/BaseDemo08';
import BaseDemo09 from './components/01-SingleElement/BaseDemo09';
import BaseDemo10 from './components/01-SingleElement/BaseDemo10';
import BaseDemo11 from './components/01-SingleElement/BaseDemo11';
import BaseDemo12 from './components/01-SingleElement/BaseDemo12';
import BaseDemo13 from './components/01-SingleElement/BaseDemo13';


import BaseDemo20 from './components/02-MultiElement/BaseDemo20';
import BaseDemo21 from './components/02-MultiElement/BaseDemo21';
import BaseDemo22 from './components/02-MultiElement/BaseDemo22';
import BaseDemo23 from './components/02-MultiElement/BaseDemo23';
import BaseDemo24 from './components/02-MultiElement/BaseDemo24';


import BaseDemo30 from './components/03-ListElement/BaseDemo30';
import BaseDemo31 from './components/03-ListElement/BaseDemo31';
import BaseDemo32 from './components/03-ListElement/BaseDemo32';
import BaseDemo33 from './components/03-ListElement/BaseDemo33';


import BaseDemo40 from './components/04-ReuseTransition/BaseDemo40';
import BaseDemo41 from './components/04-ReuseTransition/BaseDemo41';


export default {

    name: 'app',
    components: {


        BaseDemo01,
        BaseDemo02,
        BaseDemo03,
        BaseDemo04,
        BaseDemo05,
        BaseDemo06,
        BaseDemo07,
        BaseDemo08,
        BaseDemo09,
        BaseDemo10,
        BaseDemo11,
        BaseDemo12,
        BaseDemo13,


        BaseDemo20,
        BaseDemo21,
        BaseDemo22,
        BaseDemo23,
        BaseDemo24,


        BaseDemo30,
        BaseDemo31,
        BaseDemo32,
        BaseDemo33,


        BaseDemo40,
        BaseDemo41,

    },
    data() {

        return {

            show40: true,
            show41: true,
            show42: true,
        }
    }
}


</script>


<style scoped>


.app {
    margin-bottom: 1000px;
}


</style>