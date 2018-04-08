<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h5>vue简单例子</h5>
    <div class="Form_con">
      <input type="text" placeholder="输入要展示的内容" v-model="text">
      <p>您输入的内容为：{{text}}</p>
      <el-button @click.stop="Search">搜索"{{text}}"</el-button>
    </div>
  </div>
</template>

<script>
import router from '../router/index'
export default {
  name: 'Hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      text: ''
    }
  },
  methods: {
    Search: function () {
      router.push({name: 'search', params: {routertext: this.text}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
