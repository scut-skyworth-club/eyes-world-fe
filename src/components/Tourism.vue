<template>
  <div id="tourism">
    {{msg}}
    <hr>
    所有的省份,全国
    <search></search>
    <picture-dialog></picture-dialog>
  </div>
</template>

<script>
  import Maps from './Maps'
  export default {
    name: 'tourism',
    components:{Maps},
    data() {
      return {
        msg: '旅游景区组件'
      }
    }
  }
</script>


<style>

</style>
