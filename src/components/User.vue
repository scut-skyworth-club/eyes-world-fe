<template>
    <div id="User">
        <img :src="bgs[0]" id="user-bg">
        <p class="title">用户管理</p>
        <date class="time"></date>
        <div id="user-logout">
            <div class="profile-photo"></div>
            <div class="container">
                <img :src="bgs[1]">
                <div id="username-container">
                    <p>{{userName}}</p>
                </div>
                <div id="logout-container">
                    <p v-if="index!=1">退出登录</p>
                    <p v-else class="logout-click">退出登录</p>
                </div>
            </div>
        </div>
        <div id="my-works" class="menu-container" :style="{left:'40.625vw'}">
            <img :src="bgs[1]" class="box-img">
            <div class="icon-container">
                <div>
                    <img :src="icons[0]"/>
                </div>
            </div>
            <div class="item-title-container">
                <p>我的作品</p>
            </div>
        </div>
        <div id="my-favorite" class="menu-container" :style="{left:'59.375vw'}">
            <img :src="bgs[1]" class="box-img">
            <div class="icon-container">
                <div>
                    <img :src="icons[1]"/>
                </div>
            </div>
            <div class="item-title-container">
                <p>我的收藏</p>
            </div>
        </div>
        <div id="about-us" class="menu-container" :style="{left:'78.125vw'}">
            <img :src="bgs[1]" class="box-img">
            <div class="icon-container">
                <div>
                    <img :src="icons[2]"/>
                </div>
            </div>
            <div class="item-title-container">
                <p>关于我们</p>
            </div>
        </div>
        <transition name="confirm">
            <my-confirm v-if="sure" :is-sure="isSure" :confirm-text="confirmText"></my-confirm>
        </transition> 
        <transition name="about">
            <about v-if="aboutAlert" :about-return="aboutReturn"></about>  
        </transition>
        <p id="login-website">PC端登录网站：http://39.108.149.106/mainpage.html</p>
        {{setKey}}
    </div>
</template>

<script>
    var user = {
        state: true,
        username: "Hello_World"
    }

    import router from '../router/index'
    import Date from './Date'
    import MyConfirm from './MyConfirm'
    import About from './About'

    import bg from '../assets/user/bg.png'
    import bt_bg3 from '../assets/user/bt_bg3.png'
    import icon1 from '../assets/user/my_works.png'
    import icon2 from '../assets/user/my_collections.png'
    import icon3 from '../assets/user/about.png'

    export default {
        data() {
            return {
                msg: "重写User页",
                bgs: [
                    bg,
                    bt_bg3,
                ],
                icons: [
                    icon1,
                    icon2,
                    icon3
                ],
                userName: user.username,
                index: 0,   //index = 0,1,2,3,4 index=0对应没有按下键时，index=1对应是移到用户框上，
                            //index=2对应是移到作品框,index=3对应移到收藏框,index=4对应移到关于框
                focus: 1,   //focus = 1,2,3 =1对应在整个主页面，=2对应弹出confirm，=3对应弹出关于
                sure: false,    //sure=true就弹出退出登录弹窗，sure=false弹窗消失
                isSure: true,   //isSure控制是否真的退出
                confirmText: '确定要退出吗？', //退出弹窗信息
                aboutAlert: false,   //isClicked控制关于我们的弹出框是否收回
                aboutReturn: false, //aboutReturn控制关于我们的返回按钮聚焦
            }
        },
        mounted: function() {
            var self = this;
            fetch('http://39.108.149.106/api/user', {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Credentials': true,
                    'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
                },
                credentials: "include"
            }).then(function(response) {
                if(response.headers.get('Content-Type')==='text/html'){
                    console.log('登录失败');
                    router.replace({name:'TVLogin'});
                }else {
                    response.json().then(function(data){
                        self.userName = data.username;
                    });
                    console.log('登录成功');
                }
            });
        },
        // created: function (){
        //     // if (true) {
        //     //     router.replace({name:'TVLogin'});
        //     // }
        // },
        components: {
            Date,
            MyConfirm,
            About,
        },
        computed: {
            setKey:function(){
                let self = this;
                document.onkeydown = function(event){
                    if(self.index===0 && self.focus===1){
                        self.index=1;
                    }else{
                        switch(event.which){
                            case 37:
                            //left
                                self.leftMove();
                                break;

                            case 38:
                            //up
                                break;

                            case 39:
                            //right
                                self.rightMove();
                                break;

                            case 40:
                            //down
                                break;

                            case 13:
                            //center
                                self.enterItem();
                                break;

                            case 82:
                            
                                break;
                            
                            case 4:
                            
                                break;
                        }
                    }
                }
            },
        },
        methods: {
            rightMove: function() {
                if (this.focus===1) { //聚焦在主界面上时
                    if (this.index!==4) { //允许向右移时
                        this.index++;
                    }
                    this.itemFocus();
                }
                if (this.focus===2) { //聚焦在logoutConfirm上时
                    if (this.isSure) { //如果聚焦在“是”按钮上时，按右键聚焦到“否”键上
                        this.isSure = false;
                    }
                }
            },
            leftMove: function() {
                if (this.focus===1) { //聚焦在主界面上时
                    if (this.index!==1) { //允许向左移时
                        this.index--;
                    }
                    this.itemFocus();
                }
                if (this.focus===2) { //聚焦在logoutConfirm上时
                    if (!this.isSure) { //如果聚焦在“否”按钮上时，按右键聚焦到“是”键上
                        this.isSure = true;
                    }
                }
            },
            enterItem: function() {
                if (this.focus===1) { //在主界面上时，enter键对整体的控制
                    switch (this.index) {

                        case 1:
                            this.sure = true;
                            this.focus = 2;
                            this.index = 0;
                            break;

                        case 2:
                            router.push({name:'Works',params:{userName:this.userName}});
                            this.index = 0;
                            break;

                        case 3:
                            router.push({name:'Favorite',params:{userId:'145'}});
                            this.index = 0;
                            break;

                        case 4:
                            this.aboutAlert = true;
                            this.focus = 3;
                            this.index = 0;
                            this.itemFocus();
                            break;

                        default:
                            break;
                    }
                }else if (this.focus===2) { //在logoutConfirm上时，enter键对logout的控制
                    if (this.isSure) {
                        var self = this;
                        fetch('http://39.108.149.106/login/tv/logout', {
                            method: 'GET',
                            mode: 'cors',
                            headers: {
                                'Access-Control-Allow-Credentials': true,
                                'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
                            },
                            credentials: "include"

                        }).then(function(response) {
                            console.log(response);
                            // if(response.headers.get('Content-Type')==='text/html'){
                            //     console.log('登录失败');
                            //     router.replace({name:'TVLogin'});
                            // }else {
                            //     response.json().then(function(data){
                            //         self.userName = data.username;
                            //     });
                            //     console.log('登录成功');
                            // }
                        });
                        router.push({name:'TVLogin'});
                    }else{
                        this.sure = false;
                        this.focus = 1;
                        this.isSure = true;
                    }
                }else{ //在aboutAlert上时，enter键的控制
                    if (!this.aboutReturn) {
                        this.aboutReturn = true;
                    }else{
                        this.aboutAlert = false;
                        this.focus = 1;
                        this.aboutReturn = false;
                    }
                }
            },
            itemFocus: function() {
                //聚焦放大函数
                let works = document.getElementById('my-works');
                let favorite = document.getElementById('my-favorite');
                let about = document.getElementById('about-us');
                let menu = [works,favorite,about];
                for(let i=0;i<menu.length;i++){
                    let size = this.index-2==i?1.2:1;//移动到对应的容器上时，size=1.2,否则,size=1
                    let showShadow = this.index-2==i?'0px 10px 50px #444444':'none';//在相应的容器上时有阴影
                    menu[i].style.transform = 'scale('+size+')';
                    menu[i].style.boxShadow = showShadow;
                }
            },
        }
    }
</script>

<style>
    #User {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        /* background: green; */
    }
    #User>img {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
    }
    #User>.title {
        font-family: '小米兰亭';
        font-size: 5.556vh;
        color: #f1f1f1;
        letter-spacing: 4px;
        position: absolute;
        top: 6.481vh;
        left: 6.25vw;
    }
    #user-logout {
        width: 31.25vw;
        height: 55.556vh;
        margin: 0;
        position: relative;
        top: 22.222vh;
        left: 6.25vw;
    }
    #user-logout>.profile-photo {
        margin: 0;
        padding: 0;
        width: 12.5vw;
        height: 55.556vh;
        position: absolute;
        top: 0;
        left: 0;
        background: url("../assets/user/profile_photo.jpg") no-repeat center center;
    }
    #user-logout .logout-click {
        background: url("../assets/user/bt_bg2.png") no-repeat center center;
    }
    #user-logout>.container {
        width: 18.75vw;
        height: 55.556vh;
        position: absolute;
        margin: 0;
        top: 0;
        left: 12.5vw;
    }
    #user-logout>div>img {
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
    #username-container>p {
        text-align: center;
        margin: 15vh auto 18vh;
        font-family: "小米兰亭";
        font-size: 3.704vh;
        color: #f1f1f1;
        letter-spacing: 2px;
    }
    #logout-container {
        width: 18.75vw;
        height: 18.667vh;
        position: absolute;
        top: 36.481vh;
        left: 0;
    }
    #logout-container>p{
        width: 13.542vw;
        height: 9.259vh;
        border: none;
        background: none;
        font-family: "小米兰亭";
        font-size: 4.444vh;
        color: #f1f1f1;
        text-align: center;
        margin: 0 auto;
        padding-top: 2vh;
        letter-spacing: 4px;        
    }
    #User>.menu-container {
        width: 15.625vw;
        height: 55.556vh;
        position: absolute;
        top: 22.222vh; 
        transition: all 0.7s ease;
    }
    #User>.menu-container>img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    #User>.menu-container>.icon-container {
        width: 100%;
        height: 70%; 
        position: absolute;
        top: 0;
        left: 0;
    }
    #User>.menu-container>.icon-container>div{
        width: 40%;
        text-align: center;
        margin: 12vh auto;
    }
    #User>.menu-container>.icon-container>div>img {
        width: 100%;
    }
    #User>.menu-container>.item-title-container {
        width: 100%;
        height: 30%;
        position: absolute;
        top: 70%;
        left: 0;
    }
    #User>.menu-container>.item-title-container>p {
        border: none;
        background: none;
        font-family: "小米兰亭";
        font-size: 4.444vh;
        color: #f1f1f1;
        text-align: center;
        margin: 0 auto;
        letter-spacing: 4px;        
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
        font-family: "小米兰亭";
        color: #f1f1f1;
        font-size: 2.963vh;
        position: absolute;
        right: 6.25vw;
        bottom: 6.481vh;
    }
</style>

