<template>
  <div class="container">
    <el-dialog title="日志列表" :visible.sync="visible" :close-on-click-modal="false" width="1000px" :before-close="cancle">
      <el-form :model="searchData" :inline="true" ref="searchData" label-width="100px">
        <el-form-item label="name:" prop="spider_name">
          <el-input type="text" v-model="searchData.spider_name" placeholder="请输入spider_name" maxlength="30" clearable></el-input>
        </el-form-item>
        <el-form-item label="日期">
          <el-date-picker v-model="searchData.time_region" type="daterange" value-format="yyyy-MM-dd HH:mm:ss" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getInfo()">查询</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="list" v-loading.body="listLoading" fit highlight-current-row border>
        <el-table-column label="id" prop="id" align="center" header-align="center" min-width="50"/>
        <el-table-column label="account_id" prop="account_id" align="center" header-align="center" min-width="50"/>
        <el-table-column label="spider_name" prop="spider_name" align="center" header-align="center" min-width="50"/>
        <el-table-column label="ip" prop="ip" align="center" header-align="center" min-width="50"/>
        <el-table-column label="val" prop="val" align="center" header-align="center" min-width="50"/>
        <el-table-column label="开始时间" prop="start_time" align="center" header-align="center" min-width="100" :formatter="formateDate"/>
        <el-table-column label="创建时间" prop="create_time" align="center" header-align="center" min-width="100" :formatter="formateDate"/>
      </el-table>
      <!-- 分页 -->
    <div class="x-pagination" v-if="list && list.length">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalNum">
      </el-pagination>
    </div>
    </el-dialog>
  </div>
</template>

<script>
import Spider from '@/api/spider'
import dayjs from 'dayjs'
export default {
  data () {
    return {
      list: [],
      dataForm: {
      },
      searchData: {
        spider_name: '',
        time_region: [],
        start_time: '',
        end_time: '',
        currentPage: 1,
        pageSize: 50
      },
      totalNum: '',
      currentPage: 1,
      pageSize: 50,
      pageSizes: [10, 20, 30, 50],
      visible: false,
      listLoading: false,
      id: ''
    }
  },
  methods: {
    init (data) {
      this.visible = true
      if (data) {
        this.id = data
        this.getInfo()
      }
    },
    getInfo () {
      const params = {
        id: this.id,
        spider_name: this.searchData.spider_name,
        start_time: this.searchData.time_region !== null ? this.searchData.time_region[0] : '',
        end_time: this.searchData.time_region !== null ? this.searchData.time_region[1] : '',
        currentPage: this.searchData.currentPage,
        pageSize: this.searchData.pageSize
      }
      this.listLoading = true
      Spider.logInfo(params).then(({ data }) => {
        const { code, msg, result, totalNum } = data
        this.listLoading = false
        if (code === 200) {
          this.list = result
          this.totalNum = totalNum
        } else {
          this.$message.error(msg)
        }
      })
    },
    resetForm () {
      this.searchData = {
        spider_name: '',
        time_region: [],
        start_time: '',
        end_time: '',
        currentPage: 1,
        pageSize: 50
      }
      this.currentPage = 1
      this.pageSize = 50
      this.getInfo()
    },
    cancle () {
      this.visible = false
      this.resetForm()
    },
    handleSizeChange (row) { // 分页事件
      this.searchData.pageSize = row
      this.getInfo()
    },
    handleCurrentChange (row) {
      this.searchData.currentPage = row
      this.$nextTick(function () {
        this.currentPage = row
      })
      this.getInfo()
    },
    formateDate (row, column) {
      const prop = column.property
      return dayjs(row[prop]).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>

<style lang="less" scoped>
  .container{
    .x-pagination {
      width: 100%;
      height: 100%;
      margin: 20px auto;
      padding: 0 0 30px 0;
      & div {
        width: auto;
        float: right;
      }
    }
  }
</style>
