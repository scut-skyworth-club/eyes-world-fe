<template>
  <div id="favorite">
    <div id="favorite-container">
      <img :src="bgs[0]" class="favorite-bg">
      <p class="title">{{title}}</p>
      <p class="photo-amount">{{amount}} Photos</p>
      <date class="time"></date>
      <first-image id="first-img"
       :bigsize="bigsize"
       :smallsize="smallsize" 
       :url="url" 
       :create-time="createTime" 
       :photo-name="photoName" 
       :user-name="userName" 
       :counter="counter">
      </first-image>
      <div id="slide-img-container">
        <div id="slide-img"
        :style="{left:oLeft+'vw'}">
          <ul>
            <li v-for="(item,index) in images" :key="item.photoId">
              <small-images class="small-img"
               :titlesize="titlesize" 
               :datesize="datesize" 
               :index="index" 
               :url="item.url" 
               :create-time="item.createTime" 
               :photo-name="item.photoName" 
               :user-name="item.userName" 
               :counter="counter">
              </small-images>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {{setKey}}
  </div>
</template>

<script>
  import Date from './Date'
  import FirstImage from './FirstImage'
  import SmallImages from './SmallImages'
  import router from '../router/index'

  import bg from '../assets/favorite/bg.png'

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
    photoId:0,
    userName: "Mike",
    photoName:"图片一",
    photoDescription: "hello",
    url:bg0,
    like: true,
    likeAmount: 90,
    createTime:'2017/07/09',
    last:null
  }
  
  var afterData = [{
      photoId: 1,
      userName: "Mike",
      photoName: "允儿",
      photoDescription: "666",
      url: bg1,
      like: true,
      likeAmount: 2,
      createTime: "2012/06/25",
      last: null
    },
  
    {
      photoId: 2,
      userName: "Mike",
      photoName: "迪丽热巴",
      photoDescription: "666",
      url: bg2,
      like: true,
      likeAmount: 2,
      createTime: "2012/07/25",
      last: null
    },
    {
      photoId: 3,
      userName: "Mike",
      photoName: "宋茜",
      photoDescription: "999",
      url: bg3,
      like: true,
      likeAmount: 2,
      createTime: "2013/07/25",
      last: null
    },
    {
      photoId: 4,
      userName: "Mike",
      photoName: "杨幂",
      photoDescription: "233",
      url: bg4,
      like: true,
      likeAmount: 2,
      createTime: "2014/07/25",
      last: null
    },
    {
      photoId: 5,
      userName: "Mike",
      photoName: "宋茜",
      photoDescription: "666",
      url: bg5,
      like: true,
      likeAmount: 2,
      createTime: "2012/07/25",
      last: null
    },
    {
      photoId: 6,
      userName: "Mike",
      photoName: "七朵",
      photoDescription: "666",
      url: bg6,
      like: true,
      likeAmount: 2,
      createTime: "2012/07/25",
      last: null
    },
    {
      photoId: 7,
      userName: "Mike",
      photoName: "允儿",
      photoDescription: "666",
      url: bg7,
      like: true,
      likeAmount: 2,
      createTime: "2012/07/25",
      last: null
    },
    {
      photoId: 8,
      userName: "Mike",
      photoName: "迪丽热巴",
      photoDescription: "666",
      url: bg8,
      like: true,
      likeAmount: 2,
      createTime: "2012/07/25",
      last: null
    },
    {
      photoId: 9,
      userName: "Mike",
      photoName: "动漫1",
      photoDescription: "666",
      url: bg9,
      like: true,
      likeAmount: 2,
      createTime: "2012/07/25",
      last: null
    },
    {
      photoId: 10,
      userName: "Mike",
      photoName: "动漫2",
      photoDescription: "666",
      url: bg10,
      like: true,
      likeAmount: 2,
      createTime: "2012/07/25",
      last: null
    },
    {
      photoId: 11,
      userName: "Mike",
      photoName: "动漫3",
      photoDescription: "666",
      url: bg11,
      like: true,
      likeAmount: 2,
      createTime: "2012/07/25",
      last: null
    },
    {
      photoId: 12,
      userName: "Mike",
      photoName: "动漫4",
      photoDescription: "666",
      url: bg12,
      like: true,
      likeAmount: 2,
      createTime: "2012/07/25",
      last: null
    },
    {
      photoId: 13,
      userName: "Mike",
      photoName: "动漫5",
      photoDescription: "666",
      url: bg13,
      like: true,
      likeAmount: 2,
      createTime: "2012/07/25",
      last: null
    },
    {
      photoId: 14,
      userName: "Mike",
      photoName: "动漫6",
      photoDescription: "666",
      url: bg14,
      like: true,
      likeAmount: 2,
      createTime: "2012/07/25",
      last: null
    },
    {
      photoId: 15,
      userName: "Mike",
      photoName: "动漫7",
      photoDescription: "666",
      url: bg15,
      like: true,
      likeAmount: 2,
      createTime: "2012/07/25",
      last: null
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
        createTime: "2019/06/25",
        photoName: "允儿",
        userName: "Tony",
        titlesize: 2.778,
        datesize: 1.0185,
        images: afterData,   //后台数据接口
        oLeft: 2.084, 
        counter: 0,
        amount: afterData.length,
        bgs:[
          bg
        ]
      }
    },
  
    methods: {
      // slideImg: function () {
      //   if (Math.floor(this.counter++/(Math.ceil(this.amount/2)-3))%2===0) {
      //     this.oLeft = this.oLeft - 17.708;
      //   }
      //   else {
      //     this.oLeft = this.oLeft + 17.708;
      //   }
      // }
      leftMove: function (){
        if (this.counter!==1) {
          if (this.counter===2) {
            this.counter--;
          }else{
            this.counter = this.counter-2;
          }
          if (Math.floor(this.counter/2)%3===0&&this.counter!==1) {
            //通过除以2，把两行的情况归并到一类，同时要把第一张图片的情况排除
            this.oLeft = this.oLeft+53.124;
          }
        }
      },
      rightMove: function (){
        if (this.counter!==this.amount&&this.counter!==this.amount+1) {
          if (this.counter===1) {
            this.counter++;
          }else{
            this.counter = this.counter+2;
          }
          if ((Math.floor(this.counter/2)-4)%3===0&&(Math.floor(this.counter/2)-4)!==-3) {
            //(Math.floor(this.counter/2)-4)!==-3是把小图第一列的情况排除
            this.oLeft = this.oLeft-53.124;
          }
        }
      },
      upMove: function (){
        if (this.counter!==1&&this.counter%2===1) {
          //排除首张大图的情况，小图位于第二行可以使用up键
          this.counter--;
        }
      },
      downMove: function (){
        if (this.counter%2===0&&this.counter!==this.amount+1) {
          //小图位于第一行可以使用down键，同时排除最后一张小图在第一行的情况
          this.counter++;
        }
      },
      enterItem: function (){
        router.push({name:'Panorama'});
      }
    },
    computed: {
      setKey:function(){
          let self = this;
          document.onkeydown = function(event){
              if(self.counter===0){
                  self.counter=1;
              }else{
                  switch(event.which){
                      case 37:
                      //left
                      self.leftMove();
                      
                      break;
                      case 38:
                      //up
                      self.upMove();
                      break;
                      case 39:
                      //right
                      self.rightMove();
                      break;
                      case 40:
                      //down
                      self.downMove();
                      break;
                      case 13:
                      //center
                      self.enterItem();
                      break;
                      case 82:
                      break;
                      case 4:
                      break;
                  }
              }
          }
      },
    },
    components: {
      Date,
      FirstImage,
      SmallImages
    }
  }
</script>


<style>
  #favorite {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  .favorite-bg {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }
  .title {
    font-family: "小米兰亭";
    font-size: 5.556vh;
    color: #f1f1f1;
    letter-spacing: 2px;
    position: absolute;
    top: 6.481vh;
    left: 6.25vw;
  }
  .photo-amount {
    font-family: "小米兰亭";
    font-size: 2.222vh;
    color: #f1f1f1;
    letter-spacing: 0.093vh;
    position: absolute;
    top: 14vh;
    left: 6.25vw;
  }

  #favorite-container {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
     /* border: 1px solid red;  */
  }
  
  #slide-img-container {
    width: 68.75vw;
    height: 100vh;
     /* border: 1px solid red;      */
    position: absolute;
    top: 0vh;
    left: 39.586vw;
    overflow: hidden;
  }
  #slide-img {
    width: 68.75vw;
    height: 59.26vh;
    position: absolute;
    /* border: 1px solid yellow;     */
    top: 20.37vh;
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
