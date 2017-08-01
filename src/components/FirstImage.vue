<template>
  <div class="first-pic">
    <img src="../assets/favorite/bg0.jpg" alt="1"  class="image" v-on:click="clickme"> 
    <pics-info class="pics-information"
    :big-size="bigSize" :small-size="smallSize" :first-pic-info="firstPicInfo"></pics-info>
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
    props:['firstPicInfo','infoHeight','bigSize','smallSize'],
    components:{
        PicsInfo
    },
    methods:{
        clickme:function () {
            console.log(this.bigSize);
        }
    }
    
}
</script>
<style>
    .first-pic {
        width: 33.33vw;
        height: 59.26vh;
        position: absolute;
        top: 20.37vh;
        left: 6.25vw;
        transition: all 0.5s ease;
    }
    .first-pic:hover {
        width: 35.42vw;
        height: 62.96vh;
        position: absolute;
        top: 18.52vh;
        left: 5.21vw;
    }
    .image {
        width: 100%;
        height: 100%;
    }
    .first-pic .pics-information {
        width: 100%;
        height: 9.259vh;
        position: absolute;
        bottom: 0;
        left: 0;
        display: none;    
        z-index: 2; 
        transition: all 0.5s ease;
    }
    .first-pic:hover .pics-information {
        display: block;
    }
</style>

