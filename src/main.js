// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VHead from './components/Head'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import './assets/icon/iconfont.css'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.qs = Qs
Vue.use(ElementUI)
Vue.use(mavonEditor)
Vue.component('VHead', VHead)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
