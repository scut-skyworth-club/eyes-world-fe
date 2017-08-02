<template>
    <div class="box" :style="{left:oleft+'vw'}" 
    v-on:mouseover="enlarge" v-on:mouseleave="shrink" v-on:click="choose">
        <div>
            <!-- <img src="../assets/user/my_works.png"/> -->
            <img :src="url" alt="2">  
        </div>
        <p id="item-title">{{title}}</p>
    </div>
</template>
<script>
// import Favorite from './Favorite'
// import Works from './Works'
import User from './User'

export default {
  data () {
      return {
        oleft: this.left
      }
  },
//   props:{
//       data:{
//           type:Object,
//       }
//   }
  props:['title','url','left','leftchange','itemid'],
  comments:{
    //   Favorite,
    //   Works
  },
  methods:{
      enlarge:function () {
        this.oleft = this.leftchange;
      },
      shrink:function () {
        this.oleft = this.left;
      },
      choose:function () {
          switch (this.itemid){
            case 1: location.href = 'http://localhost:8080/#/user/works/hello';break;
            case 2: location.href = 'http://localhost:8080/#/user/favorite/456';break;
            case 3: alert("hello.....");break;
            default: return;
          }
      }
  }
}
</script>

<style>
    .box {
        width: 15.625vw;
        height: 55.56vh;
        margin: 0;
        position: absolute;
        top: 22.22vh;
        background: url('../assets/user/bt_bg2.png');
        transition: all 0.7s;
    }
     .box:hover {
        width: 18.75vw;
        height: 66.67vh;
        position: absolute;
        top:16.67vh;
        box-shadow: 0px 10px 50px #444444;
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
