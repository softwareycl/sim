<template>
  <div class="wrap">
    <el-header height="100px">
    导入学生档案
    </el-header>
    <div class="upload">
      <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      }
    }
  }
</script>

<style scoped>
  .wrap {
    background-color: #EBD4B9;
    height: 100%;
    width: 100%;
    position: absolute;
  }
  .upload {
    background-color: #E6E6E6;
    margin: 0 auto;
    width: 500px;
    height: 400px;
    top: -20%;
  }
  .el-header {
    background-color: #f0a44a;
    text-align: center;
    line-height: 100px;
    font-size: 30px;
    color: #ffffff;
  }
</style>
