import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
// import axios from 'axios'

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
    // {
    //   path: '/',
    //   component:resolve => require(['./views/home/pages/layout.vue'], resolve),
    //   //检测是否注册、注册是否通过
    //   beforeEnter: (to, from, next) => {
    //     let openId = to.params.openid
    //     console.log(openId);
    //     axios.post('/xxx', {
    //       openId: "openId"
    //     })
    //       .then(function (response) {
    //         console.log(response);
    //         switch(response)
    //         {
    //           case 0://待认证
    //             Vue.$vux.toast.show({text:response.data.message,type:'text',time:1000})
    //             break;
    //           case 1://已认证
    //             Vue.$vux.toast.show({text:response.data.message,type:'text',time:1000})
    //             break;
    //           case 2://认证不通过
    //             Vue.$vux.toast.show({text:response.data.message,type:'text',time:1000})
    //             break;
    //           case 3://未注册
    //             Vue.$vux.toast.show({text:response.data.message,type:'text',time:1000})
    //             break;
    //         }
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //         Vue.$vux.toast.show({text:error,type:'text',time:1000});
    //         router.push('/home');
    //
    //       });
    //   }
    // },
    // {
    //   path: '/home',
    //   component:resolve => require(['./views/home/pages/index.vue'], resolve),
    // },
    // {
    //   //将OPENID注入session
    //   path: '/home/:id/:redirectUrl/', redirect: to => {
    //   store.dispatch({
    //     type: 'setSession',
    //     amount: to.params.id
    //   })
    //   return `/${to.params.redirectUrl}/`
    // }
    // },
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
  if (toPath.replace(/[^/]/g, '').length > 2) {
    store.state.common.isIndex = false
    // console.log(store.state.common.isIndex);
  }
  else {
    let depath = toPath === '/' || toPath === '/login' || toPath === '/rank'
    store.state.common.isIndex = depath ? false : true
    // console.log(store.state.common.isIndex);
  }

  if(store.state.common.session){
    // console.log(store.state.common.session);
    next();
  }else{
    store.dispatch({
      type: 'clearSession'
    })

    // window.location.href = `http://${window.document.location.host}/?#/home`

    // router.push({ path: 'login'})
    //window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5c634ca93bc68abf&redirect_uri=http%3a%2f%2fningshuihan.ngrok.cc%2fdoctor%2findex.html&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect"
  }
//http://ningshuihan.ngrok.cc/doctor/index.html
})

export default router = router
