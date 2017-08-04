<template>
    <div>
        <input v-model="sText" id="searchText" type="text" placeholder="搜索内容">
        <input id="search" type="submit" value="搜索" @click="change">
        <input :id="goUp" type="button" value="往上" @click="select(0)">
        <input :id="goDown" type="button" value="往下" @click="select(1)">
        
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
      //alert(index);
      $("ul").find("li").remove();
      var arr = area[index + 1];
      
      for (var i = 0; i < arr.length; i++) {
          $("#contentList").append("<li class='cityBtn' id=cityLi" + i + ">" + arr[i].city +
              "<span style='display:none'>" + arr[i].initial + "</span>" + "</li>");
      }
      $(".cityBtn").click(function() {
          var idb = $(this).attr("id");
          alert(idb);
      });
    }
  }
  
}
</script>

<style>
   body{
    /* width: 200px; */
    font-family: "小米兰亭";
    
  } 
  div{
    margin-left:100px; 
    padding:0;
    width: 200px;
   
  }
  #contentList{
    font-size: 20pt;
    text-align: center;
    cursor: pointer;
    background:url('../assets/search/pic1.png');
  }
   li{
     list-style-type: none;
     line-height: 66px;
     color: #f1f1f1
     
  } 
  .hightLight {
    background: #4169E1;
    font-weight: bolder;
  }

</style>


