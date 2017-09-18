<template>
  <div id="College">
    <!-- {{msg}} -->
     <search id="searchBox" :flag="flag" :searchSelect="searchSelect" :toggleSearch="toggleSearch" @search-province="listenToSearch">
     </search>

    <div id="collegeDiv">
        <div id="date">
        {{getDay}}&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp{{time}}
        </div>

        <ul id="collegeList">
        <li v-for="(item,index) in getColleges" :class="select==index?'select':'noSelect'" :key="index"> 
            <transition name="fade" mode="out-in">
            <picture-dialog
                v-if="toggle"
                :title="item.albumName"
                :like="item.likeAmount"
                :visited="item.visitAmount"
                :pic_url="item.url"
                :type="select==index?3:2"
                class="pic"
                key="first">
            </picture-dialog>

            <picture-dialog
                v-else 
                :title="item.albumName"
                :like="item.likeAmount"
                :visited="item.visitAmount"
                :pic_url="item.url"
                :type="select==index?3:2"
                class="pic"
                key="second"
                > 
            </picture-dialog>
            </transition> 
        </li>
        </ul>
    
        <ul id="pageIndex">
        <li v-for="index in getPageIndex"> 
            <transition name="indexFade" mode="out-in">
            <img v-if="index" key="foucs" :src="ico_index_foucs" /> 
            <img v-else key="unfoucs" :src="ico_index" /> 
            </transition>
        </li>
        </ul> 
    </div> 
  </div>
</template>

<script>
  import router from '../router/index'
  import ico_index from '../assets/spot_index.png'
  import ico_index_foucs from '../assets/spot_index_foucs.png'

  export default {
    name: 'College',
    methods:{
      toggleSlide:function(){
        this.canSlide = !this.canSlide;
      },
      select_ad:function(){
        if(this.canSlide){
          (this.getColleges[this.select]).type = 2;
          if(!this.searchSelect)    //从搜索框右移回到图片框
            this.select++;
          if(this.select>3||this.offset*4+this.select>=this.colleges.length){
            if(this.offset+1>=this.getPageIndex.length){
              this.select--;
            }else{
              this.offset++;
              this.select = 0;
              this.toggle = !this.toggle;
            }
          }
          this.toggleSlide();
          setTimeout(this.toggleSlide,600);
          (this.getColleges[this.select]).type = 3;
        }
      },
      select_re:function(){
        if(this.canSlide){
          (this.getColleges[this.select]).type = 2;
          this.select--;
          if(this.select<0){
            if(this.offset-1<0){
              this.select++;
              this.changeFlag = true;//可左移
            }else{
              this.offset--;
              this.select = 3;
              this.toggle = !this.toggle;
            }
          }
          this.toggleSlide();
          setTimeout(this.toggleSlide,600);
          (this.getColleges[this.select]).type = 3;
        }
      },
      listenToSearch:function(getdate){
        let self = this;
        self.colleges = [];//清空原来的colleges数组
        self.provinceName = getdate;
        console.log(self.provinceName);
        var url = "http://39.108.149.106/api/provinces/college/"+self.provinceName;
        fetch(url, {
            mode: 'cors',
            method: 'GET',
            headers: {
              'Access-Control-Allow-Credentials': true,
              'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        },
          credentials: "include",
        }).then(function(response) {
          response.json().then(function(json){
            
            self.colleges = json;
            // console.log(json);
            
          },function(err){
            console.log("json解析失败\n"+err);
          });
        },function(err){
          console.log("网络请求失败\n"+err);
        })
      }
    },
    computed:{
      getDay:function(){
        var day = ["日","一","二","三","四","五","六"];
        return "星期"+day[new Date().getDay()];
      },
      getColleges:function(){
        let len = this.colleges.length - this.offset*4;
        if(len >=4){
          len = 4;
        }else if(len<=0){
          return [];
        }

        let college_part = Array(len);
        for(let i=0;i<len;i++){
          college_part[i] = this.colleges[this.offset*4+i];
        }

        return college_part;
      },
      getPageIndex:function(){
        if(this.colleges.length % 4 == 0){
          var index = Array(parseInt(this.colleges.length/4));
        }else{
          var index = Array(parseInt(this.colleges.length/4+1));
        }
        for(let i=0;i<index.length;i++){
          index[i] = i==this.offset?true:false;
        }
        return index;
      }
    },
    data() {
      return {
        screenHeight:0,
        flag:0,
        provinceName:"广东",
        searchSelect:false,
        toggleSearch:0,//用于淡入淡出
        toggleFlag:false,//用于判断二次淡入淡出
        changeFlag:false,//用于判断是否可以从图片框切换到输入框
        time:"10:00",
        toggle:true,
        select:0,
        offset:0,
        ico_index:ico_index,
        ico_index_foucs:ico_index_foucs,
        canSlide:true,
        colleges:[],
        // colleges:[
        //   {
        //     albumId:0,
        //     albumName:"华南理工大学",
        //     visitAmount:200,
        //     likeAmount:200,
        //     url:bg1,
        //   },
        //   {
        //     albumId:1,
        //     albumName:"华南农业大学",
        //     visitAmount:200,
        //     likeAmount:200,
        //     url:bg2,
        //   },
        //   {
        //     albumId:2,
        //     albumName:"华南师范大学",
        //     visitAmount:200,
        //     likeAmount:200,
        //     url:bg3,
        //   },
        //   {
        //     albumId:3,
        //     albumName:"中山大学",
        //     visitAmount:200,
        //     likeAmount:200,
        //     url:bg4,
        //   },
        //   {
        //     albumId:0,
        //     albumName:"广东工业大学",
        //     visitAmount:200,
        //     likeAmount:200,
        //     url:bg4,
        //   },
        //   {
        //     albumId:1,
        //     albumName:"广东外语外贸大学",
        //     visitAmount:200,
        //     likeAmount:200,
        //     url:bg3,
        //   },
        //   {
        //     albumId:2,
        //     albumName:"广州大学",
        //     visitAmount:200,
        //     likeAmount:200,
        //     url:bg2,
        //   },
        //   {
        //     albumId:3,
        //     albumName:"广东药科大学",
        //     visitAmount:200,
        //     likeAmount:200,
        //     url:bg1,
        //   },
        //   {
        //     albumId:0,
        //     albumName:"暨南大学",
        //     visitAmount:200,
        //     likeAmount:200,
        //     url:bg1,
        //   },
        //   {
        //     albumId:1,
        //     albumName:"广东金融学院",
        //     visitAmount:200,
        //     likeAmount:200,
        //     url:bg2,
        //   },
        //   {
        //     albumId:2,
        //     albumName:"广东中医药大学",
        //     visitAmount:200,
        //     likeAmount:200,
        //     url:bg3,
        //   },
        //   {
        //     albumId:3,
        //     albumName:"星海音乐学院",
        //     visitAmount:200,
        //     likeAmount:200,
        //     url:bg4,
        //   },
        // ],
      }
    },
    mounted:function(){
      let self = this;
      document.onkeydown = function(event){
        
        switch(event.which){
          case 37:
          //left
            // console.log(self.screenHeight); 
            if(self.select != -1)//左移至搜索框之后不可再左移
              self.select_re();
            if(self.changeFlag && (self.offset + self.select == 0)){
              self.searchSelect = true;
              self.select = -1;//切换到输入框，图片框没有内容被选中
              // console.log(self.searchSelect);
            }
            break;
          case 38:
          //up
          if(self.searchSelect){
            self.flag++;
            if(self.flag >= 0){
              self.flag = 0;
            }
          }
          if(self.flag == -11){
            $("div").animate({'scrollTop':0},200);
          }else if(self.flag == -22){
            $("div").animate({'scrollTop':self.screenHeight},200);
          }
            break;
          case 39:
          //right
          //从搜索框切换到图片框
            if(self.searchSelect){
              self.select = 0;//切换到图片框之前先把selece归零，表示选中第0个
              self.changeFlag = false;
            }
            self.select_ad();
            if(self.searchSelect){
              self.searchSelect = false;//从搜索框切换到图片框,不再选中搜索框
            }
            break;
          case 40:
          //down
          // self.$refs.Search.select(1);
          if(self.searchSelect){
            self.flag --;
          }
          if(self.flag == -12){
            // $("div").scrollTop(200);
            // var t = $("div").scrolTop();
            $("div").animate({'scrollTop':self.screenHeight},200);
            // console.log("进来了");
            // document.getElementById("searchBox").scrollTop = 200;
          }else if(self.flag == -23){
            $("div").animate({'scrollTop':2*self.screenHeight},200);
          }else if(self.flag < -34){           //遍历完一遍所有省份，重新来过
            $("div").animate({'scrollTop':0},200);
            self.flag = -1;
          }
            break;
          case 13:
          //center
          if(self.searchSelect){
            if(!self.toggleFlag)
              self.toggleSearch = 1;
            else
              self.toggleSearch = 0;
            self.toggleFlag = !self.toggleFlag;
          }else{
            var collegeIndex = self.offset+self.select;
            router.push('/provinces/college/'+self.provinceName+'/'+collegeIndex+'/0');
          }
            break;
          case 82:
            break;
          case 4:
            break;
        }
        return false;
      }

      self.screenHeight = window.screen.height;//获取设备高度
      // console.log(self.screenHeight);
      // var gd = encodeURIComponent("广东");
      var url = "http://39.108.149.106/api/provinces/college/山东";
      fetch(url, {
          mode: 'cors',
          method: 'GET',
          headers: {
            'Access-Control-Allow-Credentials': true,
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
      },
        credentials: "include",
      }).then(function(response) {
        response.json().then(function(json){
          
          self.colleges = json;
          console.log(json);
          
        },function(err){
          console.log("json解析失败\n"+err);
        });
      },function(err){
        console.log("网络请求失败\n"+err);
      })
    }
  }

  function refreshTime(){
    if(document.getElementById("College") != undefined){
      var sp = College.__vue__;
      var hour = new Date().getHours();
      var minute = new Date().getMinutes();
      if(hour<10){
        hour = "0"+hour;
      }

      if(minute<10){
        minute = "0"+minute;
      }
      sp.time = hour+":"+minute;
    }
  }
  setInterval(refreshTime,1000);
</script>



<style>
@font-face {
  font-family: font757;
  src: url("../assets/font/小米兰亭.ttf");
}
#College{
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden; 
    font-family: font757;
    background: url('../assets/collage/bg0.png');
    color: #f1f1f1;
    background-size: cover;
} 

#searchBox{
    position: absolute;
    width: 10.42%;
    height: 100%;
    overflow: hidden; 
    overflow-y: scroll;
    left: 0; 
}
 #searchBox::-webkit-scrollbar {
    display: none;
}
#searchBox::-moz-scrollbar{
    display: none;
}
#searchBox::-ms-scrollbar{
    display: none;
}    

#collegeDiv{
    position: relative;
    width: 89.58vw;
    left: 10.42vw;
}

#date{
  position: absolute;
  font-size: 1.2vw;
  top:6.48vh;
  right:10vw;
}    

#collegeList{
  position: absolute;
  top:18.33vh;
  left:2.30vw; 
  width: 89.58vw;
  height: 59.9vh;
}

#collegeList li{
  display: inline-block; 
   position: relative; 
}

#collegeList > .noSelect{
  box-shadow: 0 0 0 rgba(0,0,0,0.7);
  width:18.75vw;
  height: 53.89vh;
  margin-right:3.02vw;
  vertical-align: top; 
  top:2.96vh;
  transition: all 0.4s
}

#collegeList > .noSelect > .pic{
  width:18.75vw;
  height: 53.89vh;
}

#collegeList > .select{
  box-shadow: 0 0 5vw rgba(0,0,0,0.7);
  width:20.83vw;
  height: 59.9vh;
  margin-right: 2.76vw;
  top:0;
  vertical-align: top; 
  transition: all 0.4s
}

#collegeList > .select > .pic{
  width:20.83vw;
  height: 59.9vh;
}

#pageIndex{
  width: 100%;
  text-align: center;
  position: absolute;
  /* bottom:8.52vh;   */
   top:90vh; 
}

#pageIndex > li{
  display: inline;
  vertical-align: middle;
  margin-left:1.3vw;
  margin-right: 1.3vw;
}

.indexFade-enter-active, .indexFade-leave-active {
  transition: all 0.2s
}
.indexFade-enter, .indexFade-leave-to  {
  opacity: 0.5
}  

.fade-enter-active, .fade-leave-active {
  transition: all 0.4s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}     


</style>
