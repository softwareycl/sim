<template>
  <div class="wrap">
    <div class="title" style="width:100%;height:100px;">班级学生列表</div>
    <div class="content" style="position:absolute;width:100%;height:100%;">
      <el-tooltip class="item" effect="dark" content="点击某列可查看具体的学生信息哦！" placement="top-start">
        <el-table :data="tableData" stripe border style="width: 800px;position:relative;top:100px;left:150px;" height="700" @row-click="toStudent">
          <el-table-column
            prop="studentId"
            label="学号"
            width="300">
          </el-table-column>
          <el-table-column
            prop="studentName"
            label="姓名"
            width="300">
          </el-table-column>
          <el-table-column
            prop="studentSex"
            label="性别">
          </el-table-column>
        </el-table>
      </el-tooltip>
      <el-button  style="position:relative;top:-680px;left:85%;background-color:#70c9e6;color:black;" @click="toProfile()">返回首页</el-button>
      <div class="address" style="position:relative;top:-450px;left:65%;" @click="toAddress()">通讯录</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        studentId: '2015',
        studentName: '我',
        studentSex: '男'
      }],
      hostURL: 'http://localhost:8080/master'
    }
  },
  methods: {
    toStudent (row) {
      console.log(row.studentId)
      this.$router.push('/master/student?' + row.studentId)
    },
    toProfile () {
      this.$router.push('/master/profile')
    },
    toAddress () {
      this.$router.push('/master/address')
    }
  },
  mounted () {
    this.$axios.get(this.hostURL + '/classInfo', {

    }).then((response) => {
      this.tableData = []
      this.tableData = response.data
    }).catch((error) => {
      this.$message({
        type: 'info',
        message: '连接失败/' + error
      })
    })
  }
}
</script>

<style scoped>
.title {
  background-color: #70c9e6;
  text-align: center;
  line-height: 100px;
  font-size: 45px;
}
.content {
  background-color: #c3e9f5;
}

.address {
  width: 160px;      
  height: 140px;      
  background-color:#90c8eb;      
  border-radius: 60px;      
  font-size: 30px;
  line-height: 140px;
  color: white;
  text-align: center;
}
</style>
