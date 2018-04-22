<template>
  <div class="From_con">
    <div>
      <el-row type="flex" justify="space-around">
        <el-col :xs="8" :md="3" :lg="2">
          <el-select v-model="value1" @change="changeType">
            <el-option
              v-for="item in option1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :xs="8" :md="3" :lg="2">
          <el-select v-model="value2" @change="changeType">
            <el-option
              v-for="item in option2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
    </div>
      <el-row  type="flex" justify="center">
        <el-col :xs="24" :md="20" :lg="16">
          <ve-line class="chart"
                   :data="chartData"
                   :toolbox="toolbox">
          </ve-line>
        </el-col>
      </el-row>
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
      value2: 'day',
      chartData: {}
    }
  },
  created: function () {
    var vm = this
    axios.get('https://yesno.wtf/api',
      {params: {'sid': vm.sid, 'dataType': vm.value1, 'dataSeg': vm.value2}})
      .then(function (response) {
        vm.chartData = {
          columns: ['時間', '心率'],
          rows: [
            { '時間': '00:00', '心率': 68 },
            { '時間': '04:00', '心率': 66 },
            { '時間': '08:00', '心率': 74 },
            { '時間': '12:00', '心率': 78 },
            { '時間': '16:00', '心率': 73 },
            { '時間': '20:00', '心率': 84 },
            { '時間': '24:00', '心率': 69 }
          ]
        }
      })
      .catch(function (error) {
        console.log('错误！API 无法处理。' + error)
      })
    this.toolbox = {
      feature: {
        magicType: {type: ['line', 'bar']},
        saveAsImage: {}
      }
    }
  },
  methods: {
    changeType () {
      var vm = this
      axios.get('https://yesno.wtf/api',
        {params: {'sid': vm.sid, 'dataType': vm.value1, 'dataSeg': vm.value2}})
        .then(function (response) {
          vm.chartData = {
            columns: ['時間', '步数'],
            rows: [
              { '時間': '4月1日', '步数': 5520 },
              { '時間': '4月2日', '步数': 7221 },
              { '時間': '4月3日', '步数': 4125 },
              { '時間': '4月4日', '步数': 14127 },
              { '時間': '4月5日', '步数': 8126 },
              { '時間': '4月6日', '步数': 9122 },
              { '時間': '4月6日', '步数': 5133 }
            ]
          }
        })
        .catch(function (error) {
          console.log('错误！API 无法处理。' + error)
        })
    }
  },
  components: { VeLine }
}
</script>

<style lang="css" scoped>
  .chart{
    margin-top: 50px;
  }
</style>
