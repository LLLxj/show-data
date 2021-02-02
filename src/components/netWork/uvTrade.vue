<template>
  <div class="container">
    <div class="data-trade">
      <div class="title">
        <div>全网场均每小时UV趋势对比</div>
        <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
          <i class="el-icon-question"></i>
        </el-tooltip>
      </div>
      <div class="date-range">
        <div :class="['data-item', {'active': item.active ? true : false}]" v-for="item in dataRangelist" :key="item.id" @click="getParams(item)">{{item.label}}</div>
      </div>
    </div>
    <el-card>
      <LineChart :width="width" :params="params" :height="height" :uvList="uvList" :liveDayList="liveDayList" :pvList="pvList"/>
    </el-card>
  </div>
</template>

<script>
import LineChart from '@/components/chart/barChart'
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
      uvList: [],
      pvList: []
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
      const data = MockApi.uvList(this.params)
      this.liveDayList = data.map(item => {
        return item.liveDay
      })
      this.uvList = data.map(item => {
        return item.avgTotalNum
      })
      this.pvList = data.map(item => {
        return item.avgVisitNum
      })
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
