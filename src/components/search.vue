<template>
  <div class="From_con">
    <div>
      <el-select v-model="value1">
        <el-option
          v-for="item in option1"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="value2">
        <el-option
          v-for="item in option2"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <ve-line
        :data="chartData"
        :toolbox="toolbox">
      </ve-line>
    </div>
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line'
import 'echarts/lib/component/toolbox'
import 'v-charts/lib/bar'
import axios from 'axios'
export default {
  name: 'search',
  data () {
    return {
      sid: this.$route.params.sid,
      option1: [{
        value: 'heartRate',
        label: '心率'
      }, {
        value: 'step',
        label: '步数'
      }, {
        value: 'weight',
        label: '体重'
      }, {
        value: 'height',
        label: '身高'
      }],
      option2: [{
        value: 'day',
        label: '天'
      }, {
        value: 'week',
        label: '周'
      }, {
        value: 'month',
        label: '月'
      }, {
        value: 'year',
        label: '年'
      }],
      value1: 'heartRate',
      value2: 'day'
    }
  },
  created: function () {
    var vm = this
    axios.get('https://yesno.wtf/api',
      {params: {'sid': vm.sid, 'dataType': vm.value1, 'dataSeg': vm.value2}})
      .then(function (response) {

      })
      .catch(function (error) {
        console.log('错误！API 无法处理。' + error)
      })
    this.chartData = {
      columns: ['日期', '销售额-1季度'],
      rows: [
        { '日期': '1月1日', '销售额-1季度': 1523 },
        { '日期': '1月2日', '销售额-1季度': 1223 },
        { '日期': '1月3日', '销售额-1季度': 2123 },
        { '日期': '1月4日', '销售额-1季度': 4123 },
        { '日期': '1月5日', '销售额-1季度': 3123 },
        { '日期': '1月6日', '销售额-1季度': 7123 }
      ]
    }
    this.toolbox = {
      feature: {
        magicType: {type: ['line', 'bar']},
        saveAsImage: {}
      }
    }
  },
  components: { VeLine }
}
</script>

<style lang="css" scoped>
</style>
