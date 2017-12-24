<template>
  <div class="wrap">
    <el-container class="container">
      <el-header height="50px"><b>任课老师登录</b></el-header>
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
              <el-input class="validateCode" sytle="display:inline;"v-model="form.validatecode" placeholder="请输入验证码"></el-input><img src='' alt="logo" title="点击换一张" style="display:inline;" @click="changeCode()">
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
        }
      }
    },
    methods: {
      login () {
        this.$router.push('/teacher/profile')
      },
      changeCode () {
        console.log('no')
      },
      getOut () {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
  }
  .el-header {
    background-color: #F0B6CE;
    color: #333;
    text-align:center;
    line-height: 50px;
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
    width: 300px;
    height: 300px;
    background-color: #F0B6CE;
    position: absolute;
    right: 15%;
    top: 25%;
  }
  .loginbtn {
    background-color: #DE7C9F;
    width: 200px;
    height: 40px;
    font-size: 18px;
  }
  .validateCode {
    width: 200px;
  }
  .vali-code {
    padding-left: 0px;
    margin-left: 0px;
  }
  .getout {
    background-color: #F26FB6;
    position: absolute;
    right: 15%;
    top: 15%;
  }
</style>
