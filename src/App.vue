<template>
  <div id="app">
    {{msg}}
    <Tourism1 class="section"></Tourism1>
    <Something1 class="section"></Something1>
    <Something2 class="section"></Something2>
    <Tourism2 class="section"></Tourism2>
    <Something3 class="section"></Something3>
  </div>
</template>

<script>
    import Tourism1 from './components/Tourism1'
    import Tourism2 from './components/Tourism2'
    import Something1 from './components/Something1'
    import Something2 from './components/Something2'
    import Something3 from './components/Something3'

    export default {
        name: 'app',
        components: {
            Tourism1,
            Tourism2,
            Something1,
            Something2,
            Something3
        },
        data() {
            return {
                msg: '这里是首页'
            }
        }
    }
</script>

<style lang="scss">
  #app{
    border: 1px solid red;
    display: flex;
    .section{
      width: 20%;
      height:100vh; 
    }
  }
</style>

