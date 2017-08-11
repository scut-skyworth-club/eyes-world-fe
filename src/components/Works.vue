<template>
  <div id="works">
    <img :src="bgs[0]" class="works-bg">
    <h2 class="title">我的作品</h2>
    <h5 class="photo-amount">{{amount}} Photos</h5>
    <div :id="uploadId" @click="uploadPhoto" :style="initBg" @mouseover="changeBg" @mouseout="changeBackBg">
      <img :src="bgs[1]" alt="1">
      <span>上传</span>
    </div>
    <date class="time"></date>

    <div id="works-container" :style="{left:left+'vw', width:oWidth+'vw'}" v-on:click="move">
      <ul>
        <li v-for="(item,index) in works" :key="item.id">
          <sub-work class="my-works" :index="item.id" :url="item.url" :date="item.date" :title="item.title" :amount="amount"></sub-work>
        </li>
      </ul>
    </div>
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
  

  var myData = [];
  // $.get('http://39.108.149.106/api/user/works',function(data) {
  //   myData = data;
  // });

  fetch('http://39.108.149.106/api/user/works', {mode: 'cors'})
    .then(function(response) {
      console.log(response);
    })

  var oldX = 0;
  var afterData2 = [{
      id: 1,
      url: bg1,
      date: "2015-03-30 13:24:01",
      title: "允儿"
    },

    {
      id: 2,
      url: bg2,
      date: "2016-08-30 10:10:01",
      title: "迪丽热巴"
    },
    {
      id: 3,
      url: bg4,
      date: "2016-10-09 20:24:23",
      title: "杨幂"
    },
    {

      id: 4,
      url: bg3,
      date: "2017-07-28 09:08:02",
      title: "宋茜"
    },

    {
      id: 5,
      url: bg5,
      date: "2017-08-03 09:08:02",
      title: "宋茜"
    },

    {
      id: 6,
      url: bg6,
      date: "2017-08-21 09:08:02",
      title: "七朵"
    },

    {
      id: 7,
      url: bg7,
      date: "2017-09-01 09:08:02",
      title: "允儿"
    },

    {
      id: 8,
      url: bg8,
      date: "2017-10-13 09:08:02",
      title: "迪丽热巴"
    },
  ];
  export default {
    name: 'works',
    data() {
      return {
        left: 0,
        oWidth: 100,
        works: afterData2,
        counter: 0,
        amount: afterData2.length,
        uploadId: 'upload',
        bgs:[
          bg,
          uploadIcon,
          uploadBg,
          uploadBgHover
        ]
      }
    },
    components: {
      Date,
      SubWork,
    },
    // created:function() {
    //   var myData = [];
    //   $.get('http://39.108.149.106/api/user/works',function(data) {
    //     myData = data;
    //   });

    //   console.log(myData);
    // },
    methods: {
      move: function () {
      if (Math.floor(this.counter++/(afterData2.length-2))%2===0) {
          this.oWidth = this.oWidth + 20.833; this.left = this.left - 20.833;
        }
        else {
          this.oWidth = this.oWidth - 20.833;
          this.left = this.left + 20.833;
        }
      },
      uploadPhoto: function () {
        // alert("上传图片");
        // console.log(this.$el);
        // router.push({name:'Upload'});
      },
      changeBg: function (){
        var upload = document.getElementById(this.uploadId);
        upload.style.backgroundImage = "url("+this.bgs[3]+")";
        upload.style.backgroundRepeat = "no-repeat";
        upload.style.backgroundPositionX = "center";
        upload.style.backgroundPositionY = "center";
      },
      changeBackBg: function (){
        var upload = document.getElementById(this.uploadId);
        upload.style.backgroundImage = "url("+this.bgs[2]+")";
        upload.style.backgroundRepeat = "no-repeat";
        upload.style.backgroundPositionX = "center";
        upload.style.backgroundPositionY = "center";
      },
    },
    computed: {
      initBg: function (){
        return "background:url("+this.bgs[2]+") no-repeat center center";
      }
    }
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
  .works-bg {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
  }
  #works .title {
    font-family: font757;
    font-size: 5.556vh;
    color: #f1f1f1;
    letter-spacing: 0.185vh;
    position: absolute;
    top: 6.481vh;
    left: 6.25vw;
  }

  .photo-amount {
    font-family: font757;
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

  #upload:hover {
    cursor: pointer;
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
