<template>
  <div class="MyConfirm">
      <img :src="bgs[0]">
      <div class="sure"><p>{{confirmText}}</p></div>
      <div class="button-group">
          <button class="yes-bt" v-if="isSure" :style="{background:'url('+bgs[1]+') no-repeat center center',border:'1px solid blue'}">是</button>
          <button class="yes-bt" v-else>是</button>
          <button class="no-bt"v-if="!isSure" :style="{background:'url('+bgs[1]+') no-repeat center center',border:'1px solid blue'}">否</button>
          <button class="no-bt" v-else>否</button>
      </div>
  </div>
</template>
<script>
import bg from '../assets/user/bt_bg3.png'
import bt_bg from '../assets/user/bt_bg2.png'
export default {
  data () {
      return{
          bgs:[
            bg,
            bt_bg
          ]
      }
  },
  props:['isSure','confirmText'],
  methods: {
      
  }
}
</script>
<style>
    .MyConfirm {
        width: 20vw;
        height: 25vh;
        position: absolute;
        top: 30vh;
        left: 40vw;
        z-index: 100;
        font-family: "小米兰亭";
        font-size: 2.778vh;
        color: #f1f1f1;
        border: 0.104vw solid #eeeeee;
        color: #f1f1f1;
        overflow: hidden;
    }
    .MyConfirm>img {
        width: 20vw;
        height: 25vh;
        position: absolute;
        top: 0;
        left: 0;
    }
    .MyConfirm>.sure {
        width: 100%;
        height: 15vh;
        position: absolute;
        top: 0;
        left: 0;
    }
    .MyConfirm>.sure>p {
        text-align: center;
        margin: 5vh auto;
        letter-spacing: 0.08vw;
    }
    .MyConfirm>.button-group {
        width: 100%;
        height: 10vh;
        position: absolute;
        top: 15vh;
        left: 0;
    }
    .MyConfirm>.button-group>.yes-bt {
        width: 3.5vw;
        height: 4vh;
        position: absolute;
        left: 5vw;
        background: none;
        border: none;
        font-size: 2.778vh;
        color: #f1f1f1;
    }
    .MyConfirm>.button-group>.no-bt {
        width: 3.5vw;
        height: 4vh;
        position: absolute;
        right: 5vw;
        background: none;
        border: none;
        font-size: 2.778vh;
        color: #f1f1f1;
    }
    
</style>
