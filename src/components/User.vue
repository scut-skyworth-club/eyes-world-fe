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
         <ul>
            <li v-for="(item,index) in menu" :key="item.id">
                <sub-user :v-on:click="choose"
                :title="item.title" :url="item.url"
                :left="item.left" :leftchange="item.leftchange"
                :itemid="item.id"></sub-user>
            </li>
        </ul> 
        <!-- <div v-for="(item,index) in menu" :key="item.id">
            <sub-user :title="item.title"></sub-user>
        </div> -->
    </div>
  </div>
</template>

<script>
    import Date from './Date'
    import router from '../router/index'

    import icon1 from '../assets/user/my_works.png'
    import icon2 from '../assets/user/my_collections.png'
    import icon3 from '../assets/user/about.png'

    import SubUser from './SubUser'
    export default {
        name:'User',
        data(){
            return {
               path:[
                   "favorite",
                   "works"
               ],
               menu:[
                   {
                       id:1,
                       title:"我的作品",
                    //    url: "/static/img/my_works.171a0ab.png",
                       url: icon1,
                       left:40.625,
                       leftchange:39.06
                   },
                   {
                       id:2,
                       title:"我的收藏",
                    //    url: "/static/img/my_collections.f8d6c1f.png",
                       url: icon2,
                       left:59.375,
                       leftchange:57.813
                   },
                   {
                       id:3,
                       title:"关于我们",
                    //    url: "/static/img/about.89fbc56.png",
                       url: icon3,
                       left:78.125,
                       leftchange:76.563
                   },
               ]
            }
        },
        methods:{
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
            choose:function () {
                switch (item.id){
                    case 1: location.href = Favorite;break;
                    case 2: location.href = Works;break;
                    case 3: about();break;
                    default: return;
                }
            }
            // toMyWorks:function () {
            //     // location.href = '/#/success/works';
            //     router.push(this.path[1]);
            // },
            // toMyCollections:function () {
            //     // location.href = '/#/success/collections';
            //     router.push(this.path[0]);
            // },
            // select:function () {

            // }
        },
        components:{
            Date,
            SubUser
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
    
</style>
