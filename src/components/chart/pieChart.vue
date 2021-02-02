<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme

export default {
  props: {
    className: {
      type: String,
      default: 'pieChart'
    },
    width: {
      type: String,
      default: '436px'
    },
    height: {
      type: String,
      default: '250px'
    },
    tradeList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  watch: {
    tradeList: {
      handler (newValue, oldValue) {
        this.$nextTick(() => {
          this.initChart()
        })
      },
      // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
      immediate: true
    }
  },
  methods: {
    initChart () {
      this.chart = echarts.init(this.$el, 'macarons')
      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c}'
        },
        legend: {
          itemHeight: 12,
          itemWidth: 12,
          x: '10px',
          top: '0',
          textStyle: {
            color: '#90979c'
          },
          data: [
            {
              name: '达人主播',
              icon: 'roundRect'
            },
            {
              name: '店铺主播',
              icon: 'roundRect'
            },
            {
              name: '达人有店铺',
              icon: 'roundRect'
            }
          ]
        },
        grid: {
          top: '30px',
          left: '6%',
          containLabel: true
        },
        itemStyle: {
          normal: {
            borderColor: '#FFFFFF',
            borderWidth: 1,
            label: {
              show: true,
              formatter: '{d}%'
            }
          }
        },
        series: [
          {
            type: 'pie',
            radius: ['45%', '65%'], // 将内半径设大显示成圆环图
            center: ['50%', '60%'],
            data: this.tradeList,
            animation: true,
            // animationType: 'expansion',
            animationTypeUpdate: 'expansion',
            // animationEasing: 'cubicInOut',
            animationDuration: 5000
          }
        ]
      }, true)
    }
  }
}
</script>
