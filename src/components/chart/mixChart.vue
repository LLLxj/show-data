<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme

const animationDuration = 1300

export default {
  props: {
    className: {
      type: String,
      default: 'mixChart'
    },
    params: {
      type: Object,
      default () {
        return {}
      }
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    anchorQuantityList: {
      type: Array,
      default () {
        return []
      }
    },
    liveDayList: {
      type: Array,
      default () {
        return []
      }
    },
    liveSceneList: {
      type: Array,
      default () {
        return []
      }
    },
    pgTotalNumList: {
      type: Array,
      default () {
        return []
      }
    },
    pgVisitNumList: {
      type: Array,
      default () {
        return []
      }
    },
    totalNumList: {
      type: Array,
      default () {
        return []
      }
    },
    visitNumList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      chart: null,
      maxLeft: '', // 左侧纵轴max值
      maxRight: '' // 右侧纵轴max值
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  watch: {
    liveDayList: {
      handler (newValue, oldValue) {
        this.$nextTick(() => {
          this.initChart()
        })
      },
      // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
      immediate: true
    }
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    calLeftMax () { // 计算左侧最大值
      let max = 0
      const _ = require('lodash')
      max = _.max(this.visitNumList)
      const maxint = Math.ceil(max / 9.5) // 不让最高的值超过最上面的刻度
      const maxval = maxint * 10 // 让显示的刻度是整数
      return maxval
    },
    calRightMax () { // 计算右侧最大值
      let max = 0
      const _ = require('lodash')
      max = _.max(this.liveSceneList)
      const minint = Math.floor(max / 9.5)
      const minval = minint * 10 // 让显示的刻度是整数
      return minval
    },
    initChart () {
      // const _ = require('lodash')
      // this.maxLeft = _.max(this.visitNumList / 10000)
      // this.maxRight = _.max(this.liveSceneList)
      const leftMax = this.calLeftMax()
      const rightMax = this.calRightMax()
      this.chart = echarts.init(this.$el, 'macarons')
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          itemHeight: 12,
          itemWidth: 12,
          x: '0%',
          top: '0%',
          textStyle: {
            color: '#90979c'
          },
          data: [
            {
              name: '当日直播场次',
              icon: 'roundRect'
            },
            {
              name: '当日开播主播数',
              icon: 'roundRect'
            },
            '场均观看人数', '场均观看次数', '当日观看次数', '当日观看人数'
          ]
        },
        grid: {
          top: '20%',
          left: '2%',
          right: '1%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: this.liveDayList,
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [
          {
            type: 'value',
            position: 'left',
            min: 0,
            max: leftMax,
            // max: this.maxLeft,
            splitNumber: 5,
            axisLabel: {
              formatter: (value, index) => {
                if (value >= 100000000) {
                  return ((value / 100000000).toFixed(2)) + '亿'
                } else {
                  return ((value / 10000).toFixed(2)) + '万'
                }
              }
            }
          },
          {
            type: 'value',
            position: 'right',
            min: 0,
            max: rightMax,
            // max: this.maxRight,
            splitNumber: 5
          }
        ],
        series: [
          // anchorQuantityList: [], // 当日开播主播数
          // liveDayList: [], // 日期
          // liveSceneList: [], // 当日直播场次
          // pgTotalNumList: [], // 场均观看人数
          // pgVisitNumList: [], // 场均观看次数
          // totalNumList: [], // 当日观看人数
          // visitNumList: [] // 当日观看次数
          {
            name: '当日直播场次',
            type: 'bar',
            // stack: 'vistors',
            barWidth: '10px',
            yAxisIndex: 1,
            data: this.liveSceneList,
            animationDuration
          },
          {
            name: '当日开播主播数',
            type: 'bar',
            // stack: 'vistors',
            barWidth: '10px',
            yAxisIndex: 1,
            data: this.anchorQuantityList,
            animationDuration
          },
          {
            name: '场均观看人数',
            type: 'line',
            // stack: 'vistors',
            yAxisIndex: 1,
            data: this.pgTotalNumList,
            animationDuration
          },
          {
            name: '场均观看次数',
            type: 'line',
            // stack: 'vistors',
            yAxisIndex: 1,
            data: this.pgVisitNumList,
            animationDuration
          },
          {
            name: '当日观看次数',
            type: 'line',
            // stack: 'vistors',
            yAxisIndex: 0,
            data: this.visitNumList,
            animationDuration
          },
          {
            name: '当日观看人数',
            type: 'line',
            // stack: 'vistors',
            yAxisIndex: 0,
            data: this.totalNumList,
            animationDuration
          }
        ]
      }, true)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
