<template>
  <div id="provinceName">
      某个省,全省<hr>
    {{ $route.params.provinceName }}
  </div>
</template>

<script>
  export default {
    name: 'provinceName',
    data() {
      return {
      }
    }
  }
</script>


<style>

</style>
