<template>
  <div class="medicalCardItem">
    <!--诊卡名称-->
    <span class="medicalName">{{ medicalCardData.name }}</span>

    <!--删除-->
    <span class="deleteMedicalCard">删除</span>

    <!--诊卡二维码-->
    <router-link to="/order/askOrders" class="medicalEWM">二维码</router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {}
    },
    components: {},
    props:['medicalCardData']
  }
</script>

<style lang="less">
  .medicalCardItem{
    width: 100%;
    height: 100/40rem;
    line-height:100/40rem;
    background-color: #fff;
    padding: 0 30/40rem;
    font-size: 30/40rem;

    .deleteMedicalCard{
      float: right;
      margin-left: 50/40rem;
    }

    .medicalEWM{
      display: inline-block;
      float: right;
    }
  }
</style>
