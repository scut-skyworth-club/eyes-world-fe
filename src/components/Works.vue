<template>
  <div id="works">
    <img :src="bgs[0]">
    <p class="title">我的作品</p>
    <p class="photo-amount">{{amount}} Photos</p>
    <div id="upload" v-if="focus" 
    :style="{background:'url('+bgs[2]+') no-repeat center center'}">
    <img :src="bgs[1]" alt="1"><span>上传</span></div>
    <div id="upload" v-else :style="{background:'url('+bgs[3]+') no-repeat center center'}"><img :src="bgs[1]" alt="1"><span>上传</span></div>
    <date class="time"></date>

     <div id="works-container" :style="{left:left+'vw', width:oWidth+'vw'}">
      <ul>
        <li v-for="(item,index) in works" :key="item.id">
          <sub-work class="my-works" :index="index" :url="item.url" :date="item.createTime" 
          :title="item.photoName" :amount="amount" :counter="counter"></sub-work>
        </li>
      </ul>
    </div> 
    {{setKey}}
  </div>
</template>

<script>
  import bg from '../assets/works/bg.png'
  import uploadIcon from '../assets/works/uploadIcon.png'
  import uploadBg from '../assets/works/bt_bg2.png'
  import uploadBgHover from '../assets/works/bt_bg3.png'

  import bg1 from '../assets/favorite/bg1.jpg'
  import bg2 from '../assets/favorite/bg2.jpg'
  import bg3 from '../assets/favorite/bg3.jpg'
  import bg4 from '../assets/favorite/bg4.jpg'
  import bg5 from '../assets/favorite/bg5.jpg'
  import bg6 from '../assets/favorite/bg6.jpg'
  import bg7 from '../assets/favorite/bg7.jpg'
  import bg8 from '../assets/favorite/bg8.jpg'
  import Date from './Date'
  import SubWork from './SubWork'
  import router from '../router/index'
  
  // var afterData2 = [{
  //     id: 1,
  //     url: bg1,
  //     createTime: "2015-03-30 13:24:01",
  //     photoName: "允儿"
  //   },

  //   {
  //     id: 2,
  //     url: bg2,
  //     createTime: "2016-08-30 10:10:01",
  //     photoName: "迪丽热巴"
  //   },
  //   {
  //     id: 3,
  //     url: bg4,
  //     createTime: "2016-10-09 20:24:23",
  //     photoName: "杨幂"
  //   },
  //   {

  //     id: 4,
  //     url: bg3,
  //     createTime: "2017-07-28 09:08:02",
  //     photoName: "宋茜"
  //   },

  //   {
  //     id: 5,
  //     url: bg5,
  //     createTime: "2017-08-03 09:08:02",
  //     photoName: "宋茜"
  //   },

  //   {
  //     id: 6,
  //     url: bg6,
  //     createTime: "2017-08-21 09:08:02",
  //     photoName: "七朵"
  //   },

  //   {
  //     id: 7,
  //     url: bg7,
  //     createTime: "2017-09-01 09:08:02",
  //     photoName: "允儿"
  //   },

  //   {
  //     id: 8,
  //     url: bg8,
  //     createTime: "2017-10-13 09:08:02",
  //     photoName: "迪丽热巴"
  //   },
  // ];
  export default {
    name: 'works',
    data() {
      return {
        left: 0,
        oWidth: 100,
        works: [],
        amount: 0,//afterData2.length,
        bgs:[
          bg,
          uploadIcon,
          uploadBg,
          uploadBgHover
        ],
        focus: 1,  //focus=0聚焦到上传按钮上，focus=1聚焦到图片上，默认起始聚焦在图片上
        counter: 0,
      }
    },
    mounted: function (){
      var self = this;
      fetch('http://39.108.149.106/api/user/works', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Credentials': true,
          'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        },
        credentials: "include"
      }).then(function(response) {
        return response.json();
      }).then(function(getData) {
        self.works = getData;
        self.amount = getData.length;
        console.log(getData);
      });
    },
    
    components: {
      Date,
      SubWork,
    },
    methods: {
      uploadPhoto: function () {
        // alert("上传图片");
        // console.log(this.$el);
        router.push({name:'Upload'});
      },
      enterItem: function (){
        if (!this.focus) {  //如果聚焦在上传按钮上，调用上传图片函数以实现上传功能，并把焦点重置
          this.uploadPhoto();
          this.focus = 1;
        }else { //否则进入图片详情页
          router.push({name:'Panorama'});
        }
      },
      rightMove: function (){
        if (this.focus) {
          if (this.counter!==this.amount) {
            this.counter++;
          }
          if (this.counter===4) { //焦点在第四张图片上时要触发移动，否则看不到后面图片
            this.oWidth = this.oWidth + 75; this.left = this.left - 75;
          }
          if ((this.counter-4)%3===0&&(this.counter!==4)) {
             //除了第四张图片，7,10,13...也要触发移动，同时移动距离与第四张移动距离不同，因为图片排布不同
            this.oWidth = this.oWidth + 81.25; this.left = this.left - 81.25;
          }
        }
      },
      leftMove: function (){
        if (this.focus) {
          if (this.counter!==1) {
            this.counter--;
          }
          if (this.counter===3) { //第四张触发右移，所以第三张触发左移
            this.oWidth = this.oWidth - 75; this.left = this.left + 75;
          }
          if (this.counter%3===0&&(this.counter!==3)) {
            //6,9,12...触发左移，同时由于第三张移动距离不一样，要将其排除
            this.oWidth = this.oWidth - 81.25; this.left = this.left + 81.25;
          }
        }
      },
    },
    computed: {
      setKey:function(){
          let self = this;
          document.onkeydown = function(event){
              if(self.counter===0&&self.focus===1){
                  self.counter=1;
              }else{
                  switch(event.which){
                      case 37:
                      //left
                      self.leftMove();
                      
                      break;
                      case 38:
                      //up
                      if (self.focus) {
                        self.focus = 0;
                      }
                      break;
                      case 39:
                      //right
                      self.rightMove();
                      break;
                      case 40:
                      //down
                      if (!self.focus) {
                        self.focus = 1;
                      }
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
      itemFocus: function (){
        
      },
    },
  }

</script>


<style>
  #works {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  #works>img {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
  }
  #works>.title {
    font-family: "小米兰亭";
    font-size: 5.556vh;
    color: #f1f1f1;
    letter-spacing: 0.185vh;
    position: absolute;
    top: 6.481vh;
    left: 6.25vw;
  }

  #works>.photo-amount {
    font-family: "小米兰亭";
    font-size: 2.222vh;
    color: #f1f1f1;
    letter-spacing: 0.093vh;
    position: absolute;
    top: 14vh;
    left: 6.25vw;
  }

  #upload {
    width: 6.51vw;
    height: 4.907vh;
    margin: 0;
    padding: 0;
    position: absolute;
    z-index: 15;
    top: 7.5vh;
    left: 20.677vw;
  }
  #upload>img {
    width: 2.76vw;
    height: 4.907vh;
    position: absolute;
    top: 0;
    left: 0;
  }
  #upload>span {
    font-family: "小米兰亭";
    font-size: 1.852vh;
    color: #f1f1f1;
    width: 3.75vw;
    height: 4.907vh;
    text-align: center;
    margin: 0 auto;
    padding-top: 13px;
    letter-spacing: 1px;
    position: absolute;
    top: 0;
    left: 2.76vw;
  }

  #works-container {
    width: 100vw;
    height: 100vh;
    /* border: 1px solid red;  */
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    transition: all 1s ease;
  }

</style>
