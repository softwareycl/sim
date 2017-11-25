<template>
  <div class="wrap">
    <div class="title"><span class="topic">学生信息管理系统</span><span class="blank"></span><span class="welcome">欢迎你！</span></div>
    <div class="content">
      <div class="icons">
        <img class="student" :src="student_img" @click="tologin('student')">
        <img class="master" :src="master_img" @click="tologin('master')">
        <img class="teacher" :src="teacher_img" @click="tologin('teacher')">
        <img class="admin" :src="admin_img" @click="tologin('admin')">
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import student from '../assets/student.jpeg'
import master from '../assets/master.jpeg'
import teacher from '../assets/teacher.jpeg'
import admin from '../assets/admin.jpeg'
export default {
  data () {
    return {
      role: 'student',
      student_img: student,
      master_img: master,
      teacher_img: teacher,
      admin_img: admin
    }
  },
  methods: {
    tologin (name) {
      this.role = name
      console.log(this.role)
      this.$router.push('/login?' + this.role)
    }
  }
}
</script>

<style scoped>
.content {
  background-image: url(../assets/cover.jpeg);
  background-repeat: repeat;  
  background-size: cover;
}

.title {
  background-color: #1a2147;
  width: 100%;
  height: 50px;
  font-family: mb-icon;
  color: #aad5e3;
}

.topic {
  font-size: 26px;
}
.blank {
  width: 100px;
}
.welcome {
  font-size: 20px;
}

.icons img {
  border-radius: 100px;
  width: 300px;
  height: 300px;
}
</style>


