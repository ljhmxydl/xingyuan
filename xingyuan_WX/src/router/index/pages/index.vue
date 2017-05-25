<template>
  <div class="enter">
    杏缘医生
  </div>
</template>

<script>
//import {XButton,XHeader} from 'vux'
import './index.less'
import Vue from 'vue'
import axios from 'axios'
/*import Wechat from 'config/wx.config'
Wechat()*/
export default {
  components: {
//    XButton,XHeader
  },
  beforeRouteEnter(to, from, next){
    next(vm => {
      vm.checkDoctorStatus()
    })
  },
  data () {
    return {


    }
  },
  methods:{
    checkDoctorStatus(){
//      axios.post('/api/doctor/v1/check.json',{"openid":1})
      /*axios({
        method:'get',
        url: '/api/doctor/v1/check.json',
        data:{
          "openid":1
        }
      })*/
      this.$http.post('/api/doctor/v1/check.json',{"openid":1,"SESSION":"oAnmJxNOk4geid2KrRdZA3ZsUUWc"})
      .then(function (response) {
        console.log(response.code);
        console.log(response.body);
        switch(response.body.code)
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
