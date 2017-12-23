<template>
  <div class="wrap">
    <el-container>
      <el-header height="100px">管理员登录</el-header>
      <el-main>
        <div class="login">
          <el-form :label-position="labelPosition" label-width="60px" v-model="form">
            <el-form-item label="用户名">
              <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input type="password" v-model="form.pwd"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.validatecode" placeholder="请输入验证码" size="medium"></el-input>
              <el-popover ref="a" placement="right-end" trigger="hover">
								<img alt="验证码图片" width="200px" src="http://localhost:8080/verifyCode">
							</el-popover>
            </el-form-item>
          </el-form>
          <el-button @click="login()">登录</el-button>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      labelPosition: 'left',
      form: {
        username: '',
        pwd: '',
        validatecode: ''
      },
      hostURL: 'http://localhost:8080/admin'
    }
  },
  methods: {
    login () {
      this.$axios({
        url: 'http://localhost:8080/validateCodeMet',
        method: 'get',
        params: {
          loginCode: this.form.validatecode
        }
      }).then((response) => {
        if (response.data.valid === true) {
          this.toLogin()
        } else {
          this.$message({
            type: 'info',
            message: '验证码不符'
          })
        }
      }).catch((error) => {
        this.$message({
          type: 'info',
          message: '连接失败' + error
        })
      })
    },
    toLogin () {
      var loginData = {
        'userName': this.form.username,
        'password': this.form.pwd
      }
      this.$axios({
        url: '/login',
        method: 'post',
        baseURL: this.hostURL,
        data: loginData,
        dataType: 'json'
      }).then((response) => {
        var state = response.data.valid
        if (state === 'success') {
          this.$router.push('/admin/profile')
        } else if (state === 'wrongPwd') {
          this.$message({
            type: 'info',
            message: '密码错误，请重试！'
          })
        } else {
          this.$message({
            type: 'info',
            message: '该账户不存在，你是谁？'
          })
        }
        console.log(response)
      }).catch((error) => {
        this.$message({
          type: 'info',
          message: '连接失败/' + error
        })
      })
    }
  }
}
</script>

<style scoped>
.el-header {
  background-color: #f0a44a;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.login {
  padding: 30px 20px;
  width: 400px;
  height: 300px;
  background-color: #fcd4a4;
  margin-left: 1000px;
  margin-top: 250px;
  margin-bottom: 250px;
}
.el-button {
  background-color: #ffa53b;
}
</style>
