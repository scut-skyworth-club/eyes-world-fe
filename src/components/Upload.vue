<template>
  <div id="upload-photo">
    <img :src="uploadBg" id="upload-img"> 
    <p class="upload-title">{{title}}</p>
    <date class="time"></date>
    <div class="qr-upload-container">
        <p>手机扫描二维码上传</p>
        <img :src="qrPic" id="qr-upload">
        <button id="upload-bt" :style="{border:(btClick?'1px solid yellow':'none')}">上&nbsp&nbsp&nbsp&nbsp传</button> 
    </div>
    <a class="website" :href="link" target="_blank">PC端登录网址：{{link}}</a>
    <span id="marker"></span>
    {{setKey}}
  </div>
</template>
<script>

    import bg from '../assets/login/login_bg.png'
    import router from '../router/index'
    import Date from './Date'

    export default {
        name: 'upload',
        data () {
        return{
            title: '上传',
            uploadBg: bg,
            server: 'http://39.108.149.106/',
            qrPic: '',
            marker: '',
            link: '',
            btClick: false,
        }
        },
        components:{
        Date,
        },
        computed: {
            setKey:function(){
                let self = this;
                document.onkeydown = function(event){
                    switch(event.which){
                        case 37:
                        //left
                        
                        break;
                        case 38:
                        //up
                        break;
                        case 39:
                        //right
                        
                        break;
                        case 40:
                        //down
                    
                        break;
                        case 13:
                        //center
                        self.btClick = true;
                        self.uploadClick();
                        break;
                        case 82:
                        break;
                        case 4:
                        break;
                    }
                }
            },
        },
        methods: {
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
                    _this.qrPic = _this.server + getres.qrPath;
                    _this.marker = getres.marker;
                    _this.link = _this.server + _this.link + 'login.html?marker=' + _this.marker;
                    _this.isComplete = true;
                });
            },
            uploadClick: function (){
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
                    router.push({name:'Works'});
            
                    // if (response.headers.get('Content-Type')==='text/html') {
                    //     // router.replace({name:'User'});
                    //     router.push({name:'User'});
                    // }else {
                    //     alert('登录失败');
                    //     console.log('登录失败');
                    // }
                    // console.log(response.headers.get('Content-Type'));
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
    #upload-photo>.upload-title{
        font-family: "小米兰亭";
        font-size: 5.556vh;
        color: #f1f1f1;
        letter-spacing: 2px;
        position: absolute;
        top: 6.481vh;
        left: 6.25vw;
    }
     #upload-photo>.qr-upload-container {
        width: 21.875vw;
        height: 53.703vh;
        position: absolute;
        top: 23.148vh;
        left: 39.0625vw;
    } 
    #upload-photo>.qr-upload-container p {
        font-family: "小米兰亭";
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
        bottom: 7.407vh;
    } 
     #upload-bt {
        text-align: center;
        position: absolute;
        left: 8vw;
        bottom: 0;
        font-size: 4vh;
        background: none;
        color: #f1f1f1;
    } 
    .website {
        font-family: font757;
        color: #f1f1f1;
        font-size: 2.963vh;
        position: absolute;
        right: 6.25vw;
        bottom: 6.481vh;
    }
</style>
