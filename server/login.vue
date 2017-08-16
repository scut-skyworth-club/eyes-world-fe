<template>
  <div id="login">
      <form action="http://192.168.0.106:8080/p_login" method="POST">
	用户名<input type="text" name="username"/><br/>
	密码<input type="password" name="password"/><br/>
	记住我<input type="hidden" name="remember-me" value="true" /><br/>
	<input type="submit" value="登录"/>
	</form>
  </div>

</template>

<script type="text/javascript">
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var reg_rewrite = new RegExp("(^|/)" + name + "/([^/]*)(/|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    var q = window.location.pathname.substr(1).match(reg_rewrite);
    if(r != null){
        return unescape(r[2]);
    }else if(q != null){
        return unescape(q[2]);
    }else{
        return null;
    }
}

</script>
<style>
    #login {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>
