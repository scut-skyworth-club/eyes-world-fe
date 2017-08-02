<template>
  <div id="works">
   <h2 class="title">{{$route.params.userName}}的作品</h2>
   <div id="upload">
     <img src="../assets/works/uploadIcon.png" alt="1">
     <span>上传</span>
   </div>
   <date class="time"></date>
  </div>
</template>

<script>
import Date from './Date'

  export default {
    name: 'works',
    data() {
      return {
      }
    },
    components:{
      Date
    }
  }
</script>


<style>
  body {
    width: 100vw;
    height: 100vh;
    background: url('../assets/works/bg.png');
    overflow: hidden;
  }
  .title {
      font-family: font757;  
      font-size: 40px;
      color: #f1f1f1;
      letter-spacing: 2px;
      position: absolute;
      top: 6.481vh;
      left: 6.25vw;
  }
</style>
