import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

new Vue({

  /**
   * 完整版: 有编译器
   *
   * 运行版: 缺少编译器( 体积减少 30% )
   */

  template: `hello world`,            // 完整版:


  render: h => h(App),                // 运行版: 缺少编译器，运行相对较快，且体积小


}).$mount('#app');