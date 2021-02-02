<template>
  <div class="container">
    <el-form :model="searchData" :inline="true" ref="searchData" label-width="100px">
      <el-form-item label="ID:" prop="id">
        <el-input type="text" v-model="searchData.id" placeholder="请输入ID" maxlength="11" clearable></el-input>
      </el-form-item>
      <el-form-item label="手机号:" prop="phone">
        <el-input type="text" v-model="searchData.phone" placeholder="请输入手机号" maxlength="11" clearable></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="searchData.spider_status" placeholder="请选择">
          <el-option v-for="item in statusList" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getDataListHandle()">查询</el-button>
        <el-button @click="resetSearch()">重置</el-button>
        <el-button :disabled="!multipleSelection.length" type="primary" @click="multiHandle()">批量操作</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="list" v-loading.body="listLoading" fit highlight-current-row border @selection-change="handleSelectionChange">
      <el-table-column type="selection" align="center" header-align="center" width="55" />
      <el-table-column label="账号ID" prop="id" align="center" header-align="center" min-width="50"/>
      <el-table-column label="手机号" prop="phone" header-align="center" align="center" min-width="80" />
      <el-table-column label="账号状态" prop="spider_status" header-align="center" align="center" min-width="80">
        <template slot-scope="scope">
          <span v-if="scope.row.spider_status === 0">不可用</span>
          <span v-if="scope.row.spider_status === 1">可用状态</span>
          <span v-if="scope.row.spider_status === 2">正爬取推荐列表及详细</span>
          <span v-if="scope.row.spider_status === 3">正爬取达人详细</span>
          <span v-if="scope.row.spider_status === 4">正爬取达人主页详细及笔记列表</span>
          <span v-if="scope.row.spider_status === 5">正爬取达人笔记详细 </span>
        </template>
      </el-table-column>
      <el-table-column label="备注" prop="note" header-align="center" align="center" min-width="80" />
      <el-table-column label="最后一次爬取类型" prop="last_spider_type" header-align="center" align="center" min-width="80">
        <template slot-scope="scope">
          <span v-if="scope.row.last_spider_type === 2">首页推荐列表</span>
          <span v-if="scope.row.last_spider_type === 3">达人详细</span>
          <span v-if="scope.row.last_spider_type === 4">达人主页</span>
          <span v-if="scope.row.last_spider_type === 5">笔记详细</span>
        </template>
      </el-table-column>
      <el-table-column label="最后一次爬取时间" prop="last_spider_time" header-align="center" align="center" min-width="80" :formatter="formateDate"/>
      <el-table-column label="sid" prop="userid" header-align="center" align="center" min-width="80" />
      <el-table-column label="mobile_token" prop="mobile_token" header-align="center" align="center" min-width="80" />
      <el-table-column label="更新时间" prop="update_time" header-align="center" align="center" min-width="80" :formatter="formateDate"/>
      <el-table-column label="上次过滑块时间" prop="last_slide_virefy_time" header-align="center" align="center" min-width="80" :formatter="formateDate"/>
      <el-table-column label="创建时间" prop="create_time" header-align="center" align="center" min-width="80" :formatter="formateDate"/>
      <el-table-column label="操作" header-align="center" align="center" min-width="150">
        <template slot-scope="scope">
          <el-button type="text" @click="getLogs(scope.row.id)">查看运行日志</el-button>
          <el-button type="text" @click="editHandle(scope.row.id)">修改</el-button>
          <el-button v-if="scope.row.spider_status === 0" type="text" @click="getLogin(scope.row.id)">过滑块后登录</el-button>
        </template>
      </el-table-column>
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

    <Logs ref="logs" v-if="logsVisible" />
    <Login ref="login" v-if="loginVisible" @get-data-list="getDataListHandle"/>
    <Edit ref="edit" v-if="editVisible" @get-data-list="getDataListHandle" />
    <MultiHandle ref="multiHandle" v-if="multiHandleVisible" @get-data-list="getDataListHandle" />
  </div>
</template>

<script>
import Spider from '@/api/spider'
import Logs from './logs'
import Edit from './edit'
import Login from './login'
import MultiHandle from './multiHandle'
import dayjs from 'dayjs'
export default {
  name: 'spider',
  data () {
    return {
      list: [],
      listLoading: false,
      logsVisible: false,
      editVisible: false,
      loginVisible: false,
      multiHandleVisible: false,
      multipleSelection: [],
      searchData: {
        id: '',
        phone: '',
        spider_status: '',
        currentPage: 1,
        pageSize: 20
      },
      totalNum: 100,
      currentPage: 1,
      pageSizes: [10, 20, 30, 40],
      pageSize: 20,
      statusList: [
        { label: '不可用', value: 0 },
        { label: '可用状态', value: 1 },
        { label: '正爬取推荐列表及详细', value: 2 },
        { label: '正爬取达人详细', value: 3 },
        { label: '正爬取达人主页详细及笔记列表', value: 4 },
        { label: '正爬取达人笔记详细', value: 5 }
      ]
    }
  },
  components: {
    Logs, Edit, Login, MultiHandle
  },
  created () {
    this.getDataList()
  },
  methods: {
    getDataListHandle () {
      this.searchData.currentPage = 1
      this.currentPage = 1
      this.getDataList()
    },
    getDataList () {
      this.listLoading = true
      const params = this.searchData
      Spider.list(params).then(({ data }) => {
        this.listLoading = false
        const { code, msg, result, totalNum } = data
        if (code === 200) {
          this.list = result
          this.totalNum = totalNum
        } else {
          this.$message.error(msg)
        }
      })
    },
    getLogs (data) {
      this.logsVisible = true
      this.$nextTick(() => {
        this.$refs.logs.init(data)
      })
    },
    editHandle (data) {
      this.editVisible = true
      this.$nextTick(() => {
        this.$refs.edit.init(data)
      })
    },
    getLogin (data) {
      this.loginVisible = true
      this.$nextTick(() => {
        this.$refs.login.init(data)
      })
    },
    resetSearch () { // 置空搜索
      this.searchData = {
        id: '',
        phone: '',
        spider_status: '',
        currentPage: 1,
        pageSize: 10
      }
      this.getDataList()
    },
    handleSizeChange (row) { // 分页事件
      this.searchData.pageSize = row
      this.getDataList()
    },
    handleCurrentChange (row) {
      this.searchData.currentPage = row
      this.$nextTick(function () {
        this.currentPage = row
      })
      this.getDataList()
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    multiHandle () { // 批量操作
      this.multiHandleVisible = true
      this.$nextTick(() => {
        this.$refs.multiHandle.init(this.multipleSelection)
      })
    },
    formateDate (row, column) {
      const prop = column.property
      return dayjs(row[prop]).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>

<style lang="less" scoped>
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
  .container{
    width: 80%;
    margin: 30px auto;
  }
</style>
