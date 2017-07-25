<template>
  <div id="tourism">
    {{msg}}
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
