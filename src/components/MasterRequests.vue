<template>
  <div class="wrap">
    <div class="title" style="width:100%;height:100px;">学生申请信息列表</div>
    <div class="content" style="width:100%;height:100%;">
      <div class="gap"></div>
      <el-table :data="tableData" stripe border style="width: 60%" height="600">
        <el-table-column
          prop="studentName"
          label="姓名"
          width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.studentName }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="studentId"
          label="学号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="content"
          label="申请信息">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="accept(scope.$index, scope.row)">确认</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="refuse(scope.$index, scope.row)">拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="footer">
        <el-button class="return" size="large" type="warning" @click="toProfile()">返回首页</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hostURL: 'http://localhost:8080/master',
      tableData: [
        {
          studentName: '我',
          studentId: '2015',
          content: '没什么',
          id: 1
        }
      ]
    }
  },
  methods: {
    getRequests () {
      this.$axios.get(this.hostURL + '/requests', {

      }).then((response) => {
        this.tableData = response.data
      }).catch((error) => {
        this.$message({
          type: 'info',
          message: '连接失败/' + error
        })
      })
    },
    accept (index, row) {
      console.log(row.id)
      this.$axios.get(this.hostURL + '/accept', {
        params: {
          requestId: row.id
        }
      }).then((response) => {
        console.log(response.data)
        this.$message({
          type: 'info',
          message: '已确认'
        })
      }).catch((error) => {
        this.$message({
          type: 'info',
          message: '连接失败/' + error
        })
      })
    },
    refuse (index, row) {
      console.log(row.id)
      this.$router.push('/master/refuse?' + row.id)
    },
    toProfile () {
      this.$router.push('/master/profile')
    }
  },
  mounted () {
    this.getRequests()
  }
}
</script>

<style scoped>
.title {
  background-color: #70c9e6;
  text-align: center;
  line-height: 100px;
  font-size: 40px;
}
.content {
  background-color: #c3e9f5;
  text-align: center;
}
.gap {
  padding-bottom: 1%;
}
.el-table {
  margin: 0 auto;
}
.footer {
  margin-bottom: 14%;
}
.return {
  margin-top: 1em;
}
</style>
