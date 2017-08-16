<template>
  <div id='Map'>
    <div id="outer-box">
      <div id="container" tabindex="0"></div>
      <div id="panel" class="scrollbar1">
        <ul id="area-tree">
        </ul>
      </div>
    </div>
    <button @click="nextProvince">下一个省</button>
    <button @click="lastProvince">上一个省</button>
    <button @click="select">确定选择</button>
    <button @click="back">返回</button>
    <button @click="nextCity">下一个市</button>
    <button @click="lastCity">上一个市</button>
  </div>
</template>

<script>
  import router from '../router/index'
  //  import '../assets/scripts/main'

  export default {
    name: 'Map',
    data () {
      return {
        adcode: 100000,
        province: '',
        city: '',
        //当前聚焦的区域
        currentAreaNode: null,
        colors: [
          '#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477', '#66aa00',
          '#b82e2e', '#316395', '#994499', '#22aa99', '#aaaa11', '#6633cc', '#e67300', '#8b0707',
          '#651067', '#329262', '#5574a6', '#3b3eac'
        ],
        map: ''
      }
    },
    methods: {
      nextProvince () {
        switch (this.adcode) {
          case 150000:
            this.adcode = 210000
            break
          case 230000:
            this.adcode = 310000
            break
          case 370000:
            this.adcode = 410000
            break
          case 460000:
            this.adcode = 500000
            break
          case 540000:
            this.adcode = 610000
            break
          case 650000:
            this.adcode = 810000
            break
          case 820000:
            this.adcode = 100000
            break
          default:
            this.adcode = Number(this.adcode) + Number(10000)
            break
        }
        this.switch2AreaNode(this.adcode)
      },
      lastProvince () {
        switch (this.adcode) {
          case 100000:
            this.adcode = 820000
            break
          case 210000:
            this.adcode = 150000
            break
          case 310000:
            this.adcode = 230000
            break
          case 410000:
            this.adcode = 370000
            break
          case 500000:
            this.adcode = 460000
            break
          case 610000:
            this.adcode = 540000
            break
          case 810000:
            this.adcode = 650000
            break
          default:
            this.adcode = Number(this.adcode) - Number(10000)
            break
        }
        this.switch2AreaNode(this.adcode)
      },
      select () {
        //切换区域s
        switch (this.adcode) {
          case 110000:
            router.push(`/provinces/cities/北京/北京/spots`)
            break
          case 120000:
            router.push(`/provinces/cities/天津/天津/spots`)
            break
          case 310000:
            router.push(`/provinces/cities/上海/上海/spots`)
            break
          case 500000:
            router.push(`/provinces/cities/重庆/重庆/spots`)
            break
        }
        //点击某个市的时候
        let result = this.adcode % 10000
        console.log(`result:${result}`)
        if (result > 0) {
          router.push(`/provinces/cities/${this.province}/${this.city}/spots`)
        }
      },
      back () {
        console.log('返回')
      },
      nextCity () {
        this.adcode += 100
        console.log(this.adcode)
        this.switch2AreaNode(this.adcode)
      },
      lastCity () {
        console.log('上一个市')
      },
      renderAreaPanelNode (ele, props, color) {
        //绘制区域面板的节点
        let $box = $('<li/>').addClass('lv_' + props.level)
        let $h2 = $('<h2/>').addClass('lv_' + props.level).attr({
          'data-adcode': props.adcode,
          'data-level': props.level,
          'data-children-num': props.childrenNum || void(0),
          'data-center': props.center.join(',')
        }).html(props.name).appendTo($box)
        if (color) {
          $h2.css('borderColor', color)
        }
        //如果存在子节点
        if (props.childrenNum > 0) {
          //显示隐藏
          $('<div class="showHideBtn"></div>').appendTo($box)
          //子区域列表
          $('<ul/>').addClass('sublist lv_' + props.level).appendTo($box)
          $('<div class="clear"></div>').appendTo($box)
          if (props.level !== 'country') {
            $box.addClass('hide-sub')
          }
        }
        $box.appendTo(ele)
      },
      //填充某个节点的子区域列表
      renderAreaPanel (areaNode) {
        let props = areaNode.getProps()
        let $subBox = $('#area-tree').find('h2[data-adcode="' + props.adcode + '"]').siblings('ul.sublist')
        if (!$subBox.length) {
          //父节点不存在，先创建
          this.renderAreaPanelNode($('#area-tree'), props)
          $subBox = $('#area-tree').find('ul.sublist')
        }
        if ($subBox.attr('data-loaded') === 'rendered') {
          return
        }
        $subBox.attr('data-loaded', 'rendered')
        let subFeatures = areaNode.getSubFeatures()
        //填充子区域
        for (let i = 0, len = subFeatures.length; i < len; i++) {
          this.renderAreaPanelNode($subBox, areaNode.getPropsOfFeature(subFeatures[i]), this.colors[i % this.colors.length])
        }
      },
      loadAreaNode (adcode, callback) {
        //加载区域
        districtExplorer.loadAreaNode(adcode, (error, areaNode) => {
          this.renderAreaPanel(areaNode)
          if (callback) {
            callback(null, areaNode)
          }
        })
      },
      switch2AreaNode (adcode) {
        this.adcode = Number(adcode)
        if (this.currentAreaNode && ('' + this.currentAreaNode.getAdcode() === '' + adcode)) {
          return
        }
        this.loadAreaNode(adcode, (error, areaNode) => {
          this.currentAreaNode = window.currentAreaNode = areaNode
          //设置当前使用的定位用节点
          districtExplorer.setAreaNodesForLocating([this.currentAreaNode])
          this.refreshAreaNode(areaNode)
          this.city = $('.lv_city.selected').text()
          this.province = $('.lv_province.selected').text() || this.province
        })

      },
      //切换区域后刷新显示内容
      refreshAreaNode (areaNode) {
        districtExplorer.setHoverFeature(null)
        this.renderAreaPolygons(areaNode)
        //更新选中节点的class
        let $nodeEles = $('#area-tree').find('h2')
        $nodeEles.removeClass('selected')
        let $selectedNode = $nodeEles.filter('h2[data-adcode=' + areaNode.getAdcode() + ']').addClass('selected')
        //展开下层节点
        $selectedNode.closest('li').removeClass('hide-sub').siblings().addClass('hide-sub')
        //折叠下层的子节点
        $selectedNode.siblings('ul.sublist').children().addClass('hide-sub')
      },
      //绘制某个区域的边界
      renderAreaPolygons (areaNode) {
        //更新地图视野
        this.map.setBounds(areaNode.getBounds(), null, null, true)
        //清除已有的绘制内容
        districtExplorer.clearFeaturePolygons()
        //绘制子区域
        districtExplorer.renderSubFeatures(areaNode, (feature, i) => {
          let fillColor = this.colors[i % this.colors.length]
          let strokeColor = this.colors[this.colors.length - 1 - i % this.colors.length]
          return {
            cursor: 'default',
            bubble: true,
            strokeColor: strokeColor, //线颜色
            strokeOpacity: 1, //线透明度
            strokeWeight: 1, //线宽
            fillColor: fillColor, //填充色
            fillOpacity: 0.35, //填充透明度
          }
        })
      }
    },
    mounted () {
      //创建地图
      this.map = new AMap.Map('container', {
        zoom: 4
      })
      AMapUI.load(['ui/geo/DistrictExplorer', 'lib/$'], (DistrictExplorer, $) => {
        //创建一个实例
        let districtExplorer = window.districtExplorer = new DistrictExplorer({
          eventSupport: true, //打开事件支持
          map: this.map
        })
        let that = this
        $('#area-tree').on('click', 'h2[data-children-num]', function () {
          let adcode = $(this).attr('data-adcode')
          console.log(adcode)
          let city = $(this).text()
          let province = $(this).closest('ul').siblings('.selected').text()
          that.switch2AreaNode(adcode, province, city)
        })
        //全国
        this.switch2AreaNode(100000)
      })
    }
  }
</script>

<style>
  #container {
    width: 500px;
    height: 500px;
  }

  #outer-box {
    height: 100%;
    padding-right: 300px;
  }

  #panel {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    overflow: auto;
    width: 300px;
    z-index: 999;
    border-left: 1px solid #eaeaea;
    background: #fff;
  }

  .clear {
    clear: both;
  }

  #area-tree h2 {
    display: inline-block;
    font-weight: 500;
    font-size: 13px;
    padding: 3px 5px;
    margin: 0;
    border: 1px solid #2ca02c;
    border-width: 1px 3px;
    cursor: pointer;
  }

  #area-tree h2:hover {
    background: #3366cc;
    color: #fff;
  }

  #area-tree ul {
    margin-left: 23px;
    clear: both;
  }

  #area-tree li {
    float: left;
    margin: 5px 5px 0 0;
    font-size: 12px;
  }

  #area-tree li.lv_province {
    margin: 5px 5px 5px 0;
  }

  .showHideBtn {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
    overflow: hidden;
    vertical-align: middle;
    margin: 0;
    cursor: pointer;
  }

  .showHideBtn:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 4px;
    left: 4px;
    border: solid rgba(0, 0, 0, 0);
    border-width: 10px 6px;
    border-top-color: #aaa;
    transition-property: all;
    transition-duration: .2s;
  }

  .hide-sub .showHideBtn:after {
    transform-origin: 50% 20%;
    transform: rotate(-90deg);
  }

  .hide-sub > ul {
    display: none;
  }
</style>
