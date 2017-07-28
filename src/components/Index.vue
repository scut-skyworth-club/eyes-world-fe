<template> 
  <div id="index">
    <div class="item_carousel index_-2" v-bind:class="{select:isSelect[0]}" name="item_carousel" v-bind:id="index_id.id_m2" @click="slide">
      <img :src="bgs[2]" />
      <div class="shadow">

<!--      <div class="line"></div>
          <div class="circle"></div> -->
      </div>
      <div class="text_bg"></div>
      <span>{{title.t3}}</span>
    </div>

    <div class="item_carousel index_-1" v-bind:class="{select:isSelect[1]}" name="item_carousel" v-bind:id="index_id.id_m1" @click="slide">
      <img :src="bgs[3]" />
      <div class="shadow">
          
<!--           <div class="line"></div>
          <div class="circle"></div> -->
      </div>
      <div class="text_bg"></div>
      <span>{{title.t4}}</span>
    </div>

    <div class="item_carousel index_0" v-bind:class="{select:isSelect[2]}" name="item_carousel" v-bind:id="index_id.id_0" @click="slide">
      <img :src="bgs[0]" />
      <div class="shadow">
          
<!--           <div class="line"></div>
          <div class="circle"></div> -->
      </div>
      <div class="text_bg"></div>
      <span>{{title.t1}}</span>
    </div>

    <div class="item_carousel index_1" v-bind:class="{select:isSelect[3]}" name="item_carousel" v-bind:id="index_id.id_1" @click="slide">
        <img :src="bgs[1]" />

        <div class="shadow">
          
<!--           <div class="line"></div>
          <div class="circle"></div> -->
        </div>
        <div class="text_bg"></div>
        <span>{{title.t2}}</span>
    </div>

    <div class="item_carousel index_2" v-bind:class="{select:isSelect[4]}" name="item_carousel" v-bind:id="index_id.id_2" @click="slide">
        <img :src="bgs[2]" />
        <div class="shadow">
          
<!--           <div class="line"></div>
          <div class="circle"></div> -->
        </div>
        <div class="text_bg"></div>
        <span>{{title.t3}}</span>
    </div>

    <div class="item_carousel index_3" v-bind:class="{select:isSelect[5]}" name="item_carousel" v-bind:id="index_id.id_3" @click="slide">
        <img :src="bgs[3]" />
        <div class="shadow">
          
<!--           <div class="line"></div>
          <div class="circle"></div> -->
        </div>
        <div class="text_bg"></div>
        <span>{{title.t4}}</span>
    </div>

    <div class="item_carousel index_4" v-bind:class="{select:isSelect[6]}" name="item_carousel" v-bind:id="index_id.id_4" @click="slide">
      <img :src="bgs[0]" />
      <div class="shadow">
        
<!--         <div class="line"></div>
        <div class="circle"></div> -->
      </div>
      <div class="text_bg"></div>
      <span>{{title.t1}}</span>
    </div>

    <div class="item_carousel index_5" v-bind:class="{select:isSelect[7]}" name="item_carousel" v-bind:id="index_id.id_5" @click="slide">
      <img :src="bgs[1]" />
      <div class="shadow">
        
<!--         <div class="line"></div>
        <div class="circle"></div> -->
      </div>
      <div class="text_bg"></div>
      <span>{{title.t2}}</span>
    </div>  
  </div>   
</template>

<script>
  import bg1 from '../assets/bg1.jpg'
  import bg2 from '../assets/bg2.jpg'
  import bg3 from '../assets/bg3.jpg'
  import bg4 from '../assets/bg4.jpg'
  import router from '../router/index'

  import Tourism from './Tourism'
  import User from './User'
  import Latest from './Latest'
  import Collage from './Collage'

  export default {
    name: 'index',
    components: {
      Tourism,
      User,
      Latest,
      Collage
    },
    data() {
      return {
        msg: '这里是首页',
        //selection表示当前选中的模块在屏幕的第几（最左边的为0）
        selection:2,
        //index表示当前屏幕最左边的模块是第几个（用做路由）
        index:1,
        //下面是各模块的背景图片
        bgs:[
          bg1,
          bg2,
          bg3,
          bg4,
        ],
        //模块的名称
        title:{
          t1:"旅游全景",
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
        //表示模块是否被选中
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
        //各模块的路由地址
        path:[
          "tourism",
          "collage",
          "latest",
          "user",
        ],
      }
    },
    computed: {
    },
    methods: {
      //所有项目点击事件都是slide()
      slide:function(){
        var id = window.event.target.parentNode.getAttribute("id");
        //通过id判定为第几个
        //若项目被选中，则进行路由
        //否则，改变选中项目
        //若点击项目为第0或第4个，则所有模块需要进行整体平移
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
        router.push(this.path[(this.index+this.selection)%4]);
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
  #index{
    display: flex;
    overflow: hidden;
    width: 200vw;
    position: relative;
    background: #000;
  }
  .section{
    flex: 1;
    height:100vh;
  }

  .item_carousel{
    display: inline-block;
    position: fixed;
    width: 20vw;
    height: 100vh;
    transform: skew(-7.5deg);
    overflow: hidden;
    transition: all 0.5s ease;
  }

  .item_carousel img{
    position: relative;
    left: -20vw;
    top: 0px;
    transform: skew(7.5deg);
    height: 100vh; 
    transition: all 0.5s ease;
  }

  .item_carousel span{
    position: absolute;
    left:5vw;
    bottom:6vh;
    transition: all 0.5s ease;
    color: #f1f1f1;
    font-size: 2.5vw;
  }

  /*
    发光横线由两个div,line和circle实现
    两者都具有径向渐变背景，但是line细长（渐变线），circle粗矮（光晕）
    有关背景属性，没有作所有浏览器的适配，有可能出问题...

    P.S.然后不用了...留着备用
 */
/*  .line{
    height:7px;
    background: -webkit-radial-gradient(center,closest-side,rgba(255,255,255,1),rgba(255,255,255,0));
    position: relative;
    top: 93vh;
    transition: all 0.5s ease;
    opacity: 0;
  }

  .circle{
    height: 4.5vh;
    width: 30%;
    position: relative;
    top: 90vh;
    left :8.5vw;
    background: -webkit-radial-gradient(center,closest-side,rgba(255,255,255,1),rgba(255,255,255,0));
    transition: all 0.5s ease;
    opacity: 0;
  }*/

  .select{
    box-shadow: 0px 0px 5vw rgba(0,0,0,0.75);
    width: 20vw;
    z-index: 2;
  }

  .select img{
    opacity: 1;
  }

  .select span{
    font-size: 3.5vw;
    left:3vw;
  }
  
  .shadow{
    height: 100%;
    width: 100%;
    top: 0vh;
    position: absolute;
    transition: all 0.5s ease;
    background: #000;
    opacity: 0.45;
  }

  .select > .shadow{
    opacity: 0;
  }

  .text_bg{
    position: absolute;
    bottom: 0vh;
    width:100%;
    height:10%;
    transition: all 0.5s ease;
    background: -webkit-linear-gradient(bottom, rgba(255,255,255,0.3), rgba(255,255,255,0));
  }

  .select > .text_bg{
    /*opacity: 0.6;*/
    height: 15%;
    background: -webkit-linear-gradient(bottom, rgba(78,123,235,0.7), rgba(78,123,235,0));
  }

/*  .select > .shadow >.line{
    opacity: 1;
  }

  .select > .shadow >.circle{
    opacity: 1;
  }*/

  /* 
    以下属性用于各模块的定位
    -2，-1在屏幕左边不可见，5在右边也不可见
    每次向左/右移动时最左/右的模块都会移动到最右/左边
    由于-2和5的透明度为0，所以穿过屏幕时并不会被目击到
  */
  .index_-2{
    opacity: 0;
    left:-55vw;
  }

  .index_-1{
    opacity: 1;
    left:-20vw;
  }

  .index_0{
    opacity: 1;
    left:-5vw;
    width: 30vw;
    z-index: 1;
  }

  .index_0 span{
    left:13vw;
  }

  .index_1{
    opacity: 1;
    left:25vw;
  } 
  
  .index_2{
    opacity: 1;
    left:45vw;
  } 
  
  .index_3{
    opacity: 1;
    left:65vw;
  } 
  
  .index_4{
    opacity: 1;
    left:85vw;
  } 

  .index_5{
    opacity: 0;
    left:105vw;
  }
</style>

