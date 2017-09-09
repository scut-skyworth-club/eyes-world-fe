<template>
  <div id="works">
    <img :src="bgs[0]">
    <p class="title">我的作品</p>
    <p class="photo-amount">{{amount}} Photos</p>
    <div class="upload focus" v-if="focus"><img :src="bgs[1]" alt="1"><span>上传</span></div>
    <div class="upload no-focus" v-else><img :src="bgs[1]" alt="1"><span>上传</span></div>
    <date class="time"></date>

     <div id="works-container" :style="{left:oleft+'vw', width:oWidth+'vw'}" v-if="isComplete">
      <ul>
        <li v-for="(item,index) in works" :key="item.id">
          <sub-work class="my-works" :index="index" :url="item.url" :date="item.createTime" 
          :title="item.photoName" :amount="amount" :counter="counter"></sub-work>
        </li>
      </ul>
    </div> 
    <transition name="confirm">
        <my-confirm v-if="sure" :is-sure="isSure" :confirm-text="confirmText"></my-confirm>
    </transition> 
    <p id="delete-explain">点击向下按钮可删除图片</p>
    {{setKey}}
  </div>
</template>

<script>
  import bg from '../assets/works/bg.png'
  import uploadIcon from '../assets/works/uploadIcon.png'

  import Date from './Date'
  import SubWork from './SubWork'
  import MyConfirm from './MyConfirm'
  import router from '../router/index'
  
  export default {
    name: 'Works',
    data() {
      return {
        oleft: 0,
        oWidth: 100,
        works: [],
        amount: 0,
        bgs:[
          bg,
          uploadIcon,
        ],
        focus: 1,  //focus=0聚焦到上传按钮上，focus=1聚焦到图片上，focus=2聚焦到删除弹窗上，默认起始聚焦在图片上
        counter: 0,
        isComplete: false,
        sure: false,    //sure=true就弹出删除弹窗，sure=false弹窗消失
        isSure: true,   //isSure控制是否真的删除
        confirmText: '确定要删除吗？', //删除弹窗信息
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
        if(response.headers.get('Content-Type')==='text/html'){
          // console.log('登录失败');
          router.replace({name:'User'});
        }else {
          // router.replace({name:'User'});
          response.json().then(function(data){
            self.works = data;
            self.amount = data.length;
            self.isComplete = true;
          });
        }
        // return response.json();
      })
      // .then(function(getData){
      //   self.works = getData;
      //   self.amount = getData.length;
      //   console.log(getData);
      // });
      // .catch(function(getData) {
      //   // console.log(getData);
      //   // self.works = getData;
      //   // self.amount = getData.length;
      //   // console.log(getData);
      // });
    },
    
    components: {
      Date,
      SubWork,
      MyConfirm,
    },
    methods: {
      moreDetails: function (){
        let photos = JSON.stringify(this.works);
        localStorage.setItem('photos',photos);
        let currentId = JSON.stringify(this.counter-1);
        localStorage.setItem('currentId',currentId);
        router.push({name:'Panorama'});
      },
      uploadPhoto: function () {
        // alert("上传图片");
        // console.log(this.$el);
        router.push({name:'Upload'});
      },
      enterItem: function (){
        if (this.focus===0) {  //如果聚焦在上传按钮上，调用上传图片函数以实现上传功能，并把焦点重置
          this.uploadPhoto();
          this.focus = 1;
        }
        else if (this.focus===1) { //进入图片详情页
          this.moreDetails();
        }else {
          if (this.isSure) {
            this.deletePhoto();   //确定删除调用删除函数
          }
          //无论是否删除，点击确定之后都要把confirm框去掉，并把焦点移回主页面
          this.isSure = true;
          this.sure = false;
          this.focus = 1;
        }
      },
      rightMove: function (){
        if (this.focus===1) {
          if (this.counter!==this.amount) {
            this.counter++;
          }else {
            return;
          }
          if (this.counter===4) { //焦点在第四张图片上时要触发移动，否则看不到后面图片
            this.oWidth = this.oWidth + 75; this.oleft = this.oleft - 75;
          }
          if ((this.counter-4)%3===0&&(this.counter!==4)) {
             //除了第四张图片，7,10,13...也要触发移动，同时移动距离与第四张移动距离不同，因为图片排布不同
            this.oWidth = this.oWidth + 81.25; this.oleft = this.oleft - 81.25;
          }
        }
        if (this.focus===2) {
          if (this.isSure) {
            this.isSure = false;
          }
        }
      },
      leftMove: function (){
        if (this.focus===1) {
          if (this.counter!==1) {
            this.counter--;
          }else {
            return;
          }
          if (this.counter===3) { //第四张触发右移，所以第三张触发左移
            this.oWidth = this.oWidth - 75; this.oleft = this.oleft + 75;
          }
          if (this.counter%3===0&&(this.counter!==3)) {
            //6,9,12...触发左移，同时由于第三张移动距离不一样，要将其排除
            this.oWidth = this.oWidth - 81.25; this.oleft = this.oleft + 81.25;
          }
        }
        if (!this.isSure) {
          this.isSure = true;
        }
      },
      deletePhoto: function (){
        //删除功能
        var deletePhotoName = this.works[this.counter-1].photoName;
        var self = this;
        fetch('http://39.108.149.106/api/user/works/'+deletePhotoName+'/delete', {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Credentials': true,
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
          },
          credentials: "include"
        }).then(function(response) {
            return response.json();
        }).then(function(data){
          if(data.delete){
            // fetch('http://39.108.149.106/api/user/works/', {
            //   method: 'GET',
            //   mode: 'cors',
            //   headers: {
            //     'Access-Control-Allow-Credentials': true,
            //     'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
            //   },
            //   credentials: "include"
            // }).then(function(response) {
            //   return response.json();
            // }).then(function(data){
            //   self.works = data;
            //   self.amount = data.length;
            // })
            console.log('删除成功');
          }else {
            console.log('删除失败');
          }
        });
      }
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
                      }else {
                        self.focus = 2;
                        self.sure = true;
                      }
                      // else {
                      //   self.delete();
                      // }
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

  #works .upload {
    width: 6.51vw;
    height: 4.907vh;
    margin: 0;
    padding: 0;
    position: absolute;
    z-index: 15;
    top: 7.5vh;
    left: 20.677vw;
  }
  #works .focus {
    background: url("../assets/works/bt_bg2.png") no-repeat center center;
  }
  #works .no-focus {
    background: url("../assets/works/bt_bg3.png") no-repeat center center;
  }
  #works .upload>img {
    width: 2.76vw;
    height: 4.907vh;
    position: absolute;
    top: 0;
    left: 0;
  }
  #works .upload>span {
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
  .confirm-enter-active, .confirm-leave-active {
      transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .confirm-enter, .confirm-leave-to {
      transform: translateY(-55vh);
      opacity: 0;
  }
  #delete-explain {
      font-family: "小米兰亭";
      color: #f1f1f1;
      font-size: 2.963vh;
      position: absolute;
      right: 6.25vw;
      bottom: 6.481vh;
  }
</style>
