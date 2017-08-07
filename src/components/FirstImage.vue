<template>
  <div class="first-pic">
    <img :src="url" alt="1"  class="image"> 
    <pics-info class="pics-information"
    :bigsize="bigsize" :smallsize="smallsize" :date="date"
    :photo-name="photoName" :author="author" ></pics-info>
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
    props:['bigsize','smallsize','url','date','photoName','author'],
    components:{
        PicsInfo
    },
    methods:{
        
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
        transform: scale(1.0625);
        position: absolute;
        box-shadow: 0 30px 80px #303030;
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

