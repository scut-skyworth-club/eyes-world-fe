<template>
  <div class="first-pic" :style="{transform:'scale('+size+')',boxShadow:shadow}"
  :size="change" :shadow="change">
    <img :src="url" alt="1"  class="image"> 
    <pics-info class="pics-information"
    :bigsize="bigsize"
    :smallsize="smallsize" 
    :create-time="createTime"
    :photo-name="photoName" 
    :user-name="userName" 
    :style="{display:display}"
    :display="change"></pics-info>
  </div>
</template>

<script>
import bg1 from '../assets/favorite/visitedIcon.png'
import PicsInfo from './PicsInfo'
export default {
    name:'Collections',
    data() {
        return {
            msg: 'hello',
            bgs: [bg1],
            size: 1,
            shadow: 'none',
            display: 'none',
        }
    },
    props:['bigsize','smallsize','url','createTime','photoName','userName','counter'],
    components:{
        PicsInfo
    },
    methods:{
        
    },
    computed:{
        change: function (){
            if (this.counter===1) {
                this.size = 1.0625;
                this.shadow = '0 30px 80px #303030';
                this.display = 'block';
            }else{
                this.size = 1;
                this.shadow = 'none';
                this.display = 'none';
            }
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
    /* .first-pic:hover {
        transform: scale(1.0625);
        position: absolute;
        box-shadow: 0 30px 80px #303030;
    } */
    .image {
        width: 100%;
        height: 100%;
    }
    .first-pic .pics-information {
        width: 100%;
        height: 9.259vh;
        font-family: '小米兰亭';
        position: absolute;
        bottom: 0;
        left: 0;
        display: none;    
        z-index: 2; 
        transition: all 0.5s ease;
    }
    /* .first-pic:hover .pics-information {
        display: block;
    } */
</style>

