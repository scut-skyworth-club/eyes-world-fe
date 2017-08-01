<template>
  <div class="pic">
      <pics-info class="pics-information"></pics-info>
  </div>
</template>

<script>
// import bg1 from '../assets/favorite/visitedIcon.png'
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
    .pics-infomation {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
    }
</style>

