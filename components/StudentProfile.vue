<template>
  <div>拉阿拉啦啦啦啦</div>
</template>

<script>
export default {
  data () {
    return {
      hostURL: 'http://localhost:8080/student'
    }
  },
  mounted () {
    this.$axios.get(this.hostURL + '/info', {

    }).then((response) => {
      console.log(response.data)
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

</style>
