<template>
  <div class="sub-work" :style="{left:((index-1)*27.083+6.25)+'vw'}" >
      <div class="time-container">
        <h3 class="upload-time">{{date}}</h3>
      </div>
      <div class="camera-container">
        <div class="camera">
            <img src="../assets/works/cameraIcon.jpg" alt="1">
        </div> 
      </div>
      <hr class="line" v-if="!(index==amount)"/>
      <div class="work-img"
        v-on:click="getMoreInfo">
           <img :src="url" alt="2"> 
           <div class="shelter">
             <p>{{title}}</p>
           </div>
      </div>
  </div>
</template>
<script>

export default {
    data () {
        return {
            
        }
    },
    methods:{
        getMoreInfo:function () {
            alert("查看图片详细信息");
        },
        uploadPhoto: function () {
            alert("上传图片");
        },
        
    },
    props:['index','date','url','title','amount']
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
        font-size: 2.222vh;
        text-align: center;
        padding: 0 auto;
        z-index: 5;
    }
    .camera-container {
        width: 100%;
        height: 6.389vh;
        position: absolute;
        z-index: 4;
        margin-top: 4vh;
    }
    .camera {
        margin-left: 8.594vw;
        width: 3.597vw;
        height: 100%;
        position: absolute;
        z-index: 4;
    }
    .camera img {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 4;
    }
    .work-img {
        width: 100%;
        height: 44.444vh;
        position: absolute;
        z-index: 2;
        margin-top: 10.389vh;
        transition: all 0.7s ease;
        /* border: 1px solid red; */
        /* background: url(../assets/favorite/bg1.jpg) no-repeat center center; */
    }
    .sub-work .work-img:hover {
        cursor: pointer;
        transform: scale(1.1,1.083);
        box-shadow: 0 5px 25px #222222;
    }
    .work-img img {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
    } 
    .shelter {
        width: 100%;
        height: 7.407vh;
        position: absolute;
        z-index: 2;
        bottom: 0;
        font-family: font757;
        font-size: 2.963vh;
        color: #f1f1f1;
        letter-spacing: 0.4vh;
        background-color: #31477f;
        opacity: 1;
        transition: all 0.7s ease
    }
    .shelter p {
        position: absolute;
        width: 100%;
        z-index: 2;
        text-align: center;
        margin: 1.852vh auto;
    }
    .work-img:hover .shelter {
        font-size: 3.333vh;
    }
    .line {
        width: 27.083vw;
        height: 0.185vh;
        position: absolute;
        left: 10.417vw;
        top: 7.195vh;
        z-index: 1;
        border: none;
        border-top: 0.093vh solid #f1f1f1;
    }
</style>

