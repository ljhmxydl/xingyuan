import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

//路由开始
import login from './views/login/router'
import home from './views/home/router'
import order from './views/order/router'
import patient from './views/patient/router'
import mine from './views/mine/router'

import fertilizer from './views/fertilizer/router'
import user from './views/user/router'

Vue.use(Router)

let router = new Router({
  mode: 'hash',
  routes: [
    ...home,
    login,
    fertilizer,
    mine,
    patient,
    order,
    user
  ]
})

// 页面刷新时，重新赋值session
// if (window.localStorage.getItem('session')){
//    store.dispatch({
//       type: 'setSession',
//       amount: window.localStorage.getItem('session')
//    })
// }

//是否有OPENID若没有则跳到授权
router.beforeEach((to, from, next) => {
  //处理导航是否结束
  let toPath = to.path
  let fromPath = from.path
  console.log(`to: ${toPath} from: ${fromPath}`)
  if (toPath.replace(/[^/]/g, '').length > 1) {
    alert(1)
    store.state.common.isIndex = false
    console.log(store.state.common.isIndex);
  }
  else {
    let depath = toPath === '/' || toPath === '/invite' || toPath === '/rank'
    store.state.common.isIndex = depath ? false : true
    console.log(store.state.common.isIndex);
  }

  if(store.state.common.session){

    next();
  }else{
    store.dispatch({
      type: 'clearSession'
    })
    window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf565864b6a1a358d&redirect_uri=http%3a%2f%2fpeifei.qmant.com%2fnoa%2ftoken%3fpage%3dhttp%3a%2f%2fpeifei.qmant.com/index&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect"
  }
})

export default router = router
