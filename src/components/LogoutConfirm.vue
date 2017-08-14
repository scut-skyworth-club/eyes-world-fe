<template>
  <div id="LogoutConfirm">
      <img :src="bgs[0]" class="confirm-bg">
      <div class="sure"><p>确定要退出吗？</p></div>
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
  props:['isSure'],
  methods: {
      
  }
}
</script>
<style>
    #LogoutConfirm {
        width: 20vw;
        height: 25vh;
        position: absolute;
        top: 30vh;
        left: 40vw;
        z-index: 100;
        font-family: font757;
        font-size: 2.778vh;
        color: #f1f1f1;
        border: 0.104vw solid #eeeeee;
        color: #f1f1f1;
        overflow: hidden;
    }
    .confirm-bg {
        width: 20vw;
        height: 25vh;
        position: absolute;
        top: 0;
        left: 0;
    }
    .sure {
        width: 100%;
        height: 15vh;
        position: absolute;
        top: 0;
        left: 0;
    }
    .sure p {
        text-align: center;
        margin: 5vh auto;
        
    }
    .button-group {
        width: 100%;
        height: 10vh;
        position: absolute;
        top: 15vh;
        left: 0;
    }
    .yes-bt {
        width: 3.5vw;
        height: 4vh;
        position: absolute;
        left: 5vw;
        background: none;
        border: none;
        font-size: 2.778vh;
        color: #f1f1f1;
    }
    .no-bt {
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
