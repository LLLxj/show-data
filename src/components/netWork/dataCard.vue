<template>
  <div class="data-wrap">
    <div class="data-item" v-for="item in list" :key="item.id">
      <div class="data-title">
        <img class="img-src" :src="item.src" alt="">
        <div>{{item.title}}</div>
      </div>
      <div v-if="item.style === 2" class="data-value">
        <div>
          <div class="value">{{ item.valueLeft / 10000 }}{{item.valueLeftUnit}}</div>
          <div class="data-row">
            <img v-if="item.valuePercentLeft <= 0" class="img-src" src="@/assets/images/down.png" alt="">
            <img v-else class="img-src" src="@/assets/images/up.png" alt="">
            <div>{{ item.valuePercentLeft }}%</div>
          </div>
        </div>
        <div class="slash">/</div>
        <div>
          <div class="value">{{ item.valueRight / 10000 }}{{item.valueRightUnit}}</div>
          <div class="data-row">
            <img v-if="item.valuePercentRight < 0" class="img-src" src="@/assets/images/down.png" alt="">
            <img v-else class="img-src" src="@/assets/images/up.png" alt="">
            <div>{{ item.valuePercentRight }}%</div>
          </div>
        </div>
      </div>
      <div v-if="item.style === 1" class="data-value">
        <div>
          <div class="value">{{ item.valueLeft / 10000 }}{{item.valueLeftUnit}}</div>
          <div class="data-row">
            <img v-if="item.valuePercentLeft <= 0" class="img-src" src="@/assets/images/down.png" alt="">
            <img v-else class="img-src" src="@/assets/images/up.png" alt="">
            <div>{{ item.valuePercentLeft }}%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    list: {
      type: Object,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  components: {
  },
  mounted () {
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
    }
  }
}
</script>

<style lang="less" scoped>
  .data-wrap{
    display: flex;
    flex-wrap: wrap;
    .data-item{
      width: 32%;
      height: 142px;
      box-sizing: border-box;
      margin: 0 1% 20px 0;
      padding: 0 14px;
      border-radius: 4px;
      background: #ffffff;
      .data-title{
        padding: 10px 0 0 14px;
        display: flex;
        align-items: center;
        .img-src{
          width: 26px;
          margin-right: 6px;
        }
      }
      .data-value{
        display: flex;
        align-items: center;
        margin: 20px 0 0 0;
        justify-content: space-around;
        .data-row{
          display: flex;
          justify-content: center;
          margin-top: 4px;
          font-size: 12px;
          font-weight: 600;
          color: rgb(26, 174, 76);
        }
        .slash{
          color: #e6e3e6;
        }
        .value{
          font-size: 18px;
          font-weight: 600;
          color: #5c6bd0;
        }
      }
    }
  }
</style>
