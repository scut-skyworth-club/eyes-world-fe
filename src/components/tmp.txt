<template>
  <div id="User">
    <h2 class="user-title">
        用户管理
    </h2>
    <date class="time">
    </date>
    <div>
        <div id="user-manage">
            <span class="profile-photo"></span>
            <div>
                <p class="username">hello_world</p>
                <p id="logout" v-on:click="logout">退出登录</p>
            </div> 
        </div>
        <div id="works" v-on:click="toMyWorks">
            <div>
                <img src="../assets/user/my_works.png" alt="2">
            </div>
            <p id="my-works">我的作品</p>
        </div>
        <div id="collections" v-on:click="toMyCcollections">
            <div>
                <img src="../assets/user/my_collections.png" alt="3">
            </div>
            <p id="my-collections">我的收藏</p>
        </div>
        <div id="about-us" v-on:click="about">
            <div>
                <img src="../assets/user/about.png" alt="4">
            </div>
            <p id="about">关于我们</p>
        </div>
    </div>
  </div>
</template>

<script>
    import Date from './Date'
    import router from '../router/index'
    export default {
        name:'User',
        data(){
            return {
               path:[
                   "favorite",
                   "works"
               ]
            }
        },
        methods:{
           about:function () {
                alert("hello....");
            },
            logout: function () {
                if (confirm('确认退出登录？')) {
                // $.ajax({
                //     url:"",
                //     dataType:'html',
                //     success:function(data) {
                //         location.replace('/login');
                //     }
                // });
                    location.replace('/login');
                } else {
                    return;
                }
            },
            toMyWorks:function () {
                // location.href = '/#/success/works';
                router.push(this.path[1]);
            },
            toMyCollections:function () {
                // location.href = '/#/success/collections';
                router.push(this.path[0]);
            },
            select:function () {

            }
        },
        components:{
            Date
        }
    }
</script>

<style>
     @font-face {
        font-family: font757;
        src: url("../assets/font/小米兰亭.ttf");
    }
    body {
        width: 100vw;
        height: 100vh;
        background: url('../assets/user/bg.png') no-repeat center center;
    }
    .user-title {
        font-family: font757;  
        font-size: 40px;
        color: #f1f1f1;
        letter-spacing: 2px;
        position: absolute;
        top: 6.481vh;
        left: 6.25vw;
    }
    #user-manage {
        width: 31.25vw;
        height: 55.56vh;
        margin: 0;
        position: absolute;
        top: 22.22vh;
        left:6.25vw;
    }
    #user-manage .profile-photo{
        margin: 0;
        width: 12.5vw;
        height: 55.56vh;
        float: left;
        /* background: url('../assets/user/profile_photo.jpg') no-repeat center center; */
        background: greenyellow
    }
    #user-manage div {
        margin: 0;
        float: right;
        width: 18.75vw;
        height: 55.56vh;
        background: url('../assets/user/bt_bg2.png');
        z-index: 2;
    }

    .username {
        text-align: center;
        margin: 180px auto;
        font-family: font757;
        font-size: 30px;
        color: #f1f1f1;
    }
    #logout {
        border:none;
        background: none;
        font-family: font757;
        font-size: 30px;
        color: #f1f1f1;
        text-align: center;
        margin: 20px auto;
    }
    #works {
        width: 15.625vw;
        height: 55.56vh;
        margin: 0;
        position: absolute;
        top: 22.22vh;
        left: 40.625vw;
        background: url('../assets/user/bt_bg2.png');
        transition: all 0.7s;
    }
    #works:hover {
        width: 18.75vw;
        height: 66.67vh;
        position: absolute;
        top:16.67vh;
        left: 39.06vw;
    }
    #works div{
        width:9.48vw;
        height: 18.89vh;
        text-align: center;
        margin: 93px auto;
        transition: 0.7s;
    }
    #works:hover div{
        width:11.376vw;
        height: 22.668vh;

    }
    #works div img {
        width: 100%;
    }
    #my-works {
        border:none;
        background: none;
        font-family: font757;
        font-size: 30px;
        color: #f1f1f1;
        text-align: center;
        margin: 20px auto;
        transition: 0.7s;
    }
    #works:hover p {
        font-size: 36px;
    }
    #collections {
        width: 15.625vw;
        height: 55.56vh;
        margin: 0;
        position: absolute;
        top: 22.22vh;
        left: 59.375vw;
        background: url('../assets/user/bt_bg2.png');
        transition: all 0.7s;
    }
    #collections:hover {
       width: 18.75vw;
        height: 66.67vh;
        position: absolute;
        top: 16.67vh;
        left: 57.813vw;
    }
    #collections div{
        width:9.271vw;
        height: 16.30vh;
        text-align: center;
        margin: 107px auto;
        transition: 0.7s;
    }    
    #collections:hover div{
        width: 11.125vw;
        height: 19.56vh;
    }  
    #collections div img {
        width: 100%;
        cursor: pointer;
        transition: all 1s;
    }
    #my-collections {
        border:none;
        background: none;
        font-family: font757;
        font-size: 30px;
        color: #f1f1f1;
        text-align: center;
        margin: 20px auto;
        transition: 0.7s;
    }
    #collections:hover p {
        font-size: 36px;
    }


    #about-us {
        width: 15.625vw;
        height: 55.56vh;
        margin: 0;
        position: absolute;
        top: 22.22vh;
        left: 78.125vw;
        background: url('../assets/user/bt_bg2.png');
        transition: all 0.7s;
    }
    #about-us:hover {
        width: 18.75vw;
        height: 66.67vh;
        position: absolute;
        top: 16.67vh;
        left: 76.563vw;
    }
    #about-us div{
        width: 8.23vw;
        height: 15.185vh;
        text-align: center;
        margin: 100px auto;
        transition: 0.7s;
    }
    #about-us div{
        width: 9.876vw;
        height: 18.222vh;
    }
    #about-us div img {
        width: 100%;
    }
    #about { 
       text-align: center;
        margin: 100px auto;
        font-family: font757;
        font-size: 30px;
        color: #f1f1f1;
        text-align: center;
        margin: 20px auto;
        transition: 0.7s;
    }
    #about-us:hover p {
        font-size:36px;
    }
</style>
