<template>
  <div class="sub-work">
      <div class="time-container">
        <h3 class="upload-time">{{time}}</h3>
      </div>
      <div class="camera-container">
        <div class="camera">
            <img src="../assets/works/cameraIcon.jpg" alt="1">
        </div> 
      </div>
      <div class="work-img">
           <img src="../assets/favorite/bg1.jpg" alt="2"> 
      </div>
  </div>
</template>
<script>

export default {
    data () {
        return {
            time:"2017-07-26 15:15:15"
        }
    }
}
</script>
<style>
    .sub-work {
        width: 20.833vw;
        position: absolute;
        top: 25.648vh;
    }
    .time-container {
        width: 100%;
    }
    .upload-time {
        font-family: font757;
        color: #f1f1f1;
        font-size: 18px;
        text-align: center;
        padding: 5px auto;
    }
    .camera-container {
        width: 100%;
        height: 6.389vh;
        margin-top: 0.4vh;
    }
    .camera {
        margin-left: 8.594vw;
        width: 3.597vw;
        height: 100%;
    }
    .camera img {
        width: 100%;
        height: 100%;
    }
    .work-img {
        width: 20.833vw;
        height: 44.444vh;
        position: absolute;
        margin-top: 0;
        /* border: 1px solid red; */
        /* background: url(../assets/favorite/bg1.jpg) no-repeat center center; */
    }
    .work-img img {
        width: 100%;
        height: 100%;
    } 

</style>

