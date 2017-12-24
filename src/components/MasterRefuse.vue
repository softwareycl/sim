<template>
  <div class="wrap">
    <div class="content">
      <div class="tip">为什么拒绝我？？？</div>
      <div class="reason">
        <el-input class="reasoninput" type="textarea" :autosize="{ minRows: 18, maxRows: 20}" v-model="reason"></el-input>
      </div>
      <el-button class="pushbtn" size="large" type="primary" @click="refuseRequest()">提交</el-button>
      <el-button class="return" size="large" type="warning" @click="toLastPage()">返回</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      requestId: 0,
      reason: '',
      hostURL: 'http://localhost:8080/master'
    }
  },
  methods: {
    refuseRequest () {
      this.$axios.get(this.hostURL + '/refuse', {
        params: {
          requestId: this.requestId,
          reason: this.reason
        }
      }).then((response) => {
        this.$router.push('/master/requests')
      }).catch((error) => {
        this.$message({
          type: 'info',
          message: '连接失败/' + error
        })
      })
    },
    toLastPage () {
      this.$router.push('/master/requests')
    }
  },
  mounted () {
    var arr = location.href.split('?')
    var id = arr[1]
    this.requestId = id
  }
}
</script>

<style scoped>
.wrap {
  background-color: rgb(195, 219, 244);
}
.tip {
  font-size: 4em;
  margin-top: 2em;
  margin-left:6em;
  color:cornflowerblue;
  margin-bottom: 1em;
}
.reason {
  text-align: center;
}
.reasoninput {
  width: 40%;
  margin: 0 auto;
}
.pushbtn {
  font-size: 1em;
  margin-top: 5em;
  margin-left: 35em;
}
.return {
  font-size: 1em;
  margin-top: 5em;
  margin-left: 2em;
}
</style>
