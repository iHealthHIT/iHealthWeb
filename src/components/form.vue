<template>
  <el-form class="form" ref="form" :model="form" label-width="80px">
    <el-form-item label="设备号">
      <el-input v-model="form.sid"> </el-input>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="form.name"> </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import router from '../router/index'
export default {
  name: 'form',
  data () {
    return {
      form: {
        sid: '',
        name: ''
      }
    }
  },
  methods: {
    onSubmit () {
      router.push({name: 'verify', params: {sid: this.sid, name: this.name}})
    }
  }
}
</script>

<style scoped>
  .form{
    width: 40%;
    padding: 15px;
    margin: auto;
  }
</style>
