<template>
  <div id="login">
    <x-header :left-options="{backText: ''}">申请注册医生</x-header>

    <group>
      <x-input title="注册码" placeholder="请写邀请码，没有请留空" label-width="3.7rem"></x-input>
      <x-input title="医生名" name="username" placeholder="医生名" is-type="china-name" label-width="3.7rem"></x-input>
      <x-input title="手机" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" label-width="3.7rem"
               required></x-input>
      <x-input title="所属医院" placeholder="所属医院" label-width="3.7rem"></x-input>
      <x-input title="科室" placeholder="科室" label-width="3.7rem"></x-input>
      <x-input title="职称" placeholder="职称" label-width="3.7rem"></x-input>
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
  import {XHeader, Group, Cell, XInput, XButton} from 'vux'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    components: {
      XHeader, Group, XInput, XButton, Cell
    },
    data () {
      return {

      }
    },
    methods: {}
  }
</script>

<style lang="less" scoped>

</style>
