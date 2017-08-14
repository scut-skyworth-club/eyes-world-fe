<template>
  <div id="About">
    <img :src="bgs[0]" class="about-bg">
    <div class="info"><p>我们是SkyWorth团队</p></div>
    <div class="return-bt">
        <button v-if="aboutReturn" :style="{border:'2px solid #f1f1f1'}">返回</button>
        <button>返回</button>
    </div> 
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
  props:['aboutReturn'],
  methods: {
      
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
    .return-bt {
        width: 30vw;
        height: 10vh;
        position: absolute;
        top: 15vh;
        left: 0;
    }
    .return-bt>button {
        border: none;
        background: none;
        color: #f1f1f1;
        font-family: '小米兰亭';
        font-size: 30px;
        width: 5vw;
        height: 4vh;
        position: absolute;
        left: 24vw;
    }
</style>
