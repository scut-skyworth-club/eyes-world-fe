<template> 
  <div id="index">
    <div v-for="(label,index) in labelList"
        class="item_carousel" 
        name="item_carousel"
        :style="getLeft(index)"
        :class="{
          select:(selection==index),
          index_m2:(index-offset==-2),
          index_0:(index-offset==0),
          index_4:(index-offset==4)
          }"
        >
      <img :src="label.bg" />
      <div class="shadow">
      </div>
      <div class="text_bg"></div>
      <span>{{label.title}}</span>
    </div>

    <div v-for="(label,index) in labelList_op"
        class="item_carousel" 
        name="item_carousel"
        :style="getLeft(-index-1)"
        :class="{
          select:(selection==-index-1),
          index_m2:(-index-offset-1==-2),
          index_0:(-index-offset-1==0),
          index_4:(-index-offset-1==4)
          }"
        >
      <img :src="label.bg" />
      <div class="shadow">
      </div>
      <div class="text_bg"></div>
      <span>{{label.title}}</span>
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
        toggle:true,
        //这里是所有模块
        labels:[
          {
            title:"旅游全景",
            bg:bg1,
          },
          {
            title:"高校景观",
            bg:bg2,
          },
          {
            title:"最新推荐",
            bg:bg3,
          },
          {
            title:"用户管理",
            bg:bg4,
          },
        ],
        //正向显示的列表（向右延伸）
        labelList:[
          {
            title:"旅游全景",
            bg:bg1,
          },
          {
            title:"高校景观",
            bg:bg2,
          },
          {
            title:"最新推荐",
            bg:bg3,
          },
          {
            title:"用户管理",
            bg:bg4,
          },
          {
            title:"旅游全景",
            bg:bg1,
          },
          {
            title:"高校景观",
            bg:bg2,
          },
        ],
        //反向显示的列表（向左延伸）
        labelList_op:[
          {
            title:"用户管理",
            bg:bg4,
          },
          {
            title:"最新推荐",
            bg:bg3,
          },
          {
            title:"高校景观",
            bg:bg2,
          },
          {
            title:"旅游全景",
            bg:bg1,
          },
        ],
        //selection表示当前选中的label的下标
        //大于0选中的是正向列表
        //小于0选中的是反向列表
        selection:2,
        //offset表示当前整体的偏移量
        offset:0,
        //各模块的路由地址
        path:[
          "provinces/cities",
          "provinces/collage",
          "latest",
          "user",
        ],
        canSlide:true,
      }
    },
    computed: {
    },
    methods: {
      getLabels:function(){
        this.labelList = new Array(6);
        for(let i=0;i<6;i++){
          this.labelList[i] = this.labels[(this.offset+i)%this.labels.length];
        }
      },
      getLabels_op:function(){
        this.labelList_op = new Array(4);
        for(let i=0;i<4;i++){
          this.labelList_op[i] = this.labels[this.labels.length-1-(this.offset+i)%this.labels.length];
        }
      },
      getLeft:function(index){
        let left;
        if(index-this.offset == 0){
          left = (index - this.offset) * 20 - 5;
        }else{
          left = (index - this.offset) * 20 + 5;
        }
        return {
          left:left+"vw"
        }
      },
      select_ad:function(){
        if(this.canSlide){
          if(this.selection-this.offset>2){
            if(this.labelList.length-this.selection<4){
              this.labelList[this.labelList.length] = this.labelList[this.labelList.length-4];
            }
            this.selection++;
            this.offset++;
            this.toggleSlide();
            setTimeout(this.toggleSlide,1000);
          }else{
            this.selection++;
            this.toggleSlide();
            setTimeout(this.toggleSlide,1000);
          }
          
        }
      },
      select_re:function(){
        if(this.canSlide){
          if(this.selection-this.offset<2){
            if(this.labelList_op.length + this.selection<3){
              this.labelList_op[this.labelList_op.length] = this.labelList_op[this.labelList_op.length-4];
            }
            this.selection--;
            this.offset--;
            this.toggleSlide();
            setTimeout(this.toggleSlide,1000);
          }else{
            this.selection--;
            this.toggleSlide();
            setTimeout(this.toggleSlide,1000);
          }
        }
      },
      toggleSlide:function(){
        this.canSlide = !this.canSlide;
      },
      select:function(){
        if(this.selection>=0){
          router.push(this.path[this.selection%4]);
        }else{
          router.push(this.path[(this.selection%4+4)%4]);
        }
        
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
            self.select();
            break;
          case 82:
          //menu
            break;
          case 4:
          //back
            break;
        }
      }
    },
  }
</script>

<style>

  @font-face {
    font-family: font757;
    src: url("../assets/font/小米兰亭.ttf");
  }

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
    background: #fff;
  }
  .item_carousel{
    display: inline-block;
    position: fixed;
    width: 20vw;
    height: 100vh;
    transform: skew(-7.5deg);
    overflow: hidden;
    transition-property:left,width;
    transition-duration: 0.6s;
  }

  .item_carousel img{
    position: relative;
    left: -20vw;
    top: 0px;
    transform: skew(7.5deg);
    height: 100vh; 
    transition: all 0.6s ease;
  }

  .item_carousel span{
    font-family: font757;
    position: absolute;
    bottom:5.55vh;
    text-align: center;
    width: 100%;
    left:0;
    letter-spacing: 0.5vw;
    transform: skew(7.5deg);
    transition: all 0.6s ease;
    color: #f1f1f1;
    font-size: 2.3vw;
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
    transition: all 0.6s ease;
    opacity: 0;
  }

  .circle{
    height: 4.5vh;
    width: 30%;
    position: relative;
    top: 90vh;
    left :8.5vw;
    background: -webkit-radial-gradient(center,closest-side,rgba(255,255,255,1),rgba(255,255,255,0));
    transition: all 0.6s ease;
    opacity: 0;
  }*/

  /*
    被选中z-index变为2，否则外发光效果可能会被遮挡
   */
  #index > .select{
    box-shadow: 0px 0px 5vw rgba(0,0,0,0.75);
    width: 20vw;
    z-index: 2;
  }

  #index > .select img{
    opacity: 1;
  }

  #index > .select span{
    font-size: 3vw;
    text-shadow: 0px 0px 1.5vw rgba(255,255,255,1);
  }
  
  #index > .item_carousel > .shadow{
    height: 100%;
    width: 100%;
    top: 0vh;
    position: absolute;
    transition: all 0.6s ease;
    background: #000;
    opacity: 0.45;
  }

  #index > .select > .shadow{
    opacity: 0;
  }

  #index > .item_carousel >.text_bg{
    position: absolute;
    bottom: 0vh;
    width:100%;
    height:10%;
    transition: all 0.6s ease;
    background: -webkit-linear-gradient(bottom, rgba(255,255,255,0.3), rgba(255,255,255,0));
  }

  #index > .select > .text_bg{
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
  .index_m2{
    z-index:-1;
  }
  
  .index_0{
    width: 30vw;
    z-index: 1;
  }

  .index_0 span{
    left:3.8vw;
  }
  
  .index_4{
    left:85vw;
  } 

  .index_4 span{
    left:2vw;
  }

</style>

