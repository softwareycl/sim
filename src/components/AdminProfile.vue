<template>
  <div class="wrap">
    <el-container class="container">
      <el-header height="100px">
        尊贵的王，欢迎登录
      </el-header>
      <el-main>
        <div class="wrap1" style="position:absolute;z-index=1">
          <el-button style="position:absolute;right:5%;background-color:#f0a44a;" @click="exit()">注销</el-button>
          <div class="archive" style="position:relative;left:45%;top:10%;" @click="toUploadStudent">导入学生档案</div>
          <div class="userInfo" style="position:relative;left:30%;top:20%;" @click="toUploadUser">导入用户信息</div>
          <div class="check" style="position:relative;left:60%;top:5%;" @click="toArchiveRequests">档案审核</div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'admin'
    }
  },
  methods: {
    exit () {
      this.$router.push('/')
    },
    toArchiveRequests () {
      this.$router.push('/admin/request')
    },
    toUploadStudent () {
      this.$router.push('/admin/upload/student')
    },
    toUploadUser () {
      this.$router.push('/admin/upload/user')
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.el-main {
  background-color: #f8e6db;
  text-align: center;
  line-height: 160px;
  height: 100%;
}
.wrap1 {
  width: 100%;
  height: 100%;
}
.archive {
  width: 140px;      
  height: 140px;      
  background-color:#eb8610;      
  border-radius: 50%;      
  -moz-border-radius: 50%;      
  -webkit-border-radius: 50%;
  font-size: 20px;
  line-height: 140px;
  color: white;
  text-align: center;
}
.userInfo {
  width: 140px;      
  height: 140px;      
  background-color:#edc28e;      
  border-radius: 50%;      
  -moz-border-radius: 50%;      
  -webkit-border-radius: 50%;
  font-size: 20px;
  line-height: 140px;
  color: white;
  text-align: center;
}
.check {
  width: 100px;      
  height: 100px;      
  background-color:#c29663;      
  border-radius: 50%;      
  -moz-border-radius: 50%;      
  -webkit-border-radius: 50%;
  font-size: 20px;
  line-height: 100px;
  color: white;
  text-align: center;
}
.el-header {
  background-color: #f0a44a;
  text-align: center;
  line-height: 100px;
  font-size: 30px;
  color: #ffffff;
}
</style>
