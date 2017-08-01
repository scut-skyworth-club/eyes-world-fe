<template>
  <div id="favorite">
    <h2 class="title">{{title}}</h2>
    <date class="time"></date>
    <first-image id="first-img"></first-image>
    <div id="slide-img">
      <ul>
        <li v-for="(item,index) in images" :key="item.id">
          <small-images class="small-img" :infoheight="infoheight" :bigsize="bigsize2" :smallsize="smallsize2"
          :top="item.top" :left="item.left"></small-images>
        </li>  
      </ul>  
    </div>  
  </div>
</template>

<script>
import Date from './Date'
import FirstImage from './FirstImage'
import SmallImages from './SmallImages'

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
        firstinfo:firstPic,
        bigSize:40,
        smallSize:25,

        bigsize2:34,
        smallsize2:20,
        images:[
          {
            id:1,
            top:0,
            left:0
          },
          {
            id:2,
            top:31.48,
            left:0
          },
          {
            id:3,
            top:0,
            left:17.708
          },
          {
            id:4,
            top:31.48,
            left:17.708
          },
          {
            id:5,
            top:0,
            left:17.708*2
          },
          {
            id:6,
            top:31.48,
            left:17.708*2
          },
          {
            id:7,
            top:0,
            left:17.708*3
          },
          {
            id:8,
            top:31.48,
            left:17.708*3
          },
        ]
      }
    },
    methods:{
      generatePics:function () {

      }
    },
    components: {
      Date,
      FirstImage,
      SmallImages
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
  
  #slide-img {
    width: 68.75vw;
    height: 59.26vh;
    /* border: 1px solid red; */
    position: absolute;
    top: 20.37vh;
    left: 41.67vw;
  }
  .small-img {
    width:15.625vw;
    height:27.78vh;
    /* margin-right: 2.083vw;
    margin-bottom: 3.704vh; */
    transition: all 0.5s ease;
  }
  /* #slide-img:hover {
    width:
  } */
</style>
