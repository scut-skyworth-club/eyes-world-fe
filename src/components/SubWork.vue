<template>
  <div class="sub-work" :style="{left:((index-1)*27.083+6.25)+'vw'}" >
      <div class="time-container">
        <h3 class="upload-time">{{time}}</h3>
      </div>
      <div class="camera-container">
        <div class="camera">
            <img src="../assets/works/cameraIcon.jpg" alt="1">
        </div> 
      </div>
      <div class="work-img" :style="{left:-offset+'vw'}"
        v-on:mouseover="enlarge" v-on:mouseleave="shrink">
           <img src="../assets/favorite/bg1.jpg" alt="2"> 
      </div>
  </div>
</template>
<script>

export default {
    data () {
        return {
            time:"2017-07-26 15:15:15",
            offset:0
        }
    },
    methods:{
        enlarge:function () {
            this.offset=1.042;
        },
        shrink:function () {
            this.offset=0;
        }
    },
    props:['index','date']
}
</script>
<style>
    .sub-work {
        width: 20.833vw;
        height: 54.833vh;
        position: absolute;
        top: 26.648vh;
    }
    .time-container {
        width: 100%;
        position: absolute;
        height: 4vh;
        z-index: 5;
    }
    .upload-time {
        font-family: font757;
        color: #f1f1f1;
        font-size: 18px;
        text-align: center;
        padding: 0 auto;
        z-index: 5;
    }
    .camera-container {
        width: 100%;
        height: 6.389vh;
        position: absolute;
        z-index: 2;
        margin-top: 4vh;
    }
    .camera {
        margin-left: 8.594vw;
        width: 3.597vw;
        height: 100%;
        position: absolute;
        z-index: 2;
    }
    .camera img {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 2;
    }
    .work-img {
        width: 100%;
        height: 44.444vh;
        position: absolute;
        z-index: 1;
        margin-top: 10.389vh;
        /* border: 1px solid red; */
        /* background: url(../assets/favorite/bg1.jpg) no-repeat center center; */
    }
    .sub-work:hover .work-img {
        width: 22.917vw;
        height: 48.178vh; 
        margin-top: 8.537vh;
        transition: all 0.7s ease;
        box-shadow: 0 5px 25px #222222;
    }
    .work-img img {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
    } 

</style>

