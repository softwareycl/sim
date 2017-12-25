<template>
  <div class="wrap">
    <div class="title" style="width:100%;height:100px;">学生干部名单</div>
    <div class="content" style="position:absolute;width:99.2%;height:100%;">
      <el-table :data="tableData" stripe border style="width: 800px;position:relative;top:100px;left:20%;" height="700">
        <el-table-column
          prop="studentId"
          label="学号"
          width="200">
        </el-table-column>
        <el-table-column
          prop="studentName"
          label="姓名"
          width="200">
        </el-table-column>
        <el-table-column
          prop="studentTitle"
          label="职务">
        </el-table-column>
      </el-table>
      <el-button style="position:relative;top:-680px;left:85%;background-color:#F26FB6;color:white;" @click="toPrev()">返回上一页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      hostURL: 'http://localhost:8080/teacher',
      classId: ''
    }
  },
  methods: {
    toPrev () {
      this.$router.push('/teacher/class?' + this.classId)
    },
    getOrganization () {
      this.$axios.get(this.hostURL + '/title', {

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
    this.getOrganization()
  }
}
</script>

<style scoped>
.title {
  background-color: #F0B6CE;
  text-align: center;
  line-height: 100px;
  color: azure;
   font-size: 45px;
}
.content {
  background-color: #FAECF1;
}
</style>
