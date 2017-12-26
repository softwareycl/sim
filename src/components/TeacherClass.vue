<template>
  <div class="wrap">
    <el-container>
      <el-header height="100px">
        班级信息
      </el-header>
      <el-main>
        <div style="position:absolute;z-index=1">
          <el-tooltip class="item" effect="dark" content="点击某列可查看具体的学生信息哦！" placement="top-start">
          <el-table :data="tableData" stripe border style="position:relative;top:100px;left:200px;" height="700" @row-click="toStudent">
            <el-table-column
              prop="studentName"
              label="姓名"
              width="200">
            </el-table-column>
            <el-table-column
              prop="studentId"
              label="学号"
              width="200">
            </el-table-column>
            <el-table-column
              prop="studentSex"
              label="性别"
              width="100">
            </el-table-column>
          </el-table>
          </el-tooltip>
        </div>
        <div style="position:absolute;z-index=2">
          <el-button style="position:relative;left:1400px;top:-40px;background-color:#f7cbdb;" @click="goBack">返回首页</el-button>
          <div class="title" style="position:relative;left:1100px;top:-100px;">班级：{{className}}</div>
          <div class="count" style="position:relative;left:1100px;top:-200px;">人数：{{amount}}</div>
          <div class="address" style="position:relative;left:1100px;top:-200px;" @click="toAddressBook()">通讯录</div>
          <div class="organization" style="position:relative;left:1350px;top:-310px;" @click="toOrganization()">班级职务列表</div>
          <div class="score" style="position:relative;left:1100px;top:-200px;" @click="toScore">成绩记录</div>
          <div class="statistics" style="position:relative;left:1350px;top:-310px;" @click="toStatistics()">查看统计报表</div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        studentName: '我',
        studentId: 1,
        studentSex: '男'
      }],
      className: '一班',
      amount: 43,
      hostURL: 'http://localhost:8080/teacher',
      classId: ''
    }
  },
  methods: {
    getClassInfo (id) {
      this.$axios.get(this.hostURL + '/classInfo', {
        params: {
          classId: this.classId
        }
      }).then((response) => {
        this.className = response.data.className
        this.amount = response.data.studentNumber
        this.tableData = []
        this.tableData = response.data.fakeStudentList
      }).catch((error) => {
        this.$message({
          type: 'info',
          message: '连接失败/' + error
        })
      })
    },
    toScore () {
      this.$router.push('/teacher/score?' + this.classId)
    },
    toAddressBook () {
      this.$router.push('/teacher/address?' + this.classId)
    },
    toOrganization () {
      this.$router.push('/teacher/organization?' + this.classId)
    },
    toStatistics () {
      this.$router.push('/teacher/report?' + this.classId)
    },
    goBack () {
      this.$router.push('/teacher/profile')
    },
    toStudent (row) {
      console.log(row.studentId)
      this.$router.push('/teacher/student?' + row.studentId + '&' + this.classId)
    }
  },
  mounted () {
    var id = location.href.split('?')[1]
    this.classId = id
    this.getClassInfo(id)
  }
}
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight:bold;
}
.count {
  font-size: 25px;
}
.address {
  width: 100px;      
  height: 100px;      
  background-color:#e8488b;      
  border-radius: 50%;      
  -moz-border-radius: 50%;      
  -webkit-border-radius: 50%;
  font-size: 20px;
  line-height: 100px;
  color: white;
  text-align: center;
}
.organization {
  width: 130px;      
  height: 130px;      
  background-color:#eda6c0;      
  border-radius: 50%;      
  -moz-border-radius: 50%;      
  -webkit-border-radius: 50%;
  font-size: 20px;
  line-height: 130px;
  color: white;
  text-align: center;
}
.score {
  width: 100px;      
  height: 100px;      
  background-color:#de7c9f;      
  border-radius: 50%;      
  -moz-border-radius: 50%;      
  -webkit-border-radius: 50%;
  font-size: 20px;
  line-height: 100px;
  color: white;
  text-align: center;
}
.statistics {
  width: 130px;      
  height: 130px;      
  background-color:#db6597;      
  border-radius: 50%;      
  -moz-border-radius: 50%;      
  -webkit-border-radius: 50%;
  font-size: 20px;
  line-height: 130px;
  color: white;
  text-align: center;
}
.el-header {
  background-color: #F0B6CE;
  text-align: center;
  line-height: 100px;
  font-size: 30px;
  color: #ffffff;
}
.el-main {
  background-color: #FAECF1;
  text-align: center;
  line-height: 160px;
  height: 900px;
}
.el-table {
  font-size:20px;
}
</style>
