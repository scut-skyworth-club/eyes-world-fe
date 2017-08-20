<template>
  <div id="tourism">
    <!-- <search></search> -->
    <areaMap id="areaMap"></areaMap>

    <router-link :to="getPath">
      <div>
        <button>
        景点组件
        </button>
      </div>
    </router-link>
  {{setKey}}
  </div>
</template>

<script>

  import areaMap from './Map'
  import router from '../router/index'

  export default {
    name: 'tourism',
    components: {areaMap},
    data() {
      return {
        msg: '旅游景区组件',
        provinceName: "广东",
        cityName: "广州",
      }

    },
    computed: {
      setKey:function(){
        document.onkeydown = function(event){
          
        }
      },
      getPath: function () {
        return "/provinces/cities/" + this.provinceName + "/" + this.cityName + "/spots";
      }
    }
  }
</script>


<style>

</style>
