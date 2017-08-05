<template>
  <div id="favorite">
    <div id="favorite-container" v-on:click="slideImg">
      <h2 class="title">{{title}}</h2>
      <h5 class="photo-amount">{{amount}} Photos</h5>
      <date class="time"></date>
      <first-image id="first-img" :bigsize="bigsize" :smallsize="smallsize" :url="url" :date="date" :photo-name="photoName" :author="author"></first-image>
      <div id="slide-img-container">
        <div id="slide-img" :style="{left:oLeft+'vw'}">
          <ul>
            <li v-for="(item,index) in images" :key="item.id">
              <small-images class="small-img" :titlesize="titlesize" :datesize="datesize" :index="item.id" :url="item.url" :date="item.date" :photo-name="item.photoName" :author="item.author"></small-images>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Date from './Date'
  import FirstImage from './FirstImage'
  import SmallImages from './SmallImages'

  import bg0 from '../assets/favorite/bg0.jpg'
  import bg1 from '../assets/favorite/bg1.jpg'
  import bg2 from '../assets/favorite/bg2.jpg'
  import bg3 from '../assets/favorite/bg3.jpg'
  import bg4 from '../assets/favorite/bg4.jpg'
  import bg5 from '../assets/favorite/bg5.jpg'
  import bg6 from '../assets/favorite/bg6.jpg'
  import bg7 from '../assets/favorite/bg7.jpg'
  import bg8 from '../assets/favorite/bg8.jpg'
  import bg9 from '../assets/favorite/dongman1.jpg'
  import bg10 from '../assets/favorite/dongman2.jpg'
  import bg11 from '../assets/favorite/dongman3.jpg'
  import bg12 from '../assets/favorite/dongman4.jpg'
  import bg13 from '../assets/favorite/dongman5.jpg'
  import bg14 from '../assets/favorite/dongman6.jpg'
  import bg15 from '../assets/favorite/dongman7.jpg'

  
  var firstPic = {
    date:'2017/07/09',
    url:bg0,
    photoId:0,
    photoName:'允儿',
    albumId:14,
    albumName:'明星'
  }
  
  var afterData = [{
      id: 1,
      url: bg1,
      date: "2012/06/25",
      photoName: "允儿",
      author: "@Archie"
    },
  
    {
      id: 2,
      url: bg2,
      date: "2012/09/10",
      photoName: "迪丽热巴",
      author: "@Archie"
    },
  
    {
      id: 3,
      url: bg3,
      date: "2012/10/01",
      photoName: "宋茜",
      author: "@Archie"
    },
  
    {
      id: 4,
      url: bg4,
      date: "2012/09/10",
      photoName: "杨幂",
      author: "@Archie"
    },
  
    {
      id: 5,
      url: bg5,
      date: "2013/05/03",
      photoName: "宋茜",
      author: "@Archie"
    },
  
    {
      id: 6,
      url: bg6,
      date: "2014/07/13",
      photoName: "七朵",
      author: "@Archie"
    },
  
    {
      id: 7,
      url: bg7,
      date: "2015/08/30",
      photoName: "允儿",
      author: "@Archie"
    },
  
    {
      id: 8,
      url: bg8,
      date: "2016/12/28",
      photoName: "迪丽热巴",
      author: "@Archie"
    },
    {
      id: 9,
      url: bg9,
      date: "2016/12/28",
      photoName: "动漫1",
      author: "@Archie"
    },
    {
      id: 10,
      url: bg10,
      date: "2016/12/28",
      photoName: "动漫2",
      author: "@Archie"
    },
    {
      id: 11,
      url: bg11,
      date: "2016/12/28",
      photoName: "动漫3",
      author: "@Archie"
    },
    {
      id: 12,
      url: bg12,
      date: "2016/12/28",
      photoName: "动漫4",
      author: "@Archie"
    },
    {
      id: 13,
      url: bg13,
      date: "2016/12/28",
      photoName: "动漫5",
      author: "@Archie"
    },
    {
      id: 14,
      url: bg14,
      date: "2016/12/28",
      photoName: "动漫6",
      author: "@Archie"
    },
    {
      id: 15,
      url: bg15,
      date: "2016/12/28",
      photoName: "动漫7",
      author: "@Archie"
    },
    
  ];
  
  export default {
    name: 'favorite',
    data() {
      return {
        title: "我的收藏",
        firstinfo: firstPic,
        bigsize: 5.556,
        smallsize: 1.389,
        url: bg0,
        date: "2009/06/25",
        photoName: "允儿",
        author: "@Archie",
        titlesize: 2.778,
        datesize: 1.0185,
        images: afterData,   //后台数据接口

        oLeft: 1.042,
        counter: 0,
        amount: afterData.length
      }
    },
  
    methods: {
      slideImg: function () {
        if (Math.floor(this.counter++/(Math.ceil(this.amount/2)-3))%2===0) {
          this.oLeft = this.oLeft - 17.708;
        }
        else {
          this.oLeft = this.oLeft + 17.708;
        }
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
    font-size: 5.556vh;
    color: #f1f1f1;
    letter-spacing: 2px;
    position: absolute;
    top: 6.481vh;
    left: 6.25vw;
  }

  #favorite-container {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    /* border: 1px solid red; */
  }
  
  #slide-img-container {
    width: 68.75vw;
    height: 62.964vh;
    /* border: 1px solid red;   */
    position: absolute;
    top: 18.518vh;
    left: 40.628vw;
    overflow: hidden;
  }
  #slide-img {
    width: 68.75vw;
    height: 59.26vh;
    position: absolute;
    /* border: 1px solid yellow; */
    top: 1.852vh;
    transition: all 1s ease;
  }
  
  .small-img {
    width: 15.625vw;
    height: 27.78vh;
    /* margin-right: 2.083vw;
      margin-bottom: 3.704vh; */
    transition: all 0.5s ease;
  }
</style>
