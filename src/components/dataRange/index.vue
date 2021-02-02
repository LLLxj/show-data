<template>
  <div class="date-range">
    <div :class="['data-item', {'active': item.active ? true : false}]" v-for="item in dataRangelist" :key="item.id" @click="getParams(item)">{{item.label}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataRangelist: [
        { id: 1, label: '昨天', value: 1, active: false },
        { id: 2, label: '3天', value: 3, active: false },
        { id: 3, label: '7天', value: 7, active: false },
        { id: 4, label: '15天', value: 15, active: false },
        { id: 5, label: '30天', value: 30, active: true }
      ]
    }
  },
  methods: {
    getParams (data) {
      this.dataRangelist.forEach(item => {
        item.active = false
        if (item.id === data.id) {
          item.active = true
          console.log()
          this.$parent.getParams(data.value)
          // this.$emit('get-params', data.value)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
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
</style>
