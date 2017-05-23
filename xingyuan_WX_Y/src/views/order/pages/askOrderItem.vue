<template>
  <div class="askOrderItem">
    <flexbox>
      <flexbox-item>
        <div class="flex-demo">
          <p>订单号：{{ orderData.askOrderId }}</p>
          <p>患者：{{ orderData.patientId }}</p>
        </div>
      </flexbox-item>
      <flexbox-item style="text-align: right;">
        <p>状态：<span>{{ statuMsg }}</span></p>
        <button class="editor" v-if="orderData.status == 0">编辑</button>
        <button v-else class="check">查看</button>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Flexbox, FlexboxItem} from 'vux'
  export default {
    data () {
      return {}
    },
    props:['orderData'],
    components: {Flexbox, FlexboxItem},
    computed:{
      statuMsg:function () {
        return this.orderData.status == 0 ? "待回复" : "已回复"
      }
    }
  }
</script>

<style lang="less">
  .askOrderItem {
    width: 100%;
    height: 184/40rem;
    padding: 30/40rem;
    color:#333;
    font-size: 26/40rem;
    background-color: #fff;
    border-bottom: 1px solid #f2f2f2;

    button{
      margin:0; padding:0;
      width: 140/40rem;
      height: 60/40rem;
      border:none;
      border-radius: 10/40rem;
      margin-top: 30/40rem;
      box-shadow:none
    }

    .editor{
      color:#fff;
      background-color: #4CAED0;
    }
    .check{
      color:#666;
      border: 1px solid #dfdfdf;
      background-color: #fff;
    }
  }
</style>
