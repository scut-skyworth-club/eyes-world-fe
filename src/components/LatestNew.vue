<template>
  <div id="latest-new">
    <img :src="bgs[0]" id="latest-new-bg">
    <p class="title">最新推荐</p>
    <date class="time"></date>
    <div class="roll-pics-container">
        <div :style="{left:oLeft+'vw',transition:setTransition}">
          <ul>
            <li v-for="(item,index) in images" :key="item.id">
              <picture-dialog
                :date="item.date" 
                :author="item.author" 
                :pic_url="item.tu" 
                :like="item.like" 
                :title="item.title" 
                :visited="item.visited" 
                :type="(counter===index||(counter===1&&index===9)||(counter===10&&index===2))?4:0"
                :style="{left:index*75+'vw',
                transform:'scale(1,'+((counter===index||(counter===1&&index===9)||(counter===10&&index===2))?1:0.958)+')',
                boxShadow:(counter===index||(counter===1&&index===9)||(counter===10&&index===2))?'0 6px 40px #222222':'none'}"
                class="roll-pic">
                <!-- counter是按键控制值，当couter与index相等时，表示焦点来到这张图片上，
                改变图片的type值，使下面的信息条显示，同时修改y方向上的变换大小以及显示阴影，
                counter==1&&index==9与counter==10&&index==2的情况是为了消除图片从第一张
                变到最后一张和从最后一张变到第一张时的过渡效果 -->
              </picture-dialog>
            </li>
          </ul>
        </div>
    </div>
    <ul>
        <li v-for="(span,inx) in spans" :key="span.id">
            <span :style="{left:inx*3.125+'vw',
            backgroundColor:counter===inx+2?'#4e72cc':'#999999'}"></span>
        </li>
    </ul>
    {{setKey}}
  </div>
</template>
<script>
    import bg from '../assets/blue.png'
    import bg1 from '../assets/bg1.jpg'
    import bg2 from '../assets/bg2.jpg'
    import tu1 from '../assets/tu1.jpg'
    import tu2 from '../assets/tu2.jpg'
    import tu3 from '../assets/tu3.jpg'
    import tu4 from '../assets/tu4.jpg'
    import tu5 from '../assets/tu5.jpg'
    
    import Date from './Date'
    import PictureDialog from './PictureDialog'
    import router from '../router/index'

    let TotalAlumList = [{
       id: 0,
       date: "2017/08/01",
       author: "XXX",
       title: "海心沙",
       like: "200",
       visited: "100",
       tu: bg1,
    }, {
       id: 1,
       date: "2017/09/09",
       author: "XXX",
       title: "遥",
       like: "200",
       visited: "100",
       tu: bg2,
    }, {
       id: 2,
       date: "2016/02/01",
       author: "XXX",
       title: "远",
       like: "200",
       visited: "100",
       tu: bg1,
    }, {
       id: 3,
       date: "2017/08/01",
       author: "XXX",
       title: "海心沙",
       like: "200",
       visited: "100",
       tu: bg2,
    }, {
       id: 4,
       date: "2017/08/01",
       author: "XXX",
       title: "海心沙",
       like: "200",
       visited: "100",
       tu: bg2,
    }, {
       id: 5,
       date: "2017/08/01",
       author: "XXX",
       title: "海心沙",
       like: "200",
       visited: "100",
       tu: bg1,
    }, {
       id: 6,
       date: "2017/08/01",
       author: "XXX",
       title: "海心沙",
       like: "200",
       visited: "100",
       tu: bg2,
    }, {id:0,date:"2017/08/01",author:"XXX",title:"1",like:"100",visited:"100",tu:tu5},
    {id:1,date:"2017/09/09",author:"XXX",title:"2",like:"100",visited:"100",tu:tu1,},
    {id:2,date:"2016/02/01",author:"XXX",title:"3",like:"100",visited:"100",tu:tu2,},
    {id:3,date:"2017/08/01",author:"XXX",title:"4",like:"100",visited:"100",tu:tu3,},
    {id:4,date:"2017/08/01",author:"XXX",title:"5",like:"100",visited:"100",tu:tu4,},
    {id:5,date:"2017/08/01",author:"XXX",title:"6",like:"100",visited:"100",tu:tu5,},
    {id:6,date:"2017/08/01",author:"XXX",title:"7",like:"100",visited:"100",tu:tu1,},
    {id:7,date:"2017/08/01",author:"XXX",title:"8",like:"100",visited:"100",tu:tu4,}];

    let supAlbumListTemp = TotalAlumList.slice(0, 7);
    let albumListTemp = TotalAlumList.slice(7);
    let subLastPic = TotalAlumList.slice(13);   //尾元素副本
    let subFirstPic = TotalAlumList.slice(7,9);     //首元素副本
    albumListTemp = [...subLastPic,...albumListTemp,...subFirstPic];

    export default {
        data (){
            return {
                picType: 0,
                counter: 2,
                oLeft: -143.75,
                images: albumListTemp,
                amount: albumListTemp.length,
                animated: false,
                bgs:[
                    bg,
                ],
                setTransition: 'all 1s ease',
                spans: [
                    {id: 1},
                    {id: 2},
                    {id: 3},
                    {id: 4},
                    {id: 5},
                    {id: 6},
                    {id: 7},
                    {id: 8},
                ],
            }
        },
        computed: {
            setKey:function(){
                let self = this;
                document.onkeydown = function(event){
                    if(self.index===0&&self.focus===1){
                        self.index=1;
                    }else{
                        switch(event.which){
                            case 37:
                            //left
                            self.leftMove();
                            
                            break;
                            case 38:
                            //up
                            
                            break;
                            case 39:

                            //right
                            self.rightMove();
                            break;
                            case 40:
                            //down
                            
                            break;
                            case 13:
                            //center
                            self.enterItem();
                            break;
                            case 82:
                            break;
                            case 4:
                            break;
                        }
                    }
                }
            },
        },
        methods: {
            leftMove: function (){
                if (!this.animated) {
                    this.animated = true;
                    if (this.counter!==2) {
                        this.counter--;
                        this.oLeft = this.oLeft+75;
                        this.setTransition = 'all 1s ease';
                        let self = this;
                        window.setTimeout(function() {
                            self.animated = false;
                        }, 1000);
                    }else {
                        this.counter--;
                        this.oLeft = this.oLeft+75;
                        let self = this;
                        this.setTransition = 'all 1s ease';
                        window.setTimeout(function (){
                            self.counter = 9;
                            self.oLeft = self.oLeft-75*8;
                            self.setTransition = 'none';
                            self.animated = false;
                        },1000);
                    }
                }
            },
            rightMove: function (){
                if (!this.animated) {
                    this.animated = true;
                    if (this.counter!==this.amount-3) {
                        this.counter++;
                        this.oLeft = this.oLeft-75;
                        this.setTransition = 'all 1s ease';
                        let self = this;
                        window.setTimeout(function() {
                            self.animated = false;
                        }, 1000);
                    }else {
                        this.counter++;
                        this.oLeft = this.oLeft-75;
                        let self = this;
                        this.setTransition = 'all 1s ease';
                        window.setTimeout(function (){
                            self.counter = 2;
                            self.oLeft = self.oLeft+75*8;
                            self.setTransition = 'none';
                            self.animated = false;
                        },1000);
                    }
                }
                // this.counter++;
                // this.oLeft = this.oLeft-75;
            }
        },
        // 这部分是实现自动轮播的
        // mounted: function (){
        //     let self = this;
        //     window.setInterval(self.rightMove,4000);  
        // },       
        components: {
            Date,
            PictureDialog,
        }
    }
</script>

<style>
    #latest-new {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
    }
    #latest-new>img {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
    }
    #latest-new>.title {
        font-family: '小米兰亭';
        font-size: 5.556vh;
        line-height: 5.556vh;
        color: #f1f1f1;
        letter-spacing: 4px; 
        position: absolute;
        top: 6.481vh;
        left: 6.25vw;
    }
    #latest-new>.roll-pics-container {
        width: 87.5vw;
        height: 48vh;
        position: absolute;
        top: 14.815vh;
        left: 6.25vw;
        /* border: 1px solid red; */
        overflow: hidden; 
    }
    #latest-new>.roll-pics-container>div {
        width: 900vw;
        height: 44.444vh;
        position: absolute;
        top: 0;
        /* left: -68.75vw; */
        /* border: 2px solid yellow; */
        /* transition: all 1s ease; */
    }
    #latest-new>.roll-pics-container>div .roll-pic {
        width: 75vw;
        height: 44.444vh;
        position: absolute;
        top: 0;
        transform-origin: 0 100%;
    }
    #latest-new>ul {
        position: absolute;
        top: 62.037vh;
        left: 38.021vw;
        text-decoration: none;
        width: 20vw;
        height: 1vh;
    }
    #latest-new>ul>li {
        position: absolute;
        top: 0;
        left: 0;
        height: 1vh;
        width: 20vw;
    }
    #latest-new>ul>li>span {
        width: 2.083vw;
        height: 0.278vh;
        position: absolute;
        top: 0;
    }
</style>

