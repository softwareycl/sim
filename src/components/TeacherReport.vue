<template>
  <div class="wrap">
    <el-container>
      <el-header height="100px">
        统计报表
      </el-header>
      <el-main>
        <div style="position:absolute;right:15%;top:10%;z-index=2">
          <el-button style="position:relative;background-color:#f7cbdb;" @click="goBack">返回上一页</el-button>
        </div>
        <div class="reportform" style="position:absolute;z-index=1;">
          <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
            <el-form-item label="男生人数:">
              {{sizeForm.boysNumber}}
            </el-form-item>
            <el-form-item label="女生人数:">
              {{sizeForm.girlsNumber}}
            </el-form-item>
            <el-form-item label="90-100:">
              {{sizeForm.girlsNumber}}
            </el-form-item>
            <el-form-item label="80-89:">
              {{sizeForm.agradeNumber}}
            </el-form-item>
            <el-form-item label="70-79:">
              {{sizeForm.bgradeNumber}}
            </el-form-item>
            <el-form-item label="60-69:">
              {{sizeForm.cgradeNumber}}
            </el-form-item>
            <el-form-item label="60以下:">
              {{sizeForm.dgradeNumber}}
            </el-form-item>
          </el-form>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sizeForm: {
        boysNumber: 1,
        girlsNumber: '15级软件工程3班',
        agradeNumber: 5,
        bgradeNumber: 5,
        cgradeNumber: 5,
        dgradeNumber: 5
      },
      hostURL: 'http://localhost:8080/teacher',
      classId: ''
    }
  },
  mounted () {
    var id = location.href.split('?')[1]
    this.classId = id
    this.$axios.get(this.hostURL + '/report', {
    }).then((response) => {
      this.sizeForm = []
      this.sizeForm = response.data
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
    }
  }
}
</script>

<style scoped>
.wrap {
  position: absolute;
  width: 100%;
  height:100%;
  background-color: #FAECF1;
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
}
.reportform {
  left: 35%;
  top: 30%;
  background-color: #F2D5EA;
  min-width: 400px;
}
</style>
