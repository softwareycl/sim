<template>
  <div class="wrap">
    <el-container>
      <el-header height="100px">
        考勤与成绩登记页面
      </el-header>
      <el-main>
        <div style="position:absolute;z-index=1">
          <el-table :data="tableData" stripe border style="position:relative;top:100px;left:300px;" height="700">
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
            <el-table-column
            label="操作"
            width="100">
              <template slot-scope="scope">
                <el-button @click="modify(scope.row)" type="text" size="small">修改</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-dialog title="修改成绩" :visible.sync="dialogFormVisible" style="z-index=5">
            <el-form :model="tableData1">
              <el-form-item label="姓名" :label-width="formLabelWidth">
                {{tableData1.studentName}}
              </el-form-item>
              <el-form-item label="学号" :label-width="formLabelWidth">
                {{tableData1.studentId}}
              </el-form-item>
              <el-form-item label="成绩" :label-width="formLabelWidth">
                <el-input v-model="tableData1.grade" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="save()">确 定</el-button>
            </div>
          </el-dialog>
        </div>
        <div style="position:absolute;right:10%;top:15%;z-index=2">
          <el-button style="position:relative;background-color:#f7cbdb;" @click="goBack">返回上一页</el-button>
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
        name: '我',
        score: 90,
        id: '1'
      }, {
        name: '你',
        score: 80,
        id: '2'
      }, {
        name: '他',
        score: 50,
        id: '3'
      }],
      dialogFormVisible: false,
      tableData1: {
        name: '',
        score: '',
        id: ''
      },
      id: '',
      hostURL: 'http://localhost:8080/teacher',
      classId: ''
    }
  },
  mounted () {
    var id = location.href.split('?')[1]
    this.classId = id
    this.$axios.get(this.hostURL + '/grade', {

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
      this.$router.push('/teacher/class?' + this.classId)
    },
    modify (row) {
      this.tableData1.studentId = row.studentId
      this.tableData1.studentName = row.studentName
      this.tableData1.grade = row.grade
      this.dialogFormVisible = true
      this.id = row.studentId
    },
    save () {
      this.$axios.get(this.hostURL + '/modifyGrade', {
        params: {
          id: this.id,
          score: this.tableData1.score
        }
      })
      .then((response) => {
        this.mounted()
      })
      .catch((error) => {
        console.log('【Error】:', error)
        this.$message({
          title: '网络请求错误',
          message: '请检查网络并重试',
          type: 'error'
        })
      })
      this.dialogFormVisible = false
    }

  }
}
</script>

<style scoped>
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
