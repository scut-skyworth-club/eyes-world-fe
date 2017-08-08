<template>
  <div id="Panorama">
      <figure>
          <img src="../assets/demo2.jpg" alt="#">
          <figcaption>
              <p class="title">{{msg}}</p>
              <div class="navigation">
                  <ul>
                      <li><div class="like"><figure><img src="../assets/panorama/liked_big.png"></figure></div></li>
                      <li><div class="continute"><p>继续欣赏</p></div></li>
                      <li><div class="prev-photo"><figure><img src="../assets/panorama/prev_icon.png"><figcaption>上一张</figcaption></figure></div></li>
                      <li><div class="next-photo"><figure><img src="../assets/panorama/next_icon.png"><figcaption>下一张</figcaption></figure></div></li>
                      <li><div class="comment"><figure><img src="../assets/panorama/comment_icon.png"><figcaption>评&nbsp&nbsp论</figcaption></figure></div></li>
                      <li><div class="detail"><figure><img src="../assets/panorama/detail_icon.png"><figcaption>详&nbsp&nbsp情</figcaption></figure></div></li>
                  </ul>
              </div>
          </figcaption>
      </figure>
  </div>
</template>

<script>
export default {
  data() {
      return {
          msg: "全景图组件"
      }
  },
  methods: {

  }
}
</script>
<style>
    
    #Panorama {
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    #Panorama figure {
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        position: relative;
        top: 0;
        left: 0;
    }
    #Panorama figure img {
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
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
        /* border: 1px solid #f1f1f1; */
    }
    #Panorama .navigation ul {
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
    }
    #Panorama .navigation li {
        position: relative;
        float: left;
    }
    #Panorama .navigation li div {
        width: 6.771vw;
        height: 12.037vh;
        margin: 0 1.979vw 0 0;
        background-color: #7d7070;
        /* position: absolute;
        top: 0;
        left: 0;  */
        opacity: 0.5;
        /* transition: all 0.5s ease;  */
    }
    /* #Panorama figcaption:hover li div{
        opacity: 0.5;
    } */
    #Panorama figcaption li div:hover {
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

    #Panorama .prev-photo figure {
        width: 4.167vw;
        height: 7.407vh;
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
    #Panorama .prev-photo figure figcaption {
        width: 4.167vw;
        height: 2.87vh;
        position: absolute;
        top: 5.7vh;
        left: 0.3vw;
        font-size: 2.037vh;
        letter-spacing: 0.0556vh;
    }
    #Panorama .next-photo figure {
        width: 4.167vw;
        height: 7.407vh;
        position: absolute;
        top: 2.315vh;
        left: 1.302vw;
    }
    #Panorama .next-photo figure img{
        width: 3.281vw;
        height: 4.537vh;
        position: absolute;
        top: 0;
        left: 0.468vw;
    }
    #Panorama .next-photo figure figcaption {
        width: 4.167vw;
        height: 2.87vh;
        position: absolute;
        top: 5.7vh;
        left: 0.3vw;
        font-size: 2.037vh;
        letter-spacing: 0.0556vh;
    }
    #Panorama .comment figure {
        width: 4.167vw;
        height: 7.407vh;
        position: absolute;
        top: 2.315vh;
        left: 1.302vw;
    }
    #Panorama .comment figure img{
        width: 3.021vw;
        height: 4.907vh;
        position: absolute;
        top: 0;
        left: 0.573vw;
    }
    #Panorama .comment figure figcaption {
       width: 4.167vw;
        height: 2.87vh;
        position: absolute;
        top: 5.7vh;
        left: 0.3vw;
        font-size: 2.037vh;
        letter-spacing: 0.0556vh;
    }
    #Panorama .detail figure {
        width: 4.167vw;
        height: 7.407vh;
        position: absolute;
        top: 2.315vh;
        left: 1.302vw;
    }
    #Panorama .detail figure img{
        width: 2.917vw;
        height: 1.111vh;
        position: absolute;
        top: 1.296vh;
        left: 0.625vw;
    }
    #Panorama .detail figure figcaption {
       width: 4.167vw;
        height: 2.87vh;
        position: absolute;
        top: 5.7vh;
        left: 0.3vw;
        font-size: 2.037vh;
        letter-spacing: 0.0556vh;
    }
    

</style>

