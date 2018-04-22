<template>
  <div class="father">
    <div class="child">
      <p class="page-container">404 page not found</p>
      <div align="center">
        <el-button round icon="el-icon-back" type="warning" size="small" @click="turnback" class="button">返回</el-button>
      </div>
    </div>
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
  .father {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .child{
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
