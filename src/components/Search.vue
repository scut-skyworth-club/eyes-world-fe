<template>
<!-- 说明：当search获得焦点时方可搜索
      当searchText获得焦点时方可回车打印所选中的省份 -->
  <div class="box" :flag="changeFlag" >
      <div class="input" @keydown.down.prevent="select(1)" @keydown.up.prevent="select(0)">
        <input id="searchText" type="text" placeholder="搜索内容" @keydown.enter="nextPage">
        <input id="search" type="submit" value="搜索" @keydown.enter="change" >
        
         <!-- <input id="goUp" type="button" value="往上" @click="select(0)">
        <input id="goDown" type="button" value="往下" @click="select(1)">  -->
      </div>
      <input id="mmp" type="submit">
        <ul id="contentList" >
          <li v-for="(item,index) in provinceList" :id="'id'+index" :key="index">
            {{item.province}}
             <span style="display:none">{{item.initial}}</span> 
          </li>
        </ul>
  </div>
</template>

<script>
import area from '../assets/search/search.js'
import $ from 'jquery'

export default {
  name:'Search',
  data(){
    return{
      provinceList:area[0],
      currentLine:-1,
      tempFlag:false,
      provinceName:"",
    }
  },

  props:["flag"],

  mounted:function(){
      // let self = this;
      // document.onkeydown = function(event){
      //   switch(event.which){
      //     case 37:
      //     //left
      //       break;
      //     case 38:
      //     //up
      //       break;
      //     case 39:
      //     //right
      //       break;
      //     case 40:
      //     //down
      //       break;
      //     case 13:
      //     //center
      //       if(self.currentLine != -1){
      //         self.change();
      //       }
      //       break;
      //     case 82:
      //       break;
      //     case 4:
      //       break;
      //   }
      // }
  },

  methods:{

    change:function(){
      $("#contentList li").eq(this.currentLine).removeClass("hightLight");
      this.currentLine = -1;
       var searchText = $.trim($("#searchText").val().toString()); //去掉两头的空格      
       if (searchText == '') {
           return false;
       }
      //  var parent = $("ul");
      //  $('li:contains(' + searchText + ')').prependTo(parent);
      var ul_list = document.getElementById("contentList");
      var li_list = document.getElementById("contentList").getElementsByTagName("li");
      var span_list = document.getElementById("contentList").getElementsByTagName("span");
      
      var temp1 = [];
      var temp2 = [];
      for (var i = 0; i < li_list.length; i++) {
        if((li_list[i].innerText).search(searchText)!=-1 || (span_list[i].innerText).search(searchText)!=-1){
          temp1.push(li_list[i]);
        }
        else{
          temp2.push(li_list[i]);
        }
      }
      for (var i = 0; i < temp2.length; i++) {
          temp1.push(temp2[i]);
      }
      for (var i = 0; i < temp1.length; i++) {
        ul_list.appendChild(temp1[i]);
        
      }
    },

    select:function (num) {
      if (num==1) {
        this.currentLine++;
      }else if(num==0){
        this.currentLine--;
      }
      var temp = document.getElementById("contentList").getElementsByTagName("li");
      for (var i = 0; i < temp.length; i++) {
          $("#contentList li").eq(i).removeClass("hightLight");
      }
      if (this.currentLine < 0)
          this.currentLine = temp.length - 1;
      if (this.currentLine >= temp.length)
          this.currentLine = 0;
      $("#contentList li").eq(this.currentLine).addClass("hightLight");
      var id = $("#contentList li").eq(this.currentLine).attr("id");
      this.provinceName = document.getElementById(id).innerText;
      //alert(this.provinceName);
      //$(currentId).click();
      //document.getElementById("mmp").focus();
    },

    nextPage:function () {
      // var name = event.currentTarget.innerText;
      // var id = event.currentTarget.id;
      console.log(this.provinceName);

      // fetch(url, {
      //     mode:'cors',
      //     method:'POST',
      //     headers:{
      //         'Access-Control-Allow-Credentials': true,
      //         'Content-Type':'application/json',
      //     },
      //     credentials:"include",
      // }).then(function(response){
      //     return response.json();
      // }).then(function(data){
      //     console.log(data);
      // }).catch(function(error){
      //     console.log("fetch错误: " + error);
      // })
    
    },
  },
  computed:{
    changeFlag:function(){
      let self = this;
      if(self.flag == -1){
        document.getElementById("search").focus();
        $("#search").addClass("searchHeightLight");
        self.tempFlag = true;
        //document.getElementById("search").style.fontSize = "18px";
      }else if(self.flag == -2){
        document.getElementById("searchText").focus();
        $("#search").removeClass("searchHeightLight");
        self.tempFlag = false;
        // document.getElementById(searchText).style.borderBottomColor = "red";
      }
      if(self.tempFlag && self.flag >=0){
        document.getElementById("mmp").focus();
        $("#search").removeClass("searchHeightLight");
      }
    },
  }
}
</script>

<style>
   body{
    src: url("../assets/font/小米兰亭.ttf");
    font-family: "小米兰亭";
  } 

  .box{
    width: 150px;
     /* margin-left: 100px;  */
    background:url('../assets/search/pic1.png'); 
  }

    #mmp{
    margin-top: 6px;
    background: red;
    width: 150px;
    height: 1px;
  }  
  
  #searchText{
    width: 100px;
    height: 30px;
  }

  #search{
    width: 45px;
    height: 30px;
  }

  /* #goUp{
    width: 40px;
    height: 30px;
  }

  #goDown{
    width: 40px;
    height: 30px;
  } */


  #contentList{
    font-size: 20pt;
    text-align: center;
    cursor: pointer;
    
  }
  #contentList li{
     list-style-type: none;
     line-height: 40px; 
     color: #f1f1f1
     
  } 
  .hightLight {
    background: #4169E1;
    font-weight: bolder;
  }

  .searchHeightLight{
    font-size: 15px; 
    color: green; 
  }

</style>


