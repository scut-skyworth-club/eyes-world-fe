<template>
  <div id="tv-login">
    <h2>{{title}}</h2>
    <div class="scan-qr-code">
        <h4>手机扫描二维码登录</h4>
        <div><img id="qr"></div>
        <a href="/#/success">确认登录</a>
    </div>
  </div>
</template>

<script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js"></script>
<script>
var marker;
$(document).ready(function(){
	function acallBack(data,status){
		$("#qr").attr("src",data.qrPath);
		marker=data.marker;
	}
	$.get("/login/tv/getqr",acallBack);
	
});



function bclick(){
	//alert(marker);
	$.post("/login/tv/login","marker="+marker,bcallBack);
	function bcallBack(data,status){

        location.href="/tvhome.html";
	}

}
export default {
    name:'tvlogin',
    data () {
        return {
            title: '登录/注册',
        }
    }
  
}
</script>
<style>
    #tv-login h2{
        margin-top: 35px;
        margin-left: 60px;
        font-size: 30px;
        width: 180px;
        letter-spacing: 2px;
        float: left;
    }
    #tv-login h5{
        float: right;
        font-size: 16px;
        margin-top: 35px;
        margin-right: 60px;
        width: 180px;
        letter-spacing: 2px;
    }
    .scan-qr-code {
        width: 280px;
        float: left;
        margin-top: 125px;
        margin-left: 200px;
    }
    
    #tv-login a{
        text-decoration: none;
        font-size: 20px;
    } 
</style>

