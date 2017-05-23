<template>
  <div id="askOrder">

    <tab :line-width=2  v-model="index">
      <tab-item class="vux-center" v-for="(item, index) in list" @click="demo1 = item" :key="index">{{item}}</tab-item>
    </tab>

    <swiper v-model="index"  :show-dots="false">
      <swiper-item>
        <askOrderItem
          v-for="(item, index) in askOrders"
          :orderData="item"
        ></askOrderItem>
      </swiper-item>

      <swiper-item>
        <askOrderItem
          v-for="(item, index) in askOrders"
          v-if="item.status == 0"
          :orderData="item"
        ></askOrderItem>
      </swiper-item>

      <swiper-item>
        <askOrderItem
          v-for="(item, index) in askOrders"
          v-if="item.status == 1"
          :orderData="item"
        ></askOrderItem>
      </swiper-item>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Tab, TabItem,Swiper, SwiperItem } from 'vux'
  import askOrderItem from './askOrderItem.vue'
  export default {
    data () {
      return {
        list:["全部","待回复","已回复"],
        index: 0,
        askOrders:[
          {
            "askOrderId":"SN123456789",
            "medicalCardId":"诊疗卡ID",
            "doctorId":"医生ID",
            "patientId":"患者ID",
            "questions":[
              {"qIndex":0,"question":"问题1","imgurl":"xxxx","response":"xxxxx"},
              {"qIndex":1,"question":"问题2","imgurl":"xxxx","response":"xxxxx"}
            ],
            "orders":[
              {"orderId":"o00001"},
              {"orderId":"o00002"}
            ],
            "status":0
          },
          {
            "askOrderId":"SN987654321",
            "medicalCardId":"诊疗卡ID",
            "doctorId":"医生ID",
            "patientId":"患者ID",
            "questions":[
              {"qIndex":0,"question":"问题1","imgurl":"xxxx","response":"xxxxx"},
              {"qIndex":1,"question":"问题2","imgurl":"xxxx","response":"xxxxx"}
            ],
            "orders":[
              {"orderId":"o00001"},
              {"orderId":"o00002"}
            ],
            "status":1
          }
        ]
      }
    },
    components: {Tab, TabItem ,Swiper, SwiperItem ,askOrderItem},
    methods: {
      onItemClick (index) {
        console.log('on item click:', index)
      }
    }
  }
</script>

<style lang="less">

  #askOrder {
    margin-top: 10/40rem;
    .vux-tab .vux-tab-item{
      color:#333 !important;
    }
  }

</style>
