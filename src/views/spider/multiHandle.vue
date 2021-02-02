<template>
  <div>
    <el-dialog title="批量修改状态" :visible.sync="visible" :close-on-click-modal="false" width="1000px">
      <el-form :model="dataForm" ref="dataForm" label-width="100px">
        <el-form-item prop="spider_status">
          <el-select v-model="dataForm.spider_status" placeholder="请选择">
            <el-option v-for="item in statusList" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item >
          <el-button @click="cancle()">取消</el-button>
          <el-button :disabled="dataForm.spider_status === '' ? true : false" type="primary" @click="sumbit()">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import Spider from '@/api/spider'
export default {
  data () {
    return {
      dataForm: {
        spider_status: '',
        selectSection: []
      },
      statusList: [
        { label: '不可用', value: 0 },
        { label: '可用状态', value: 1 }
        // { label: '正爬取推荐列表及详细', value: 2 },
        // { label: '正爬取达人详细', value: 3 },
        // { label: '正爬取达人主页详细及笔记列表', value: 4 },
        // { label: '正爬取达人笔记详细', value: 5 }
      ],
      visible: false,
      listLoading: false,
      id: ''
    }
  },
  methods: {
    init (data) {
      this.visible = true
      this.dataForm.selectSection = data
    },
    resetForm () {
      this.dataForm = {
        spider_status: '',
        selectSection: []
      }
    },
    cancle () {
      this.visible = false
      this.resetForm()
    },
    sumbit () {
      const ids = this.dataForm.selectSection.map(item => {
        return item.id
      })
      const params = {
        spider_status: this.dataForm.spider_status,
        ids: ids
      }
      Spider.multiUpdate(params).then(({ data }) => {
        const { code, msg } = data
        if (code === 200) {
          this.$message({
            message: msg,
            type: 'success',
            duration: 1500,
            onClose: () => {
              this.visible = false
              this.resetForm()
              this.$emit('get-data-list')
            }
          })
        } else {
          this.$message.error(msg)
        }
      })
    }
  }
}
</script>

<style>

</style>
