<template>
  <div id="box" :style="pic1" :flag="changeFlag" :searchSelect="changeFlag" :toggleSearch="inOrOut">
      <div id="searchContent">
        <input id="searchText" type="text" placeholder="搜索内容">
        <!-- <input id="search" type="submit" value="搜索" style="display:none"> -->
        <img id="searchPic" :src="pic2" /> 
      </div>
      
      <!-- <input id="mmp" type="submit"> -->
        <ul id="contentList">
          <li v-for="(item,index) in provinceList" :id="'id'+index" :key="index">
            {{item.province}}
             <span style="display:none">{{item.initial}}</span> 
             <img v-if="item.initFlag" class="picDivision" :src="pic3"/>
             <a v-if="item.initFlag" class="initClass">{{item.init}}</a>
          </li>
        </ul>
  </div>
</template>

<script>
import area from '../assets/search/search.js'
import pic1 from '../assets/search/pic1.png'
import pic2 from '../assets/search/pic2.png'
import pic3 from '../assets/search/pic3.png'
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
      pic3:pic3,
      provinceName:"",
      searchContent:'',
      timerFlag:true,
      timer2:'',
    }
  },

  props:["flag","searchSelect","toggleSearch"],

  created:function(){
    //省份按首字母进行排序
    function jsonObjSort(o, p) {
      var a, b;
      if (typeof o === "object" && typeof p === "object" && o && p) {
        a = o.initial;
        b = p.initial;
        if (a === b) {
            return 0;
        }
        if (typeof a === typeof b) {
            return a < b ? -1 : 1;
        }
        return typeof a < typeof b ? -1 : 1;
      } else {
        throw ("error");
      }
    }
    this.provinceList.sort(jsonObjSort);
    //坐上角首字母显示与否
    for (var i = 1; i < this.provinceList.length; i++) {
      if(this.provinceList[i].init == this.provinceList[i-1].init){
        this.provinceList[i].initFlag = false;
      }
    }
  },

  methods:{
    change:function(){
      //console.log("123");
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
          // temp1.push(li_list[i]);
          temp1.push(this.provinceList[i]);
        }
        else{
          // temp2.push(li_list[i]);
          temp2.push(this.provinceList[i]);
        }
      }
      for (var i = 0; i < temp2.length; i++) {
          temp1.push(temp2[i]);
      }
      
      for (var i = 0; i < temp1.length; i++) {
        // ul_list.appendChild(temp1[i]);
        // this.provinceList[i] = temp1[i];
        this.$set(this.provinceList, i, temp1[i]);//更新provinceList,重新渲染
        // this.provinceList.$set(i,temp1[i])
      }
      //左上角首字母显示与否
      this.provinceList[0].initFlag = true;
      for (var i = 1; i < this.provinceList.length; i++) {
        if(this.provinceList[i].init == this.provinceList[i-1].init){
          this.provinceList[i].initFlag = false;
        }else{
          this.provinceList[i].initFlag = true;
        }
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
      if(this.currentLine != -1){
        $("#contentList li").eq(this.currentLine).addClass("hightLight");
        var id_li = $("#contentList li").eq(this.currentLine).attr("id");//获取当前省份
        
        this.provinceName = document.getElementById(id_li).innerText;
        var reg = /[A-Z]/g;//正则表达式
        this.provinceName = this.provinceName.replace(reg,"");
        
        // console.log(this.provinceName)
      }
    },

    nextPage:function (event) {
      // var name = event.currentTarget.innerText;
      // var id = event.currentTarget.id;
      this.$emit('search-province',this.provinceName);
    
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
          setTimeout(function(){
            document.getElementById("searchText").style.display = "none";
          },1000);
        }
        clearInterval(self.timer2);//清除定时器
        self.timerFlag = true;
      }
      if(self.flag < self.tempFlag || (self.flag == -1 && self.tempFlag == -34)){
        if(self.currentLine == -1){
          document.getElementById("searchText").disabled = true;
        }
        self.select(1);
        // if(self.currentLine>=10){
        //   // $(window).scrollTop(100);
        //   // $("#box").scrollTop(100);
        //   document.getElementById("box").scrollTop = "200px";
        // }
      }else if(self.flag > self.tempFlag){
        self.select(0);
        if(self.currentLine == -1){
          document.getElementById("searchText").disabled = false;
          document.getElementById("searchText").focus();//输入框获取焦点
        }
      }
      self.tempFlag = self.flag;
      // if(self.tempFlag <= -34){
      //     self.tempFlag = 0;
      // }
      // return false;
    },
    inOrOut:function(){
      let self = this;
      //当选中某个省份时不能在输入框和图标之间切换
      if((self.toggleSearch != self.tempNum)&&(self.currentLine != -1)){
        self.nextPage();
        self.tempNum = self.toggleSearch;
        return;
      }
      if((self.toggleSearch != self.tempNum)&&(self.currentLine == -1)){
        if(self.canChange){
          self.toggleNum++;
          if(self.toggleNum%2 != 0){
            document.getElementById("searchText").style.display = "block";
            document.getElementById("searchText").disabled = false;
            self.fadeInOut(0.02);
            document.getElementById("searchText").focus();//输入框获取焦点
          }else{
            document.getElementById("searchText").disabled = true;
            self.fadeInOut(0.02);
            setTimeout(function(){
              document.getElementById("searchText").style.display = "none";
            },1000);
          }
          
        }
        self.toggleChange();
        setTimeout(self.toggleChange,1000);
        //self.change();
        self.tempNum = self.toggleSearch;
        // return false;
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
    display: none;
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
    font-size: 1.56vw; 
    text-align: left;
    cursor: pointer;
  }
  #contentList li{
     position: relative;
     list-style-type: none;
     line-height: 8.7vh; 
     padding-left: 25%;
     /* padding-top:3.05vh; */
     /* padding-bottom: 2.96vh;  */
     color: #f1f1f1;
  } 
  .picDivision{
    position: absolute;
    width: 16%;
    height: 0.167vh;
    top: 0;
    left: 0;
    opacity: 0.3;
  }
  .initClass{
    position: absolute;
    font-size: 0.977vw;
    color: #a1d3ff;
    top:-2vh;
    left:8.5%;
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


