<template>
    <div id="User">
        <h2 class="user-title">
            用户管理
        </h2>
        <date class="time">
        </date>
        <div id="user-manage-container">
            <div id="user-manage">
                <div id="profile-photo"></div>
                <div id="username-logout">
                    <p class="username">hello_world</p>
                    <p id="logout" v-on:click="logout">退出登录</p>
                </div>
            </div>
            <div id="menu-container">
                <ul>
                    <li v-for="(item,index) in menu" :key="item.id">
                        <sub-user :v-on:click="choose" :title="item.title" :url="item.url" :index="item.id"></sub-user>
                    </li>
                </ul>
            </div>
        </div>
    
    <transition name="fade">
        <logout-confirm v-if="sure" v-on:oevent="oevent"></logout-confirm>
    </transition>
    
        <!-- <about></about> -->
    
    </div>
</template>

<script>
    import Date from './Date'
    import router from '../router/index'
    import icon1 from '../assets/user/my_works.png'
    import icon2 from '../assets/user/my_collections.png'
    import icon3 from '../assets/user/about.png'
    import SubUser from './SubUser'
    import LogoutConfirm from './LogoutConfirm'
    import About from './About'
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
                        url: icon1,
                    },
                    {
                        id: 2,
                        title: "我的收藏",
                        url: icon2,
                    },
                    {
                        id: 3,
                        title: "关于我们",
                        url: icon3,
                    },
                ],
                sure: false,
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
            }
            // choose:function () {
            //     switch (item.id){
            //         case 1: location.href = Favorite;break;
            //         case 2: location.href = Works;break;
            //         case 3: about();break;
            //         default: return;
            //     }
            // },
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
        background: url('../assets/user/profile_photo.jpg') no-repeat center center;
    }
    #username-logout {
        width: 18.75vw;
        height: 55.556vh;
        position: absolute;
        margin: 0;
        top: 0;
        left: 12.5vw;
        background: url('../assets/user/bt_bg3.png') no-repeat center center;
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
        font-size: 30px;
        color: #f1f1f1;
    }
    #logout {
        border: none;
        background: none;
        font-family: font757;
        font-size: 30px;
        color: #f1f1f1;
        text-align: center;
        margin: 20px auto;
    }
    #logout:hover {
        cursor: pointer;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
        opacity: 0
    }
</style>
