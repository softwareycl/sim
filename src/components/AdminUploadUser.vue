<template>
  <div class="wrap">
    <el-header height="100px">
      导入用户信息
    </el-header>
    <div style="position:absolute;right:15%;top:20%;z-index=2">
      <el-button style="position:relative;background-color:#ffa53b;" @click="goBack">返回上一页</el-button>
    </div>
    <div class="upload">
      <el-upload
      class="upload-demo"
      :action="this.importURL"
      :data="this.urlParam"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      :on-error="handleError"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">请上传excel</div>
    </el-upload>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        importURL: 'http://localhost:8080/admin/import',
        urlParam: {
          type: 'user'
        }
      }
    },
    methods: {
      handleSuccess () {
        this.$message({
          type: 'info',
          message: '上传成功'
        })
      },
      handleError () {
        this.$message({
          type: 'info',
          message: '上传失败，请重试'
        })
      },
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePreview (file) {
        console.log(file)
      },
      handleExceed (files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
      },
      goBack () {
        this.$router.push('/admin/profile')
      }
    }
  }
</script>

<style scoped>
  .wrap {
    background-color: #f8e6db;
    height: 100%;
    width: 100%;
    position: absolute;
  }
  .upload {
    position: absolute;
    background-color: #E6E6E6;
    width: 500px;
    height: 400px;
    top: 30%;
    left: 30%;
  }
  .el-header {
    background-color: #f0a44a;
    text-align: center;
    line-height: 100px;
    font-size: 30px;
    color: #ffffff;
  }
</style>
