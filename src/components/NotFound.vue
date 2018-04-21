<template>
  <div>
    <p class="page-container">404 page not found</p>
    <el-button @click="turnback">返回</el-button>
  </div>
</template>

<script>
import router from '../router/index'
export default {
  name: 'not-found',
  methods: {
    turnback () {
      router.push({name: 'homepage'})
    }
  }
}
</script>

<style scoped>
  .page-container {
    font-size: 20px;
    text-align: center;
    color: rgb(192, 204, 218);
  }
</style>
