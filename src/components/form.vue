<template>
  <div class="father">
    <el-form class="form" size="mini" ref="form" :model="form" label-width="80px">
      <el-row type="flex" justify="center">
        <el-col>
          <el-form-item label="设备号" prop="sid" :rules="[{
            required: true, message: '设备号不能为空', trigger: 'blur'
          }]">
            <el-input class="input" v-model="form.sid"> </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col>
          <el-form-item label="姓名" prop="name" :rules="[{
            required: true, message: '姓名不能为空', trigger: 'blur'
          }]">
            <el-input v-model="form.name"> </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <div align="center">
        <el-form-item>
          <el-button round class="button" type="primary" size="small" @click="onSubmit(form)">查询</el-button>
        </el-form-item>
      </div>
      <el-alert title="查询失败" type="error"
        description="未查询到相关用户，请仔细检查设备号和姓名，重新输入"
        show-icon v-show="form.isShow">
      </el-alert>
    </el-form>
  </div>
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
    onSubmit (form) {
      this.$refs.form.validate((valid) => {
        if (valid) {
          var vm = this
          axios.get('https://localhost:3000/websignup',
            {params: {'sid': vm.sid, 'name': vm.name}})
            .then(function (response) {
              if (response.data.exits === 'true') {
                router.push({name: 'home', params: {sid: vm.form.sid}})
              } else {
                vm.form.isShow = true
              }
            })
            .catch(function (error) {
              console.log('错误！API 无法处理。' + error)
              router.push({name: 'NotFound'})
            })
        } else {
          console.log('empty verify!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
  .father{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .form{
    width: 300px;
    padding-left: 10px;
    padding-top: 30px;
    padding-bottom: 10px;
    padding-right: 40px;
    position: fixed;
    left: 45%;
    top: 40%;
    transform: translate(-50%, -50%);
  }
</style>
