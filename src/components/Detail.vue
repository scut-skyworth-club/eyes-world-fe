<template>
  <div id="Details">
    {{msg}}
  </div>
</template>

<script>

export default {
    data () {
        return{
          msg:'这是详情页',
        }
    },
}
</script>

<style>
    #Details {
        width: 40vw;
        height: 30vh;
        position: absolute;
        top: 30vh;
        left: 30vw;
        background-color: #7d7d7d;
        font-family: "小米兰亭";
        opacity: 0.6;
        z-index: 50;
        color: #f1f1f1;
    }
</style>
