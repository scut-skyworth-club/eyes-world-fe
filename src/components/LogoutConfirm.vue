<template>
  <div id="LogoutConfirm">
      <div class="sure"><p>确定要退出吗？</p></div>
      <div class="button-group"><button class="yes-bt" v-on:click="yes">是</button>
      <button class="no-bt" v-on:click="no">否</button>
      </div>
  </div>
</template>
<script>
export default {
  props:['oevent'],
  methods: {
      yes:function () {
        location.replace('/login');
      },
      no: function () {
        let data = false;
        this.$emit('oevent',data);
      },
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
        background: url("../assets/user/bt_bg3.png") no-repeat center center;
        font-family: font757;
        font-size: 2.778vh;
        color: #f1f1f1;
        border: 0.104vw solid #eeeeee;
        color: #f1f1f1;
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
        position: absolute;
        left: 7vw;
        background: none;
        border: none;
        font-size: 2.778vh;
        color: #f1f1f1;
    }
    .no-bt {
        position: absolute;
        right: 7vw;
        background: none;
        border: none;
        font-size: 2.778vh;
        color: #f1f1f1;
    }
    
</style>
