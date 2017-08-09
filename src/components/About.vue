<template>
  <div id="About">
    <img :src="bgs[0]" class="about-bg">
    <div class="info"><p>我们是SkyWorth团队</p></div>
    <div class="return-bt"><button v-on:click="closeIt">返回</button></div> 
  </div>
</template>
<script>
import bg from '../assets/user/bt_bg3.png'
export default {
    data () {
        return{
            bgs:[
                bg
            ]
        }
    },
  props:['aboutus'],
  methods: {
      closeIt:function () {
          let data = false;
          this.$emit('aboutus',data);
      }
  }
}
</script>
<style>
    #About {
        width: 30vw;
        height: 25vh;
        position: absolute;
        top: 30vh;
        left: 30vw;
        border: 0.104vw solid #eeeeee;
        overflow: hidden;
        z-index: 100;
    }
    .about-bg {
        width: 30vw;
        height: 25vh;
        position: absolute;
        top: 0;
        left: 0;
    }
    #About .info {
        width: 30vw;
        height: 15vh;
        position: absolute;
        top: 0;
        left: 0;
    }
    #About p {
        text-align: center;
        margin: 6vh auto;
        color: #f1f1f1;
        font-size: 30px;
    }
    #About .return-bt {
        width: 30vw;
        height: 10vh;
        position: absolute;
        top: 15vh;
        left: 0;
    }
    #About button {
        border: none;
        background: none;
        color: #f1f1f1;
        font-size: 30px;
        position: absolute;
        left: 25vw;
    }
</style>
