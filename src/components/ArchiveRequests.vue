<template>
  <div class="wrap">
    <el-container class="container">
      <el-header height="100px">
        档案修改审核
      </el-header>
      <el-main>
        <el-button class="getout" @click="goBack()">返回上一页</el-button>
        <div class="info" style="position:absolute;z-index=1">
          <el-table
          :data="tableData"
          border
          style="width: 100%"
          max-height="450">
            <el-table-column
            fixed
            prop="masterName"
            label="姓名"
            width="150">
            </el-table-column>
            <el-table-column
            prop="masterId"
            label="教职工编号"
            width="200">
            </el-table-column>
            <el-table-column
            prop="reason"
            label="原因"
            width="300">
            </el-table-column>
            <el-table-column
            prop="state"
            label="状态"
            width="120">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="100">
              <template slot-scope="scope">
                <el-button @click="accept(scope.$index, scope.row)" type="text" size="small">接受</el-button>
                <el-button @click="refuse(scope.$index, scope.row)" type="text" size="small">拒绝</el-button>
              </template>
            </el-table-column>
          </el-table>
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
        id: 0,
        masterName: '',
        masterId: '',
        reason: '',
        state: ''
      }],
      hostURL: 'http://localhost:8080/admin'
    }
  },
  mounted () {
    this.getRequests()
  },
  methods: {
    goBack () {
      this.$router.push('/admin/profile')
    },
    accept (index, row) {
      row.state = '已确认'
      console.log(this.tableData)
      console.log(index)
      this.$axios.get(this.hostURL + '/admit', {
        params: {
          requestId: this.tableData[index].id
        }
      }).then((response) => {
        if (response.data === true) {
          this.$message({
            type: 'info',
            message: '成功确认'
          })
        }
        this.getRequests()
      }).catch((error) => {
        console.log('【Error】:', error)
        this.$message({
          title: '网络请求错误',
          message: '请检查网络并重试',
          type: 'error'
        })
      })
    },
    refuse (index, row) {
      row.status = '已拒绝'
      this.$router.push('/admin/refuse?' + this.tableData[index].id)
    },
    getRequests () {
      this.$axios.get(this.hostURL + '/requests', {
      }).then((response) => {
        this.tableData = []
        console.log(response.data)
        this.tableData = response.data
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
.container {
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: #f0a44a;
  text-align: center;
  line-height: 100px;
  font-size: 30px;
  color: #ffffff;
}
.info {
  left: 20%;
  top: 30%;
}
.el-main {
  background-color: #f8e6db;
  line-height: 160px;
  height: 100%;
}
.el-table {
  width: auto;
  height: auto;
  font-size:20px;
}
.getout {
    background-color: #ffa53b;
    position: absolute;
    right: 15%;
    top: 20%;
  }
</style>
