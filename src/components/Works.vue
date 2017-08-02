<template>
  <div id="works">
   <h2 class="title">我的作品</h2>
    <div id="upload"> 
     <img src="../assets/works/uploadIcon.png" alt="1">  
     <span>上传</span>
    </div> 
   <date class="time"></date>
   <sub-work class="work"></sub-work>
  </div>
</template>

<script>
import Date from './Date'
import SubWork from './SubWork'
  export default {
    name: 'works',
    data() {
      return {
      }
    },
    components:{
      Date,
      SubWork
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
  #upload {
    width: 6.51vw;
    height: 4.907vh;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 6.759vh;
    left: 20.677vw;
    background: url("../assets/works/bt_bg2.png") no-repeat center center;
  }
  #upload img {
    width: 2.76vw;
    height: 4.907vh;
    position: absolute;
    top: 0;
    left: 0;
  }
  #upload span {
    font-family: font757;
    font-size: 20px;
    color: #f1f1f1;
    width: 3.75vw;
    height: 4.907vh;
    margin: 0;
    padding-left: 0.5vw;
    padding-top: 1.0vh;
    letter-spacing: 1px;
    position: absolute;
    top: 0;
    left: 2.76vw;
  }
  .work {
    position: absolute;
    left: 6.25vw;
  }
</style>
