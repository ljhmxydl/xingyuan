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

  function addcookie(name,value,expireHours){
    var cookieString=name+"="+escape(value)+"; path=/";
    //判断是否设置过期时间
    if(expireHours>0){
      var date=new Date();
      date.setTime(date.getTime+expireHours*3600*1000);
      cookieString=cookieString+"; expire="+date.toGMTString();
    }
    document.cookie=cookieString;
  }

  function getcookie(name){
    var strcookie=document.cookie;
    var arrcookie=strcookie.split("; ");
    for(var i=0;i<arrcookie.length;i++){
      var arr=arrcookie[i].split("=");
      if(arr[0]==name)return decodeURIComponent(arr[1]); //增加对特殊字符的解析
    }
    return "";
  }

  function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
      return unescape(r[2]);
    return null;
  }

  // var wxopenid=getcookie('wxopenid');
  var openid = window.localStorage.getItem('openid');
  var code = GetQueryString('code');
  alert(code)
  if (!openid) {
    if (code == null) {
      var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxddae47b94ee68adc&redirect_uri=http%3a%2f%2f39.108.65.30%3a1314&response_type=code&scope=snsapi_base&#wechat_redirect';
      //var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5c634ca93bc68abf&redirect_uri=http%3a%2f%2fningshuihan.ngrok.cc%2fdoctor%2findex.html&response_type=code&scope=snsapi_base&#wechat_redirect';
      location.href = url;

    }else{
      Vue.http.get('/api/doctor/v1/check.json',{"openid":store.state.common.session,"code":code})
        .then(function (response) {
//        console.log(response.code);
          console.log(response.body);
          switch(response.body.code)
          {
            case '998'://已认证
//            this.$router.replace('login')
              Vue.$vux.toast.show({text:response.body.msg,type:'text',time:2000})
              break;
            case '100'://已认证
//            this.$router.replace('login')
              Vue.$vux.toast.show({text:response.body.msg,type:'text',time:2000})
              break;
            case '101'://未注册
              console.log(1);
              Vue.$vux.toast.show({text:response.body.msg,type:'text',time:2000})
              this.$router.replace('login')
              break;
            case '102'://认证不通过
              Vue.$vux.toast.show({text:response.body.msg,type:'text',time:2000})
//            this.$router.replace('login')
              break;
            case '103'://未注册
              Vue.$vux.toast.show({text:response.body.msg,type:'text',time:2000})
//            this.$router.replace('login')
              break;
          }
        })
        .catch(function (error) {
          console.log(error);
          Vue.$vux.toast.show({text:'网络异常',type:'text',time:1000});
          window.localStorage.setItem('openid','1231')
          next()
          // window.location.href = `http://${window.document.location.host}/?#/home/`
        })

    // next()
  }
  }else {
    next()
  }

  /*(function () {
    // alert(to.query)
    // alert(1)

    var wxopenid=getcookie('wxopenid');
    var key=getcookie('key');
    if (key=='') {
      var access_code = GetQueryString('code');
      // alert(access_code)
      if (wxopenid == "") {
        if (access_code == null) {
          var fromurl = location.href;

          // alert(fromurl);
          //var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5c634ca93bc68abf&redirect_uri=' + encodeURIComponent(fromurl) + '&response_type=code&scope=snsapi_base#wechat_redirect';
          // var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxddae47b94ee68adc&redirect_uri=http%3a%2f%2f39.108.65.30%3a1314&response_type=code&scope=snsapi_base&#wechat_redirect';
          var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5c634ca93bc68abf&redirect_uri=http%3a%2f%2fningshuihan.ngrok.cc%2fdoctor%2findex.html&response_type=code&scope=snsapi_base&#wechat_redirect';
          location.href = url;
        }/!*
        else{
          alert(1)
          Vue.http.post('/api/doctor/v1/check.json',{"openid":this.$store.state.common.session,"code":access_code})
            .then(function(result){
              switch(result.body.code)
              {
                case '100'://已认证
//            this.$router.replace('login')
                  Vue.$vux.toast.show({text:response.body.msg,type:'text',time:2000})
                  break;
                case '101'://未注册
                  console.log(1);
                  Vue.$vux.toast.show({text:response.body.msg,type:'text',time:2000})
                  this.$router.replace('login')
                  break;
                case '102'://认证不通过
                  Vue.$vux.toast.show({text:response.body.msg,type:'text',time:2000})
//            this.$router.replace('login')
                  break;
                case '103'://未注册
                  Vue.$vux.toast.show({text:response.body.msg,type:'text',time:2000})
//            this.$router.replace('login')
                  break;
              }


              /!*if (result!=null && result.hasOwnProperty('openid') && result.openid!=""){
               addcookie('wxopenid',result.openid,360000);
               // getlogininfo(result.openid);
               }
               else
               {
               alert('微信身份识别失败 \n '+result);
               location.href=fromurl;
               }*!/
            })}*!/




      }
    }
  })()*/

  /*if(store.state.common.session){

    next();
  }else{
    store.dispatch({
      type: 'clearSession'
    })
    next()
    //window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5c634ca93bc68abf&redirect_uri=http%3a%2f%2fningshuihan.ngrok.cc%2fdoctor%2findex.html&response_type=code&scope=snsapi_base&#wechat_redirect"
  }*/
})

export default router = router
