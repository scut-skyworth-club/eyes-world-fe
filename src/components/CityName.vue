<template>
  <div id="cityName">
         某个市<hr>
    {{ $route.params.provinceName }}
    {{ $route.params.cityName }}
  </div>
</template>

<script>
  export default {
    name: 'cityName',
    data() {
      return {
      }
    }
  }
</script>


<style>

</style>
