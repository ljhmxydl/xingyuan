<template>
  <div id="medicalCard">
    <!--<x-header :left-options="{backText: ''}">我的诊卡</x-header>-->
    <div class="createMedicalCard">
      <x-button>新建诊卡</x-button>
    </div>
    <medicalCardItem
      v-for="(item, index) in medicalCards"
      :medicalCardData="item"
    ></medicalCardItem>
  </div>
</template>

<script type="text/ecmascript-6">
  import { XHeader,XButton } from 'vux'
  import medicalCardItem from './medicalCardItem.vue'
  export default {
    data () {
      return {
        medicalCards:[
          {
            "medicalCardId":"诊疗卡ID",
            "doctorId":"医生ID",
            "name":"肠胃",
            "desc":"描述",
            "needPay":1,
            "askFee":30,
            "questions":[
              {"qIndex":0,"question":"问题","imgurl":"xxxx"},
              {"qIndex":1,"question":"问题","imgurl":"xxxx"}
            ],
            "askorders":[
              {"askOrderId":"a00001"},
              {"askOrderId":"a00002"}
            ]
          },
          {
            "medicalCardId":"诊疗卡ID",
            "doctorId":"医生ID",
            "name":"不孕不育",
            "desc":"描述",
            "needPay":1,
            "askFee":30,
            "questions":[
              {"qIndex":0,"question":"问题","imgurl":"xxxx"},
              {"qIndex":1,"question":"问题","imgurl":"xxxx"}
            ],
            "askorders":[
              {"askOrderId":"a00001"},
              {"askOrderId":"a00002"}
            ]
          }
        ]
      }
    },
    components: {XHeader,XButton,medicalCardItem}
  }
</script>

<style lang="less">
  .createMedicalCard{
    padding: 30/40rem;
  }
</style>
