import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({  //配置对象的属性名是一些固定的名称，不能随意修改 路由器配置好后可以开始写界面
  el: '#app',
  components: {App},
  template: '<App/>',
  router
})
