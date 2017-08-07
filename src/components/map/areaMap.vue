<template>
<div id='areaMap'>
    <div class='main'></div>
     <button @click="back" style="width:150px; height:50px; line-hieght:50px">返回</button>
</div>
</template>
<script>
import echarts from 'echarts'
import areaCode from './areaCode.json'
export default {
  name: 'areaMap',
  data () {
    return {
      myChart: {},
      history: [],
      labelLevel: null
    }
  },
  props: {
    tipFormater: {
      type: Function,
      default: function (params) {
        return params.name
      }
    },
    labelDisplayLevel: [Number]
  },
  mounted () {
    this.initMap('100000', this.tipFormater, this.labelDisplayLevel)
    this.history.push('100000')
  },
  methods: {
    initMap (areaCode, formatter, labelLevel) {
      console.log(typeof labelLevel)
      if (typeof labelLevel === 'undefined') {
        labelLevel = 1
      }
      this.$http.get('static/mapdata/' + areaCode + '.json').then((res) => {
        echarts.registerMap(areaCode, res.data)
        this.myChart = echarts.init(document.querySelector('.main'))
        this.myChart.on('mapselectchanged', (params) => {
          this.mapselectchanged(params)
        })
        let labelshow = this.history.length > labelLevel
        this.myChart.setOption({
          tooltip: {
            backgroundColor: 'black',
            trigger: 'item',
            formatter: formatter
          },
          series: [{
            type: 'map',
            map: areaCode,
            label: {
              normal: {
                show: labelshow
              },
              emphasis: {
                show: true
              }
            }
          }],
          type: 'map',
          selectedMode: 'single'
        })
      })
    },
    mapselectchanged (params) {
      let len = this.history.length
      if (len < 3) {
        this.history.push(areaCode[params.batch[0].name])
        this.initMap(areaCode[params.batch[0].name], this.tipFormater, this.labelDisplayLevel)
      }
    },
    back () {
      if (this.history.length > 1) {
        this.history.pop()
        this.initMap(this.history[this.history.length - 1], this.tipFormater, this.labelDisplayLevel)
      }
    }
  }
}
</script>
<style scoped>
     .main {
        width: 1000px;
        height: 800px;
    }
</style>
