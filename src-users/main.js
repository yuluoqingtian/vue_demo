import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

import {Button} from 'mint-ui'

//声明使用插件
Vue.use(VueResource) //内部会给VM添加一个属性$http{get(),set()}
Vue.component(Button.name,Button)

new Vue({
  el:'#app',
  components:{App},
  template:'<App/>'
})
