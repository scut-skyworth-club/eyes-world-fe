<template>
  <div id="app">
     <!-- <div class="info">
      {{msg}}
      星期{{today.day}} | {{today.hour}}时{{today.minute}}分
    </div>  -->

    <!-- <Tourism class="section"></Tourism> -->
    <!-- <School class="section"></School> -->
    <!-- <Latest class="section"></Latest> -->
    <!-- <User class="section"></User>  -->
    <div class="item_carousel index_-2" v-bind:class="{select:isSelect[0]}" name="item_carousel" v-bind:id="index_id.id_m2" @click="slide">
      <img :src="bgs[2]" />
      <div class="shadow">
          <div class="text_bg"></div>
          <div class="line"></div>
          <div class="circle"></div>
        </div>
      <span>{{title.t3}}</span>
    </div>

    <div class="item_carousel index_-1" v-bind:class="{select:isSelect[1]}" name="item_carousel" v-bind:id="index_id.id_m1" @click="slide">
      <img :src="bgs[3]" />
      <div class="shadow">
          <div class="text_bg"></div>
          <div class="line"></div>
          <div class="circle"></div>
        </div>
      <span>{{title.t4}}</span>
    </div>

    <div class="item_carousel index_0" v-bind:class="{select:isSelect[2]}" name="item_carousel" v-bind:id="index_id.id_0" @click="slide">
      <img :src="bgs[0]" />
      <div class="shadow">
          <div class="text_bg"></div>
          <div class="line"></div>
          <div class="circle"></div>
        </div>
      <span>{{title.t1}}</span>
    </div>

    <div class="item_carousel index_1" v-bind:class="{select:isSelect[3]}" name="item_carousel" v-bind:id="index_id.id_1" @click="slide">
        <img :src="bgs[1]" />
        <div class="shadow">
          <div class="text_bg"></div>
          <div class="line"></div>
          <div class="circle"></div>
        </div>
        <span>{{title.t2}}</span>
    </div>

    <div class="item_carousel index_2" v-bind:class="{select:isSelect[4]}" name="item_carousel" v-bind:id="index_id.id_2" @click="slide">
        <img :src="bgs[2]" />
        <div class="shadow">
          <div class="text_bg"></div>
          <div class="line"></div>
          <div class="circle"></div>
        </div>
        <span>{{title.t3}}</span>
    </div>

    <div class="item_carousel index_3" v-bind:class="{select:isSelect[5]}" name="item_carousel" v-bind:id="index_id.id_3" @click="slide">
        <img :src="bgs[3]" />
        <div class="shadow">
          <div class="text_bg"></div>
          <div class="line"></div>
          <div class="circle"></div>
        </div>
        <span>{{title.t4}}</span>
    </div>

    <div class="item_carousel index_4" v-bind:class="{select:isSelect[6]}" name="item_carousel" v-bind:id="index_id.id_4" @click="slide">
      <img :src="bgs[0]" />
      <div class="shadow">
        <div class="text_bg"></div>
        <div class="line"></div>
        <div class="circle"></div>
      </div>
      <span>{{title.t1}}</span>
    </div>

    <div class="item_carousel index_5" v-bind:class="{select:isSelect[7]}" name="item_carousel" v-bind:id="index_id.id_5" @click="slide">
      <img :src="bgs[1]" />
      <div class="shadow">
        <div class="text_bg"></div>
        <div class="line"></div>
        <div class="circle"></div>
      </div>
      <span>{{title.t2}}</span>
    </div>

    <!-- <div class="item_carousel carousel_selector index_3" id="carousel_selector" @click="select">
      <div id="text_bg">
      </div>
    </div> -->
  </div>
</template>

<script>
  import bg1 from './assets/bg1.jpg'
  import bg2 from './assets/bg2.jpg'
  import bg3 from './assets/bg3.jpg'
  import bg4 from './assets/bg4.jpg'

  import Tourism from './components/Tourism'
  import User from './components/User'
  import Latest from './components/Latest'
  import School from './components/School'

  export default {
    name: 'app',
    components: {
      Tourism,
      User,
      Latest,
      School,
    },
    data() {
      return {
        msg: '这里是首页',
        selection:2,
        index:1,
        bgs:[
          bg1,
          bg2,
          bg3,
          bg4,
        ],
        title:{
          t1:"旅游景区",
          t2:"高校景观",
          t3:"最新推荐",
          t4:"用户管理",
        },
        index_id:{
          id_m2:"index_-2",
          id_m1:"index_-1",
          id_0:"index_0",
          id_1:"index_1",
          id_2:"index_2",
          id_3:"index_3",
          id_4:"index_4",
          id_5:"index_5",
        },
        select_class:[
          "item_carousel index_1",
          "item_carousel index_2",
          "item_carousel index_3",
        ],
        isSelect:[
          false,
          false,
          false,
          false,
          false,
          true,
          false,
          false,
        ],
      }
    },
    computed: {
      today: function () {
        let mydate = new Date()
        let day = mydate.getDay()
        let hour = mydate.getHours()
        let minute = mydate.getMinutes()
        let temp = {
          day, hour, minute
        }
        return temp
      },
    },
    methods: {
      slide:function(){
        var id = window.event.target.parentNode.getAttribute("id");
        switch(id){
          case this.index_id.id_0:
            this.index_0();
            break;
          case this.index_id.id_1:
            if(this.selection == 0){
              this.select();
            }else{
              this.index_1();
            }
            break;
          case this.index_id.id_2:
            if(this.selection == 1){
              this.select();
            }else{
              this.index_2();
            }
            break;
          case this.index_id.id_3:
            if(this.selection == 2){
              this.select();
            }else{
              this.index_3();
            }
            break;
          case this.index_id.id_4:
            this.index_4();
            break;
          default:
            break;
        }
      },
      index_0:function(){
        // document.getElementById("carousel_selector")
        // .setAttribute("class","item_carousel carousel_selector index_1");

        let item_m2 = document.getElementById(this.index_id.id_m2);
        item_m2.setAttribute("class","item_carousel index_-1");

        let item_m1 = document.getElementById(this.index_id.id_m1);
        item_m1.setAttribute("class","item_carousel index_0");

        let item_0 = document.getElementById(this.index_id.id_0);
        item_0.setAttribute("class","item_carousel index_1 select");

        let item_1 = document.getElementById(this.index_id.id_1);
        item_1.setAttribute("class","item_carousel index_2");

        let item_2 = document.getElementById(this.index_id.id_2);
        item_2.setAttribute("class","item_carousel index_3");

        let item_3 = document.getElementById(this.index_id.id_3);
        item_3.setAttribute("class","item_carousel index_4");

        let item_4 = document.getElementById(this.index_id.id_4);
        item_4.setAttribute("class","item_carousel index_5");

        let item_5 = document.getElementById(this.index_id.id_5);
        item_5.setAttribute("class","item_carousel index_-2");

        item_m2.setAttribute("id","");
        item_5.setAttribute("id",this.index_id.id_m2);
        item_4.setAttribute("id",this.index_id.id_5);
        item_3.setAttribute("id",this.index_id.id_4);
        item_2.setAttribute("id",this.index_id.id_3);
        item_1.setAttribute("id",this.index_id.id_2);
        item_0.setAttribute("id",this.index_id.id_1);
        item_m1.setAttribute("id",this.index_id.id_0);
        item_m2.setAttribute("id",this.index_id.id_m1);

        this.index = this.index - 1;
        if(this.index < 0){
          this.index = this.index + 4;
        }
        this.selection = 0;
      },
      index_1:function(){
        let item_1 = document.getElementById(this.index_id.id_1);
        let item_2 = document.getElementById(this.index_id.id_2);
        let item_3 = document.getElementById(this.index_id.id_3);
        let items = [item_1,item_2,item_3];
        items[this.selection].setAttribute("class",this.select_class[this.selection]);

        this.selection = 0;
        items[0].setAttribute("class","item_carousel index_1 select");
      },
      index_2:function(){
        let item_1 = document.getElementById(this.index_id.id_1);
        let item_2 = document.getElementById(this.index_id.id_2);
        let item_3 = document.getElementById(this.index_id.id_3);
        let items = [item_1,item_2,item_3];
        items[this.selection].setAttribute("class",this.select_class[this.selection]);

        this.selection = 1;
        items[1].setAttribute("class","item_carousel index_2 select");
      },
      index_3:function(){

        let item_1 = document.getElementById(this.index_id.id_1);
        let item_2 = document.getElementById(this.index_id.id_2);
        let item_3 = document.getElementById(this.index_id.id_3);
        let items = [item_1,item_2,item_3];
        items[this.selection].setAttribute("class",this.select_class[this.selection]);

        this.selection = 2;
        items[2].setAttribute("class","item_carousel index_3 select");
      },
      index_4:function(){
        let item_m2 = document.getElementById(this.index_id.id_m2);
        item_m2.setAttribute("class","item_carousel index_5");

        let item_m1 = document.getElementById(this.index_id.id_m1);
        item_m1.setAttribute("class","item_carousel index_-2");

        let item_0 = document.getElementById(this.index_id.id_0);
        item_0.setAttribute("class","item_carousel index_-1");

        let item_1 = document.getElementById(this.index_id.id_1);
        item_1.setAttribute("class","item_carousel index_0");

        let item_2 = document.getElementById(this.index_id.id_2);
        item_2.setAttribute("class","item_carousel index_1");

        let item_3 = document.getElementById(this.index_id.id_3);
        item_3.setAttribute("class","item_carousel index_2");

        let item_4 = document.getElementById(this.index_id.id_4);
        item_4.setAttribute("class","item_carousel index_3 select");

        let item_5 = document.getElementById(this.index_id.id_5);
        item_5.setAttribute("class","item_carousel index_4");

        item_5.setAttribute("id","");
        item_m2.setAttribute("id",this.index_id.id_5);
        item_m1.setAttribute("id",this.index_id.id_m2);
        item_0.setAttribute("id",this.index_id.id_m1);
        item_1.setAttribute("id",this.index_id.id_0);
        item_2.setAttribute("id",this.index_id.id_1);
        item_3.setAttribute("id",this.index_id.id_2);
        item_4.setAttribute("id",this.index_id.id_3);
        item_5.setAttribute("id",this.index_id.id_4);

        this.index = (this.index + 1) % 4;
        this.selection = 2;
      },
      select:function(){
        alert((this.index+this.selection)%4);
      }
    }
  }
</script>

<style>
  body {
    width: 200vw;
    height: 100vh;
    overflow: hidden;
  }
  #app{
    display: flex;
    overflow: hidden;
    width: 200vw;
    position: relative;
  }
  .section{
    flex: 1;
    height:100vh;
  }

  .item_carousel{
    display: inline-block;
    position: fixed;
    width: 25vw;
    height: 100vh;
    transform: skew(-7.5deg);
    overflow: hidden;
    transition: all 1s ease;
  }

  .item_carousel img{
    position: relative;
    left: -20vw;
    top: 0px;
    transform: skew(7.5deg);
    height: 100vh; 
    transition: all 1s ease;
    opacity: 0.7;
  }

  .item_carousel span{
    position: relative;
    left:8vw;
    top:-15vh;
    transition: all 1s ease;
    color: #fff;
    font-size: 2vw;
  }

  .text_bg{
    position: absolute;
    bottom: 0vh;
    width:100%;
    height:20%;
    transition: all 1s ease;
    background: #4e7beb;
    opacity: 0;
  }

  .line{
    height:7px;
    background: -webkit-radial-gradient(center,closest-side,rgba(255,255,255,1),rgba(255,255,255,0));
    position: relative;
    top: 93vh;
    transition: all 1s ease;
    opacity: 0;
  }

  .circle{
    height: 4.5vh;
    width: 30%;
    position: relative;
    top: 90vh;
    left :8.5vw;
    background: -webkit-radial-gradient(center,closest-side,rgba(255,255,255,1),rgba(255,255,255,0));
    transition: all 1s ease;
    opacity: 0;
  }

  .select{
  }

  .select img{
    opacity: 1;
  }

  .select span{
    font-size: 3vw;
    left:6vw;
    top:-16vh;
  }
  
  .shadow{
    position: absolute;
    transition: all 1s ease;
  }

  .select > .shadow{
    top: 0vh;
    box-shadow:inset 0px 0px 5vw #4e7beb;
    height: 100%;
    width: 100%;
  }

  .select > .shadow > .text_bg{
    opacity: 0.6;
  }

  .select > .shadow >.line{
    opacity: 1;
  }

  .select > .shadow >.circle{
    opacity: 1;
  }

  .index_-2{
    opacity: 0;
    left:-55vw;
  }

  .index_-1{
    opacity: 1;
    left:-30vw;
  }

  .index_0{
    opacity: 1;
    left:-5vw;
  }

  .index_1{
    opacity: 1;
    left:20vw;
  } 
  
  .index_2{
    opacity: 1;
    left:45vw;
  } 
  
  .index_3{
    opacity: 1;
    left:70vw;
  } 
  
  .index_4{
    opacity: 1;
    left:95vw;
  } 

  .index_5{
    opacity: 0;
    left:120vw;
  }
</style>

