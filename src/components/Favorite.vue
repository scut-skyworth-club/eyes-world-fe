<template>
  <div id="favorite">
    <h2 class="title">{{title}}</h2>
    <date class="time"></date>
    <first-image id="first-img" :bigsize="bigSize" :smallsize="smallSize"></first-image>
    <div id="slide-img">
      <ul>
        <li v-for="(item,index) in images" :key="item.id">
          <small-images class="small-img" :infoheight="infoheight" :bigsize="bigsize2" :smallsize="smallsize2"
           :index="item.id" :url="item.url"></small-images>
        </li>  
      </ul>  
    </div>  
  </div>
</template>

<script>
import Date from './Date'
import FirstImage from './FirstImage'
import SmallImages from './SmallImages'
import bg1 from '../assets/favorite/bg1.jpg'
import bg2 from '../assets/favorite/bg2.jpg'
import bg3 from '../assets/favorite/bg3.jpg'
import bg4 from '../assets/favorite/bg4.jpg'
import bg5 from '../assets/favorite/bg5.jpg'
import bg6 from '../assets/favorite/bg6.jpg'
import bg7 from '../assets/favorite/bg7.jpg'
import bg8 from '../assets/favorite/bg8.jpg'

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
            url:bg1
          },
          {
            id:2,
            url:bg2
          },
          {
            id:3,
            url:bg3
          },
          {
            id:4,
            url:bg4
          },
          {
            id:5,
            url:bg5
          },
          {
            id:6,
            url:bg6
          },
          {
            id:7,
            url:bg7
          },
          {
            id:8,
            url:bg8
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
  
</style>
