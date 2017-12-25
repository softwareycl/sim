<template>
  <div class="wrap">
    <el-container class="container">
      <el-header height="100px"><b>任课老师登录</b></el-header>
      <el-main>
        <el-button class="getout" @click="getOut()">返回</el-button>
        <div class="login">
          <el-form :label-position="left" label-width="65px" v-model="form">
            <el-form-item class="username" label="用户名">
              <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item class="pwd" label="密码">
              <el-input type="password" v-model="form.pwd"></el-input>
            </el-form-item>
            <el-form-item class="vali-code" style="margin-left:0;">
              <el-input class="validateCode" sytle="display:inline;" v-model="form.validatecode" placeholder="请输入验证码"></el-input>
              <img class="codeimg" :src="codeURL" alt="logo" title="点击换一张" style="display:inline;width:100px;height:40px;" @click="changeCode()">
            </el-form-item>
          </el-form>
          <el-button class="loginbtn" @click="login()">登录</el-button>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      labelPosition: 'right',
      form: {
        username: '',
        pwd: '',
        validatecode: ''
      },
      hostURL: 'http://localhost:8080/teacher',
      codeURL: 'http://localhost:8080/verifyCode?num=' + Math.random()
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
            message: '验证码错误'
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
      this.$axios.post(this.hostURL + '/login', {
        userName: this.form.username,
        password: this.form.pwd
      }).then((response) => {
        var state = response.data.valid
        if (state === 'success') {
          this.$router.push('/teacher/profile')
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
      }).catch((error) => {
        console.log('【Error】:', error)
        this.$message({
          title: '网络请求错误',
          message: '请检查网络并重试',
          type: 'error'
        })
      })
    },
    changeCode () {
      this.codeURL = 'http://localhost:8080/verifyCode?num=' + Math.random()
      console.log('no')
    },
    getOut () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  img {
    vertical-align: top;
  }
  .container {
    width: 100%;
    height: 100%;
  }
  .el-header {
    background-color: #F0B6CE;
    color: #333;
    text-align:center;
    line-height: 100px;
    font-size: 30px;
  }
  .el-main {
    background-color: #FAECF1;
    color: #333;
    line-height: 160px;
    text-align:center;
    height: 100%;
  }
  .username {
    margin-bottom: 30px;
  }
  .pwd {
    margin-bottom: 30px;
  }
  .login {
    padding: 30px 20px;
    width: 400px;
    height: 350px;
    background-color: #F0B6CE;
    position: absolute;
    right: 25%;
    top: 25%;
  }
  .loginbtn {
    background-color: #DE7C9F;
    width: 200px;
    height: 40px;
    font-size: 18px;
  }
  .validateCode {
    width: 60%;
    vertical-align: top;
  }
  .vali-code {
    padding-left: 0px;
    margin-left: 0px;
    text-align: left;
  }
  .getout {
    background-color: #F26FB6;
    position: absolute;
    right: 15%;
    top: 15%;
  }
</style>
