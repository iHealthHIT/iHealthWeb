<template>
  <el-container id="main-menu" class="wrapper">
    <el-header class="header">
      <vheader/>
    </el-header>
      <el-main>
        <vform/>
      </el-main>
  </el-container>
</template>

<script>
import Header from '@/components/Header'
import Vform from '@/components/form'
export default {
  name: 'homepage',
  components: {
    'vheader': Header,
    'vform': Vform
  }
}
</script>

<style scoped>
  .header {
    background-color: #409EFF;
    color: #fff;
    line-height: 60px;
  }
</style>
