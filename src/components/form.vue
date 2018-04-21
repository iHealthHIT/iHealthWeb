<template>
  <el-form class="form" ref="form" :model="form" label-width="80px">
    <el-form-item label="设备号">
      <el-input v-model="form.sid"> </el-input>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="form.name"> </el-input>
    </el-form-item>
    <el-form-item>
      <el-button class="button" type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
    <el-alert title="查询失败" type="error"
      description="未查询到相关用户，请仔细检查设备号和姓名，重新输入"
      show-icon v-show="form.isShow">
    </el-alert>
  </el-form>
</template>

<script>
import router from '../router/index'
import axios from 'axios'
export default {
  name: 'form',
  data () {
    return {
      form: {
        sid: '',
        name: '',
        isShow: false
      }
    }
  },
  methods: {
    onSubmit () {
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          if (response.data.answer === 'yes') {
            router.push({name: 'verify', params: {sid: vm.form.sid}})
          } else {
            vm.form.isShow = true
          }
        })
        .catch(function (error) {
          console.log('错误！API 无法处理。' + error)
          router.push({name: 'NotFound'})
        })
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
  .button{
    margin: auto;
  }
</style>
