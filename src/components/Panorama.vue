<template>
  <div id="Panorama">
       <transition name="show">
           <comment v-if="show"></comment> 
       </transition>
    <figure>
        <img src="../assets/demo2.jpg" alt="#">
        <figcaption>
            <p class="title">{{msg}}</p>
        </figcaption>
    </figure>
     <div class="navigation">
        <ul>
            <li><div class="like" v-if="like" @click="likeOrCancel"><figure><img src="../assets/panorama/liked_big.png"></figure></div>
                <div class="like" v-else @click="likeOrCancel"><figure><img src="../assets/panorama/no_like_big.png"></figure></div>
            </li>
            <li><div class="continute"><p>继续欣赏</p></div></li>
            <li><div class="prev-photo" @click="askForPrevPic"><figure><img src="../assets/panorama/prev_icon.png"><figcaption>上一张</figcaption></figure></div></li>
            <li><div class="next-photo" @click="askForNextPic"><figure><img src="../assets/panorama/next_icon.png"><figcaption>下一张</figcaption></figure></div></li>
            <li><div class="comment" @click="showComment"><figure><img src="../assets/panorama/comment_icon.png"><figcaption>评&nbsp&nbsp论</figcaption></figure></div></li>
            <li><div class="detail"><figure><img src="../assets/panorama/detail_icon.png"><figcaption>详&nbsp&nbsp情</figcaption></figure></div></li>
        </ul>
    </div> 
  </div>
</template>

<script>
import Comment from './Comment'
export default {
  data() {
      return {
          msg: "全景图组件",
          like: true,
          show: false,
      }
  },
  methods: {
    likeOrCancel: function () {
        this.like = !(this.like);
    },
    askForPrevPic: function () {
        alert("请求上一张图片");
    },
    askForNextPic: function () {
        alert("请求下一张图片");
    },
    showComment: function () {
        // if(this.commentRight===-20){
        //     this.commentRight = 0;
        // }else {
        //     this.commentRight = -20;
        // }
        this.show = !(this.show);
    }
  },
  components: {
      Comment
  }
}
</script>
<style>
    #Panorama,#Panorama figure,#Panorama img,#Panorama figcaption,
    #Panorama ul,#Panorama li,#Panorama div{
        margin: 0;
        padding: 0;
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
        top: 2.315vh;
        left: 1.302vw;
        margin: 0;
        padding: 0; 
        /* border: 1px solid red; */
        font-family: font757;
        color: rgba(0, 0, 0, 0.65);
        font-size: 3.241vh;
        letter-spacing: 0.1vw;
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
        top: 5.7vh;
        left: 0.3vw;
        font-size: 2.037vh;
        letter-spacing: 0.0556vh;
    }
    .show-enter-active,.show-leave-active {
        transition: opacity 2s;
    }
    .show-enter,.show-leave {
        opacity: 0;
    }

</style>

