<template>
  <div class="wrap">
    <el-container>
      <el-header height="100px">班主任登录</el-header>
      <el-main>
        <div class="login">
          <el-form :label-position="labelPosition" label-width="60px" v-model="form">
            <el-form-item class="username" label="用户名">
              <el-input v-model="form.username" style="margin-left:30px;width:400px;"></el-input>
            </el-form-item>
            <el-form-item class="pwd" label="密码">
              <el-input type="password" v-model="form.pwd" style="margin-left:30px;width:400px;"></el-input>
            </el-form-item>
            <el-form-item class="pwdForget">
              <el-button class="pwdbtn" @click="pwdForget()">忘记密码？</el-button>
            </el-form-item>
            <el-form-item class="vali-code">
              <el-input class="validateCode" v-model="form.validatecode" placeholder="请输入验证码" size="medium"></el-input>
              <img src='' alt="logo" title="点击换一张" @click="changeCode()">
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
      labelPosition: 'left',
      form: {
        username: '',
        pwd: '',
        validatecode: ''
      }
    }
  },
  methods: {
    login () {
      console.log('login')
      this.$router.push('/master/profile')
    },
    pwdForget () {
      console.log('yes')
    },
    changeCode () {
      console.log('no')
    }
  }
}
</script>

<style scoped>
.el-header {
  background-color: #70c9e6;
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
  margin-top: 5px;
  height: 30px;
}
.pwdForget {
  text-align: right;
  text-align: top;
  height: 50px;
  margin-bottom: 0px;
}
.validateCode {
  width: 300px;
  margin-right: 20px;
}
.vali-code {
  padding-left: 0px;
  margin-left: 0px;
}
</style>
