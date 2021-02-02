<template>
  <div class="container">
    <div class="data-trade">
      <div class="title">
        <div>全网数据汇总</div>
        <el-tooltip class="item" effect="dark" content="可查看淘宝直播全网流量概览" placement="top-start">
          <i class="el-icon-question"></i>
        </el-tooltip>
      </div>
      <div class="date-range">
        <div :class="['data-item', {'active': item.active ? true : false}]" v-for="item in dataRangelist" :key="item.id" @click="getParams(item)">{{item.label}}</div>
      </div>
    </div>

    <div class="data-show">
      <div class="data-number">
        <DataCard v-if="list.length" :list="list"/>
      </div>
      <div class="data-chart">
        <p class="title">各类主播分析</p>
        <PieChart v-if="tradeList.length" :tradeList="tradeList"/>
      </div>
    </div>
  </div>
</template>

<script>
import PieChart from '@/components/chart/pieChart'
import DataCard from '@/components/netWork/dataCard'
import MockApi from '@/api/mock'
export default {
  data () {
    return {
      params: {
        days: 30
      },
      fullscreenLoading: false,
      dataRangelist: [
        { id: 1, label: '昨天', value: 1, active: false },
        { id: 2, label: '3天', value: 3, active: false },
        { id: 3, label: '7天', value: 7, active: false },
        { id: 4, label: '15天', value: 15, active: false },
        { id: 5, label: '30天', value: 30, active: true }
      ],
      list: [
        { id: 1, title: '观看人数/ 次数', src: require('@/assets/images/people.png'), valueLeftUnit: '亿人', valueRightUnit: '亿次', valueLeft: '', valuePercentLeft: '', valueRight: '', valueRightRight: '', style: 2 },
        { id: 2, title: '场均观看人数/次数', src: require('@/assets/images/pgVisit.png'), valueLeftUnit: '人', valueRightUnit: '次', valueLeft: '', valuePercentLeft: '', valueRight: '', valueRightRight: '', style: 2 },
        { id: 3, title: '每小时观看人数/次数', src: require('@/assets/images/pgPeople.png'), valueLeftUnit: '人', valueRightUnit: '次', valueLeft: '', valuePercentLeft: '', valueRight: '', valueRightRight: '', style: 2 },
        { id: 4, title: '开播主播数 / 新增主播数', src: require('@/assets/images/pgVisit.png'), valueLeftUnit: '人', valueRightUnit: '次', valueLeft: '', valuePercentLeft: '', valueRight: '', valueRightRight: '', style: 2 },
        { id: 5, title: '开播场次', src: require('@/assets/images/view.png'), valueLeftUnit: '万次', valueRightUnit: '亿次', valueLeft: '', valuePercentLeft: '', valueRight: '', valueRightRight: '', style: 1 },
        { id: 6, title: '直播商品数', src: require('@/assets/images/product.png'), valueLeftUnit: '万件', valueRightUnit: '亿次', valueLeft: '', valuePercentLeft: '', valueRight: '', valueRightRight: '', style: 1 }
      ],
      tradeList: [
      ],
      dataInfo: {}
    }
  },
  components: {
    PieChart, DataCard
  },
  created () {
    this.getChartData()
  },
  methods: {
    getParams (data) {
      this.dataRangelist.forEach(item => {
        item.active = false
        if (item.id === data.id) {
          item.active = true
          this.params.days = data.value
          this.getChartData()
        }
      })
    },
    getChartData () {
      const data = MockApi.tradeList(this.params)
      if (data) {
        this.$parent.nextCpmponent()
      }
      // darenQuantity // 达人主播
      const tempList = []
      var obj = { name: '达人主播', value: 0 }
      if (data.overallAnchorTypeDTO.darenQuantity) {
        obj = { name: '达人主播', value: 0 }
        obj.value = data.overallAnchorTypeDTO.darenQuantity
        tempList.push(obj)
      }
      if (data.overallAnchorTypeDTO.darenShopQuantity) {
        obj = { name: '达人有店铺', value: 0 }
        obj.value = data.overallAnchorTypeDTO.darenShopQuantity
        tempList.push(obj)
      }
      if (data.overallAnchorTypeDTO.shopQuantity) {
        obj = { name: '店铺主播', value: 0 }
        obj.value = data.overallAnchorTypeDTO.shopQuantity
        tempList.push(obj)
      }
      this.tradeList = tempList
      this.list.forEach((item, index) => {
        if (index === 0) {
          item.valueLeft = data.totalNum
          item.valuePercentLeft = data.totalNumPercent
          item.valueRight = data.visitNum
          item.valuePercentRight = data.visitNumPercent
        }
        if (index === 1) {
          item.valueLeft = data.pgTotalNum
          item.valuePercentLeft = data.pgTotalNumPercent
          item.valueRight = data.pgVisitNum
          item.valuePercentRight = data.pgVisitNumPercent
        }
        if (index === 2) {
          item.valueLeft = data.avgTotalNum
          item.valuePercentLeft = data.avgTotalNumPercent
          item.valueRight = data.avgVisitNum
          item.valuePercentRight = data.avgVisitNumPercent
        }
        if (index === 3) {
          item.valueLeft = data.itemQuantity
          item.valuePercentLeft = data.itemQuantityPercent
          item.valueRight = data.newAnchorQuantity
          item.valuePercentRight = data.newAnchorQuantityPercent
        }
        if (index === 4) {
          item.valueLeft = data.liveScene
          item.valuePercentLeft = data.liveScenePercent
          item.valueRight = data.pgVisitNum
          item.valuePercentRight = data.pgVisitNumPercent
        }
        if (index === 5) {
          item.valueLeft = data.itemQuantity
          item.valuePercentLeft = data.itemQuantityPercent
          item.valueRight = data.avgVisitNum
          item.valuePercentRight = data.avgVisitNumPercent
        }
      })
      this.dataInfo = data
    }
  }
}
</script>

<style lang="less" scoped>
  .container{
    padding: 30px;
    .data-trade{
      display: flex;
      height: 73px;
      align-items: center;
      justify-content: space-between;
      .title{
        width: 800px;
        display: flex;
        align-items: center;
      }
      .date-range{
        display: flex;
        width: 400px;
        .data-item{
          cursor: pointer;
          width: 68px;
          height: 34px;
          line-height: 34px;
          background: #fff;
          border-radius: 4px;
          border: 1px solid #e7e8f2;
          font-size: 14px;
          font-weight: 600;
          color: #727487;
          text-align: center;
          margin-right: 14px;
        }
        .active{
          background: #5c6bd0;
          color: #fff;
        }
      }
    }
    .data-show{
      display: flex;
      .data-number{
        width: 1150px;
        margin: 0 30px 0 0;
      }
      .data-chart{
        .title{
          padding: 0 0 0 10px;
        }
        width: 510px;
        height: 304px;
        background: #ffffff;
      }
    }
  }
</style>
