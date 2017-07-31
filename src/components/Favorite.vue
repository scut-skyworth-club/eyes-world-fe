<template>
  <div id="favorite">
    <h2 class="title">{{title}}</h2>
    <date class="time"></date>
    <collections id="first-img"></collections>
    <div id="slide-img"></div> 
  </div>
</template>

<script>
import Date from './Date'
import Collections from './Collections'

var firstPic = {
  date:'2017/07/09',
  url:'../assets/favorite/bg0.jpg',
  photoId:0,
  photoName:'允儿',
  albumId:14,
  albumName:'明星'
}

  export default {
    name: 'favorite',
    data() {
      return {
        title:"我的收藏",
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
    /* background: url('../assets/favorite/bg0.jpg') no-repeat center center;  */
    /* background: greenyellow; */
    transition: all 0.5s ease;
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
  /* #slide-img:hover {
    width:
  } */
</style>
