<template>
<!-- 说明：当search获得焦点时方可搜索
      当searchText获得焦点时方可回车打印所选中的省份 -->
  <div id="box" :style="pic1" :flag="changeFlag" :searchSelect="changeFlag" :toggleSearch="inOrOut">
      <div id="searchContent">
        <input id="searchText" type="text" placeholder="搜索内容" @keydown="nextPage($event)">
        <!-- <input id="search" type="submit" value="搜索" style="display:none"> -->
        <img id="searchPic" :src="pic2" /> 
      </div>
      
      <!-- <input id="mmp" type="submit"> -->
        <ul id="contentList">
          <li v-for="(item,index) in provinceList" :id="'id'+index" :key="index">
            {{item.province}}
             <span style="display:none">{{item.initial}}</span> 
          </li>
        </ul>
  </div>
</template>

<script>
import area from '../assets/search/search.js'
import pic1 from '../assets/search/pic1.png'
import pic2 from '../assets/search/pic2.png'
import $ from 'jquery'

export default {
  name:'Search',
  data(){
    return{
      provinceList:area[0],
      currentLine:-1,
      tempFlag:0,//用于判断up or down
      tempNum:0,//用于判断淡入淡出
      toggleNum:0,//用于记录动画执行的次数
      canChange:true,//用于设置动画的时间间隔
      toggle:true,
      pic1:{
          backgroundImage:"url("+pic1+")",
        },
      pic2:pic2,
      provinceName:"",
      searchContent:'',
      timerFlag:true,
      timer2:'',
    }
  },

  props:["flag","searchSelect","toggleSearch"],

  methods:{
    change:function(){
      console.log("123");
      var searchText = $.trim($("#searchText").val().toString()); //去掉两头的空格      
      if (searchText == this.searchContent) {
           return false;
      }
      this.searchContent = searchText;
      $("#contentList li").eq(this.currentLine).removeClass("hightLight");
      this.currentLine = -1;
      //  var parent = $("ul");
      //  $('li:contains(' + searchText + ')').prependTo(parent);
      var ul_list = document.getElementById("contentList");
      var li_list = document.getElementById("contentList").getElementsByTagName("li");
      var span_list = document.getElementById("contentList").getElementsByTagName("span");
      // document.querySelector('#contentList span')
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
          this.currentLine = -1;
      if (this.currentLine >= temp.length)
          this.currentLine = 0;
      if(this.currentLine != -1)
        $("#contentList li").eq(this.currentLine).addClass("hightLight");
      var id = $("#contentList li").eq(this.currentLine).attr("id");//获取当前省份
      this.provinceName = document.getElementById(id).innerText;
      
    },

    nextPage:function (event) {
      // var name = event.currentTarget.innerText;
      // var id = event.currentTarget.id;
      if(event.keyCode == 13){
        if(this.currentLine != -1){
          //console.log(this.provinceName);
          this.$emit('search-province',this.provinceName);
        }
        
      }else{
        return;
      }
      

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

    fadeInOut:function(value){
      var timer;
      var alpha1 = 0;
      var alpha2 = 1;
      var searchText = document.getElementById("searchText");
      var searchPic = document.getElementById("searchPic");
      if(this.toggle){
        timer = setInterval(function(){
          alpha1 += value;
          alpha2 -= value;
          searchText.style.opacity = alpha1;
          searchPic.style.opacity = alpha2;
          if(alpha1 >= 1||alpha2 <= 0){
            clearInterval(timer);
          }
        },20);
      }else{
        timer = setInterval(function(){
          alpha1 += value;
          alpha2 -= value;
          searchText.style.opacity = alpha2;
          searchPic.style.opacity = alpha1;
          if(alpha1 >= 1||alpha2 <= 0){
            clearInterval(timer);
          }
        },20);
      }
      searchText.value = "";//清空文本框
      this.toggle = !this.toggle;
    },

    toggleChange:function(){
      this.canChange = !this.canChange;
    }
  },
  
  computed:{
    changeFlag:function(){
      let self = this;
      // var timer;
      if(self.searchSelect){
        $("#searchContent").addClass("searchHeightLight");
        document.getElementById("searchText").focus();//输入框获取焦点
        if(self.timerFlag){
          self.timer2 = setInterval(self.change,1000);//开启定时器（只开启一次）
          self.timerFlag = false;
        }
          
      }else{
        $("#searchContent").removeClass("searchHeightLight");
        //从输入框右移到图片框，将输入框变为图标
        if((self.toggleNum != 0)&&(self.toggleNum%2 != 0)){
          self.fadeInOut(0.02);
          self.toggleNum = 0;
        }
        clearInterval(self.timer2);//清除定时器
        self.timerFlag = true;
      }
      if(self.flag < self.tempFlag){
        self.select(1);
      }else if(self.flag > self.tempFlag){
        self.select(0);
      }
      self.tempFlag = self.flag;
    },
    inOrOut:function(){
      let self = this;
      //当选中某个省份时不能在输入框和图标之间切换
      if(self.currentLine != -1){
        self.tempNum = self.toggleSearch;
        return;
      }
      if((self.toggleSearch != self.tempNum)&&(self.currentLine == -1)){
        if(self.canChange){
          self.fadeInOut(0.02);
        }
        self.toggleChange();
        setTimeout(self.toggleChange,1000);
        //self.change();
        self.toggleNum++;
        self.tempNum = self.toggleSearch;
      }
    },
  },
}
</script>

<style>
  body{
    src: url("../assets/font/小米兰亭.ttf");
    font-family: "小米兰亭";
  } 

  #box{
     position: relative;
     width: 100vw;
     height: 100vh; 
     overflow: hidden;
     overflow-y: scroll; 
     left: 0;
  } 
  #box::-webkit-scrollbar {
    display: none;
  }
  #searchBox::-moz-scrollbar{
    display: none;
  }
  #searchBox::-ms-scrollbar{
    display: none;
  } 
 #searchContent{
   position: relative;
   width: 100%;
   height: 8.7vh;
 }

 #searchPic{
   position: absolute;
   width: 27.5%;
   height: 5.09vh;
   left:37%;
   top:1.85vh;
 }
  /*暂定  */
  #searchText{
    position: absolute; 
    /* width: 70%; */
    width: 100%;
    height: 8.4vh;
    top:0.2vh;
    opacity: 0; 
  }

  /* #search{
    position: absolute; 
    right: 0;
    width: 29%;
    height: 6vh;
  } */

  #contentList{
    position: relative;  
    /* margin-top:9.26vh; */
    font-size: 29px; 
    text-align: left;
    cursor: pointer;
    
  }
  #contentList li{
     list-style-type: none;
     line-height: 8.7vh; 
     padding-left: 25%;
     /* padding-top:3.05vh; */
    /* padding-bottom: 2.96vh;  */
     color: #f1f1f1;
  } 

  /*高亮样式暂定  */
  .hightLight {
    background: #5151A2  ;
    font-weight: bolder;
  }
/*暂定  */
  .searchHeightLight{
    background: #104E8B;
  }

</style>


