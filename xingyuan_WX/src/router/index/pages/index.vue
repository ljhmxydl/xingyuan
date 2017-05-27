<template>
  <div class="enter">
    杏缘医生
  </div>
</template>

<script>
//import {XButton,XHeader} from 'vux'
import './index.less'
import Vue from 'vue'
//import axios from 'config/http'
/*import Wechat from 'config/wx.config'
Wechat()*/
export default {
  components: {
  },
  data () {
    return {
    }
  },
  mounted(){
    this.checkDoctorStatus()
  },
  methods:{
    checkDoctorStatus(openid,code){
      function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
          return unescape(r[2]);
        return null;
      }

      var openid = window.localStorage.getItem('openid');
      var code = GetQueryString('code');
      this.$http.get('/api/doctor/v1/check.json', {params: {"openid": openid, "code": code}})
        .then(function (response) {
          console.log(response.body);
          switch (response.body.code) {
            case '100'://已认证
              window.localStorage.setItem('openid', response.body.openid)
              Vue.$vux.toast.show({text: response.body.msg, type: 'text', time: 2000})
              break;
            case '101'://未注册
//              console.log(1);
//              window.localStorage.setItem('openid', response.body.openid)
              Vue.$vux.toast.show({text: response.body.msg, type: 'text', time: 2000})
              this.$router.replace('/login')
              break;
            case '102'://认证不通过
              window.localStorage.setItem('openid', response.body.openid)
              Vue.$vux.toast.show({text: response.body.msg, type: 'text', time: 2000});
//            this.$router.replace('login')
              break;
            case '103'://未注册
              window.localStorage.setItem('openid', response.body.openid)
              Vue.$vux.toast.show({text: response.body.msg, type: 'text', time: 2000})
//            this.$router.replace('login')
              break;
          }
        })
        .catch(function (error) {
          console.log(error);
          Vue.$vux.toast.show({text: '网络异常', type: 'text', time: 1000});
//          next()
          // window.location.href = `http://${window.document.location.host}/?#/home/`
        })
    }
  }
}
</script>
