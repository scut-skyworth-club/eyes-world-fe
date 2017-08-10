<template>
  <div id="upload-photo">
        <img :src="uploadBg" id="upload-img"> 
        <h2 class="upload-title">{{title}}</h2>
        <date class="time"></date>
        <div class="qr-upload-container">
            <p>手机扫描二维码上传</p>
            <img :src="qrPic" id="qr-upload">
            <!-- <button id="login-bt" @click="loginClick">上&nbsp&nbsp&nbsp&nbsp传</button> -->
        </div>
        <p class="website">PC端上传网址：www.baidu.com</p>
    </div>
</template>
<script>

import bg from '../assets/login/login_bg.png'
import qr from '../assets/login/qr_code.png'
import Date from './Date'

export default {
  name: 'upload',
  data () {
      return{
        title: '上传',
        uploadBg: bg,
        qrPic: qr,
      }
  },
  components:{
    Date,
  },
}
</script>
<style>
    #upload-photo {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
    } 
    #upload-img {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
    } 
    #upload-photo .upload-title{
        font-family: font757;
        font-size: 5.556vh;
        color: #f1f1f1;
        letter-spacing: 2px;
        position: absolute;
        top: 6.481vh;
        left: 6.25vw;
    }
    .qr-upload-container {
        width: 21.875vw;
        height: 46.296vh;
        position: absolute;
        top: 23.148vh;
        left: 39.0625vw;
    }
    .qr-upload-container p {
        font-family: font757;
        font-size: 3.333vh;
        text-align: center;
        margin: 0 auto;
        color: #f1f1f1;
    }
    #qr-upload {
        width: 21.875vw;
        height: 38.889vh;
        position: absolute;
        left: 0;
        bottom: 0;
    } 
    /* #login-bt {
        text-align: center;
        position: absolute;
        left: 8vw;
        bottom: 0;
        font-size: 4vh;
        background: none;
        color: #f1f1f1;
    } */
    .website {
        font-family: font757;
        color: #f1f1f1;
        font-size: 2.963vh;
        position: absolute;
        right: 6.25vw;
        bottom: 6.481vh;
    }
</style>
