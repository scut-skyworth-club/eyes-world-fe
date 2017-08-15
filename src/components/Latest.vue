<template>
<div id="Latest">
    <div id="container" v-on:mouseover="stop" v-on:mouseout="player">
        <head>
        <title>最新推荐</title>
        </head>
        <div id="box1">
        <p id="text">最新推荐</p>
        </div>
        <a href="javascript:;" id="prev" class="arrow" @click="animate(88.05)"><</a>
        <a href="javascript:;" id="next" class="arrow" @click="animate(-88.05)">></a>
        <div id="list" :style="listLeft">
            <picture-dialog 
                class="Lpic"
                v-for="item in groceryList"
                v-bind:key="item.id"
                :isFoucs="item.isFoucs"
                :date="item.date"
                :author="item.author"
                :pic_url="item.tu"
                :like="item.like"
                :title="item.title"
                :visited="item.visited"
                :type="item.type"
                >
            </picture-dialog>
            
        </div>
    <div id="addshadow">
    </div>
    <div id="box2">
    <p id="time">{{getDay}}&nbsp;&nbsp;|&nbsp;&nbsp;{{time}}</p>
    </div>
    </div>
    <div id="spotsName" :style="spotFont">景点TOP20</div>
    <div id="total">
        <div id="smallpics">
            <picture-dialog 
                v-for="item in supAlbumList"
                :class="item.type==4?'selected':'noSelected'"
                v-bind:key="item.id"
                :date="item.date"
                :author="item.author"
                :pic_url="item.tu"
                :like="item.like"
                :title="item.title"
                :visited="item.visited"
                :type="item.type"
                >
                <a>{{item}}</a>
            </picture-dialog>
        </div>
    </div>
    <!-- <div id="group1">
    <browsepic-dialog spot="广州" :albumlist="supAlbumList"></browsepic-dialog>
    </div> -->
</div>
</template>

<script>
    import bg1 from '../assets/bg1.jpg'
    import bg2 from '../assets/bg2.jpg'
    import tu1 from '../assets/tu1.jpg'
    import tu2 from '../assets/tu2.jpg'
    import tu3 from '../assets/tu3.jpg'
    import tu4 from '../assets/tu4.jpg'
    import tu5 from '../assets/tu5.jpg'
    import Vue from 'vue'
    import Router from 'vue-router'

    import $ from 'jquery'

let TotalAlumList = [{
       id: 0,
       date: "2017/08/01",
       author: "XXX",
       title: "海心沙",
       like: "200",
       visited: "100",
       isFoucs: true,
       tu: bg1,
       type: 0,
    }, {
       id: 1,
       date: "2017/09/09",
       author: "XXX",
       title: "遥",
       like: "200",
       visited: "100",
       isFoucs: true,
       tu: bg2,
       type: 0,
    }, {
       id: 2,
       date: "2016/02/01",
       author: "XXX",
       title: "远",
       like: "200",
       visited: "100",
       isFoucs: true,
       tu: bg1,
       type: 0,
    }, {
       id: 3,
       date: "2017/08/01",
       author: "XXX",
       title: "海心沙",
       like: "200",
       visited: "100",
       isFoucs: true,
       tu: bg2,
       type: 0,
    }, {
       id: 4,
       date: "2017/08/01",
       author: "XXX",
       title: "海心沙",
       like: "200",
       visited: "100",
       isFoucs: true,
       tu: bg2,
       type: 0,
    }, {
       id: 5,
       date: "2017/08/01",
       author: "XXX",
       title: "海心沙",
       like: "200",
       visited: "100",
       isFoucs: true,
       tu: bg1,
       type: 0,
    }, {
       id: 6,
       date: "2017/08/01",
       author: "XXX",
       title: "海心沙",
       like: "200",
       visited: "100",
       isFoucs: true,
       tu: bg2,
       type: 0,
    }, {id:0,date:"2017/08/01",author:"XXX",title:"海心沙",like:"100",visited:"100",isFoucs:true,tu:tu5,type:4,},
    {id:1,date:"2017/09/09",author:"XXX",title:"遥",like:"100",visited:"100",isFoucs:true,tu:tu1,type:4,},
    {id:2,date:"2016/02/01",author:"XXX",title:"远",like:"100",visited:"100",isFoucs:true,tu:tu2,type:4,},
    {id:3,date:"2017/08/01",author:"XXX",title:"海心沙",like:"100",visited:"100",isFoucs:true,tu:tu3,type:4,},
    {id:4,date:"2017/08/01",author:"XXX",title:"海心沙",like:"100",visited:"100",isFoucs:true,tu:tu4,type:4,},
    {id:5,date:"2017/08/01",author:"XXX",title:"海心沙",like:"100",visited:"100",isFoucs:true,tu:tu5,type:4,},
    {id:6,date:"2017/08/01",author:"XXX",title:"海心沙",like:"100",visited:"100",isFoucs:true,tu:tu1,type:4,}];

    let supAlbumListTemp = TotalAlumList.slice(0, 7);
    let albumListTemp = TotalAlumList.slice(7, 13);



    var list = document.getElementById('list');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var timer;
    var container = document.getElementById('container');
    export default {
        name:'Latest',
        data(){
            return {
                selected:0,
                offset:0,
                time: '00:00',
                msg:'最新推荐组件',
                groceryList: albumListTemp,
                supAlbumList: supAlbumListTemp,
                listLeft:{
                    left:"-81.8vw",
                },
                spotFont:{
                    fontSize:"1.35vw",
                    fontFamily:"小米兰亭",
                    color:"#f1f1f1",
                },
            }
        },
        methods:{
            animate:function(offset){
                var newLeft = parseFloat(this.listLeft.left) + offset;
                // list.style.left = newLeft + 'vw';
                
                if(newLeft<-434){
                    newLeft = -81.8;
                }
                if(newLeft>-81.8){
                    newLeft = -434;
                }

                this.listLeft = {
                    left:newLeft+"vw",
                }

            },
            player:function(){
                timer = setInterval(this.nextPage, 1500)
            },
            stop:function(){
                clearInterval(timer);
            },
            nextPage:function(){
                this.animate(-88.05);
            },
            setRefreshTime: function() {
                    var hour = new Date().getHours();
                    var minute=new Date().getMinutes();
                    if(hour<10){
                        hour="0"+hour;
                    }
                    if(minute<10){
                        minute="0"+minute;
                    }
                    this.$data.time=hour+":"+minute;
            },
            select_add:function(){
                (this.supAlbumList[this.selected]).type=0;
                this.selected++;
                if(this.selected>this.supAlbumList.length){
                    this.selected--;
                }
                (this.supAlbumList[this.selected]).type=4;
            },
            select_sub:function(){
                (this.supAlbumList[this.selected]).type=0;
                this.selected--; 
                if(this.selected<0){
                    this.selected++;
                }
               (this.supAlbumList[this.selected]).type=4;
            },
            chooseDemo:function(){
                    document.onkeydown=(event)=>{
                        if(event.which==40){
                            // alert("hh");
                            if($("#addshadow").css("box-shadow") === "none"){
                                this.stop();
                                $("#total").css("margin-left","6.25vw");
                                $("#smallpics").css("margin-left","0");                                
                                (this.supAlbumList[0]).type=0;
                                $("#addshadow").css("box-shadow","0 0 2.55vw #000000");
                            }else{
                                $("#addshadow").css("box-shadow","");
                                $("#total").css("margin-left","5.15vw");
                                $("#smallpics").css("margin-left","1.1vw");
                                $("this.supAlbumList[0]").css("margin-right","1.1vw");
                                (this.supAlbumList[0]).type=4;
                                this.player();
                            }
                        }
                        if(event.which==38){
                            if($("#addshadow").css("box-shadow") !== "none"){
                                $("#addshadow").css("box-shadow","");
                                $("#total").css("margin-left","5.15vw");
                                $("#smallpics").css("margin-left","1.1vw");
                                $("this.supAlbumList[0]").css("margin-right","1.1vw");
                                (this.supAlbumList[0]).type=4;
                                this.player();
                            }
                            else{
                                this.stop();
                                $("#total").css("margin-left","6.25vw");
                                $("#smallpics").css("margin-left","0");                                
                                (this.supAlbumList[0]).type=0;
                                $("#addshadow").css("box-shadow","0 0 2.55vw #000000");
                            }
                        }
                        if(event.which==39){
                            if($("#addshadow").css("box-shadow") !== "none"){
                                $("#addshadow").css("box-shadow","");
                                this.animate(-88.05);
                                setTimeout(function(){$("#addshadow").css("box-shadow","0 0 2.55vw #000000")},550);
                            }
                        }
                        if(event.which==37){
                            if($("#addshadow").css("box-shadow") !== "none"){
                                $("#addshadow").css("box-shadow","");
                                this.animate(88.05);
                                setTimeout(function(){$("#addshadow").css("box-shadow","0 0 2.55vw #000000")},550);
                            }
                        }   
                    }
                /* var num=0;
                for(i=0;i<=this.supAlbumList.length;i++){
                    if (this.supAlbumList[i].attr("box-shadow")!=none){
                        num=1;
                    }
                }
                if(num==0){
                    document.onkeydown=function(event)
                } */
                /* document.onkeydown=function(event){
                    if ($(document).scrollTop()<=0.35*$(window).height()){
                        if (event.which==13){
                            this.stop;
                        }
                        else if(event.which==39){
                                this.animate(-88.05);
                        }
                        else if(event.which==37){
                                this.animate(88.05);
                        }
                    }
                    } */
            },
        },
        computed:{
            getDay:function(){
                var day=["日","一","二","三","四","五","六"];
                return "星期"+day[new Date().getDay()];
            },
        },
        mounted() {
            setInterval(this.setRefreshTime,1000);
            this.chooseDemo();
        }
    };

    /* $(window).scroll(function(){
        var that=this;
        if($(document.scrollTop())>=$(document).height()-$(window).height()){
            htmlobj=$.ajax({
                type:"get",
                dataType:"json",
                success:function(){
                    active();
                }
            });
            $("#Latest").append(html.responseText);
        }
    }) */
</script>


<style>
*{
    margin: 0;
    padding: 0;
    text-decoration: none;
}

body{
    padding: 0;
    overflow: hidden;
}
#container{
    width: 100vw;
    height: 44.4vh;
    position: relative;
      /* overflow: hidden;    */
}
#list{
    width: 616.35vw;
    height: 44.4vh;
    position: absolute;
    z-index: 1;
    top:14.8vh;
    transition: all 0.6s;
    /* overflow: hidden; */
}
#group1{
    width:200vw;
    position: absolute;
    /* margin-left:6.1vw; */
    top:64.8vh;
     overflow: hidden; 
    /* overflow-y: scroll; */
}
#box1{
    position: absolute;
    top:4.18vh;
    left:6.1vw;
    z-index: 999;
}
#text{
    color: #fff;
    font-size: 3.12vw;
    font-family:"小米兰亭Light";
    z-index: 999;
}
#box2{ 
    position: absolute;
    top:4.18vh;
    right:6.1vw;
    z-index: 999;
}
#Latest{
height:100vh;
}
#time{
    color: #f1f1f1;
    font-size: 1.25vw;
    font-family: "小米兰亭Light";
    z-index:999;
}
body{
    background: url("../assets/blue.png") no-repeat;
    height: 100%;
    width: 100%;
    background-size: cover;
}
.arrow {
cursor: pointer;
display: none; 
line-height: 12vh;
text-align: center;
font-size: 5vw;
font-weight: bold;
width: 5vw;
height: 12vh;
position: absolute;
z-index: 4;
top: 40vh;
background-color: RGBA(0, 0, 0, .3);
color: #fff;
}
.arrow:hover {
background-color: RGBA(0, 0, 0, .7);
}
#container:hover .arrow {
display: block;
}
#prev {
left: 6.25vw;
}
#next {
right: 6.25vw;
}
#addshadow{
display: block;
position: absolute;
height:44.4vh;
top:14.8vh;
width:87.5vw;
left: 6.2vw;
z-index:3
}
 /* #addshadow:hover {
box-shadow: 0 0 2.55vw;
}  */
#spotsName{
    position: absolute;
    top:63vh;
    margin-left: 6.25vw;
}
#total{
    width:200vw;
    position: absolute;
    top:66vh;
    overflow: hidden; 
    float:left; 
    margin-left: 6.25vw;
    padding-top: 2vh;
}
#smallpics{
    height:31.3vh;
    transition: all 0.6s;
}
.noSelected{
    margin-right:2.34vw;
    width:15.6vw;
    height: 28vh;
}
.selected{
    margin-right:1.34vw;
    box-shadow: 0 0 2.55vw rgba(0,0,0,0.7);
    vertical-align:top;
    width: 17.7vw;
    height: 31.5vh;
}
.Lpic{
    height: 44.4vh;
    width:87.5vw;
    float:left;
    margin-right:0.55vw;
}
/* .active{
    box-shadow:
} */
</style>


/* $("#id").removeClass('active')
$("#id2").addClass('active') */