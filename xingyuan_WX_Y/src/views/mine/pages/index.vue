<template>
  <div id="mine">
    <x-header :left-options="{showBack: false}">我的</x-header>

    <group>
      <CellBox link="/mine/doctorInfo" is-link="true" class="doctorInfo">
        <div>
          <img src="../../../assets/images/index/headimgurl.png">
        </div>
        <div class="infoDiv">
          <p><span class="doctorName">黄医生</span><span>主治医师</span></p>
          <p>佛山市高明区中医院 中医心内科</p>
        </div>
      </CellBox>
    </group>

    <group>
      <cell border-intent="false" title="积分提现" is-link="true" link="/mine/doctorInfo"></cell>
      <cell title="分享工作室" is-link="true" link="/mine/doctorInfo"></cell>
      <cell title="处方模板" is-link="true" link="/mine/doctorInfo"></cell>
    </group>


  </div>
</template>

<script>
  import './index.less'
import {XHeader,Cell, CellBox, Group} from 'vux'

export default {
  components: {
    XHeader,Cell, CellBox, Group
  }
}
</script>
