<template>
  <div class="wrap">
    <div class="title" style="width:100%;height:100px;">班级学生列表</div>
    <div class="content" style="position:absolute;width:99.2%;height:100%;">
      <el-table :data="tableData" stripe border style="width: 800px;position:relative;top:100px;left:150px;" height="700">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
      <el-button type="primary" style="position:relative;top:-680px;left:85%" @click="toProfile()">返回首页</el-button>
      <div class="address" style="position:relative;top:-450px;left:65%;" @click="toAddress()">通讯录</div>
      <div class="statistics" style="position:relative;top:-400px;left:75%;">查看统计报表</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    toProfile () {
      this.$router.push('/master/profile')
    },
    toAddress () {
      this.$router.push('/master/address')
    }
  }
}
</script>

<style scoped>
.title {
  background-color: #427cd4;
  text-align: center;
  line-height: 100px;
}
.content {
  background-color: #E9EEF3;
}
.statistics {
  width: 170px;      
  height: 140px;      
  background-color:#2e7d74;      
  border-radius: 60px;      
  font-size: 25px;
  line-height: 140px;
  color: white;
  text-align: center;
}
.address {
  width: 160px;      
  height: 140px;      
  background-color:#51c2b4;      
  border-radius: 60px;      
  font-size: 30px;
  line-height: 140px;
  color: white;
  text-align: center;
}
</style>
