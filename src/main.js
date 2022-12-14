import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 三级联动组件
import Typenav from './pages/Home/Typenav/index'
import { reqCategoryList } from '@/api'
reqCategoryList()
// 注册全局组件
Vue.component('Typenav', Typenav)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
