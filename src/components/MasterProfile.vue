<template>
  <div class="wrap">
    <el-container>
      <el-header height="50px"><b>{{ Name }}老师，欢迎你 ！</b> 
        <el-button class="getout" @click="getOut()">注销</el-button>
      </el-header>
      <el-badge :value="Num0fRequest" :max="99" class="item">
        <el-button class="itembtn" size="large" @click="toRequests()">学生申请消息</el-button>
      </el-badge>
      <el-button class="my" size="large" :disabled="whether" @click="showReason()">我的申请{{state}}</el-button>
      <el-main>
        <div style="position:absolute;z-index=1;height:500px;">
          <div class="myclass" style="position:relative;top:100px;left:380px;" @click="myClass()">我的班级</div>
          <img src="../assets/penguin.png" style="position:relative;top:70px;left:570px;">
          <div class="organization" style="position:relative;top:-750px;left:950px;" @click="showOrganization()">班级组织结构</div>
          <div class="archive" style="position:relative;top:-580px;left:1200px;" @click="showArchives()">申请修改学生档案</div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Name: '方琼',
      Num0fRequest: 200,
      hostURL: 'http://localhost:8080/master',
      state: ''
    }
  },
  computed: {
    whether () {
      return this.state !== '已拒绝'
    }
  },
  methods: {
    myClass () {
      console.log('3')
      this.$router.push('/master/class')
    },
    showOrganization () {
      console.log('2')
      this.$router.push('/master/organization')
    },
    showArchives () {
      console.log('1')
      this.$router.push('/master/archive')
    },
    toRequests () {
      this.$router.push('/master/requests')
    },
    getOut () {
      this.$router.push('/')
    },
    showReason () {
      this.$message({
        type: 'info',
        message: this.reason
      })
    },
    getStudentRequestsNumber () {
      this.$axios.get(this.hostURL + '/numofrequests', {
      }).then((response) => {
        this.Num0fRequest = response.number
      }).catch((error) => {
        this.$message({
          type: 'info',
          message: '连接失败/' + error
        })
      })
    },
    getRequestState () {
      this.$axios.get(this.hostURL + '/request/state', {
      }).then((response) => {
        this.state = response.data.state
        this.reason = response.data.reason
      }).catch((error) => {
        this.$message({
          type: 'info',
          message: '连接失败/' + error
        })
      })
    }
  },
  mounted () {
    this.getRequestState()
    this.getStudentRequestsNumber()
  }
}
</script>

<style scoped>
img {
  width: 550px;
  height: 550px;
}
.wrap {
  background: #c3e9f5;
}
.archive {
  width: 250px;      
  height: 250px;      
  background-color:#6895a3;      
  border-radius: 50%;      
  -moz-border-radius: 50%;      
  -webkit-border-radius: 50%;
  font-size: 30px;
  line-height: 250px;
  color: white;
}
.myclass {
  width: 230px;      
  height: 230px;      
  background-color:#70c9e6;      
  border-radius: 50%;      
  -moz-border-radius: 50%;      
  -webkit-border-radius: 50%;
  font-size: 40px;
  line-height: 230px;
  color: white;
}
.organization {
  width: 200px;      
  height: 160px;      
  background-color:#0a4080;      
  border-radius: 50px;
  font-size: 30px;
  line-height: 160px;
  color: white;
}
.el-header {
  background-color: #1ba5f2;
  text-align: center;
  line-height: 60px;
}
.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
}
.getout {
  background-color: #499fe9;
  margin-left:1655px;
  height: 40px;
}
.item {
  margin-top: 1.1%;
  margin-left: 84%;
  margin-right: 10%;
  height: 40px;
}
.itembtn{
  background-color: #499fe9;
}
.my {
  background-color: #499fe9;
  margin-top: -2.9em;
  margin-left: 76%;
  margin-right: 18%;
  height: 40px;
  color: grays;
}
b{
  line-height: 50px;
}
</style>
