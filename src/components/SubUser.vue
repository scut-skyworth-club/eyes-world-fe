<template>
    <div class="box" :style="{left:left+'vw'}">
        <div>
            <img src="../assets/user/my_works.png" alt="2">
        </div>
        <p id="item-title">{{title}}</p>
    </div>
</template>
<script>
export default {
  data () {
      return {

      }
  },
//   props:{
//       data:{
//           type:Object,
//       }
//   }
  props:['title','url','left','left2'],
}
</script>

<style>
    .box {
        width: 15.625vw;
        height: 55.56vh;
        margin: 0;
        position: absolute;
        top: 22.22vh;
        left: 40.625vw;
        background: url('../assets/user/bt_bg2.png');
        transition: all 0.7s;
    }
    .box:hover {
        width: 18.75vw;
        height: 66.67vh;
        position: absolute;
        top:16.67vh;
        left: 39.06vw;
    }
    .box div{
        width:9.48vw;
        height: 18.89vh;
        text-align: center;
        margin: 93px auto;
        transition: 0.7s;
    }
    .box:hover div{
        width:11.376vw;
        height: 22.668vh;

    }
    .box div img {
        width: 100%;
    }
    #item-title {
        border:none;
        background: none;
        font-family: font757;
        font-size: 30px;
        color: #f1f1f1;
        text-align: center;
        margin: 20px auto;
        transition: 0.7s;
    }
    .box:hover p {
        font-size: 36px;
    }
</style>
