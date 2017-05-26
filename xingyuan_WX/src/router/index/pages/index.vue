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
//    XButton,XHeader
  },
  beforeRouteEnter(to, from, next){
    function GetQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null)
        return unescape(r[2]);
      return null;
    }
    var code = GetQueryString('code');

//    this.checkDoctorStatus(code)
    next(vm => {
//      alert(code);
//      vm.checkDoctorStatus(code)

    })
  },
  data () {
    return {
    }
  },
  mounted(){
//    alert(1)
//    this.checkDoctorStatus(code)
  },
  methods:{
    checkDoctorStatus(code){
      alert(1)
//      axios.post('/api/doctor/v1/check.json',{"openid":1})
      /*axios({
        method:'post',
        url: '/api/doctor/v1/check.json',
        params:{
          "openid":1
        }
      })*/
      this.$http.get('/api/doctor/v1/check.json',{"openid":this.$store.state.common.session,"code":code})
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
          // window.location.href = `http://${window.document.location.host}/?#/home/`
        })
    }
  }
}
</script>
