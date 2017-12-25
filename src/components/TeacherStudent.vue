<template>
  <div class="wrap">
    <div class="title" style="text-align: center;">学生信息</div>
    <div class="theForm">
      <el-form :label-position="labelPosition" label-width="100px" v-model="form" size="large">
        <el-form-item class="username" label="用户名">
          {{form.studentName}}
        </el-form-item>
        <el-form-item class="studentId" label="学号">
          {{form.studentId}}
        </el-form-item>
        <el-form-item label="性别">
          {{form.studentSex}}
        </el-form-item>
        <el-form-item label="班级">
          {{form.className}}
        </el-form-item>
        <el-form-item label="手机号码">
          {{form.personalPhone}}
        </el-form-item>
        <el-form-item label="家庭电话">
          {{form.homePhone}}
        </el-form-item>
        <el-form-item label="生日">
          {{form.studentBirth}}
        </el-form-item>
        <el-form-item label="住址">
          {{form.studentCity}}
        </el-form-item>
        <el-form-item label="自我介绍">
          {{form.studentProfile}}
        </el-form-item>
        <el-form-item label="照片">
          <img :src="form.Photo" alt="logo" title="学生照片">
        </el-form-item>
      </el-form>
    </div>
    <el-button class="returnbtn" @click="toClass()">返回上一页</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      labelPosition: 'left',
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
      hostURL: 'http://localhost:8080/teacher',
      classId: ''
    }
  },
  methods: {
    getStudentInfo (stuId) {
      this.$axios.get(this.hostURL + '/studentProfile', {
        params: {
          studentId: stuId
        }
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
    toClass () {
      this.$router.push('/teacher/class?' + this.classId)
    }
  },
  mounted () {
    var arr = location.href.split('?')[1].split('&')
    // var arr2 = arr.split('&')
    console.log(arr)
    var stuId = arr[1]
    var classID = arr[0]
    this.classId = classID
    this.getStudentInfo(stuId)
    // var stuId = arr.split('?')[1]
    // var classID = arr[2]
    // this.classId = classID
    // this.getStudentInfo(stuId)
  }
}
</script>

<style scoped>
.el-form-item {
  font-weight:bold;
}
.theForm {
  padding-top: 2em;
  width: 30%;
  font: 3em;
  padding-left: 10%;
  /* background-color:#83b4ae; */
  margin: 0 auto;
}
.wrap {
  background: #FAECF1;
  text-align: center;
}
.title {
  height: 100px;
  line-height: 100px;
  font-size: 2em;
  background: #F0B6CE;  
}
.returnbtn {
  margin-top: 2em;
  margin-left: 3em;
  background: #f7cbdb;
}
</style>
