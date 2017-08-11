<template>
    <div id="User">
        <img :src="bgs[0]">
        <h2 class="user-title">
            用户管理
        </h2>
        <date class="time"></date>
        <div id="user-manage-container">
            <div id="user-manage">
                <img :src="bgs[2]" id="profile-photo">
                <div id="username-logout">
                    <img :src="bgs[1]">
                    <div id="username-container">
                        <p class="username">{{userName}}</p>
                    </div>
                    <div id="logout-container">
                        <p :id="logoutId" @click="logout" @mouseover="showBg" @mouseout="hideBg">退出登录</p>
                    </div>
                </div>
            </div>
            <div id="menu-container">
                <ul>
                    <li v-for="(item,index) in menu" :key="item.id">
                        <sub-user :title="item.title" :icon-url="item.iconUrl" :index="item.id" 
                        v-on:aboutus="aboutus" :user-name="userName"></sub-user>
                    </li>
                </ul>
            </div>
        </div>
    
        <transition name="confirm">
            <logout-confirm v-if="sure" v-on:oevent="oevent"></logout-confirm>
        </transition> 
        <transition name="about">
            <about v-if="isClicked"  v-on:aboutus="aboutus"></about>  
        </transition>
        <h3 id="login-website">PC端登录网站：www.baidu.com</h3>
    </div>
</template>

<script>
    import Date from './Date'
    import router from '../router/index'

    import icon1 from '../assets/user/my_works.png'
    import icon2 from '../assets/user/my_collections.png'
    import icon3 from '../assets/user/about.png'

    import bg from '../assets/user/bg.png'
    import bt_bg3 from '../assets/user/bt_bg3.png'
    import profilePhoto from '../assets/user/profile_photo.jpg'
    import logoutBg from '../assets/user/bt_bg2.png'
    
    import SubUser from './SubUser'
    import LogoutConfirm from './LogoutConfirm'
    import About from './About'

    var user = {
        state: true,
        username: "Hello_world"
    }

    export default {
        name: 'User',
        data() {
            return {
                path: [
                    "favorite",
                    "works"
                ],
                menu: [{
                        id: 1,
                        title: "我的作品",
                        iconUrl: icon1,
                    },
                    {
                        id: 2,
                        title: "我的收藏",
                        iconUrl: icon2,
                    },
                    {
                        id: 3,
                        title: "关于我们",
                        iconUrl: icon3,
                    },
                ],
                bgs:[
                    bg,
                    bt_bg3,
                    profilePhoto,
                    logoutBg,
                ],
                userName: user.username,
                sure: false,
                isClicked: false,
                logoutId: 'logout',
            }
        },
        methods: {
            logout: function() {
                // if (confirm('确认退出登录？')) {
                // // $.ajax({
                // //     url:"",
                // //     dataType:'html',
                // //     success:function(data) {
                // //         location.replace('/login');
                // //     }
                // // });
                // router.replace('/login');
                // } else {
                //     return;
                // }
                this.sure = true;
            },
            oevent: function (data) {
                this.sure = data;
            },
            aboutus: function (data) {
                this.isClicked = data;
            },
            
            showBg: function (){
                // console.log(this.$el.getElementById.logoutId);
                var logout = document.getElementById(this.logoutId);
                logout.style.backgroundImage = "url("+this.bgs[3]+")";
                logout.style.backgroundRepeat = "no-repeat";
                logout.style.backgroundPositionX = "center";
                logout.style.backgroundPositionY = "center";
            },
            hideBg: function (){
                var logout = document.getElementById(this.logoutId);
                logout.style.background = "none";
            }
        },
        components: {
            Date,
            SubUser,
            LogoutConfirm,
            About
        }
    }
</script>

<style>
    @font-face {
        font-family: font757;
        src: url("../assets/font/小米兰亭.ttf");
    }
    
    #User {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
    .user-title {
        font-family: font757;
        font-size: 5.556vh;
        color: #f1f1f1;
        letter-spacing: 2px;
        position: absolute;
        top: 6.481vh;
        left: 6.25vw;
    }
    #user-manage-container {
        width: 100vw;
        height: 55.556vh;
        position: absolute;
        top: 22.222vh;
        left: 0;
    }
    #user-manage {
        width: 31.25vw;
        height: 55.556vh;
        margin: 0;
        position: absolute;
        top: 0;
        left: 6.25vw;
    }
    #profile-photo {
        margin: 0;
        width: 12.5vw;
        height: 55.556vh;
        position: absolute;
        top: 0;
        left: 0;
        /* background: url('../assets/user/profile_photo.jpg') no-repeat center center; */
    }
    #username-logout {
        width: 18.75vw;
        height: 55.556vh;
        position: absolute;
        margin: 0;
        top: 0;
        left: 12.5vw;
    }
    #username-logout img {
        width: 18.75vw;
        height: 55.556vh;
        position: absolute;
        top: 0;
        left: 0;
    }
    #username-container {
        width: 18.75vw;
        height: 36.889vh;
        position: absolute;
        top: 0;
        left: 0;
    }
    #logout-container {
        width: 18.75vw;
        height: 18.667vh;
        position: absolute;
        top: 36.481vh;
        left: 0;
    }
    #menu-container {
        margin: 0;
        width: 59.375vw;
        height: 55.556vh;
        position: absolute;
        top: 0;
        left: 40.625vw;
    }
    .username {
        text-align: center;
        margin: 15vh auto 18vh;
        font-family: font757;
        font-size: 3.704vh;
        color: #f1f1f1;
    }
    #logout {
        width: 13.542vw;
        height: 9.259vh;
        border: none;
        background: none;
        font-family: font757;
        font-size: 4.444vh;
        color: #f1f1f1;
        text-align: center;
        margin: 0 auto;
        padding-top: 2vh;
    }
    #logout:hover {
        cursor: pointer;
    }
     .confirm-enter-active, .confirm-leave-active {
        transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    .confirm-enter, .confirm-leave-to {
        transform: translateY(-55vh);
        opacity: 0;
    }
    .about-enter-active, .about-leave-active {
        transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    .about-enter, .about-leave-to {
        transform: translateX(-60vw);
        opacity: 0
    }   
    #login-website {
        font-family: font757;
        color: #f1f1f1;
        font-size: 2.963vh;
        position: absolute;
        right: 6.25vw;
        bottom: 6.481vh;
    }
    /* #User about {
        transition: all 0.8s ease;
    } */
</style>
