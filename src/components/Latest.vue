<template>
  <div id="latest-new">
     <img :src="bgs[0]" id="latest-new-bg"> 
    <p class="title">最新推荐</p>
    <date class="time"></date>
    <div class="roll-pics-container">
        <div :style="{left:oLeft+'vw',transition:setTransition}">
          <ul>
            <li v-for="(item,index) in getRollPics" :key="item.id">
              <picture-dialog
                :pic_url="item.url" 
                :like="item.likeAmount" 
                :title="item.photoName" 
                :date="item.createTime"
                :author="item.username"
                :visited=100
                :type="(counter===index||(counter===1&&index===9)||(counter===10&&index===2))&&focus===0?4:0"
                :style="{left:index*75+'vw',
                transform:'scale(1,'+((counter===index||(counter===1&&index===9)||(counter===10&&index===2))?1:0.958)+')',
                boxShadow:(counter===index||(counter===1&&index===9)||(counter===10&&index===2))&&focus===0?'0 6px 40px #222222':'none'}"
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
            backgroundColor:(counter===inx+2)||(counter===1&&inx===7)||(counter===10&&inx===0)&&focus===0?'#4e72cc':'#999999'}"></span>
        </li>
    </ul>
    <p class="spots-title">景点TOP10&nbsp{{itemCounter}}/10</p>
    <div class="small-pics-container" :style="{left:mLeft+'vw'}">
        <ul>
         <li v-for="(item,index) in getSmallPics" :key="item.id">
            <picture-dialog
            :pic_url="item.url" 
            :like="item.likeAmount" 
            :title="item.photoName"
            :author="item.username"
            :visited=100
            :type="(itemCounter-1===index&&focus===1)?4:0"
            :style="{left:index*17.969+'vw',
            transform:'scale('+((itemCounter-1===index&&focus===1)?1.133:1)+')',
            boxShadow:(itemCounter-1===index&&focus===1)?'0 0 20px #222222':'none'}"
            class="small-pics">
            </picture-dialog>
        </li> 
        </ul>
    </div>
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
    
    var totalPhotos=new Array();
    export default {
        data (){
            return {
                picType: 0,
                counter: 2,
                focus: 0,
                itemCounter: 1,
                oLeft: -143.75,
                mLeft: 6.25,
                rollPics:this.rollPics,
                smallPics:this.smallPics,
                // totalPhotos:this.totalPhotos,
                // amount: this.rollPics.length,
                animated: false,
                bgs:[
                    bg,
                ],
                totalPhotos:[],
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
        mounted: function (){
            this.income();
        },
        computed: {
            setKey:function(){
                let self = this;
                document.onkeydown = function(event){
                    switch(event.which){
                        case 37:
                        //left
                        self.leftMove();
                        
                        break;
                        case 38:
                        //up
                        if (self.focus===1) {
                            self.focus = 0;
                        }
                        break;
                        case 39:

                        //right
                        self.rightMove();
                        break;
                        case 40:
                        //down
                        if (self.focus===0) {
                            self.focus = 1;
                        }
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
            },
             getSmallPics:function(){
                 let totalPics=new Array();
                 totalPics=this.totalPhotos;
                let smallPics = totalPics.slice(8);
                return smallPics;
            },
            getRollPics:function(){
                let rollPics = this.totalPhotos.slice(0,8);
                let subLastPics = this.totalPhotos.slice(6,8);   //尾元素副本
                let subFirstPics = this.totalPhotos.slice(0,2);     //首元素副本
                rollPics = [...subLastPics,...rollPics,...subFirstPics];
                return rollPics;
            } 
        },
        methods: {
            income:function(){
                let self=this;
                 self.totalPhotos=[];
                var url="http://39.108.149.106/api/lastest";
                fetch(url,{
                    mode:'cors',
                    method:'GET',
                    headers:{
                        'Access-Control-Allow-Credentials':true,
                        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
                    },
                    credentials:"include",
                }).then(function(response){
                	console.log("response:\n"+response.length);
                    response.json().then((json)=>{
                        for(let item of json){
                            console.log(item)
                            self.totalPhotos.push(item) 
                        }
                    },function(err){
                        console.log("json解析失败\n"+err);
                    });
                },function (err) {
                    console.log("网络请求失败\n"+err);
                })
            },
            leftMove: function (){
                if (this.focus===0) {
                    if (!this.animated) {   
                        this.animated = true;   //动画过程中使按键失效
                        if (this.counter!==2) { //如果不是第一张图片，只是左移一张
                            this.counter--;
                            this.oLeft = this.oLeft+75;
                            let self = this;
                            window.setTimeout(function() { //动画完成后恢复按键功能
                                self.animated = false;
                            }, 1000);
                        }else {     //如果是第一张图片，左移一张到达最后一张副本处
                            this.counter--;
                            this.oLeft = this.oLeft+75;
                            let self = this;
                            window.setTimeout(function (){ 
                                //完成动画后，把副本图拉回最后一张，此阶段setTransition='none'关闭动画效果
                                self.counter = 9;
                                self.oLeft = self.oLeft-75*8;
                                self.setTransition = 'none';
                                self.animated = false;
                            },1000);
                        }
                        this.setTransition = 'all 1s ease';
                    }
                }else {
                    if (this.itemCounter!==1) {
                        this.itemCounter--;
                        if (this.itemCounter%5==0) {
                            this.mLeft = this.mLeft+89.844;
                        }
                    }
                }
            },
            rightMove: function (){
                if (this.focus===0) {
                    if (!this.animated) {
                        this.animated = true;
                        if (this.counter!==9) {
                            this.counter++;
                            this.oLeft = this.oLeft-75;
                            let self = this;
                            window.setTimeout(function() {
                                self.animated = false;
                            }, 1000);
                        }else {
                            this.counter++;
                            this.oLeft = this.oLeft-75;
                            let self = this;
                            window.setTimeout(function (){
                                self.counter = 2;
                                self.oLeft = self.oLeft+75*8;
                                self.setTransition = 'none';
                                self.animated = false;
                            },1000);
                        }
                        this.setTransition = 'all 1s ease';
                    }
                } else {
                        if(this.itemCounter!==this.getSmallPics.length){    
                         this.itemCounter++;
                            if ((this.itemCounter-6)%5===0) {
                            this.mLeft = this.mLeft-89.844
                            } 
                        }
                }
            },
            enterItem: function (){
                router.push({name:'Panorama'});
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
        overflow: hidden;
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
    #latest-new>.spots-title {
        font-family: '小米兰亭';
        font-size: 2.407vh;
        line-height: 2.407vh;
        color: #f1f1f1;
        letter-spacing: 2px; 
        position: absolute;
        top: 64.815vh;
        left: 6.25vw;
    }
    #latest-new>.small-pics-container {
        width: 357.031vw;
        height: 27.778vh;
        position: absolute;
        top: 69.444vh;
        transition: all 1s ease;
    }
    #latest-new>.small-pics-container .small-pics {
        width: 15.625vw;
        height: 27.778vh;
        position: absolute;
        top: 0;
        transition: all 0.6s ease;
    }
</style>

