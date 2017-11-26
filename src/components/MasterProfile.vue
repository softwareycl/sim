<template>
  <div class="wrap">
    <el-container>
      <el-header height="100px">
        方琼老师欢迎您！
      </el-header>
      <el-main>
        <div style="position:absolute;z-index=1;height:500px;">
          <div class="myclass" style="position:relative;top:100px;left:380px;" @click="myClass()">我的班级</div>
          <img src="../assets/linux2.jpeg" style="position:relative;top:70px;left:570px;">
          <div class="organization" style="position:relative;top:-750px;left:950px;" @click="showOrganization()">班级组织结构</div>
          <div class="archive" style="position:relative;top:-580px;left:1200px;" @click="showArchives()">修改学生档案</div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    myClass () {
      console.log('3')
      this.$router.push('/master/class')
    },
    showOrganization () {
      console.log('2')
      this.$router.push('/master/organization')
    },
    showArchives () {
      console.log('1')
      this.$router.push('/master/archive')
    }
  }
}
</script>

<style scoped>
img {
  width: 550px;
  height: 550px;
}
.archive {
  width: 220px;      
  height: 220px;      
  background-color:#6895a3;      
  border-radius: 50%;      
  -moz-border-radius: 50%;      
  -webkit-border-radius: 50%;
  font-size: 30px;
  line-height: 220px;
  color: white;
}
.myclass {
  width: 230px;      
  height: 230px;      
  background-color:#70c9e6;      
  border-radius: 50%;      
  -moz-border-radius: 50%;      
  -webkit-border-radius: 50%;
  font-size: 40px;
  line-height: 230px;
  color: white;
}
.organization {
  width: 200px;      
  height: 160px;      
  background-color:#0a4080;      
  border-radius: 50px;
  font-size: 30px;
  line-height: 160px;
  color: white;
}
.el-header {
  background-color: #1ba5f2;
  text-align: center;
  line-height: 60px;
}
.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
