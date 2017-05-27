<template>
  <div id="login">
    <x-header :left-options="{showBack: false}">申请注册医生</x-header>

    <group>
      <x-input title="医生名" name="username" placeholder="医生名" is-type="china-name" label-width="3.7rem" v-model="name"></x-input>
      <div class="gender" style="padding:0 0.75rem;">
        <span style="display: inline-block;width: 3.75rem;">性别</span>
        <checker v-model="gender" :max="2" default-item-class="demo2-item" selected-item-class="demo2-item-selected">
          <checker-item value="1">男</checker-item>
          <checker-item value="2">女</checker-item>
        </checker>
      </div>


      <x-input title="手机" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" label-width="3.7rem"
               required v-model="mobile"></x-input>

      <x-input title="所属医院" placeholder="所属医院" label-width="3.7rem" v-model="hospitalName"></x-input>
      <selector placeholder="请选择科室" v-model="department" title="科室"  :options="departmentList" @on-change="onChange"></selector>


      <x-input title="职称" placeholder="职称" label-width="3.7rem" v-model="jobTitle"></x-input>
      <x-input title="备注" placeholder="备注" label-width="3.7rem" v-model="remark"></x-input>
    </group>
    <!--确认-->

    <div style="padding:0 0.75rem;font-size: 0.75rem;line-height: 2.5rem;">
      <p><input type="checkbox" disabled="true" checked style="margin-right: 8px;">确认表示同意《
        <router-link to="/order/askOrders" style="display: inline-block;color:#4CAED0">杏缘医生注册协议</router-link>
        》
      </p>

      <x-button @click.native="startLogin">确认</x-button>
    </div>


  </div>
</template>

<script>
  import {XHeader, Group, Cell, XInput, XButton,Selector,Checker, CheckerItem} from 'vux'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    components: {
      XHeader, Group, XInput, XButton, Cell,Selector,Checker, CheckerItem
    },
    data () {
      return {
        name:'',
        gender:"",
        mobile:'',
        hospitalName:'',
        department:"",
        departmentList:["内科","外科"],
        jobTitle:"",
        remark:""
      }
    },
    methods: {
      startLogin(){
        if (!this.name || !this.gender || !this.mobile) {
          this.$vux.toast.show({text: '请填写完整信息', type:'warn', time: 2000})
        }else{
          var openid = window.localStorage.getItem('openid');
          alert(openid)
          console.log(openid);
          var doctorInfo = {
            name: this.name,
            gender: this.gender,
            mobile: this.mobile,
            hospitalName: this.hospitalName,
            department: this.department,
            jobTitle: this.jobTitle,
            remark: this.remark,
            openid: openid
          }
          var that = this;
          this.$http.post('/api/doctor/v1/register.json', doctorInfo)
            .then(function (response) {
              switch (response.body.code) {
                case '998'://已认证
                  that.$vux.toast.show({text: response.body.msg, type: 'text', time: 2000})
                  break;
                case '104'://已认证
                  that.$vux.toast.show({text: "注册成功，请您等待客服认证", time: 2000,type:"success"})
                  break;
              }
            })
            .catch(function (error) {
              console.log(error);
              that.$vux.toast.show({text: '网络异常', type: 'warn', time: 3000});
            })
        }

      },
      onChange(val){
        console.log(val)
      }
    }
  }
</script>

<style lang="less" scoped>
  .demo2-item {
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
    display: inline-block;
    border-radius: 50%;
    line-height: 30px;
    text-align: center;
  }
  .demo2-item-selected {
    border-color: #4CAED0;
  }
</style>
