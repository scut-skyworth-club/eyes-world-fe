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
       <li v-for="item in getSpots" :class="item.type==3?'select':'noSelect'"> 
        <transition name="fade" mode="out-in">
          <picture-dialog
            v-if="toggle"
            :title="item.name"
            :like="item.likeNum"
            :visited="item.visited"
            :pic_url="item.url"
            :type="item.type"
            :height="item.type==3?59.9:53.89"
            :width="item.type==3?20.83:18.75"
            key="first">
          </picture-dialog>

          <picture-dialog
            v-else="toggle"  
            :title="item.name"
            :like="item.likeNum"
            :visited="item.visited"
            :pic_url="item.url"
            :type="item.type"
            :height="item.type==3?59.9:53.89"
            :width="item.type==3?20.83:18.75"
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
           <img v-else="index" key="unfoucs" :src="ico_index" /> 
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
      select_ad:function(){
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
        (this.getSpots[this.select]).type = 3;
      },
      select_re:function(){
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
        (this.getSpots[this.select]).type = 3;
      },
    },
    computed:{
      getDay:function(){
        var day = ["日","一","二","三","四","五","六"];
        return "星期"+day[new Date().getDay()];
      },
      getWeather:function(){
        var name = encodeURIComponent(this.$route.params.cityName);
        var appCode = "83f43e4013354de2ab53c487cd86797e";
        fetch('http://jisutqybmf.market.alicloudapi.com/weather/query?city='+name,{
          headers:{
            "Authorization":"APPCODE "+appCode,
          }
        }).then(function(res){
          if(res.status == "200"){
            res.json().then(function(json){
              document.getElementById("spots").__vue__.weather = json.result.weather;
            })
          }else{
            document.getElementById("spots").__vue__.weather = "获取失败";
          }
        }, function(res){
            document.getElementById("spots").__vue__.weather = "获取失败";
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
        bg:{
          backgroundImage:"url("+bg+")",
        },
        spots:[
          {
            albumId:0,
            name:"广州塔0",
            visited:200,
            likeNum:200,
            url:bg1,
            type:3,
          },
          {
            albumId:1,
            name:"海心沙0",
            visited:200,
            likeNum:200,
            url:bg2,
            type:2,
          },
          {
            albumId:2,
            name:"烈士陵园0",
            visited:200,
            likeNum:200,
            url:bg3,
            type:2,
          },
          {
            albumId:3,
            name:"华南理工大学0",
            visited:200,
            likeNum:200,
            url:bg4,
            type:2,
          },
          {
            albumId:0,
            name:"广州塔1",
            visited:200,
            likeNum:200,
            url:bg4,
            type:3,
          },
          {
            albumId:1,
            name:"海心沙1",
            visited:200,
            likeNum:200,
            url:bg3,
            type:2,
          },
          {
            albumId:2,
            name:"烈士陵园1",
            visited:200,
            likeNum:200,
            url:bg2,
            type:2,
          },
          {
            albumId:3,
            name:"华南理工大学1",
            visited:200,
            likeNum:200,
            url:bg1,
            type:2,
          },
          {
            albumId:0,
            name:"广州塔2",
            visited:200,
            likeNum:200,
            url:bg1,
            type:3,
          },
          {
            albumId:1,
            name:"海心沙2",
            visited:200,
            likeNum:200,
            url:bg2,
            type:2,
          },
          {
            albumId:2,
            name:"烈士陵园2",
            visited:200,
            likeNum:200,
            url:bg3,
            type:2,
          },
          {
            albumId:3,
            name:"华南理工大学2",
            visited:200,
            likeNum:200,
            url:bg4,
            type:2,
          },
        ],
      }
    },
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
#spots div{
  font-family: "小米兰亭";
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

#spotsList > .select{
  box-shadow: 0 0 5vw rgba(0,0,0,0.7);
  width:20.83vw;
  height: 59.9vh;
  margin-right: 3.125vw;
  top:0;
  vertical-align: top;
  transition: all 0.4s
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
