// const R_INDEX = r => require.ensure([], () => r(require('./pages/index')), '')
import store from '../../store'
import axios from 'axios'
import Vue from 'vue'
export default [
  {
    path: '/',
    component:resolve => require(['./pages/layout'], resolve),
    redirect:'/home'
    //检测是否注册、注册是否通过
    /*beforeEnter: (to, from, next) => {
      let openId = to.params.openid
      console.log(openId);
      axios({
        method:'post',
        url: '/api/doctor/v1/check.json',
        params:{
          openid: openId
        }
      })
        .then(function (response) {
          console.log(response);
          switch(response.code)
          {
            case '100'://已认证
              window.location.href = `http://${window.document.location.host}/?#/home`
              break;
            case '101'://未注册
              Vue.$vux.toast.show({text:response.msg,type:'text',time:2000})
              break;
            case '102'://认证不通过
              Vue.$vux.toast.show({text:response.msg,type:'text',time:2000})
              break;
            case '103'://未注册
              Vue.$vux.toast.show({text:response.msg,type:'text',time:2000})
              break;
          }
        })
        .catch(function (error) {
          console.log(error);
          Vue.$vux.toast.show({text:'网络异常',type:'text',time:1000});
          // window.location.href = `http://${window.document.location.host}/?#/home/`
        });
    }*/
  },
  {
    path: '/home',
    component:resolve => require(['./pages/index'], resolve),
  },
  {
    //将OPENID注入session
    path: '/home/:id/:redirectUrl/', redirect: to => {
      store.dispatch({
        type: 'setSession',
        amount: to.params.id
      })
      return `/${to.params.redirectUrl}/`
    }
  }
]
