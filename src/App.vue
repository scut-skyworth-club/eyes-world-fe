<template>
  <div id="app">
    <Carousel></Carousel>
    <!-- <Tourism1></Tourism1>
    <Something1></Something1>
    <Something2></Something2>
    <Tourism2></Tourism2>
    <Something3></Something3> -->
  </div>
</template>

<script>
    import Tourism1 from './components/Tourism1'
    import Tourism2 from './components/Tourism2'
    import Something1 from './components/Something1'
    import Something2 from './components/Something2'
    import Something3 from './components/Something3'
    import Carousel from './components/Carousel'

    export default {
        name: 'app',
        components: {
            Tourism1,
            Tourism2,
            Something1,
            Something2,
            Something3,
            Carousel
        },
        data() {
            return {
                msg: '这里是首页'
            }
        }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
/*  margin-left: 60px;*/
}
</style>
