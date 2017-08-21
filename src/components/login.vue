<template>
    <div id="login">
        <img id="qr" :src="pic"></img>  
        <br/>
        <button id="btn" @click="bclick">登录</button>
        <br/>
        <a id="h" :href="link" target="_blank">{{link}}</a>
        <span id="marker"></span>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'login',
        data() {
            return {
                server: 'http://39.108.149.106/',
                pic: '',
                marker: '',
                link: ''
            }
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
                    _this.pic = _this.server + getres.qrPath;
                    _this.marker = getres.marker;
                    _this.link = _this.server + _this.link + 'login.html?marker=' + _this.marker;
                });
            },
            bclick: function() {
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
                    return response.text();
                })
                // .then(function(text) {
                //     if(text) {
                        
                //         // success
                //         //router.push()
                //     } else {

                //         // fail

                //     }
                // })
            }
        },
        created() {
            this.aCallback();
        }
    }
</script>
<style>
    #login {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }
</style>
