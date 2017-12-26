<template>
  <div class="wrap">
    <el-container class="container">
      <el-header height="100px">
        档案修改审核
      </el-header>
      <el-main>
        <el-button class="getout" @click="goBack()">返回上一级</el-button>
        <div class="info" style="position:absolute;z-index=1">
          <el-table
          :data="tableData"
          border
          style="width: 100%"
          max-height="450">
            <el-table-column
            fixed
            prop="name"
            label="姓名"
            width="150">
            </el-table-column>
            <el-table-column
            prop="id"
            label="id"
            width="200">
            </el-table-column>
            <el-table-column
            prop="reason"
            label="原因"
            width="300">
            </el-table-column>
            <el-table-column
            prop="status"
            label="状态"
            width="120">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="100">
              <template slot-scope="scope">
                <el-button @click="accept(scope.row)" type="text" size="small">接受</el-button>
                <el-button @click="refuse(scope.row)" type="text" size="small">拒绝</el-button>
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
        id: 1,
        name: 'sb',
        status: '待处理',
        reason: 'xxx'
      }, {
        id: 2,
        name: 'sb1',
        status: '待处理',
        reason: 'xxx'
      }, {
        id: 3,
        name: 'sb2',
        status: '待处理',
        reason: 'xxx'
      }]
    }
  },
  mounted () {
    this.$axios.get(this.hostURL + '', {

    }).then((response) => {
      this.tableData = []
      this.tableData = response.data
    }).catch((error) => {
      this.$message({
        type: 'info',
        message: '连接失败/' + error
      })
    })
  },
  methods: {
    goBack () {
      this.$router.push('/admin/profile')
    },
    accept (row) {
      row.status = '已接受'
      this.$axios({
        url: '',
        method: 'post',
        baseURL: this.hostUrl,
        data: {
          status: row.status
        }
      })
      .then((response) => {
      })
      .catch((error) => {
        console.log('【Error】:', error)
        this.$message({
          title: '网络请求错误',
          message: '请检查网络并重试',
          type: 'error'
        })
      })
    },
    refuse (row) {
      row.status = '已拒绝'
      this.$router.push('/admin/refuse')
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
  background-color: #EB8610;
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
  background-color: #EBD4B9;
  line-height: 160px;
  height: 100%;
}
.el-table {
  width: auto;
  height: auto;
  font-size:20px;
}
.getout {
    background-color: #65a8a0;
    position: absolute;
    right: 15%;
    top: 20%;
  }
</style>
