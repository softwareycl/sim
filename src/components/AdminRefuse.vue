<template>
  <div class="wrap">
    <div>
      <el-button class="return" @click="goBack">返回上一页</el-button>
      <div class="why">为什么拒绝我？</div>
      <el-input class="input" type="textarea" :autosize="{ minRows: 20}" placeholder="请输入内容" v-model="reason"></el-input>
      <el-button class="send" @click="refuse()">发送</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      reason: '',
      requestId: '',
      hostURL: 'http://localhost:8080/admin'
    }
  },
  mounted () {
    var arr = location.href.split('?')
    var requestId = arr[1]
    this.requestId = requestId
  },
  methods: {
    goBack () {
      this.$router.push('/admin/request')
    },
    refuse () {
      this.$axios.get(this.hostURL + '/refuse', {
        params: {
          requestId: this.requestId,
          reason: this.reason
        }
      }).then((response) => {
        if (response.data === true) {
          this.$message({
            type: 'info',
            message: '已拒绝'
          })
          this.goBack()
        } else {
          this.$message({
            type: 'info',
            message: '失败，请重试'
          })
        }
      }).catch((error) => {
        this.$message({
          title: '网络请求错误',
          message: '请检查网络并重试/' + error,
          type: 'error'
        })
      })
    }
  }
}
</script>

<style scoped>
.return {
  margin-top: 5%;
  margin-left: 80%;
  background: #ffa53b;
}
.send {
  margin-top: 20px;
  margin-left: 30%;
  background: #ffa53b;
}
.input {
  margin-top: 50px;
  margin-left: 30%;
  width: 800px;
  display: block;
}
.why {
  margin-top: 50px;
  margin-left: 20%;
  height: 100px;
  line-height: 100px;
  font-size: 75px;
  font-style: oblique;
  font-weight: bold;
}
.wrap {
  background: #EBD4B9;
}
</style>
