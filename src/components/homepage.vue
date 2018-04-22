<template>
  <el-container id="main-menu" class="wrapper">
    <el-header class="header">
      <Header/>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'homepage',
  components: { Header }
}
</script>

<style scoped>
  .header {
    background-color: #409EFF;
    color: #fff;
    line-height: 60px;
  }
</style>
