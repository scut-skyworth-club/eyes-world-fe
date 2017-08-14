<template>
  <div id='Map'>
    <div id="outer-box">
      <div id="container" tabindex="0"></div>
      <div id="panel" class="scrollbar1">
        <ul id="area-tree">
        </ul>
      </div>
    </div>
    <button @click="down">下一个省</button>
    <button @click="up">上一个省</button>
  </div>
</template>

<script>
  import router from '../router/index'

  export default {
    name: 'Map',
    data() {
      return {
        adcode: 100000,
        //当前聚焦的区域
        currentAreaNode: null,
        colors: [
          "#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00",
          "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707",
          "#651067", "#329262", "#5574a6", "#3b3eac"
        ],
        map: ''
      }
    },
    methods: {
      down() {
        this.adcode = this.adcode + 10000;
        this.switch2AreaNode(this.adcode)
      },
      up() {
        this.adcode = this.adcode - 10000;
        this.switch2AreaNode(this.adcode)
      },
      renderAreaPanelNode(ele, props, color) {
        //绘制区域面板的节点
        let $box = $('<li/>').addClass('lv_' + props.level);
        let $h2 = $('<h2/>').addClass('lv_' + props.level).attr({
          'data-adcode': props.adcode,
          'data-level': props.level,
          'data-children-num': props.childrenNum || void(0),
          'data-center': props.center.join(',')
        }).html(props.name).appendTo($box);
        if (color) {
          $h2.css('borderColor', color);
        }
        //如果存在子节点
        if (props.childrenNum > 0) {
          //显示隐藏
          $('<div class="showHideBtn"></div>').appendTo($box);
          //子区域列表
          $('<ul/>').addClass('sublist lv_' + props.level).appendTo($box);
          $('<div class="clear"></div>').appendTo($box);
          if (props.level !== 'country') {
            $box.addClass('hide-sub');
          }
        }
        $box.appendTo(ele);
      },
      //填充某个节点的子区域列表
      renderAreaPanel(areaNode) {
        let props = areaNode.getProps();
        let $subBox = $('#area-tree').find('h2[data-adcode="' + props.adcode + '"]').siblings('ul.sublist');
        if (!$subBox.length) {
          //父节点不存在，先创建
          this.renderAreaPanelNode($('#area-tree'), props);
          $subBox = $('#area-tree').find('ul.sublist');
        }

        if ($subBox.attr('data-loaded') === 'rendered') {
          return;
        }

        $subBox.attr('data-loaded', 'rendered');

        let subFeatures = areaNode.getSubFeatures();

        //填充子区域
        for (let i = 0, len = subFeatures.length; i < len; i++) {
          this.renderAreaPanelNode($subBox, areaNode.getPropsOfFeature(subFeatures[i]), this.colors[i % this.colors.length]);
        }
      },
      loadAreaNode(adcode, callback) {
        //加载区域
        districtExplorer.loadAreaNode(adcode, (error, areaNode) => {
          this.renderAreaPanel(areaNode);
          if (callback) {
            callback(null, areaNode);
          }
        });
      },
      switch2AreaNode(adcode, province, city, callback) {
        //切换区域
        console.log(adcode);
        switch (adcode) {
          case 110000:
            router.push(`/provinces/cities/北京/北京/spots`);
            break;
          case 120000:
            router.push(`/provinces/cities/天津/天津/spots`);
            break;
          case 310000:
            router.push(`/provinces/cities/上海/上海/spots`);
            break;
          case 500000:
            router.push(`/provinces/cities/重庆/重庆/spots`);
            break;
        }

//        点击某个市的时候
        let result = adcode % 10000;
        if (result > 0) {
          console.log(city);
          console.log(province);
          router.push(`/provinces/cities/${province}/${city}/spots`)
        }
        if (this.currentAreaNode && ('' + this.currentAreaNode.getAdcode() === '' + adcode)) {
          return;
        }
        this.loadAreaNode(adcode, (error, areaNode) => {
          this.currentAreaNode = window.currentAreaNode = areaNode;
          //设置当前使用的定位用节点
          districtExplorer.setAreaNodesForLocating([this.currentAreaNode]);
          this.refreshAreaNode(areaNode);
          if (callback) {
            callback(null, areaNode);
          }
        });
      },
      //切换区域后刷新显示内容
      refreshAreaNode(areaNode) {
        districtExplorer.setHoverFeature(null);
        this.renderAreaPolygons(areaNode);
        //更新选中节点的class
        let $nodeEles = $('#area-tree').find('h2');
        $nodeEles.removeClass('selected');
        let $selectedNode = $nodeEles.filter('h2[data-adcode=' + areaNode.getAdcode() + ']').addClass('selected');
        //展开下层节点
        $selectedNode.closest('li').removeClass('hide-sub').siblings().addClass('hide-sub');
        //折叠下层的子节点
        $selectedNode.siblings('ul.sublist').children().addClass('hide-sub');
      },
      //绘制某个区域的边界
      renderAreaPolygons(areaNode) {
        //更新地图视野
        this.map.setBounds(areaNode.getBounds(), null, null, true);
        //清除已有的绘制内容
        districtExplorer.clearFeaturePolygons();
        //绘制子区域
        districtExplorer.renderSubFeatures(areaNode, (feature, i) => {
          let fillColor = this.colors[i % this.colors.length];
          let strokeColor = this.colors[this.colors.length - 1 - i % this.colors.length];
          return {
            cursor: 'default',
            bubble: true,
            strokeColor: strokeColor, //线颜色
            strokeOpacity: 1, //线透明度
            strokeWeight: 1, //线宽
            fillColor: fillColor, //填充色
            fillOpacity: 0.35, //填充透明度
          };
        });
        //绘制父区域
//        districtExplorer.renderParentFeature(areaNode, {
//          cursor: 'default',
//          bubble: true,
//          strokeColor: 'black', //线颜色
//          strokeOpacity: 1, //线透明度
//          strokeWeight: 1, //线宽
//          fillColor: null, //填充色
//          fillOpacity: 0.35, //填充透明度
//        });
      }
    },
    mounted() {
      //创建地图
      this.map = new AMap.Map('container', {
        zoom: 4
      });
      AMapUI.load(['ui/geo/DistrictExplorer', 'lib/$'], (DistrictExplorer, $) => {
        //创建一个实例
        let districtExplorer = window.districtExplorer = new DistrictExplorer({
          eventSupport: true, //打开事件支持
          map: this.map
        });
        let that = this;
        $('#area-tree').on('click', 'h2[data-children-num]', function () {
          let adcode = $(this).attr('data-adcode');
          let city = $(this).text();
          let province = $(this).closest('ul').siblings('.selected').text();
          that.switch2AreaNode(adcode, province, city);
        });
        //全国
        this.switch2AreaNode(100000);
      });
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

  .tipMarker {
    color: #555;
    background-color: rgba(255, 254, 239, 0.8);
    border: 1px solid #7E7E7E;
    padding: 2px 6px;
    font-size: 12px;
    white-space: nowrap;
    display: inline-block;
  }

  .tipMarker:before,
  .tipMarker:after {
    content: '';
    display: block;
    position: absolute;
    margin: auto;
    width: 0;
    height: 0;
    border: solid transparent;
    border-width: 5px 5px;
  }

  .tipMarker.top {
    transform: translate(-50%, -110%);
  }

  .tipMarker.top:before,
  .tipMarker.top:after {
    bottom: -9px;
    left: 0;
    right: 0;
    border-top-color: rgba(255, 254, 239, 0.8);
  }

  .tipMarker.top:before {
    bottom: -10px;
    border-top-color: #7E7E7E;
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

  #area-tree h2:hover,
  #area-tree h2.hover,
  #area-tree h2.selected {
    background: #3366cc;
    color: #fff;
  }

  #area-tree h2.lv_outside {
    border-color: #666;
    padding: 3px 10px;
  }

  #area-tree h2.lv_country {
    border-color: #d62728;
    padding: 3px 27px;
    margin: 5px 0;
  }

  #area-tree h2.lv_province {
    border-color: #ff7f0e;
    padding: 3px 10px;
  }

  #area-tree h2.lv_district {
    border-color: #dd4477
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
