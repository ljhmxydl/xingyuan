<template>
  <div id="home">
    <div class="home_hd">
      <img src="../../../assets/images/index/headimgurl.png" class="headimg">
      <p>黄医生</p>
    </div>
    <div class="home_bd">
      <flexbox class="flex1">
        <flexbox-item><div class="flex-demo"><img src="../../../assets/images/index/index_5.png" alt=""><p>患者咨询</p></div></flexbox-item>
        <flexbox-item><div class="flex-demo"><img src="../../../assets/images/index/index_6.png" alt=""><p>订单</p></div></flexbox-item>
        <flexbox-item><div class="flex-demo"><img src="../../../assets/images/index/index_7.png" alt=""><p>问诊</p></div></flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item><div class="flex-demo"><img src="../../../assets/images/index/index_8.png" alt=""><p>在线开方</p></div></flexbox-item>
        <flexbox-item><div class="flex-demo"><img src="../../../assets/images/index/index_9.png" alt=""><p>上传处方</p></div></flexbox-item>
        <flexbox-item><div class="flex-demo"><img src="../../../assets/images/index/index_10.png" alt=""><p>我的诊卡</p></div></flexbox-item>
        <flexbox-item><div class="flex-demo"><img src="../../../assets/images/index/index_11.png" alt=""><p>我的名片</p></div></flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
  import {Flexbox, FlexboxItem} from 'vux'

  export default {
    components: {
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="less">

  .home_hd{
    background-color:#fff;
    padding: 50/40rem 0 20/40rem;
    text-align: center;
    height: 310/40rem;
    .headimg{
      width: 176/40rem;
    }
    p{
      font-size: 36/40rem;
      color:#333;
      line-height:1em;
    }
  }

  .home_bd{
    text-align: center;
    margin-top: 10px;
    height: 424/40rem;
    background-color:#fff;

    .vux-flexbox{
      height: 50%;

      .flex-demo {
        text-align: center;
        color: #333;
        height: 100%;
        font-size: 26/40rem;

        img{
          width: 68/40rem;
        }
      }
    }

    .flex1{
      padding: 0 50/40rem;
    }

  }

</style>
