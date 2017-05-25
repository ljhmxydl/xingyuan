import Vue from 'vue'
import FastClick from 'fastclick'
import 'babel-polyfill'
import { sync } from 'vuex-router-sync'
import App from './App'
import router from './router'
import store from './store'
import {ToastPlugin,LoadingPlugin,WechatPlugin,AjaxPlugin,AlertPlugin} from 'vux'

import http from 'vue-resource'
Vue.use(http)
Vue.http.options.emulateJSON = true

Vue.use(ToastPlugin)    //使用提醒
Vue.use(LoadingPlugin)  //使用Loading
Vue.use(WechatPlugin)   //微信js-sdk
Vue.use(AlertPlugin)    //alert的使用
// Vue.use(AjaxPlugin)     //调用axios的ajax请求
// Vue.use(AMap)           //高德地图的使用



//路由和store同步
sync(store, router)
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
