<template>
  <div id="album">
  
  <div id="panorama">
      <transition name="show-photo">
        <div v-if="showPhoto" id="icypano"></div>
      </transition>
      <div class="pic-info">
        <div>
            <img :src="profile" class="icon">
            <p class="title">&nbsp&nbsp@{{author}}&nbsp&nbsp{{date}}&nbsp&nbsp{{spot}}</p>
        </div>
        <div>
            <img :src="visitedIcon" class="visited-icon">
            <p class="visited-amount">{{visitedAmount}}</p>
        </div>
        <div>
            <img :src="likeIcon" class="like-icon">
            <p class="like-amount">{{likeAmount}}</p>
        </div>
      </div>
      <div class="navigation" v-if="showBar">
        <ul>
            <li><div class="like no-focus" v-if="like" v-show="counter!==1"><img :src="icons[0]"></div>
                <div class="like no-focus" v-else v-show="counter!==1"><img :src="icons[1]"></div>
                <div class="like focus" v-if="like" v-show="counter===1"><img :src="icons[0]"></div>
                <div class="like focus" v-else v-show="counter===1"><img :src="icons[1]"></div> 
            </li>
            <li><div class="continute no-focus" v-show="counter!==2"><p>继续欣赏</p></div>
                <div class="continute focus" v-show="counter===2"><p>继续欣赏</p></div>
            </li>
            <li><div class="prev-photo no-focus" v-show="counter!==3"><div><img :src="icons[2]"><p>上一张</p></div></div>
                <div class="prev-photo focus" v-show="counter===3"><div><img :src="icons[2]"><p>上一张</p></div></div>
            </li>
            <li><div class="next-photo no-focus" v-show="counter!==4"><div><img :src="icons[3]"><p>下一张</p></div></div>
                <div class="next-photo focus" v-show="counter===4"><div><img :src="icons[3]"><p>下一张</p></div></div>
            </li>
            <li><div class="comment no-focus" v-show="counter!==5"><div><img :src="icons[4]"><p>评&nbsp&nbsp&nbsp论</p></div></div>
                <div class="comment focus" v-show="counter===5"><div><img :src="icons[4]"><p>评&nbsp&nbsp&nbsp论</p></div></div>
            </li>
            <li><div class="detail no-focus" v-show="counter!==6"><div><img :src="icons[5]"><p>详&nbsp&nbsp&nbsp情</p></div></div>
                <div class="detail focus" v-show="counter===6"><div><img :src="icons[5]"><p>详&nbsp&nbsp&nbsp情</p></div></div>
            </li>
        </ul>
    </div>
    <transition name="show-comments">
      <comment v-if="showComments"></comment> 
    </transition>
    <transition name="show-details">
      <detail v-if="showDetails" :description="description"></detail>
    </transition> 
    {{setKey}}
  </div>

    <button @click="add">增加</button>
    <button @click="decrease">减少</button>
  </div>
</template>

<script>
  import icon from '../assets/panorama/profile_icon.png'
  import visited from '../assets/panorama/visited_icon.png'
  import liked from '../assets/panorama/liked.png'

  import icon1 from '../assets/panorama/liked_big.png'
  import icon2 from '../assets/panorama/no_like_big.png'
  import icon3 from '../assets/panorama/prev_icon.png'
  import icon4 from '../assets/panorama/next_icon.png'
  import icon5 from '../assets/panorama/comment_icon.png'
  import icon6 from '../assets/panorama/detail_icon.png'

  import comment from './Comment'
  import detail from './Detail'
  import router from '../router/index'
  import IcyPano from 'icy-panorama'

  export default {
    name: 'album',
    components:{
      comment,
      detail
    },
    data () {
      return {
        panorama: {},
        panoHandle: {},
        albumId: this.$route.params.albumId,
        photoId: this.$route.params.photoId,
        provinceName: this.$route.params.provinceName,
        cityName: this.$route.params.cityName,
        author: 'Mike',
                date: '2017/4/21',
                spot: '广州塔',
                showBar: false,
                like: true,
                showComments: false,
                showDetails: false,
                showPhoto: false,
                index: 0, //图片序号，初始为0
                focus: 1, //focus=1,2,3,  1：主页面；2：评论页；3：详情页
                profile: icon,
                likeIcon: liked,
                visitedIcon: visited,
                visitedAmount: 100,
                likeAmount: 60,
                counter: 0,
                animated: false,
                description: '',
                icons:[
                    icon1,
                    icon2,
                    icon3,
                    icon4,
                    icon5,
                    icon6,
                ],
                photo:{},
                currentPic:""
      }
    },
    mounted: function (){
        this.getPhoto();
    },
    updated: function () {
        let container = this.$el.children[0].children[0]
        this.panorama = new IcyPano({
            container: container,
            picUrl: this.currentPic                                 
        });

        this.panorama.start();
        this.panoHandle = this.panorama.TVOSOperation();
    },
    methods: {
      add: function () {
        this.photoId++
        router.push(`/provinces/cities/${this.provinceName}/${this.cityName}/spots/${this.albumId}/${this.photoId}`)
        this.getPhoto();
      },
      decrease: function () {
        this.photoId--
        router.push(`/provinces/cities/${this.provinceName}/${this.cityName}/spots/${this.albumId}/${this.photoId}`)
        this.getPhoto();
      },
      likeOrCancel: function () { //点赞或者取消，需要完善的是把点赞数统计加入进来
                this.like = !(this.like);
                //这里向后台发送点赞或者取消
            },
            getPhoto:function(){
              let self = this;
              var requestUrl = "http://39.108.149.106/api/provinces/cities/"+this.provinceName+"/"+this.cityName+"/spots/"+this.albumId+"/"+this.photoId;
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

                  self.photo = json;
                  self.showPicture();

                },function(err){
                  console.log("json解析失败\n"+err);
                });
              },function(err){
                console.log("网络请求失败\n"+err);
              })
            },
            hideNavBar: function () { //隐藏操作栏
                this.showBar = false;
                this.panorama.TVOSOperation();
            },
            showPicture: function() {
                this.currentPic = this.parseUrl(this.photo.url);
                this.spot = this.parseName(this.photo.photoName);
                this.date = this.parseDate(this.photo.createTime);
                this.likeAmount = this.photo.likeAmount;
                let visited = this.photo.visitedAmount;
                this.visitedAmount = visited!=null?visited:0;
                this.author = this.photo.username;
                this.description = this.photo.photoDescription;
                this.showPhoto = true;
                
            },
            askForPrevPic: function () {
                // alert("请求上一张图片");
                if (this.photoId == 0) {
                    console.log('没有前一张了');
                    return;
                }else {

                    this.decrease();
                    // if (!this.animated) {
                    //     this.animated = true;
                    //     this.showPhoto=false;
                    //     var self = this;
                    //     window.setTimeout(function() { //设置图片切换时延迟，以产生原图片退出和新图片进入时动画
                    //         self.showPicture(--self.index);
                    //         self.showPhoto=true;
                    //     },700);
                    //     window.setTimeout(function(){   //等待新图片进入后点击左右键才有效
                    //         self.animated = false;
                    //     },1400);
                    // }
                }
            },
            askForNextPic: function () {
                if(this.photo.last){
                    console.log('没有下一张了');
                    return;
                }else {
                    this.add();
                }
            },
            parseUrl: function(url) {
                return "http://39.108.149.106"+url;
            },
            parseDate: function(createTime){
                let newDate = new Date(parseInt(createTime));
                let year = newDate.getFullYear();
                let month = newDate.getMonth()+1;
                let day = newDate.getDate();
                
                if (month<10) {
                    month = '0'+month;
                }
                if (day<10) {
                    day = '0'+day;
                }
                
                return year+'/'+month+'/'+day;
            },
            parseName: function (title){
                let str = "-";
                return title.split(str)[0];
            },
            leftMove: function (){
                if (this.focus===1) {
                    if (this.counter!==1) {
                        this.counter--;
                    }
                }
            },
            rightMove: function (){
                if (this.focus===1) {
                    if(this.counter!==6) {
                        this.counter++;
                    }
                }
            },
            barReturn: function(){
                if (this.focus===1) {
                    if (!this.showBar) {
                        this.showBar = true;
                        this.panorama.suspendTVOSOperation(this.panoHandle);
                        this.counter = 0;
                    }
                }
            },
            enterItem: function (){
                if (this.focus===1) {
                    switch (this.counter) {
                        case 1:
                            this.likeOrCancel();
                            break;

                        case 2:
                            this.hideNavBar();
                            break;

                        case 3: 
                            this.askForPrevPic();
                            break;

                        case 4: 
                            this.askForNextPic();
                            break;

                        case 5: 
                            if (!this.showComments) {
                                this.showComments = true;
                            }
                            this.focus = 2;
                            break;

                        case 6: 
                            if (!this.showDetails) {
                                this.showDetails = true;
                            }
                            this.focus = 3;
                            break;
                        default:
                            break;
                    }
                }else if (this.focus===2) {
                    this.showComments = false;
                    this.focus = 1;
                }else {
                    this.showDetails = false;
                    this.focus = 1;
                }
            }
    },
    computed:{
      setKey:function(){
            let self = this;
            document.onkeydown = function(event){
                if(self.counter===0&&self.focus===1){
                    self.counter=1;
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
                        case 27:;
                        case 82:
                            self.barReturn();   //这里先用down键替代返回键
                            break;
                        case 4:
                            break;
                        }
                    }
                }
            },
    }
  }
</script>


<style>
  #panorama {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background: white;
        overflow: hidden;
    }
    #panorama .panorama-pic {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
    }
    #panorama>.pic-info {
        width: 100vw;
        height: 20vh;
        position: absolute;
        top: 0;
        left: 0;
        /* border: 2px solid yellow; */
    }
    #panorama>.pic-info>div>.icon {
        width: 1.927vw;
        height: 3.426vh;
        position: absolute;
        top: 1.481vh;
        left: 0.833vw;
    }
    #panorama>.pic-info>div>.title {
        position: absolute;
        top: 1.852vh;
        left: 2.76vw;
        font-family: "小米兰亭";
        font-size: 2.222vh;
        color: #f1f1f1;
        text-shadow: 0 0 0.278vh #000000; 
    }
    #panorama>.pic-info>div>.visited-icon {
        width: 1.458vw;
        height: 1.667vh;
        position: absolute;
        top: 5.185vh;
        left: 3.646vw;
    }
    #panorama>.pic-info>div>.visited-amount {
        position: absolute;
        top: 5.185vh;
        left: 5.365vw;
        font-family: "小米兰亭";
        font-size: 1.852vh;
        color: #f1f1f1;
        text-shadow: 0 0 0.278vh #000000; 
    }
    #panorama>.pic-info>div>.like-icon {
        width: 1.042vw;
        height: 1.667vh;
        position: absolute;
        top: 5.185vh;
        left: 8.333vw;
    }
    #panorama>.pic-info>div>.like-amount {
        position: absolute;
        top: 5.185vh;
        left: 9.635vw;
        font-family: "小米兰亭";
        font-size: 1.852vh;
        color: #f1f1f1;
        text-shadow: 0 0 0.278vh #000000; 
    }
    #panorama>.navigation {
        width: 60vw;
        height: 12.037vh;
        position: absolute;
        top: 77.315vh;
        left: 24.74vw;
    }
    #panorama>.navigation>ul {
        position: absolute;
        top: 0;
        left: 0;
        text-decoration: none;
    }
    #panorama>.navigation li {
        position: relative;
        float: left;
    }
    #panorama>.navigation li>div {
        width: 6.771vw;
        height: 12.037vh;
        margin-right: 1.979vw;
        margin-top: 0;
        padding: 0;
    }
    #panorama .no-focus {
        background-color: #7d7070;
        opacity: 0.5;
    }
    #panorama .focus {
        background-color: #dddddd;
        opacity: 0.7;
    }
    #panorama .like>img {
        width: 4.167vw;
        height: 6.481vh;
        position: absolute;
        top: 2.778vh;
        left: 1.302vw;
    }
    #panorama .continute>p {
        width: 4.167vw;
        height: 7.407vh;
        position: absolute;
        top: 2.265vh;
        left: 1.462vw;
        margin: 0;
        padding: 0; 
        font-family: "小米兰亭";
        color: rgba(0, 0, 0, 0.65);
        font-size: 3.241vh;
        letter-spacing: 0.20vw;
        line-height: -0.926vh;
        text-align: center;
    }

    #panorama .prev-photo>div{
        width: 4.167vw;
        height: 9.722vh;
        position: absolute;
        top: 2.315vh;
        left: 1.302vw;
    }
    #panorama .next-photo>div{
        width: 4.167vw;
        height: 9.722vh;
        position: absolute;
        top: 2.315vh;
        left: 1.302vw;
    }
    #panorama .comment>div{
        width: 4.167vw;
        height: 9.722vh;
        position: absolute;
        top: 2.315vh;
        left: 1.302vw;
    }
    #panorama .detail>div{
        width: 4.167vw;
        height: 9.722vh;
        position: absolute;
        top: 2.315vh;
        left: 1.302vw;
    }
    #panorama .prev-photo>div>img{
        width: 3.281vw;
        height: 4.537vh;
        position: absolute;
        top: 0;
        left: 0.468vw;
    }
    #panorama .next-photo>div>img{
        width: 3.281vw;
        height: 4.537vh;
        position: absolute;
        top: 0;
        left: 0.468vw;
    }
    #panorama .comment>div>img{
        width: 3.021vw;
        height: 4.907vh;
        position: absolute;
        top: 0;
        left: 0.573vw;
    }
    #panorama .detail>div>img{
        width: 2.917vw;
        height: 1.111vh;
        position: absolute;
        top: 1.296vh;
        left: 0.625vw;
    }
    #panorama li>div>div>p {
        width: 4.167vw;
        height: 2.87vh;
        position: absolute;
        top: 5.2vh;
        left: 0.3vw;
        font-size: 2.037vh;
        letter-spacing: 0.0556vh;
    }
    #icypano {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
    }
    .show-photo-enter-active,.show-photo-leave-active {
        transition: all 0.7s ease;
    }
    .show-photo-enter {
        opacity: 0.3; 
        transform: skew(75deg,75deg);
    }
    .show-photo-leave-to {
        opacity: 0.3; 
        transform: skew(75deg,75deg);
    }
    .show-comments-enter-active {
        transition: all 0.7s ease;
    }
    .show-comments-leave-active {
        transition: all 0.7s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .show-comments-enter{
        transform: translateX(20vw);
        opacity: 0;
    }
    .show-comments-leave-to {
        transform: translateX(20vw);
        opacity: 0;
    }

    .show-details-enter-active,.show-details-leave-active {
        transition: all 0.5s ease;
    }
    .show-details-enter{
        transform: skewX(90deg); 
    }
    .show-details-leave-to {
        transform: skewX(90deg); 
    }
</style>
