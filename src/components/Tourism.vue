<template>
  <div id="tourism">
    {{msg}}
    <hr>
    所有的省份,全国
    <search></search>
    
    <router-link :to="getPath">
      <div>
        景点组件
      </div>
    </router-link>

  </div>
</template>

<script>

  import Maps from './Maps'
  import router from '../router/index'
  export default {
    name: 'tourism',
    components:{Maps},
    data() {
      return {
        msg: '旅游景区组件',
        provinceName:"广东",
        cityName:"广州",
      }
    
    },
    computed:{
      getPath:function(){
        return "/provinces/cities/"+this.provinceName+"/"+this.cityName+"/spots";
      }
    }
  }
</script>


<style>

</style>
