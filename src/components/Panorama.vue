<template>
  <div id="Panorama">
    <transition name="show-comments">
      <comment v-if="showComments"></comment> 
    </transition>
    <transition name="show-details">
      <detail v-if="showDetails"></detail>
    </transition>
    <figure>
      <transition name="show-photo">
        <img v-show="showPhoto" :src="bgs[index]" alt="#">
      </transition>
      <figcaption>
        <p class="title">{{msg}}</p>
      </figcaption>
    </figure>
     <div class="navigation">
        <ul>
            <li><div class="like" v-if="like" @click="likeOrCancel"><figure><img :src="icons[0]"></figure></div>
                <div class="like" v-else @click="likeOrCancel"><figure><img :src="icons[1]"></figure></div>
            </li>
            <li><div class="continute" @click="hideNavBar"><p>继续欣赏</p></div></li>
            <li><div class="prev-photo" @click="askForPrevPic"><figure><img :src="icons[2]"><figcaption>上一张</figcaption></figure></div></li>
            <li><div class="next-photo" @click="askForNextPic"><figure><img :src="icons[3]"><figcaption>下一张</figcaption></figure></div></li>
            <li><div class="comment" @click="showComments=!showComments"><figure><img :src="icons[4]"><figcaption>评&nbsp&nbsp&nbsp论</figcaption></figure></div></li>
            <li><div class="detail" @click="showDetails=!showDetails"><figure><img :src="icons[5]"><figcaption>详&nbsp&nbsp&nbsp情</figcaption></figure></div></li>
        </ul>
    </div> 
  </div>
</template>

<script>
import bg1 from '../assets/demo2.jpg'
import bg2 from '../assets/login/demo3.jpg'
import bg3 from '../assets/login/demo4.jpg'
import bg4 from '../assets/login/demo5.jpg'
import bg5 from '../assets/login/demo6.jpg'
import bg6 from '../assets/login/demo7.jpg'

import icon1 from '../assets/panorama/liked_big.png'
import icon2 from '../assets/panorama/no_like_big.png'
import icon3 from '../assets/panorama/prev_icon.png'
import icon4 from '../assets/panorama/next_icon.png'
import icon5 from '../assets/panorama/comment_icon.png'
import icon6 from '../assets/panorama/detail_icon.png'

import Comment from './Comment'
import Detail from './Detail'
export default {
  data() {
      return {
          msg: "全景图组件",
          like: true,
          showComments: false,
          showDetails:false,
          showPhoto: true,
          index:0,
          bgs:[
              bg1,
              bg2,
              bg3,
              bg4,
              bg5,
              bg6,
          ],
          icons:[
              icon1,
              icon2,
              icon3,
              icon4,
              icon5,
              icon6,
          ]
      }
  },
  methods: {
    likeOrCancel: function () {
        this.like = !(this.like);
    },
    hideNavBar: function () {
        console.log('hello');
    },
    askForPrevPic: function () {
        // alert("请求上一张图片");
        if (this.index===0) {
            console.log('没有前一张了');
            return;
        }else {
            this.showPhoto=false;
            var _this = this;
            window.setTimeout(function() {
                _this.index--;
                _this.showPhoto=true;
            },700);
        }
    },
    askForNextPic: function () {
        if(this.index===this.bgs.length-1){
            console.log('没有下一张了');
            return;
        }else {
            this.showPhoto=false;
            var _this = this;
            window.setTimeout(function() {
                _this.index++;
                _this.showPhoto=true;
            },700);
        }
    },
    //showComment和showPhotoDetails这两个函数用作处理评论和详情信息的接口
    // showComment: function () {
    //     // if(this.commentRight===-20){
    //     //     this.commentRight = 0;
    //     // }else {
    //     //     this.commentRight = -20;
    //     // }
    //     this.show = !(this.show);
    // },
    // showPhotoDetails: function () {
    //     this.showDetails = !(this.showDetails);
    // }
  },
  components: {
      Comment,
      Detail
  }
}
</script>
<style>
    #Panorama,#Panorama figure,#Panorama img,#Panorama figcaption,
    #Panorama ul,#Panorama li,#Panorama div{
        margin: 0;
        padding: 0;
        /* background-color: #666666; */
    }
    #Panorama {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
    #Panorama figure {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
    }
    #Panorama figure img {
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.7s ease;
    }
     #Panorama figcaption .title{
        position: absolute;
        top: 1vh;
        left: 1.5vw;
        color: #f1f1f1;
        font-family: font757;
        font-size: 2.222vh;
    } 
    #Panorama .navigation {
        width: 60vw;
        height: 12.037vh;
        position: absolute;
        top: 77.315vh;
        left: 24.74vw;
    }
    #Panorama .navigation ul {
        position: absolute;
        top: 0;
        left: 0;
    }
    #Panorama .navigation li {
        position: relative;
        float: left;
    }
    #Panorama .navigation li div {
        width: 6.771vw;
        height: 12.037vh;
        margin-right: 1.979vw;
        background-color: #7d7070;
        opacity: 0.5;
    }
    /* #Panorama figcaption:hover li div{
        opacity: 0.5;
    } */
    #Panorama li div:hover {
        background-color: #dddddd;
        opacity: 0.7;
    }
    #Panorama .like figure {
        width: 4.167vw;
        height: 6.481vh;
        position: absolute;
        top: 2.778vh;
        left: 1.302vw;
    }
    #Panorama .like figure img {
        width: 4.167vw;
        height: 6.481vh;
        position: absolute;
        top: 0;
        left: 0;
    }
    .continute p {
        width: 4.167vw;
        height: 7.407vh;
        position: absolute;
        top: 2.265vh;
        left: 1.462vw;
        margin: 0;
        padding: 0; 
        font-family: font757;
        color: rgba(0, 0, 0, 0.65);
        font-size: 3.241vh;
        letter-spacing: 0.20vw;
        line-height: -0.926vh;
        text-align: center;
    }

    #Panorama .prev-photo figure{
        width: 4.167vw;
        height: 9.722vh;
        position: absolute;
        top: 2.315vh;
        left: 1.302vw;
    }
    #Panorama .next-photo figure{
        width: 4.167vw;
        height: 9.722vh;
        position: absolute;
        top: 2.315vh;
        left: 1.302vw;
    }
    #Panorama .comment figure{
        width: 4.167vw;
        height: 9.722vh;
        position: absolute;
        top: 2.315vh;
        left: 1.302vw;
    }
    #Panorama .detail figure{
        width: 4.167vw;
        height: 9.722vh;
        position: absolute;
        top: 2.315vh;
        left: 1.302vw;
    }
    #Panorama .prev-photo figure img{
        width: 3.281vw;
        height: 4.537vh;
        position: absolute;
        top: 0;
        left: 0.468vw;
    }
    #Panorama .next-photo figure img{
        width: 3.281vw;
        height: 4.537vh;
        position: absolute;
        top: 0;
        left: 0.468vw;
    }
    #Panorama .comment figure img{
        width: 3.021vw;
        height: 4.907vh;
        position: absolute;
        top: 0;
        left: 0.573vw;
    }
    #Panorama .detail figure img{
        width: 2.917vw;
        height: 1.111vh;
        position: absolute;
        top: 1.296vh;
        left: 0.625vw;
    }
    #Panorama li figcaption {
        width: 4.167vw;
        height: 2.87vh;
        position: absolute;
        top: 5.2vh;
        left: 0.3vw;
        font-size: 2.037vh;
        letter-spacing: 0.0556vh;
    }
    .show-comments-enter-active {
        transition: all 0.7s ease;
    }
    .show-comments-leave-active {
        transition: all 0.7s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .show-comments-enter{
        transform: translateX(20vw);
        opacity: 0;
    }
    .show-comments-leave-to {
        transform: translateX(20vw);
        opacity: 0;
    }

    .show-details-enter-active,.show-details-leave-active {
        transition: all 0.5s ease;
    }
    .show-details-enter{
        transform: skewX(90deg); 
    }
    .show-details-leave-to {
        transform: skewX(90deg); 
    }
    .show-photo-enter-active,.show-photo-leave-active {
        transition: all 0.7s ease;
    }
    .show-photo-enter {
        opacity: 0.3; 
        transform: skew(75deg,75deg);
    }
    .show-photo-leave-to {
        opacity: 0.3; 
        transform: skew(75deg,75deg);
    }
</style>

