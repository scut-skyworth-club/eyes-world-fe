<template>
    <div id="tvlogin">
        <img :src="loginBg"> 
        <p class="login-title">{{title}}</p>
        <date class="time"></date>
        <div>
            <p>手机扫描二维码登录</p>
            <img :src="qrPic">
            <button @click="loginClick">登&nbsp&nbsp&nbsp&nbsp录</button>
        </div>
        <p class="website">PC端登录网址：www.baidu.com</p>
    </div>
</template>

<script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js"></script>

<script>

var data = {
  state:1,
  username:'eyesWorld',
}

import bg from '../assets/login/login_bg.png'
import qr from '../assets/login/qr_code.png'
import Date from './Date'

// var marker;
// $(document).ready(function(){
// 	function acallBack(data,status){
// 		$("#qr").attr("src",data.qrPath);
// 		marker=data.marker;
// 	}
// 	$.get("/login/tv/getqr",acallBack);
	
// });

export default {
  name: 'tvlogin',
  data () {
    return {
      title: '登录/注册',
      time:'星期四 | 10:00',
      website:'PC端登录网址：www.baidu.com',
      loginBg: bg,
      qrPic: qr,
    }
  },
  components:{
    Date,
  },
  methods:{
    //   login:function () {
    //       //跳转页面
    //        $(document).ready(function () {
    //             if (data.state) {
    //                 window.location.href = "/success";
    //                 console.log(data.username);
    //             } else {
    //                 alert("error!");
    //             }
    //         });
    //   }
    loginClick: function (){
        $.post("/login/tv/login","marker="+marker,bcallBack);
        function bcallBack(data,status){

            location.href="/tvhome.html";
        }
    }
  }
}
</script>

<style>
    #tvlogin {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
    } 
    #tvlogin>img {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
    } 
    #tvlogin>.login-title{
        font-family: "小米兰亭";
        font-size: 5.556vh;
        color: #f1f1f1;
        letter-spacing: 2px;
        position: absolute;
        top: 6.481vh;
        left: 6.25vw;
    }
    #tvlogin>div {
        width: 21.875vw;
        height: 53.703vh;
        position: absolute;
        top: 23.148vh;
        left: 39.0625vw;
    }
    #tvlogin>div>p {
        font-family: "小米兰亭";
        font-size: 3.333vh;
        text-align: center;
        margin: 0 auto;
        color: #f1f1f1;
    }
    #tvlogin>div>img {
        width: 21.875vw;
        height: 38.889vh;
        position: absolute;
        left: 0;
        bottom: 7.407vh;
    } 
    #tvlogin>div>button {
        text-align: center;
        position: absolute;
        left: 8vw;
        bottom: 0;
        font-size: 4vh;
        background: none;
        color: #f1f1f1;
    }
    #tvlogin>.website {
        font-family: "小米兰亭";
        color: #f1f1f1;
        font-size: 2.963vh;
        position: absolute;
        right: 6.25vw;
        bottom: 6.481vh;
    }
</style>