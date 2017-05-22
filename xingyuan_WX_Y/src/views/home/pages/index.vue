<template>
  <div>
    <x-header :left-options="{showBack: false,backText:'返回'}"
              :right-options="{showMore: true}"
    >
      首 页
    </x-header>

    <!--<div class="main">
      <flexbox>
        <flexbox-item>
          <div class="flex-demo">
            <router-link to="/home/photo">
              <img src="../../static/img/home1.png" alt="">
              <p>拍照上传</p>
            </router-link>
          </div>
        </flexbox-item>

        <flexbox-item>
          <div class="flex-demo">
            <router-link to="/home/chose">
              <img src="../../static/img/home2.png" alt="">
              <p>在线选药</p>
            </router-link>
          </div>
        </flexbox-item>

      </flexbox>

      <flexbox>
        <flexbox-item>
          <div class="flex-demo">
            <router-link to="/home/ask">
              <img src="../../static/img/home3.png" alt="">
              <p>咨询预约</p>
            </router-link>
          </div>
        </flexbox-item>

        <flexbox-item>
          <div class="flex-demo">
            <router-link to="/home/article">
              <img src="../../static/img/home4.png" alt="">
              <p>发布文章</p>
            </router-link>
          </div>
        </flexbox-item>

      </flexbox>
    </div>-->

    <group title="杏缘动态" class="homeGroup">
      <cell title="医生使用指南"  is-link></cell>
    </group>


  </div>
</template>

<script>
  import {XHeader, Flexbox, FlexboxItem, Group, Cell} from 'vux'

  export default {
    components: {
      XHeader,
      Flexbox,
      FlexboxItem,
      Group,
      Cell
    },
    data () {
      return {
      }
    }
  }
</script>

<style>
  .main {
    width: 100%;
    height: auto;
    background-color: #fff;
  }

  .flex-demo {
    padding-top: 20px;
    text-align: center;
    color: #000;
    background-color: #fff;
    margin-bottom: 8px;
    border-radius: 4px;
    -webkit-background-clip: padding-box;
  }
  .flex-demo img{
    width: 50%;
  }

  .flex-demo p{
    font-size: 18px;
    color:#000
  }

</style>
