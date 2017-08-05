<template>
  <div class="box">
      <div class="input" @keydown.down.prevent="select(1)" @keydown.up.prevent="select(0)">
        <input v-model="sText" id="searchText" type="text" placeholder="搜索内容" >
        <input id="search" type="submit" value="搜索" @click="change" >
         <!-- <input id="goUp" type="button" value="往上" @click="select(0)">
        <input id="goDown" type="button" value="往下" @click="select(1)">  -->
      </div>
        <ul id="contentList">
          <li v-for="(item,index) in provinceList" :id="'id'+index" @click="nextPage(index)">
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
  name:'provinceName',
  data(){
    return{
      provinceList:area[0],
      currentLine:-1,
    }
  },

  methods:{

    change:function(){
      $("#contentList li").eq(this.currentLine).removeClass("hightLight");
      this.currentLine = -1;
       var searchText = $.trim($("#searchText").val().toString()); //去掉两头的空格      
       if (searchText == '') {
           return false;
       }
       var parent = $("ul");
       $('li:contains(' + searchText + ')').prependTo(parent);
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
    },

    nextPage:function (index) {
      this.currentLine = -1;
      $("#contentList").slideUp(300,function(){

          $("ul").find("li").remove();
          var arr = area[index + 1];
          for (var i = 0; i < arr.length; i++) {
              $("#contentList").append("<li class='cityBtn' id=cityLi" + i + ">" + arr[i].city +
                  "<span style='display:none'>" + arr[i].initial + "</span>" + "</li>");
          }
          $("#contentList").slideDown();

          $(".cityBtn").click(function() {
            var idb = $(this).attr("id");
            alert(idb);
          });
      });
      
    }
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
    margin-left: 100px;
    background:url('../assets/search/pic1.png'); 
  }

  /* .input{
    margin-left: 100px;
  } */
  
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
   li{
     list-style-type: none;
     /* line-height: 66px; */
     color: #f1f1f1
     
  } 
  .hightLight {
    background: #4169E1;
    font-weight: bolder;
  }

</style>


