<template>
  <div class="wrap">
    <el-container>
      <el-header height="100px">修改档案</el-header>
      <el-main>
        <el-button type="primary" class="getout" @click="getOut()">返回</el-button>
        <div class="editpain">
         <el-form :label-position="labelPosition" label-width="100px" v-model="form">
           <el-form-item class="birth" label="生日">
              <el-date-picker v-model="form.birthday" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
              </el-date-picker>
            </el-form-item>
            <el-form-item class="address" label="地址">
              <el-input v-model="form.address" ></el-input>
            </el-form-item>
            <el-form-item class="introduce" label="自我介绍">
              <el-input  v-model="form.introduce" ></el-input>
            </el-form-item>
            <el-form-item class="phone" label="手机">
              <el-input  v-model="form.phone" ></el-input>
            </el-form-item>
            <el-form-item class="telephone" label="家庭电话">
              <el-input  v-model="form.telephone" ></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" class="pushbutton" @click="push()">提交</el-button>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      labelPosition: 'right',
      form: {
        birthday: '',
        address: '',
        introduce: '',
        phone: '',
        telephone: ''
      },
      hostURL: 'http://localhost:8080/student'
    }
  },
  methods: {
    push () {
      this.$axios.post(this.hostURL + '/modify', {
        studentBirth: this.form.birthday,
        studentCity: this.form.address,
        studentProfile: this.form.introduce,
        personalPhone: this.form.phone,
        homePhone: this.form.telephone
      }).then((response) => {
        console.log(response.data)
        this.$router.push('/student/push')
      }).catch((error) => {
        this.$message({
          type: 'info',
          message: '连接失败/' + error
        })
      })
    },
    getOut () {
      this.$router.push('/student/profile')
    }
  },
  mounted () {
    this.$axios.get(this.hostURL + '/info', {

    }).then((response) => {
      console.log(response.data)
      var object = response.data
      this.form.birthday = object.studentBirth
      this.form.address = object.studentCity
      this.form.introduce = object.studentProfile
      this.form.phone = object.personalPhone
      this.form.telephone = object.homePhone
    }).catch((error) => {
      this.$message({
        type: 'info',
        message: '连接失败/' + error
      })
    })
  }
}
</script>

<style scoped>
.el-header {
  background-color: #65a8a0;
  color: #333;
  text-align:center;
  font-size: 30px;
  line-height: 100px;
}
.el-main {
  background-color: #dbecea;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.editpain {
  padding: 50px 20px;
  width: 500px;
  height: 400px;
  background-color: #b7e2dd;
  margin-left: 35%;
  margin-bottom: 170px;
  padding-bottom: 60px;
}
.el-form-item {
  margin-bottom: 30px;
}
.pushbutton {
  width: 100px;
  height: 50px;
  font-size: 20px;
}
.getout {
  margin-left:70%;
  height: 40px;
}
.wrap {
  background-color: #dbecea;
}
</style>
