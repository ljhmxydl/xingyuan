<template>
  <div style="height:100%;">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabbar v-if="isIndex"></tabbar>
  </div>
</template>

<script>
import 'config/common.less'
import store from 'vuex'
import Tabbar from './components/tabbar.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    Tabbar,
  },
  computed: {
    isIndex () {
      return this.$store.state.common.isIndex
    }
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
</style>
