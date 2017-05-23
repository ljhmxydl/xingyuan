<template>
  <div id="order">
    <tab>
      <tab-item :selected="$route.path === '/order/medicalCard'" @on-item-click="onItemClick"><router-link to="/order/medicalCard">功能管理</router-link></tab-item>
      <tab-item :selected="$route.path === '/order/askOrders'" @on-item-click="onItemClick"><router-link to="/order/askOrders">咨询订单</router-link></tab-item>
    </tab>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>

</template>

<script>
import './index.less'
import { Tab, TabItem,Swiper, SwiperItem } from 'vux'
export default {
  data () {
    return {

    }
  },
  components: {Tab, TabItem ,Swiper, SwiperItem},
  methods: {
    onItemClick (index) {
      console.log('on item click:', index)
    }
  }
}
</script>
