<template>
  <div id="app">
     <!-- <div class="info">
      {{msg}}
      星期{{today.day}} | {{today.hour}}时{{today.minute}}分
    </div>  -->

    <!-- <Tourism class="section"></Tourism>
    <School class="section"></School>
    <Latest class="section"></Latest>
    <User class="section"></User> --> 
    <div class="item_carousel index_-2" name="item_carousel" v-bind:id="index_id.id_m2" @click="slide">
      <img :src="bgs[2]" />
      <span>{{title.t3}}</span>
    </div>

    <div class="item_carousel index_-1" name="item_carousel" v-bind:id="index_id.id_m1" @click="slide">
      <img :src="bgs[3]" />
      <span>{{title.t4}}</span>
    </div>

    <div class="item_carousel index_0" name="item_carousel" v-bind:id="index_id.id_0" @click="slide">
      <img :src="bgs[0]" />
      <span>{{title.t1}}</span>
    </div>

    <div class="item_carousel index_1" name="item_carousel" v-bind:id="index_id.id_1" @click="slide">
        <img :src="bgs[1]" />
        <span>{{title.t2}}</span>
    </div>

    <div class="item_carousel index_2" name="item_carousel" v-bind:id="index_id.id_2" @click="slide">
        <img :src="bgs[2]" />
        <span>{{title.t3}}</span>
    </div>

    <div class="item_carousel index_3" name="item_carousel" v-bind:id="index_id.id_3" @click="slide">
        <img :src="bgs[3]" />
        <span>{{title.t4}}</span>
    </div>

    <div class="item_carousel index_4" name="item_carousel" v-bind:id="index_id.id_4" @click="slide">
      <img :src="bgs[0]" />
      <span>{{title.t1}}</span>
    </div>

    <div class="item_carousel index_5" name="item_carousel" v-bind:id="index_id.id_5" @click="slide">
      <img :src="bgs[1]" />
      <span>{{title.t2}}</span>
    </div>

    <div class="item_carousel carousel_selector index_3" id="carousel_selector" @click="select">
    </div>
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
        selection:3,
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
        }
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
      }
    },
    methods: {
      slide:function(){
        var id = window.event.target.parentNode.getAttribute("id");
        switch(id){
          case this.index_id.id_0:
            this.index_0();
            break;
          case this.index_id.id_1:
            this.index_1();
            break;
          case this.index_id.id_2:
            this.index_2();
            break;
          case this.index_id.id_3:
            this.index_3();
            break;
          case this.index_id.id_4:
            this.index_4();
            break;
          default:
            break;
        }
      },
      index_0:function(){
        this.index = this.index - 1;
        if(this.index < 0){
          this.index = this.index + 4;
        }
        this.selection = this.index;

        document.getElementById("carousel_selector")
        .setAttribute("class","item_carousel carousel_selector index_1");

        let item_m2 = document.getElementById(this.index_id.id_m2);
        item_m2.setAttribute("class","item_carousel index_-1");

        let item_m1 = document.getElementById(this.index_id.id_m1);
        item_m1.setAttribute("class","item_carousel index_0");

        let item_0 = document.getElementById(this.index_id.id_0);
        item_0.setAttribute("class","item_carousel index_1");

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
      },
      index_1:function(){
        this.selection = this.index;

        document.getElementById("carousel_selector")
        .setAttribute("class","item_carousel carousel_selector index_1");
      },
      index_2:function(){
        this.selection = this.index + 1;
        if(this.selection > 3){
          this.selection = this.selection - 4;
        }

        document.getElementById("carousel_selector")
        .setAttribute("class","item_carousel carousel_selector index_2");
      },
      index_3:function(){
        this.selection = this.index + 2;
        if(this.selection > 3){
          this.selection = this.selection - 4;
        }

        document.getElementById("carousel_selector")
        .setAttribute("class","item_carousel carousel_selector index_3");
      },
      index_4:function(){
        this.index = this.index + 1;
        if(this.index > 4){
          this.index = this.index - 4;
        }
        this.selection = this.index + 2;
        if(this.selection > 3){
          this.selection = this.selection - 4;
        }

        document.getElementById("carousel_selector")
        .setAttribute("class","item_carousel carousel_selector index_3");

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
        item_4.setAttribute("class","item_carousel index_3");

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
      },
      select:function(){
        alert(this.selection);
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
    background: #000
  }
  .section{
    /*border: 1px solid red;*/
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
  }

  .item_carousel span{
    position: relative;
    left:8vw;
    top:-15vh;
    transition: all 1s ease;
    color: #fff;
    font-size: 30px;
  }

  .carousel_selector{
    border: 5px solid blue;
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

