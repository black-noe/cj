import Vue from 'vue'
import App from './App.vue'
import api from './api'
import store from './store'   //vuex配置
import router from './router' //路由配置
import 'lib-flexible' //适配
import ElementUI from 'element-ui'; //
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.prototype.$api = api  //API原型链挂载

Vue.use(ElementUI);

new Vue({   //挂载
  store,
  router,
  render: h => h(App),
}).$mount('#app')
