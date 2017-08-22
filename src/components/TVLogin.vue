<template>
    <div id="tvlogin">
        <img :src="loginBg"> 
        <p class="login-title">{{title}}</p>
        <date class="time"></date>
        <div class="qr-container">
            <p>手机扫描二维码登录</p>
            <img :src="pic" id="qr">
            <button @click="loginClick">登&nbsp&nbsp&nbsp&nbsp录</button>
        </div>
        <a class="website" :href="link" target="_blank">PC端登录网址：{{link}}</a>
        <span id="marker"></span>
    </div>
</template>

<script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js"></script>

<script>

var data = {
  state:1,
  username:'eyesWorld',
}

import bg from '../assets/login/login_bg.png'
import Date from './Date'
import router from '../router/index'

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
        loginBg: bg,
        server: 'http://39.108.149.106/',
        pic: '',
        marker: '',
        link: ''
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
    aCallback: function() {
        var _this = this;
        fetch(_this.server + 'login/tv/getqr', {
            mode: 'cors',
            method: 'GET',
            headers: {
                'Access-Control-Allow-Credentials': true
            },
            credentials: "include",
        }).then(function(response) {
            return response.json();
        }).then(function(getres) {
            // 得到数据 getres <----------------------------------- important! --------------------------------->
            _this.pic = _this.server + getres.qrPath;
            _this.marker = getres.marker;
            _this.link = _this.server + _this.link + 'login.html?marker=' + _this.marker;
        });
    },
    loginClick: function (){
        fetch(this.server + 'login/tv/login', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Access-Control-Allow-Credentials': true,
                'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
            },
            credentials: "include",
            body: 'marker=' + this.marker
        }).then(function(response) {
            // if (response.headers.get('Content-Type')==='text/html') {
            //     console.log('登录失败');
            // }else {
            //     router.replace({name:'User'});
            // }
            console.log(response.headers.get('Content-Type'));
        });
        // .then(function(data){
        //     if (data.state) {
        //         router.replace({name:'User',params:{userName:data.username}});
        //     }
        // });
    },
  },
  created() {
    this.aCallback();
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
    #tvlogin>.qr-container {
        width: 21.875vw;
        height: 53.703vh;
        position: absolute;
        top: 23.148vh;
        left: 39.0625vw;
    }
    #tvlogin>.qr-container>p {
        font-family: "小米兰亭";
        font-size: 3.333vh;
        text-align: center;
        margin: 0 auto;
        color: #f1f1f1;
    }
    #tvlogin>.qr-container>img {
        width: 21.875vw;
        height: 38.889vh;
        position: absolute;
        left: 0;
        bottom: 7.407vh;
    } 
    #tvlogin>.qr-container>button {
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