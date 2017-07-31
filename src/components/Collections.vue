<template>
  <div class="pic">
       <img src="../assets/favorite/bg0.jpg" alt="1"  class="image"> 
      <pics-info class="pics-information"></pics-info>
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
    components:{
        PicsInfo
    }
  
}
</script>
<style>
    .image {
        width: 100%;
        height: 100%;
    }
    .pics-information {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        display: none;   
        z-index: 2; 
        transition: all 0.5s ease;
    }
    .pic:hover .pics-information {
        display: block;
    }
</style>

