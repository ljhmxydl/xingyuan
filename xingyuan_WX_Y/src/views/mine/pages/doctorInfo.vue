<template>
  <div id="doctorInfo">
    <x-header :left-options="{showBack: true,backText:''}">个人信息</x-header>
    <group>
      <!--头像-->
      <CellBox title="头像" link="/mine/doctorInfo" is-link="true" class="headImg">

        <div>
          <span>头像</span>
          <img style="float: right;" src="../../../assets/images/index/headimgurl.png">
        </div>

      </CellBox>

      <cell title="姓名"></cell>
      <cell title="电话"></cell>
      <cell title="医院"></cell>
      <cell title="科室"></cell>
      <cell title="职称"></cell>
      <cell title="擅长"></cell>
      <cell title="个人简介"></cell>

    </group>
  </div>
</template>

<script>
  import {XHeader, Group, Cell,CellBox} from 'vux'

  export default {
    components: {
      XHeader, Group, Cell,CellBox
    }
  }
</script>

<style lang="less">
  .headImg{
    padding: 36/40rem 30/40rem;
    line-height: 110/40rem;
    height: 182/40rem;

    img{
      width: 110/40rem;
      margin-right: 20/40rem;
    }
  }

  .vux-cell-box > div{
    width: 100%;
  }
</style>
