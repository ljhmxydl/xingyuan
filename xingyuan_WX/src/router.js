import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import index from './router/index/router'
//路由开始
import login from './featuers/login/router'
import fertilizer from './featuers/fertilizer/router'
import record from './featuers/record/router'
import personal from './featuers/personal/router'
import order from './featuers/order/router'
import user from './featuers/user/router'

Vue.use(Router)

let router = new Router({
  mode: 'hash',
  routes: [
    ...index,
    login,
    fertilizer,
    record,
    personal,
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

  function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
      return unescape(r[2]);
    return null;
  }

  var openid = window.localStorage.getItem('openid');
  var code = GetQueryString('code');

  if (!openid || openid == undefined) {
    alert("code:"+code)
    if (code == null || code == undefined) {
      alert(1)
      var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5c634ca93bc68abf&redirect_uri=http%3a%2f%2fningshuihan.ngrok.cc%2fdoctor%2findex.html&response_type=code&scope=snsapi_base&#wechat_redirect';
       location.href = url;
      //next()
    } else {
      Vue.http.get('/api/doctor/v1/check.json', {params: {"openid": openid, "code": code}})
        .then(function (response) {
          switch (response.body.code) {
            case '998'://已认证
              Vue.$vux.toast.show({text: response.body.msg, type: 'text', time: 2000})
              break;
            case '100'://已认证
              // window.localStorage.setItem('openid', response.body.openid)
              Vue.$vux.toast.show({text: response.body.msg, type: 'text', time: 2000})
              break;
            case '101'://未注册
              console.log(1);
              window.localStorage.setItem('openid', response.body.openid)
              Vue.$vux.toast.show({text: response.body.msg, type: 'text', time: 2000})
              router.replace('/login')
              break;
            case '102'://认证不通过
              window.localStorage.setItem('openid', response.body.openid)
              Vue.$vux.toast.show({text: response.body.msg, type: 'text', time: 2000})
              next()
              break;
            case '103'://未注册
              window.localStorage.setItem('openid', response.body.openid)
              Vue.$vux.toast.show({text: response.body.msg, type: 'text', time: 2000})
              next()
              break;
          }
        })
        .catch(function (error) {
          console.log(error);
          Vue.$vux.toast.show({text: '网络异常', type: 'text', time: 1000});
          next()
        })
    }
  } else {
    alert(openid)
    next()
  }
})

export default router = router
