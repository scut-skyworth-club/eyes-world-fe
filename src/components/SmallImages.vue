<template>
  <div class="small-pics" v-bind:style="{top:top+'vh',left:left+'vw'}">
    <img src="../assets/favorite/bg1.jpg" alt="1"  class="image" v-on:click="clickme"> 
    <pics-info class="pics-information" :big-size="bigSize" :small-size="smallSize" :first-pic-info="firstPicInfo"></pics-info>
  </div>
</template>

<script>
import bg1 from '../assets/favorite/visitedIcon.png'
import PicsInfo from './PicsInfo'
export default {
    name:'Collections',
    data() {
        return {
            msg:'hello',
            bgs:[bg1]
        }
    },
    props:['firstPicInfo','infoHeight','bigSize','smallSize','top','left','id'],
    components:{
        PicsInfo
    },
    methods:{
        clickme:function () {
            console.log(this.top);
        }
    }
    
}
</script>
<style>
    .small-pics {
        width:15.625vw;
        height:27.78vh;
        position: absolute;
        transition: all 0.5s ease;
    }
    .small-pics:hover {
        width: 17.708vw;
        height: 31.48vh;
        position: absolute;
    }
    .image {
        width: 100%;
        height: 100%;
    }
    .small-pics .pics-information {
        width: 100%;
        height: 7.407vh;
        position: absolute;
        bottom: 0;
        left: 0;
        display: none;    
        z-index: 2; 
        transition: all 0.5s ease;
    }
    .small-pics:hover .pics-information {
        display: block;
    }
</style>

