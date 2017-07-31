<template>
  <div id="favorite">
    <h2 class="title">
      我的收藏
    </h2>
    <date class="time">
    </date>
      <!-- <ul id="for-list" class="test">
        <li v-for="(item,key) in items"
          v-bind:key="item.id"
        >
          {{key}}:{{item}}
        </li>
      </ul> -->
    <collections id="first-img"></collections>
    <div></div> 
  </div>
</template>

<script>
import Date from './Date'
import Collections from './Collections'
  export default {
    name: 'favorite',
    data() {
      return {
          items:{
            name:'zet',
            age:24,
            address:'zhuangetwww@163.com'
        }
        
      }
    },
    methods:{
      generatePics:function () {

      }
    },
    components: {
      Date,
      Collections
    }
  }
</script>


<style>
  body {
    width: 100vw;
    height: 100vh;
    background: url('../assets/favorite/bg.png');
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
  #pics {
    width: 6vw;
    height: 11vh;
    position: absolute;
    top:18vh;
    left: 10vw;
  }
  #first-img {
    width: 33.33vw;
    height: 59.26vh;
    position: absolute;
    top: 20.37vh;
    left: 6.25vw;
    background: url('../assets/favorite/bg0.jpg') no-repeat center center; 
  }
  #first-img:hover {
    width: 35.42vw;
    height: 62.96vh;
    position: absolute;
    top: 18.52vh;
    left: 5.21vw;
  }
  #slide-img {
    width: 68.75vw;
    height: 59.26vh;
    border: 1px solid red;
    position: absolute;
    top: 20.37vh;
    left: 41.67vw;
  }
</style>
