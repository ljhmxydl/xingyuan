<template>
  <div class="weui_tab_tabbar">
    <tabbar>
      <tabbar-item :selected="$route.path.indexOf('/home') != -1" link="/home">
        <img slot="icon" src="../assets/images/index/index_1.png">
        <img slot="icon-active" src="../assets/images/index/index_1_1.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :selected="$route.path.indexOf('/order') != -1" link="/order">
        <img slot="icon" src="../assets/images/index/index_2.png">
        <img slot="icon-active" src="../assets/images/index/index_2_1.png">
        <span slot="label">问诊</span>
      </tabbar-item>
      <tabbar-item :selected="$route.path.indexOf('/patient') != -1" link="/patient">
        <img slot="icon" src="../assets/images/index/index_3.png">
        <img slot="icon-active" src="../assets/images/index/index_3_1.png">
        <span slot="label">患者</span>
      </tabbar-item>
      <tabbar-item :selected="$route.path.indexOf('/mine') != -1" link="/mine">
        <img slot="icon" src="../assets/images/index/index_4.png">
        <img slot="icon-active" src="../assets/images/index/index_4_1.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'

  export default {
    ready () {
    },
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style type="text/css">
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
    color:#4CADD0 !important;
  }

</style>
