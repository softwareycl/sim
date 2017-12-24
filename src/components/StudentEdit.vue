<template>
  <div class="wrap3">
    <el-container>
      <el-header height="50px"><b>修改档案</b> <el-button class="getout" @click="getOut()">返回</el-button></el-header>
      <el-main>
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
          <el-button class="pushbutton" @click="push()">提交</el-button>
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
  line-height: 50px;
}
.el-main {
  background-color: #dbecea;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.editpain {
  padding: 30px 20px;
  width: 500px;
  height: 400px;
  background-color: #dbecea;
  margin-left: 550px;
  margin-top: 200px;
  margin-bottom: 170px;
}
.pushbutton {
  background-color: #eff4f3;
  width: 100px;
  height: 50px;
  font-size: 20px;
}

.getout {
  background-color: #65a8a0;
  margin-left:1655px;
  height: 40px;
}
</style>
