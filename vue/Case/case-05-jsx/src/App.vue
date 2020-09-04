<!--<template>
    <div id="app">

        <base-data></base-data>

        <base-slot>

            <template #default>
                <div>默认插槽</div>
            </template>

            <slot></slot>

            <template #header>
                <div>具名header插槽</div>
            </template>

            <base-slot-h-w v-slot="{ text }">

                {{ text }}

            </base-slot-h-w>


        </base-slot>

    </div>
</template>-->

<script>
import BaseData from './components/BaseData';
import BaseSlot from './components/BaseSlot';
import BaseSlotHW from './components/BaseSlotHW';
import BaseDemo from './components/BaseDemo';


export default {

    name: 'App',
    components: {
        BaseData,
        BaseSlot,
        BaseSlotHW,
        BaseDemo
    },

    data() {

        return {

            msg: 'hello world',
            show: false,
            num: 1,
            arr: [1, 2, 3],
            arr1: [4, 5, 6],
            arr2: [7, 8, 9],
            content: 'alpha',
        };
    },

    methods: {

        vIf() {

            if (this.num === 1) {

                return <div>1</div>

            } else if (this.num === 2) {

                return <span>2</span>;

            } else {

                return <div>3</div>;
            }
        },
        handleClick(param) {

            console.log('clicked');

            if (typeof param === 'number') {

                console.log(param);
            }
        }
    },

    render(h) {

        const directives = [

                {
                    name: 'splice',
                    value: this.value,
                    modifiers: {number: true}
                }

            ],
            scopedSlots = {

                default: props => <span>{props.text}</span>
            };

        return (

            <h1>

                test

                {this.msg}


                <hr/>


                <div domPropsInnerHTML="<a>href</a>"/>

                <div domPropsTextContent="<a>href</a>"/>

                <div v-show={this.show}>show</div>


                <hr/>


                {true && <div>div</div>}

                {false ? <div>div</div> : <span>span</span>}

                {this.vIf()}


                <hr/>


                <ul>
                    {this.arr.map(item => <li key={item}>{item}</li>)}
                </ul>


                <hr/>


                <button on-click={this.handleClick}>click</button>

                <br/>

                <button onClick={this.handleClick}>click</button>

                <br/>

                <base-demo nativeOnClick={this.handleClick}/>

                <br/>

                <button onClick={() => {
                    this.handleClick(1)
                }}>click
                </button>


                <hr/>


                <div
                    class={['a', 'b']}
                    style={{fontSize: '14px', color: 'red'}}
                >
                    v-bind
                </div>


                <hr/>


                <input v-model={this.content}/>{this.content}


                <hr/>


                <input ref="input"/>

                {this.arr1.map(item => <div ref="xx" key={item}>{item}</div>)}

                {this.arr2.map(item => <div ref="xx" refInFor={true} key={item}>{item}</div>)}


                <hr/>


                <input v-splice={{value: this.value, modifiers: {number: true}}}/>

                <div {...{directives}}></div>


                <hr/>


                <base-slot>

                    <div slot="default">默认插槽</div>
                    <div slot="header">具名header插槽</div>

                </base-slot>


                <base-slot-h-w {...{scopedSlots: {default: (props) => props.text}}} />

                <base-slot-h-w {...scopedSlots} />


            </h1>
        );
    },

    mounted() {

        console.log(this.$refs);

        console.log('this.$scopedSlots: ', this.$scopedSlots);
    }
}


/**
 * JSX == JS + XML(html)
 *
 *
 * JSX 中  <> 用于区分 html
 *         {} 用于区分 js
 *
 *
 * render () {
 *
 *   return (                   // () 使得 return 可以换行输入代码
 *
 *     <h1>this is demo</h1>
 *   );
 * }
 */


/**
 * this.$options                // 过滤器集合
 *
 *
 * <!-- 正常使用过滤器 -->
 * <div>{{ msg | capitalize }}</div>
 *
 * <!-- 在jsx中使用过滤器 -->
 * <div>{ this.$options.filters('capitalize')(this.msg)}</div>
 */


</script>

<style>

</style>
