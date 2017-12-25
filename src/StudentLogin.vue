<template>
  <div class="wrap">
    <el-container>
      <el-header height="100px"><b>学生登录</b></el-header>
      <el-main>
        <div class="loginForm">
          <el-form :label-position="labelPosition" label-width="80px" v-model="form">
            <el-form-item class="username" label="用户名">
              <el-input v-model="form.username" style="margin-left:5px;width:300px;height:51px;"></el-input>
            </el-form-item>
            <el-form-item class="pwd" label="密码">
              <el-input type="password" v-model="form.pwd" style="margin-left:5px;width:300px;"></el-input>
            </el-form-item>
            <el-form-item class="vali-code" >
              <el-input class="validateCode" v-model="form.validatecode" placeholder="请输入验证码" size="large"></el-input>
              <img :src="codeURL" alt="logo" title="点击换一张" @click="changeCode()">
            </el-form-item>
          </el-form>
          <el-button class="loginbtn" @click="login()">登录</el-button>
          <el-button class="getout" @click="getOut()">返回</el-button>
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
      hostURL: 'http://localhost:8080/student',
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
      this.$axios.post(this.hostURL + '/login', {
        userName: this.form.username,
        password: this.form.pwd
      }).then((response) => {
        var state = response.data.valid
        if (state === 'success') {
          this.$router.push('/student/profile')
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
    },
    pwdForget () {
      console.log('yes')
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
.username {
  margin-bottom: 30px;
}
.pwd {
  margin-bottom: 30px;
}
.loginForm {
  padding: 60px 20px;
  width: 500px;
  height: 400px;
  background-color: #b7e2dd;
  margin-top: 5%;
  margin-left: 50%;
}
.loginbtn {
  background-color: #65a8a0;
  width: 100px;
  height: 40px;
  font-size: 18px;
}
.validateCode {
  width: 200px;
  margin-left: 5px;
}
.el-form-item__content {
  margin-left: 0;
}
.getout {
  background-color: #40aee9;
  margin-left: 80%;
  height: 40px;
}
.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-header {
  background-color: #65a8a0;
  color: #333;
  text-align:center;
  line-height: 100px;
  font-size: 30px;
}
.wrap {
  background: #dbecea;
}
</style>
