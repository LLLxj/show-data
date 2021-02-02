<template>
  <div class="container">
    <div class="data-trade">
      <div class="title">
        <div>全网流量总趋势</div>
        <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
          <i class="el-icon-question"></i>
        </el-tooltip>
      </div>
      <div class="date-range">
        <div :class="['data-item', {'active': item.active ? true : false}]" v-for="item in dataRangelist" :key="item.id" @click="getParams(item)">{{item.label}}</div>
      </div>
    </div>
    <el-card>
      <LineChart :width="width" :params="params" :height="height" :anchorQuantityList="anchorQuantityList" :liveDayList="liveDayList" :liveSceneList="liveSceneList"
      :pgTotalNumList="pgTotalNumList" :pgVisitNumList="pgVisitNumList" :totalNumList="totalNumList" :visitNumList="visitNumList"/>
    </el-card>
  </div>
</template>

<script>
import LineChart from '@/components/chart/mixChart'
import MockApi from '@/api/mock'
export default {
  name: 'dataInfo',
  components: {
    LineChart
  },
  data () {
    return {
      width: '1600px',
      height: '400px',
      xAxis: [],
      params: {
        days: 30
      },
      dataRangelist: [
        { id: 1, label: '昨天', value: 1, active: false },
        { id: 2, label: '3天', value: 3, active: false },
        { id: 3, label: '7天', value: 7, active: false },
        { id: 4, label: '15天', value: 15, active: false },
        { id: 5, label: '30天', value: 30, active: true }
      ],
      anchorQuantityList: [], // 当日开播主播数
      liveDayList: [], // 日期
      liveSceneList: [], // 当日直播场次
      pgTotalNumList: [], // 场均观看人数
      pgVisitNumList: [], // 场均观看次数
      totalNumList: [], // 当日观看人数
      visitNumList: [] // 当日观看次数
    }
  },
  mounted () {
    // this.getChartData()
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
      const data = MockApi.list(this.params)
      this.anchorQuantityList = data.map(item => {
        return item.anchorQuantity
      })
      this.liveDayList = data.map(item => {
        return item.liveDay
      })
      this.liveSceneList = data.map(item => {
        return item.liveScene
      })
      this.pgTotalNumList = data.map(item => {
        return item.pgTotalNum
      })
      this.pgVisitNumList = data.map(item => {
        return item.pgVisitNum
      })
      this.totalNumList = data.map(item => {
        return item.totalNum
      })
      this.visitNumList = data.map(item => {
        return item.visitNum
      })
      // anchorQuantity: 32333 // 当日直播场次
      // liveDay: "2021-01-22" // 日期
      // liveScene: 38103 // 当日开播主播数
      // pgTotalNum: 4280 // 场均观看人数
      // pgVisitNum: 8709 // 场均观看次数
      // totalNum: 163102300 // 当日观看人数
      // visitNum: 331848457 // 当日观看次数
      // MockApi.list().then(res => {
      //   console.log(res)
      // })
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
  }
</style>
