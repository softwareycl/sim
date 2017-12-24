<template>
  <div class="wrap">
    <div class="title" style="width:100%;height:100px;">通讯录</div>
    <div class="content" style="width:100%;height:100%;">
      <div class="gap"></div>
      <el-table class="table" :data="tableData" stripe border height="700">
        <el-table-column
          prop="studentName"
          label="学生姓名"
          width="250">
        </el-table-column>
        <el-table-column
          prop="studentId"
          label="学号"
          width="300">
        </el-table-column>
        <el-table-column
          prop="personalPhone"
          label="手机号码"
          width="350">
        </el-table-column>
        <el-table-column
          prop="homePhone"
          label="家庭电话">
        </el-table-column>
      </el-table>
      <el-button class="returnbtn" @click="toPrev()" type="primary">返回上一页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    toPrev () {
      this.$router.push('/master/class')
    }
  }
}
</script>

<style scoped>
.title {
  background-color: #90c8eb;
  text-align: center;
  line-height: 100px;
  font-size: 45px;
}
.content {
  background-color: #bdd7e8;
  text-align: center;
}
.table {
  width: 70%;
  margin: 0 auto;
}
.gap {
  width: 100%;
  height: 2em;
}
.returnbtn {
  margin-top: 2em;
}
</style>
