<template>
  <div id="spots" :style="bg">
    <!-- {{ $route.params.provinceName }}
    {{ $route.params.cityName }}的景点 -->
    <div id="city">
      {{$route.params.cityName}}&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp{{weather}}{{getWeather}}
    </div>

    <div id="date">
      {{getDay}}&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp{{time}}
    </div>

    <ul id="spotsList">
       <li v-for="(item,index) in getSpots" :class="select==index?'select':'noSelect'" :key="index"> 
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

    <div id="button_re" @click="select_re"></div>
    <div id="button_ad" @click="select_ad"></div>  
  </div>
</template>

<script>
  import bg from '../assets/spot_bg.png'
  import ico_index from '../assets/spot_index.png'
  import ico_index_foucs from '../assets/spot_index_foucs.png'

  import bg1 from '../assets/bg1.jpg'
  import bg2 from '../assets/bg2.jpg'
  import bg3 from '../assets/bg3.jpg'
  import bg4 from '../assets/bg4.jpg'

  export default {
    name: 'spots',
    methods:{
      toggleSlide:function(){
        this.canSlide = !this.canSlide;
      },
      select_ad:function(){
        if(this.canSlide){
          (this.getSpots[this.select]).type = 2;
          this.select++;
          if(this.select>3||this.offset*4+this.select>this.spots.length){
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
          (this.getSpots[this.select]).type = 3;
        }
      },
      select_re:function(){
        if(this.canSlide){
          (this.getSpots[this.select]).type = 2;
          this.select--;
          if(this.select<0){
            if(this.offset-1<0){
              this.select++;
            }else{
              this.offset--;
              this.select = 3;
              this.toggle = !this.toggle;
            }
          }
          this.toggleSlide();
          setTimeout(this.toggleSlide,600);
          (this.getSpots[this.select]).type = 3;
        }
      },
    },
    computed:{
      getDay:function(){
        var day = ["日","一","二","三","四","五","六"];
        return "星期"+day[new Date().getDay()];
      },
      getWeather:function(){
        //天气使用的是阿里云的api
        //官方链接在这：
        //https://market.aliyun.com/products/57126001/cmapi014302.html?spm=5176.2020520132.101.5.vFRCrl#sku=yuncode830200000
        let self = this;
        var name = encodeURIComponent(this.$route.params.cityName);

        //我为此注册了一个阿里云帐号，appcode如下
        //帐号密码我放trello上吧
        var appCode = "83f43e4013354de2ab53c487cd86797e";
        fetch('http://jisutqybmf.market.alicloudapi.com/weather/query?city='+name,{
          headers:{
            "Authorization":"APPCODE "+appCode,
          }
        }).then(function(res){
          if(res.status == "200"){
            res.json().then(function(json){
              self.weather = json.result.weather;
            })
          }else{
            self.weather = "获取失败";
          }
        }, function(res){
            self.weather = "获取失败";
        });
      },
      getSpots:function(){
        let len = this.spots.length - this.offset*4;
        if(len >=4){
          len = 4;
        }else if(len<=0){
          return [];
        }

        let spot_part = Array(len);
        for(let i=0;i<len;i++){
          spot_part[i] = this.spots[this.offset*4+i];
        }

        return spot_part;
      },
      getPageIndex:function(){
        if(this.spots.length % 4 == 0){
          var index = Array(parseInt(this.spots.length/4));
        }else{
          var index = Array(parseInt(this.spots.length/4+1));
        }
        for(let i=0;i<index.length;i++){
          index[i] = i==this.offset?true:false;
        }
        return index;
      }
    },
    data() {
      return {
        time:"10:00",
        weather:"获取中...",
        toggle:true,
        select:0,
        offset:0,
        ico_index:ico_index,
        ico_index_foucs:ico_index_foucs,
        canSlide:true,
        bg:{
          backgroundImage:"url("+bg+")",
        },
        spots:[
          // {
          //   albumId:0,
          //   albumName:"广州塔0",
          //   visitAmount:200,
          //   likeAmount:200,
          //   url:bg1,
          // },
          // {
          //   albumId:1,
          //   albumName:"海心沙0",
          //   visitAmount:200,
          //   likeAmount:200,
          //   url:bg2,
          // },
          // {
          //   albumId:2,
          //   albumName:"烈士陵园0",
          //   visitAmount:200,
          //   likeAmount:200,
          //   url:bg3,
          // },
          // {
          //   albumId:3,
          //   albumName:"华南理工大学0",
          //   visitAmount:200,
          //   likeAmount:200,
          //   url:bg4,
          // },
          // {
          //   albumId:0,
          //   albumName:"广州塔1",
          //   visitAmount:200,
          //   likeAmount:200,
          //   url:bg4,
          // },
          // {
          //   albumId:1,
          //   albumName:"海心沙1",
          //   visitAmount:200,
          //   likeAmount:200,
          //   url:bg3,
          // },
          // {
          //   albumId:2,
          //   albumName:"烈士陵园1",
          //   visitAmount:200,
          //   likeAmount:200,
          //   url:bg2,
          // },
          // {
          //   albumId:3,
          //   albumName:"华南理工大学1",
          //   visitAmount:200,
          //   likeAmount:200,
          //   url:bg1,
          // },
          // {
          //   albumId:0,
          //   albumName:"广州塔2",
          //   visitAmount:200,
          //   likeAmount:200,
          //   url:bg1,
          // },
          // {
          //   albumId:1,
          //   albumName:"海心沙2",
          //   visitAmount:200,
          //   likeAmount:200,
          //   url:bg2,
          // },
          // {
          //   albumId:2,
          //   albumName:"烈士陵园2",
          //   visitAmount:200,
          //   likeAmount:200,
          //   url:bg3,
          // },
          // {
          //   albumId:3,
          //   albumName:"华南理工大学2",
          //   visitAmount:200,
          //   likeAmount:200,
          //   url:bg4,
          // },
        ],
      }
    },
    mounted:function(){
      let self = this;
      document.onkeydown = function(event){
        switch(event.which){
          case 37:
          //left
            self.select_re();
            break;
          case 38:
          //up
            break;
          case 39:
          //right
            self.select_ad();
            break;
          case 40:
          //down
            break;
          case 13:
          //center
            break;
          case 82:
            break;
          case 4:
            break;
        }
      }

      var provinceName = encodeURIComponent(this.$route.params.provinceName);
      var cityName = encodeURIComponent(this.$route.params.cityName);

      var requestUrl = "http://39.108.149.106/api/provinces/cities/"+provinceName+"/"+cityName+"/spots";
      fetch(requestUrl, {
          mode: 'cors',
          method: 'GET',
          headers: {
            'Access-Control-Allow-Credentials': true,
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
      },
        credentials: "include",
      }).then(function(response) {
        response.json().then(function(json){

          self.spots = json;
          
        },function(err){
          console.log("json解析失败\n"+err);
        });
      },function(err){
        console.log("网络请求失败\n"+err);
      })
    }
  }

  function refreshTime(){
    if(document.getElementById("spots") != undefined){
      var sp = spots.__vue__;
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

#spots div{
  font-family: font757;
  color: white;
  font-size: 2.96vh;
  /*letter-spacing: 1vh;*/
}

#spots{
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

#city{
  position: absolute;
  top:6.48vh;
  left:6.25vw;
}

#date{
  position: absolute;
  top:6.48vh;
  right:6.25vw;
}

#button_re{
  position: absolute;
  height:100vh;
  width:5vw;
  left:0;
  /*background:red;*/
}

#button_ad{
  position: absolute;
  height:100vh;
  width:5vw;
  right:0;
  /*background:green;*/
}

#spotsList{
  position: absolute;
  top:18.33vh;
  left:5.2vw;
  width: 100vw;
  height: 59.9vh;
}

#spotsList li{
  display: inline-block;
  position: relative;
}

#spotsList > .noSelect{
  box-shadow: 0 0 0 rgba(0,0,0,0.7);
  width:18.75vw;
  height: 53.89vh;
  margin-right:4vw;
  vertical-align: top;
  top:3vh;
  transition: all 0.4s
}

#spotsList > .noSelect > .pic{
  width:18.75vw;
  height: 53.89vh;
}

#spotsList > .select{
  box-shadow: 0 0 5vw rgba(0,0,0,0.7);
  width:20.83vw;
  height: 59.9vh;
  margin-right: 3.125vw;
  top:0;
  vertical-align: top;
  transition: all 0.4s
}

#spotsList > .select > .pic{
  width:20.83vw;
  height: 59.9vh;
}

#pageIndex{
  width: 100%;
  text-align: center;
  position: absolute;
  bottom:8.52vh;
}

#pageIndex > li{
  display: inline-block;
  vertical-align: middle;
  margin-left:1.3vw;
  margin-right: 1.3vw;
}

.indexFade-enter-active, .indexFade-leave-active {
  transition: all 0.2s
}
.indexFade-enter, .indexFade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0.5
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.4s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}

/*#pageIndex > li > img{
  position: relative;
}*/
</style>
