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
      default: 'barChart'
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
    liveDayList: {
      type: Array,
      default () {
        return []
      }
    },
    uvList: {
      type: Array,
      default () {
        return []
      }
    },
    pvList: {
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
    calLeftMax (arr) { // 计算左侧最大值
      let max = 0
      const _ = require('lodash')
      max = _.max(this.uvList)
      const maxint = Math.ceil(max / 9.5) // 不让最高的值超过最上面的刻度
      const maxval = maxint * 10 // 让显示的刻度是整数
      return maxval
    },
    calRightMax () { // 计算右侧最大值
      let max = 0
      const _ = require('lodash')
      max = _.max(this.pvList)
      const minint = Math.floor(max / 9.5)
      const minval = minint * 10 // 让显示的刻度是整数
      return minval
    },
    async initChart () {
      const leftMax = await this.calLeftMax()
      const rightMax = await this.calRightMax()
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
              name: '时均UV',
              icon: 'roundRect'
            },
            {
              name: '时均PV',
              icon: 'roundRect'
            }
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
            splitNumber: 5
            // interval: (this.max - this.min) / 5
          },
          {
            type: 'value',
            position: 'right',
            min: 0,
            max: rightMax,
            splitNumber: 5
            // interval: (rightMax - leftMax) / 5
          }
        ],
        series: [
          {
            name: '时均UV',
            type: 'bar',
            barWidth: '10px',
            yAxisIndex: 0,
            data: this.uvList,
            animationDuration
          },
          {
            name: '时均PV',
            type: 'bar',
            barWidth: '10px',
            yAxisIndex: 1,
            data: this.pvList,
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
