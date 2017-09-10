<template>
  <div id="favorite-new">
      <img :src="bg">
      <p class="title">{{title}}</p>
      <p class="photo-amount">{{amount}} Photos</p>
      <date class="time"></date>
       <picture-dialog  
        v-if="loadComplete"
        :date="firstPic.createTime" 
        :author="firstPic.username" 
        :pic_url="firstPic.url"  
        :like="firstPic.likeAmount" 
        :title="firstPic.photoName" 
        :visited="1" 
        :type="firstPicType"
        :style="{transform:'scale('+firstPicSize+')',boxShadow:firstPicShadow}"
        :first-pic-size="change"
        :first-pic-shadow="change"
        class="first-pic">
      </picture-dialog> 
      <div id="slide-img-container">
        <div :style="{left:oLeft+'vw'}">
          <ul>
            <li v-for="(item,index) in images" :key="item.photoId">
              <picture-dialog
                :date="item.createTime" 
                :author="item.username" 
                :pic_url="item.url" 
                :like="item.likeAmount" 
                :title="item.photoName" 
                :visited="item.visited" 
                :type="counter===index+2?4:0"
                :style="{top:(index%2)*31.48+'vh',
                left:(Math.floor(index/2))*17.708+'vw',
                transform:'scale('+(counter===index+2?1.1333:1)+')',
                boxShadow:counter===index+2?'0 6px 20px #222222':'none'}"
                class="small-pic">
              </picture-dialog>
            </li>
          </ul>
        </div>
      </div>
      {{setKey}}
  </div>
</template>
<script>
    import Date from './Date'
    import PictureDialog from './PictureDialog'
    import router from '../router/index'

    import bg from '../assets/favorite/bg.png'

    import bg0 from '../assets/favorite/bg0.jpg'
    import bg1 from '../assets/favorite/bg1.jpg'
    import bg2 from '../assets/favorite/bg2.jpg'
    import bg3 from '../assets/favorite/bg3.jpg'
    import bg4 from '../assets/favorite/bg4.jpg'
    import bg5 from '../assets/favorite/bg5.jpg'
    import bg6 from '../assets/favorite/bg6.jpg'
    import bg7 from '../assets/favorite/bg7.jpg'
    import bg8 from '../assets/favorite/bg8.jpg'
    import bg9 from '../assets/favorite/dongman1.jpg'
    import bg10 from '../assets/favorite/dongman2.jpg'
    import bg11 from '../assets/favorite/dongman3.jpg'
    import bg12 from '../assets/favorite/dongman4.jpg'
    import bg13 from '../assets/favorite/dongman5.jpg'
    import bg14 from '../assets/favorite/dongman6.jpg'
    import bg15 from '../assets/favorite/dongman7.jpg'

    export default {
        data (){
            return{
                bg: bg,
                title: "我的收藏",
                images: [],   //后台数据接口
                firstPic: {},
                amount: 0,
                firstPicType: 0,
                oLeft: 2.084,
                counter: 0,
                firstPicSize: 1,
                firstPicShadow: 'none',
                loadComplete:false,
            }
        },
        mounted: function (){
            // var self = this;
            // fetch('http://39.108.149.106/api/user/favorite', {
            //     method: 'GET',
            //     mode: 'cors',
            //     headers: {
            //     'Access-Control-Allow-Credentials': true,
            //     'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
            //     },
            //     credentials: "include"
            // }).then(function(response) {
            //     if(response.headers.get('Content-Type')==='text/html'){
            //     // console.log('登录失败');
            //         router.replace({name:'User'});
            //     }else {
            //     // router.replace({name:'User'});
            //         response.json().then(function(data){
            //             self.amount = data.length;
            //             let tmp = data.reverse();
            //             let [first,...rest] = tmp;
            //             self.firstImg = first;
            //             self.images = rest;
            //         });
            //     }
            // });

            var self = this;
            fetch('http://39.108.149.106/api/user/favorite', {
                method: 'GET',
                mode: 'cors',
                headers: {
                'Access-Control-Allow-Credentials': true,
                'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
                },
                credentials: "include"
            }).then(function(response) {
                return response.json();
            }).then(function(getData) {
                self.amount = getData.length;
                let tmp = getData.reverse();
                let [first,...rest]=tmp;
                self.firstPic = first;
                self.images = rest;
                self.loadComplete = true;
            });
        },
        computed: {
            setKey:function(){
                let self = this;
                document.onkeydown = function(event){
                    if(self.counter===0){
                        self.counter=1;
                    }else{
                        switch(event.which){
                            case 37:
                            //left
                            self.leftMove();
                            
                            break;
                            case 38:
                            //up
                            self.upMove();
                            break;
                            case 39:
                            //right
                            self.rightMove();
                            break;
                            case 40:
                            //down
                            self.downMove();
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
            change: function (){
                if (this.counter===1) {
                    this.firstPicSize = 1.0625;
                    this.firstPicShadow = '0 30px 80px #303030';
                    this.firstPicType = 4;
                }else{
                    this.firstPicSize = 1;
                    this.firstPicShadow = 'none';
                    this.firstPicType = 0;
                }
            }
        },
        methods: {
            leftMove: function (){
                if (this.counter!==1) {
                    if (this.counter===2) {
                        this.counter--;
                    }else{
                        this.counter = this.counter-2;
                    }
                    if (Math.floor(this.counter/2)%3===0&&this.counter!==1) {
                        //通过除以2，把两行的情况归并到一类，同时要把第一张图片的情况排除
                        this.oLeft = this.oLeft+53.124;
                    }
                }
            },
            rightMove: function (){
                if (this.counter!==this.amount-1&&this.counter!==this.amount) {
                    if (this.counter===1) {
                        this.counter++;
                    }else{
                        this.counter = this.counter+2;
                    }
                    if ((Math.floor(this.counter/2)-4)%3===0&&(Math.floor(this.counter/2)-4)!==-3) {
                        //(Math.floor(this.counter/2)-4)!==-3是把小图第一列的情况排除
                        this.oLeft = this.oLeft-53.124;
                    }
                }
            },
            upMove: function (){
                if (this.counter!==1&&this.counter%2===1) {
                //排除首张大图的情况，小图位于第二行可以使用up键
                this.counter--;
                }
            },
            downMove: function (){
                if (this.counter%2===0&&this.counter!==this.amount) {
                //小图位于第一行可以使用down键，同时排除最后一张小图在第一行的情况
                this.counter++;
                }
            },
            enterItem: function (){
                this.moreDetails();
            },
            moreDetails: function (){
                // let photos = [];
                // photos.push(this.firstPic);
                // photos = [...photos,...(this.images)];
                // photos = JSON.stringify(photos);
                // localStorage.setItem('photos',photos);
                // let currentId = JSON.stringify(this.counter-1);
                // localStorage.setItem('currentId',currentId);
                // router.push({name:'Panorama'});
                router.push({name:'Album',params:{provinceName:'广东',cityName:'广州',albumId:0,photoId:0}});
            },
        },
        components: {
            Date,
            PictureDialog,
        }
    }
</script>

<style>
    #favorite-new {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
    }
    #favorite-new>img{
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
    }
    #favorite-new>.title {
        font-family: "小米兰亭";
        font-size: 5.556vh;
        color: #f1f1f1;
        letter-spacing: 2px;
        position: absolute;
        top: 6.481vh;
        left: 6.25vw;
    }
    #favorite-new>.photo-amount {
        font-family: "小米兰亭";
        font-size: 2.222vh;
        color: #f1f1f1;
        letter-spacing: 0.093vh;
        position: absolute;
        top: 14vh;
        left: 6.25vw;
    }
    #favorite-new>.first-pic {
        width: 33.33vw;
        height: 59.26vh;
        position: absolute;
        top: 20.37vh;
        left: 6.25vw;
        transition: all 0.5s ease;
    }
    #slide-img-container {
        width: 68.75vw;
        height: 100vh;
        /* border: 1px solid red;        */
        position: absolute;
        top: 0vh;
        left: 39.586vw;
        overflow: hidden;
    }
    #slide-img-container>div {
        width: 68.75vw;
        height: 59.26vh;
        position: absolute;
        /* border: 1px solid yellow;       */
        top: 20.37vh;
        transition: all 1s ease;
    }
    
    #slide-img-container>div .small-pic {
        width: 15.625vw;
        height: 27.78vh;
        position: absolute;
        /* margin-right: 2.083vw;
        margin-bottom: 3.704vh; */
        transition: all 0.5s ease;
    }
</style>

