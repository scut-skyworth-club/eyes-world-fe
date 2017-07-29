<template>
  <div id="spots">
    {{ $route.params.provinceName }}
    {{ $route.params.cityName }}的景点
  </div>
</template>

<script>
  export default {
    name: 'spots',
    data() {
      return {
      }
    }
  }
</script>


<style>

</style>
