<template>
  <div class="wrap">
    <el-container>
      <el-header height="100px">
        成绩登记页面
      </el-header>
      <el-main>
        <div style="position:absolute;z-index=1">
          <el-table :data="tableData" stripe border style="position:relative;top:100px;left:300px;" height="500">
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
              prop="grade"
              label="成绩">
            </el-table-column>
          </el-table>
        </div>
        <div style="position:absolute;z-index=2">
          <el-button style="position:relative;left:1500px;top:-40px;background-color:#f7cbdb;" @click="goBack">返回上一页</el-button>
          <div class="modifier" style="position:relative;left:1000px;top:-50px;">修改</div>
          <div class="score" style="position:relative;left:1000px;top:-30px;">保存</div>
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
        studentId: 90,
        grade: '满勤'
      }],
      hostURL: 'http://localhost:8080/teacher',
      classId: ''
    }
  },
  methods: {
    goBack () {
      this.$router.push('/teacher/class?' + this.classId)
    },
    getGrades () {
      this.$axios.get(this.hostURL + '/grade', {

      }).then((response) => {
        this.tableData = response.data
      }).catch((error) => {
        this.$message({
          type: 'info',
          message: '连接失败/' + error
        })
      })
    }
  },
  mounted () {
    var id = location.href.split('?')[1]
    this.classId = id
    this.getGrades()
  }
}
</script>

<style scoped>
.modifier {
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
  width: 630px;
  font-size:20px;
}
</style>
