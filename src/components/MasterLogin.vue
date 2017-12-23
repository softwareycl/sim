<template>
  <div class="wrap">
    <el-container>
      <el-header height="50px"><b>班主任登陆</b> <el-button class="getout" @click="getOut()">注销</el-button></el-header>
      <el-main>
        <div class="login">
         <el-form :label-position="labelPosition" label-width="80px" v-model="form">

            <el-form-item class="username" label="用户名">
              <el-input v-model="form.username" style="margin-left:5px;width:400px;height:51px;"></el-input>
            </el-form-item>

            <el-form-item class="pwd" label="密码">
              <el-input type="password" v-model="form.pwd" style="margin-left:-72px;width:200px;"></el-input>
              <el-button class="pwdbtn" @click="pwdForget()">忘记密码？</el-button>
            </el-form-item>

           

            <el-form-item class="vali-code" >
              <el-input class="validateCode" v-model="form.validatecode" placeholder="请输入验证码" size="medium"></el-input>
              <img :src="codeURL" alt="logo" title="点击换一张" @click="changeCode()">
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
          this.$router.push('/master/profile')
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
.el-header {
  background-color: #70c9e6;
  color: #333;
  text-align: center;
  line-height: 50px;
}
.el-main {
  background-color: rgb(195, 219, 244);
  color: #333;
  text-align: center;
  line-height: 160px;
}
.username {
  margin-bottom: 30px;
}
.pwd {
  margin-bottom: 0px;
}
.login {
  padding: 30px 20px;
  width: 500px;
  height: 400px;
   background-color: #60b3f0;
  margin-left: 1000px;
  margin-top: 200px;
  margin-bottom: 170px;
}
.loginbtn {
  background-color: #70c9e6;
  width: 200px;
  height: 40px;
  font-size: 18px;
}
.pwdbtn {
  background-color: #5fc6e8;
  margin-top: 2px;
  height: 40px;
  
}
.pwdForget {
  text-align: right;
  text-align: top;
  height: 50px;
  margin-bottom: 0px;
}
.validateCode {
  width: 200px;
  margin-right: 154px;
}
.vali-code {
  margin-top: 20px;
  padding-left: 0px;
  margin-left: 0px;
  
}
.getout {
  background-color: #46afe8;
  margin-left:1655px;
  height: 40px;
}
</style>
