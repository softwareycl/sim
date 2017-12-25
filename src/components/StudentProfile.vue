<template>
   <div class="wrap">
     <el-container>
        <el-header height="100px"><b>{{ Name }}同学欢迎你</b> <el-button class="getout" @click="getOut()">注销</el-button></el-header>
           <el-main>
             <div class="left">
               <img :src="Photo" alt="picture">
             </div>
            <div class="right">
              <div class="myname">姓名：{{ Name }}</div>
              <div class="sid">学号：{{ Sid }}</div>
              <div class="sex">性别：{{ Sex }}</div>
              <div class="class">班级：{{ Class }}</div>
              <div class="birthday">生日：{{ Birthday }}</div>
              <div class="phone">手机：{{ Phone }}</div>
              <div class="telephone">家庭电话：{{ Telephone }}</div>
              <div class="address">地址：{{  Addres }}</div>
              <div class="introduce">自我介绍：{{  Introduce }}</div>
            </div>
           </el-main>
           <el-footer>
            <el-button type="primary" class="edit" @click="toEdit()" large :abled="whether">编辑我的个人信息</el-button>
            <el-button type="warning" class="return" @click="exit()" large>退出</el-button>
           </el-footer>
     </el-container>
   </div>
</template>

<script>
export default {
  data () {
    return {
      Name: '郭蕴喆',
      Sid: '201530613838',
      Sex: '男',
      Class: '15级软件3班',
      Phone: '11111111',
      Telephone: '10086',
      Birthday: '1993/5/10',
      Addres: '内蒙古大草原',
      Introduce: '美貌与实力并重，邪恶与恐惧的化身。四千年美男子',
      Photo: '',
      hostURL: 'http://localhost:8080/student',
      whether: true
    }
  },
  methods: {
    getMyInfo () {
      this.$axios.get(this.hostURL + '/info', {
      }).then((response) => {
        console.log(response.data)
        var object = response.data
        this.Name = object.studentName
        this.Sid = object.studentId
        this.Sex = object.studentSex
        this.Class = object.className
        this.Phone = object.personalPhone
        this.Telephone = object.homePhone
        this.Birthday = object.studentBirth
        this.Addres = object.studentCity
        this.Introduce = object.studentProfile
        this.Photo = 'http://localhost:8080/img/' + object.studentPhoto
      }).catch((error) => {
        this.$message({
          type: 'info',
          message: '连接失败/' + error
        })
      })
    },
    getRequestState () {
      this.$axios.get(this.hostURL + '/request', {

      }).then((response) => {
        if (response.data === true) {
          this.$message({
            type: 'info',
            message: '信息修改申请已通过'
          })
        } else {
          this.$message({
            type: 'info',
            message: '信息修改申请被拒绝'
          })
        }
      }).catch((error) => {
        this.$message({
          type: 'info',
          message: '连接失败/' + error
        })
      })
    },
    getOut () {
      this.$axios.get(this.hostURL + '/logout', {
      }).then((response) => {
        console.log(response.data)
        this.$router.push('/')
      }).catch((error) => {
        this.$message({
          type: 'info',
          message: '连接失败/' + error
        })
      })
    },
    toEdit () {
      this.$router.push('/student/edit')
    },
    exit () {
      this.$router.push('/')
    }
  },
  mounted () {
    this.getMyInfo()
    this.getRequestState()
  }
}
</script>

<style scoped>
.wrap {
  background: #dbecea;
}
.left {
  width: 300px;
  float: left;
  margin-left: 400px;
  margin-top: 300px;
}
.right {
  width: 500px;
  font-size: 30px;
  font-weight:bold;
  float: right;
  margin-right: 400px;
}
.el-header {
  background-color: #65a8a0;
  color: #333;
  text-align:center;
  line-height: 100px;
  font-size: 30px;
}
.getout {
  background-color: #40aee9;
  margin-left:1655px;
  height: 40px;
}
.el-main {
  background-color: #dbecea;
  color: #333;
  text-align: center;
  line-height: 70px;
  width: 100%;
  margin: 0 auto;
}
.el-footer {
  text-align: center
}
.edit {
  margin: 0 auto;
}
</style>
