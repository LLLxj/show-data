<template>
  <div>
    <el-dialog title="修改" :visible.sync="visible" :close-on-click-modal="false" width="800px">
      <el-form :model="dataForm" ref="dataForm" label-width="150px">
        <el-form-item style="text-align: right">
          <el-button @click="cancle()">取消</el-button>
          <el-button type="primary" @click="update()">确定</el-button>
        </el-form-item>
        <el-form-item label="spider_status:" prop="spider_status">
          <el-select v-model="dataForm.spider_status" placeholder="请选择">
            <el-option v-for="item in statusList" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="note:" prop="note">
          <el-input type="text" v-model="dataForm.note" maxlength="30" clearable></el-input>
        </el-form-item>
        <el-form-item label="id:" prop="id">
          <el-input type="text" v-model="dataForm.id" disabled maxlength="30" clearable></el-input>
        </el-form-item>
        <el-form-item label="device_id:" prop="device_id">
          <el-input type="text" v-model="dataForm.device_id" disabled maxlength="30" clearable></el-input>
        </el-form-item>
        <el-form-item label="fid:" prop="fid">
          <el-input type="text" v-model="dataForm.fid" disabled maxlength="30" clearable></el-input>
        </el-form-item>
        <el-form-item label="hmac:" prop="hmac">
          <el-input type="text" v-model="dataForm.hmac" disabled maxlength="30" clearable></el-input>
        </el-form-item>
        <el-form-item label="last_slide_virefy_time:" prop="last_slide_virefy_time">
          <el-input type="text" v-model="dataForm.last_slide_virefy_time" disabled maxlength="30" clearable></el-input>
        </el-form-item>
        <el-form-item label="last_spider_time:" prop="last_spider_time">
          <el-input type="text" v-model="dataForm.last_spider_time" disabled maxlength="30" clearable></el-input>
        </el-form-item>
        <el-form-item label="last_spider_type" prop="last_spider_type">
          <span v-if="dataForm.last_spider_type === 2">首页推荐列表</span>
          <span v-if="dataForm.last_spider_type === 3">达人详细</span>
          <span v-if="dataForm.last_spider_type === 4">达人主页</span>
          <span v-if="dataForm.last_spider_type === 5">笔记详细</span>
        </el-form-item>
        <el-form-item label="mobile_token:" prop="mobile_token">
          <el-input type="text" v-model="dataForm.mobile_token" disabled maxlength="30" clearable></el-input>
        </el-form-item>
        <el-form-item label="phone:" prop="phone">
          <el-input type="text" v-model="dataForm.phone" disabled maxlength="30" clearable></el-input>
        </el-form-item>
        <el-form-item label="pwd:" prop="pwd">
          <el-input type="text" v-model="dataForm.pwd" disabled maxlength="30" clearable></el-input>
        </el-form-item>
        <el-form-item label="red_id:" prop="red_id">
          <el-input type="text" v-model="dataForm.red_id" disabled maxlength="30" clearable></el-input>
        </el-form-item>
        <el-form-item label="sid:" prop="sid">
          <el-input type="text" v-model="dataForm.sid" disabled maxlength="30" clearable></el-input>
        </el-form-item>
        <el-form-item label="t:" prop="t">
          <el-input type="text" v-model="dataForm.t" disabled maxlength="30" clearable></el-input>
        </el-form-item>
        <el-form-item label="update_time:" prop="update_time">
          <el-input type="text" v-model="dataForm.update_time" disabled maxlength="30" clearable></el-input>
        </el-form-item>
        <el-form-item label="user_agent:" prop="user_agent">
          <el-input type="text" v-model="dataForm.user_agent" disabled maxlength="30" clearable></el-input>
        </el-form-item>
        <el-form-item label="userid:" prop="userid">
          <el-input type="text" v-model="dataForm.userid" disabled maxlength="30" clearable></el-input>
        </el-form-item>
        <el-form-item label="version:" prop="version">
          <el-input type="text" v-model="dataForm.version" disabled maxlength="30" clearable></el-input>
        </el-form-item>
        <el-form-item label="version_name:" prop="version_name">
          <el-input type="text" v-model="dataForm.version_name" disabled maxlength="30" clearable></el-input>
        </el-form-item>
        <el-form-item label="x_b3_trace_id:" prop="x_b3_trace_id">
          <el-input type="text" v-model="dataForm.x_b3_trace_id" disabled maxlength="30" clearable></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import Spider from '@/api/spider'
import dayjs from 'dayjs'
export default {
  data () {
    return {
      dataForm: {
        create_time: '',
        device_id: '',
        fid: '',
        hmac: '',
        id: '',
        last_slide_virefy_time: '',
        last_spider_time: '',
        last_spider_type: '',
        mobile_token: '',
        note: '',
        phone: '',
        pwd: '',
        red_id: '',
        sid: '',
        spider_status: '',
        t: '',
        update_time: '',
        user_agent: '',
        userid: '',
        version: '',
        version_name: '',
        x_b3_trace_id: ''
      },
      visible: false,
      listLoading: false,
      statusList: [
        { label: '不可用', value: 0 },
        { label: '可用状态', value: 1 }
        // { label: '正爬取推荐列表及详细', value: 2 },
        // { label: '正爬取达人详细', value: 3 },
        // { label: '正爬取达人主页详细及笔记列表', value: 4 },
        // { label: '正爬取达人笔记详细', value: 5 }
      ]
    }
  },
  methods: {
    init (data) {
      this.visible = true
      if (data) {
        this.getInfo(data)
      }
    },
    getInfo (id) {
      this.listLoading = true
      Spider.info(id).then(({ data }) => {
        const { code, msg, result } = data
        this.listLoading = false
        if (code === 200) {
          this.dataForm = result
          this.dataForm.last_slide_virefy_time = dayjs(result.last_slide_virefy_time).format('YYYY-MM-DD HH:mm:ss')
          this.dataForm.last_spider_time = dayjs(result.last_spider_time).format('YYYY-MM-DD HH:mm:ss')
          this.dataForm.update_time = dayjs(result.update_time).format('YYYY-MM-DD HH:mm:ss')
        } else {
          this.$message.error(msg)
        }
      })
    },
    update () {
      Spider.update(this.dataForm).then(({ data }) => {
        const { code, msg } = data
        if (code === 200) {
          this.$message({
            message: msg,
            type: 'success',
            duration: 1500,
            onClose: () => {
              this.visible = false
              this.$emit('get-data-list')
            }
          })
        } else {
          this.$message.error(msg)
        }
      })
    },
    cancle () {
      this.visible = false
    }
  }
}
</script>

<style>

</style>
