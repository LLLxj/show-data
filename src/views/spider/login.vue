<template>
  <div>
    <el-dialog title="过滑块后登录" :visible.sync="visible" :close-on-click-modal="false" width="800px">
      <el-form :model="dataForm" ref="dataForm" label-width="140px">
        <el-form-item prop="type">
          <el-radio v-model="dataForm.loginType" :label="1">短信验证码登录</el-radio>
          <el-radio v-model="dataForm.loginType" :label="2">短信mobile_token登录</el-radio>
          <el-radio v-model="dataForm.loginType" :label="3">密码登录</el-radio>
        </el-form-item>
        <el-form-item prop="code" v-if="dataForm.loginType === 1">
          <el-input type="text" v-model="dataForm.msgCode" maxlength="30" clearable style="width: 200px;margin: 0 30px 0 0" />
          <el-button :disabled="!canGetSms" type="primary" @click="getSms()">发送短信验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login()">登录</el-button>
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
        loginType: 1,
        accountId: '',
        msgCode: ''
      },
      canGetSms: true,
      visible: false
    }
  },
  methods: {
    init (data) {
      this.visible = true
      this.dataForm.accountId = data
    },
    resetForm () {
      this.dataForm = {
        loginType: 1,
        accountId: '',
        msgCode: ''
      }
      this.canGetSms = true
    },
    login () {
      var params = {}
      if (this.dataForm.loginType === 1) {
        params = this.dataForm
      } else {
        params = {
          loginType: this.dataForm.loginType,
          accountId: this.dataForm.accountId
        }
      }
      console.log(params)
      Spider.spiderLogin(params).then(({ data }) => {
        const { code, msg } = data
        if (code === 1) {
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
    },
    getSms () { // 获取验证码
      this.canGetSms = false
      console.log('获取验证码')
      const params = {
        id: this.dataForm.accountId
      }
      Spider.getCode(params).then(({ data }) => {
        this.canGetSms = true
        const { code, msg } = data
        if (code === 1) {
          this.$message.success('验证码已发送一注意查收')
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
