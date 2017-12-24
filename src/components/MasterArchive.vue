<template>
  <div class="wrap">
    <div class="title" style="">修改学生档案</div>
    <div class="content" style="">
      <el-button class="returnbtn" @click="toProfile()">返回首页</el-button>
      <div class="tip">请输入申请理由</div>
      <el-input class="input" type="textarea" :autosize="{ minRows: 8, maxRows: 10}" v-model="reason"></el-input>
      <div class="pushbtn" @click="toPush()">提交申请</div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      reason: '哈哈',
      hostURL: 'http://localhost:8080/master'
    }
  },
  methods: {
    toProfile () {
      this.$router.push('/master/profile')
    },
    toPush () {
      this.$axios.get(this.hostURL + '/request', {
        params: {
          reason: this.reason
        }
      }).then((response) => {
        this.$router.push('/master/push')
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
.title {
  background-color: #6895a3;
  text-align: center;
  line-height: 100px;
  font-size: 45px;
  width:100%;height:100px;
}
.content {
  background-color: #bac6c9;
  width:100%;height:100%;
  text-align: center;
}
.returnbtn {
  background-color:#6895a3;
  color:black;
  margin-top: 2%;
  margin-left: 80%;
}
.tip {
  padding-top: 5%;
  padding-bottom: 3%; 
  margin: 0 auto;
  font-family: 'Times New Roman', Times, serif;
  font-size: 40px;
}
.input {
  width: 30%;
  margin: 0 auto;
  padding-bottom: 5%;
}
.pushbtn {
  margin: 0 auto;
  width: 160px;      
  height: 140px;      
  background-color:#eef2f4;      
  border-radius: 60px;      
  font-size: 30px;
  line-height: 140px;
  color: rgb(0, 0, 0);
  text-align: center;
}
.footer {
  margin-bottom: 10%; 
}
</style>
