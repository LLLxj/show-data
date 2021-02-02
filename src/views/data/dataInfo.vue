<template>
  <div class="wrap">
    <!-- 全网数据汇总 -->
    <DataCount @get-data-callback="nextCpmponent"/>
    <!-- 全网流量总趋势 -->
    <DataTrade v-if="dataTradeVisible" ref="DataTrade"/>
    <!-- UV趋势 -->
    <UvTrade v-if="uvTradeVisible" ref="UvTrade" />
  </div>
</template>

<script>
// import LineChart from '@/components/chart/lineChart'
// import DataRange from '@/components/dataRange'
// import MockApi from '@/api/mock'
import DataTrade from '@/components/netWork/dataTrade'
import DataCount from '@/components/netWork/dataCount'
import UvTrade from '@/components/netWork/uvTrade'
export default {
  name: 'dataInfo',
  components: {
    DataTrade, DataCount, UvTrade
  },
  data () {
    return {
      width: '1600px',
      height: '400px',
      xAxis: [],
      params: {
        days: 30
      },
      dataTradeVisible: false,
      uvTradeVisible: false,
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
  },
  methods: {
    nextCpmponent () {
      this.uvTradeVisible = true
      this.dataTradeVisible = true
      this.$nextTick(() => {
        this.$refs.DataTrade.getChartData()
        this.$refs.UvTrade.getChartData()
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .wrap{
    background: #f8f8f9;
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
      }
    }
  }
</style>
