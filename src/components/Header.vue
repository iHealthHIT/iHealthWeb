<template>
  <el-row>
    <el-col :span="24">
      <a id="logo" href="/">
        <img src="../assets/logo.png" alt="" width="10%">
        <span>健康管理系统</span>
      </a>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style scoped>
  #logo {
    display: inline-block;
    font-size: 1.5em;
    line-height: 40px;
    color: #2c3e50;
    font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    font-weight: 500;
  }
  a {
    margin-top: 10px;
    text-decoration: none;
  }
  img {
    border: none;
  }
</style>
