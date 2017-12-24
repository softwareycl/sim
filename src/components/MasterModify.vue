<template>
  <div class="wrap">
    <div class="title">修改学生信息</div>
    <div class="theForm">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="地址">
          <el-input v-model="form.studentCity"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.studentName"></el-input>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="form.studentId"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-button class="pushbtn" type="primary" @click="push()">确认修改</el-button>
    <el-button class="return" type="warning" @click="toStudent()">取消</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        studentName: '郭蕴喆',
        studentId: '201530613838',
        studentSex: '男',
        className: '15级软件3班',
        personalPhone: '11111111',
        homePhone: '10086',
        studentBirth: '1993/5/10',
        studentCity: '内蒙古大草原',
        studentProfile: '美貌与实力并重，邪恶与恐惧的化身。四千年美男子',
        Photo: ''
      },
      hostURL: 'http://localhost:8080/master'
    }
  },
  methods: {
    getStudentInfo (stuId) {
      this.$axios.get(this.hostURL + '/student', {
        studentId: stuId
      }).then((response) => {
        console.log(response.data)
        this.form = response.data
      }).catch((error) => {
        this.$message({
          type: 'info',
          message: '连接失败/' + error
        })
      })
    },
    push () {
      this.$axios.post(this.hostURL + '/modify', {
        data: this.form
      }).then((response) => {
        if (response.data === true) {
          this.toStudent()
        } else {
          this.$message({
            type: 'info',
            message: '修改失败'
          })
        }
      }).catch((error) => {
        this.$message({
          type: 'info',
          message: '连接失败/' + error
        })
      })
    },
    toStudent () {
      this.$router.push('/master/student?' + this.form.studentId)
    }
  },
  mounted () {
    var arr = location.href.split('?')
    var stuId = arr[1]
    this.getStudentInfo(stuId)
  }
}
</script>

<style scoped>
.wrap {
  background: rgb(195, 219, 244);
  text-align: center;
}
.title {
  height: 100px;
  font-size: 30px;
  line-height: 100px;
  background: #70c9e6;
}
.theForm {
  padding-top: 2em;
  width: 30%;
  font: 3em;
  padding-left: 10%;
  /* background-color:#83b4ae; */
  margin: 0 auto;
}
.el-form-item {
  font-weight:bold;
}
.el-input {
  width: 50%;
}
.gap {
  margin-bottom: 5%;
}
</style>
