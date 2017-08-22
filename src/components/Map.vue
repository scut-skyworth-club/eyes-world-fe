<template>
  <div id='Map'>
    <div class="wrapper">
      <div id="outer-box">
        <div id="container" tabindex="0"></div>
        <div id="panel" class="scrollbar1">
          <ul id="area-tree">
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '../router/index'

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
          '#273455', '#273455', '#273455', '#273455', '#273455', '#273455', '#273455', '#273455',
          '#273455', '#273455', '#273455', '#273455', '#273455', '#273455', '#273455', '#273455',
          '#273455', '#273455', '#273455', '#273455'
        ],
        map: '',
        panelScrollTop: 0,
        citySelected: false
      }
    },
    methods: {
      test () {
        alert('test')
      },
      nextProvince () {
        let selectedElementOffsetTop = document.querySelector('.selected').offsetTop
        let containerHeight = document.querySelector('#area-tree').clientHeight
        let areaHeight = $('h2.lv_province').outerHeight() + 13
        if (selectedElementOffsetTop < containerHeight - areaHeight + 3) {
          this.panelScrollTop += areaHeight
        } else {
          this.panelScrollTop = 0
        }
        document.querySelector('#panel').scrollTop = this.panelScrollTop

        this.adcode = Math.floor(this.adcode / 10000) * 10000
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

        let $nodeEles = $('#area-tree').find('h2')
        $nodeEles.removeClass('selected')
        $nodeEles.filter('h2[data-adcode=' + this.adcode + ']').addClass('selected').closest('li').prev().addClass('hide-sub')
      },
      previousProvince () {
        let selectedElementOffsetTop = document.querySelector('.selected').offsetTop
        let containerHeight = document.querySelector('#area-tree').clientHeight
        let areaHeight = $('h2.lv_province').outerHeight() + 13
        if (selectedElementOffsetTop > 34) {
          this.panelScrollTop -= areaHeight
        } else {
          this.panelScrollTop = containerHeight
        }
        document.querySelector('#panel').scrollTop = this.panelScrollTop

        this.adcode = Math.floor(this.adcode / 10000) * 10000
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
        let $nodeEles = $('#area-tree').find('h2')
        $nodeEles.removeClass('selected')
        $nodeEles.filter('h2[data-adcode=' + this.adcode + ']').addClass('selected').closest('li').next().addClass('hide-sub')
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
          this.province = this.province.slice(0, -1)
          this.city = this.city.slice(0, -1)
          router.push(`/provinces/cities/${this.province}/${this.city}/spots`)
        }

        this.switch2AreaNode(this.adcode)
      },
      back () {
        window.history.back()
      },
      nextCity () {
        let result = this.adcode % 10000
        if (result === 0) {
          this.adcode = this.adcode + 100
        } else {
          this.adcode = $('.selected').closest('li').next().children('.lv_city').attr('data-adcode')
        }
        console.log(this.adcode)
        this.switch2AreaNode(this.adcode)

        let selectedElementOffsetTop = document.querySelector('.selected').offsetTop
        let containerHeight = document.querySelector('#area-tree').clientHeight
        let areaHeight = $('h2.lv_province').outerHeight() + 3
        if (selectedElementOffsetTop < containerHeight - 30) {
          this.panelScrollTop += areaHeight
        } else {
          this.panelScrollTop = 0
        }
        document.querySelector('#panel').scrollTop = this.panelScrollTop
      },
      previousCity () {
        let selectedElementOffsetTop = document.querySelector('.selected').offsetTop
        let containerHeight = document.querySelector('#area-tree').clientHeight
        let areaHeight = $('h2.lv_province').outerHeight() + 3
        if (selectedElementOffsetTop > 34) {
          this.panelScrollTop -= areaHeight
        } else {
          this.panelScrollTop = containerHeight
        }
        document.querySelector('#panel').scrollTop = this.panelScrollTop

        this.adcode = $('.selected').closest('li').prev().children('.lv_city').attr('data-adcode')
        console.log(this.adcode)
        this.switch2AreaNode(this.adcode)
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
        if (this.adcode % 10000 === 0) {
          $selectedNode.closest('li').removeClass('hide-sub').siblings().addClass('hide-sub')
        }
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
          let strokeColor = '#62beff'
          return {
            cursor: 'default',
            bubble: true,
            strokeColor: strokeColor, //线颜色
            strokeOpacity: 1, //线透明度
            strokeWeight: 2, //线宽
            fillColor: fillColor, //填充色
            fillOpacity: 0.35, //填充透明度
          }
        })
      }
    },
    updated () {
      // 初始化
      this.adcode = 100000
      this.province = ''
      this.city = ''
      this.currentAreaNode = null
      this.panelScrollTop = 0
      this.citySelected = false
      //全国
      this.switch2AreaNode(100000)
    },
    mounted () {
      //创建地图
      this.map = new AMap.Map('container', {
        zoom: 4,
        mapStyle: 'amap://styles/darkblue'//样式URL
      })
      AMapUI.load(['ui/geo/DistrictExplorer', 'lib/$'], (DistrictExplorer, $) => {
        //创建一个实例
        let districtExplorer = window.districtExplorer = new DistrictExplorer({
          eventSupport: true, //打开事件支持
          map: this.map,
          keyboardEnable: false,
          dragEnable: false,
          scrollWheel: false
        })
        //全国
        this.switch2AreaNode(100000)
        $('body').keyup((event) => {
          if (window.location.hash.includes('#/provinces/cities')) {
            console.log(event.keyCode)
            switch (event.keyCode) {
              case 38://上
                if (this.citySelected) {
                  this.previousCity()
                } else {
                  this.previousProvince()
                }
                break
              case 40://下
                if (this.citySelected) {
                  this.nextCity()
                } else {
                  this.nextProvince()
                }
                break
              case 13:
                if (window.location.hash.includes('#/provinces/cities')) {
                  this.select()
                  this.citySelected = !this.citySelected
                }
                break
              case 4:
                this.back()
                break
            }
          }
        })
      })
    }
  }
</script>

<style lang="scss">
  .wrapper {
    background: url('../assets/blue.png') no-repeat;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    #outer-box {
      /*padding-right: 300px;*/
      overflow: hidden;
      width: 100vw;
      height: 100vh;
      #container {
        /*position: absolute;*/
        z-index: 0;
        width: 120vw;
        height: 120vh;

      }
      #panel {
        background-color: #3F4458;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
        z-index: 999;
        color: #ddd;
        /*width: 10vw;*/
        #panel::-webkit-scrollbar {
          display: none;
        }
        #area-tree {
          border: 1px solid black;
          h2 {
            display: inline-block;
            /*font-weight: 500;*/
            font-size: 1.5vw;
            padding: 0.3vw 0.55vw;
            margin: 0;
            &.selected {
              background: #ddd;
              color: #fff;
            }
          }
          ul {
            margin-left: 2vw;
            clear: both;
          }
          li {
            margin: 0.5vw 0 0 0;
            font-size: 1.2vw;
            &.lv_province {
              margin: 0.5vw 0.5vw 0.5vw 0;
            }
          }
          ul.sublist.lv_country {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }

  .hide-sub > ul {
    display: none;
  }
</style>
