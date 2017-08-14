<template>
  <div id="Collage">
    <!-- {{msg}} -->
     <search id="searchBox"></search>
         <span class="btn">
            <input type="button" value="往下" @click="selectItem_ad">
            <input type="button" value="往上" @click="selectItem_re">
            <input type="button" value="往右" @click="select_ad">
            <input type="button" value="往左" @click="select_re">
        </span> 
        <div class="picDialog" v-for="(item,index) in collagesName" :key="index">
            <ul class="collageUl">
                <p class="collageName">{{item}}</p> 
                 
                <li v-for="(item,itemIndex) in getCollage(index)" :class="item.type==5?'select':'noSelect'" :key="itemIndex"> 
                    <transition name="fade" mode="out-in">
                        <picture-dialog
                            v-if="toggle[index]"
                            key="first"
                            :date="item.date"
                            :author="item.author"
                            :title="item.name"
                            :like="item.likeNum"
                            :visited="item.visited"
                            :pic_url="item.url"
                            :type="item.type"
                            :height="item.type==5?27.5:24"
                            :width="item.type==5?21.5:19.5">
                        </picture-dialog>

                        <picture-dialog
                            v-else
                            key="second"
                            :date="item.date"
                            :author="item.author"
                            :title="item.name"
                            :like="item.likeNum"
                            :visited="item.visited"
                            :pic_url="item.url"
                            :type="item.type"
                            :height="item.type==5?27.5:24"
                            :width="item.type==5?21.5:19.5"> 
                        </picture-dialog>
                    </transition>
                </li>
            </ul>
        
        </div>
        
  </div>
</template>

<script>

    import $ from 'jquery'

    import bg1 from '../assets/bg1.jpg'
    import bg2 from '../assets/bg2.jpg'
    import bg3 from '../assets/bg3.jpg'
    import bg4 from '../assets/bg4.jpg'

    import bg5 from '../assets/favorite/bg5.jpg'
    import bg6 from '../assets/favorite/bg6.jpg'
    import bg7 from '../assets/favorite/bg7.jpg'
    import bg8 from '../assets/favorite/bg8.jpg'

    export default {
        name:'Collage',
        data(){
            return {
                coord_x:0,
                coord_y:0,
                toggle:[true,true,true,true,true],
                offset:[0,0,0,0,0],
                collagesName:["华南理工大学","中山大学","华南师范大学","华南农业大学","广州大学"],
                collages : 
                [
                    [
                        {
                            date:"2017/05/21",
                            author:"东",
                            albumId:0,
                            name:"东一",
                            visited:100,
                            likeNum:100,
                            url:bg1,
                            type:5,
                        },
                        {
                            date:"2017/05/21",
                            author:"东",
                            albumId:1,
                            name:"东二",
                            visited:100,
                            likeNum:100,
                            url:bg2,
                            type:2,
                        },
                        {
                            date:"2017/05/21",
                            author:"东",
                            albumId:2,
                            name:"东三",
                            visited:100,
                            likeNum:100,
                            url:bg3,
                            type:2,
                        },
                        {
                            date:"2017/05/21",
                            author:"东",
                            albumId:0,
                            name:"东四",
                            visited:100,
                            likeNum:100,
                            url:bg4,
                            type:2,
                        },
                        {
                            date:"2017/05/21",
                            author:"东",
                            albumId:1,
                            name:"东五",
                            visited:100,
                            likeNum:100,
                            url:bg3,
                            type:2,
                        },
                        {
                            date:"2017/05/21",
                            author:"东",
                            albumId:3,
                            name:"东六",
                            visited:100,
                            likeNum:100,
                            url:bg4,
                            type:2,
                        }
                    ],[
                        {
                            date:"2017/06/21",
                            author:"西",
                            albumId:0,
                            name:"西一",
                            visited:200,
                            likeNum:200,
                            url:bg5,
                            type:2,
                        },
                        {
                            date:"2017/06/21",
                            author:"西",
                            albumId:1,
                            name:"西二",
                            visited:200,
                            likeNum:200,
                            url:bg6,
                            type:2,
                        },
                        {
                            date:"2017/07/21",
                            author:"西",
                            albumId:2,
                            name:"西三",
                            visited:200,
                            likeNum:200,
                            url:bg7,
                            type:2,
                        },
                        {
                            date:"2017/06/21",
                            author:"西",
                            albumId:0,
                            name:"西四",
                            visited:200,
                            likeNum:200,
                            url:bg8,
                            type:2,
                        },
                        {
                            date:"2017/06/21",
                            author:"西",
                            albumId:1,
                            name:"西五",
                            visited:200,
                            likeNum:200,
                            url:bg8,
                            type:2,
                        },
                        {
                            date:"2017/06/21",
                            author:"西",
                            albumId:3,
                            name:"西六",
                            visited:200,
                            likeNum:200,
                            url:bg7,
                            type:2,
                        },
                        {
                            date:"2017/06/21",
                            author:"西",
                            albumId:1,
                            name:"西七",
                            visited:200,
                            likeNum:200,
                            url:bg6,
                            type:2,
                        },
                        {
                            date:"2017/06/21",
                            author:"西",
                            albumId:3,
                            name:"西八",
                            visited:200,
                            likeNum:200,
                            url:bg5,
                            type:2,
                        }
                    ],[
                        {
                            date:"2017/07/21",
                            author:"南",
                            albumId:0,
                            name:"南一",
                            visited:300,
                            likeNum:300,
                            url:bg1,
                            type:2,
                        },
                        {
                            date:"2017/07/21",
                            author:"南",
                            albumId:1,
                            name:"南二",
                            visited:300,
                            likeNum:300,
                            url:bg2,
                            type:2,
                        },
                        {
                            date:"2017/07/21",
                            author:"南",
                            albumId:2,
                            name:"南三",
                            visited:300,
                            likeNum:300,
                            url:bg3,
                            type:2,
                        },
                        {
                            date:"2017/07/21",
                            author:"南",
                            albumId:0,
                            name:"南四",
                            visited:300,
                            likeNum:300,
                            url:bg4,
                            type:2,
                        },
                        {
                            date:"2017/07/21",
                            author:"南",
                            albumId:1,
                            name:"南五",
                            visited:300,
                            likeNum:300,
                            url:bg4,
                            type:2,
                        },
                        {
                            date:"2017/07/21",
                            author:"南",
                            albumId:3,
                            name:"南六",
                            visited:300,
                            likeNum:300,
                            url:bg3,
                            type:2,
                        },
                        {
                            date:"2017/07/21",
                            author:"南",
                            albumId:1,
                            name:"南七",
                            visited:300,
                            likeNum:300,
                            url:bg2,
                            type:2,
                        }
                    ],[
                        {
                            date:"2017/08/21",
                            author:"北",
                            albumId:0,
                            name:"北一",
                            visited:400,
                            likeNum:400,
                            url:bg5,
                            type:2,
                        },
                        {
                            date:"2017/08/21",
                            author:"北",
                            albumId:1,
                            name:"北二",
                            visited:400,
                            likeNum:400,
                            url:bg6,
                            type:2,
                        },
                        {
                            date:"2017/08/21",
                            author:"北",
                            albumId:2,
                            name:"北三",
                            visited:400,
                            likeNum:400,
                            url:bg7,
                            type:2,
                        },
                        {
                            date:"2017/08/21",
                            author:"北",
                            albumId:0,
                            name:"北四",
                            visited:400,
                            likeNum:400,
                            url:bg8,
                            type:2,
                        },
                        {
                            date:"2017/08/21",
                            author:"北",
                            albumId:1,
                            name:"北五",
                            visited:400,
                            likeNum:400,
                            url:bg8,
                            type:2,
                        },
                        {
                            date:"2017/08/21",
                            author:"北",
                            albumId:3,
                            name:"北六",
                            visited:400,
                            likeNum:400,
                            url:bg7,
                            type:2,
                        },
                        {
                            date:"2017/08/21",
                            author:"北",
                            albumId:1,
                            name:"北七",
                            visited:400,
                            likeNum:400,
                            url:bg6,
                            type:2,
                        },
                        {
                            date:"2017/08/21",
                            author:"北",
                            albumId:3,
                            name:"北八",
                            visited:400,
                            likeNum:400,
                            url:bg5,
                            type:2,
                        }
                    ],[
                        {
                            date:"2017/05/21",
                            author:"东",
                            albumId:0,
                            name:"东一",
                            visited:100,
                            likeNum:100,
                            url:bg1,
                            type:2,
                        },
                        {
                            date:"2017/05/21",
                            author:"东",
                            albumId:1,
                            name:"东二",
                            visited:100,
                            likeNum:100,
                            url:bg2,
                            type:2,
                        },
                        {
                            date:"2017/05/21",
                            author:"东",
                            albumId:2,
                            name:"东三",
                            visited:100,
                            likeNum:100,
                            url:bg3,
                            type:2,
                        },
                        {
                            date:"2017/05/21",
                            author:"东",
                            albumId:0,
                            name:"东四",
                            visited:100,
                            likeNum:100,
                            url:bg4,
                            type:2,
                        },
                        {
                            date:"2017/05/21",
                            author:"东",
                            albumId:1,
                            name:"东五",
                            visited:100,
                            likeNum:100,
                            url:bg3,
                            type:2,
                        },
                        {
                            date:"2017/05/21",
                            author:"东",
                            albumId:3,
                            name:"东六",
                            visited:100,
                            likeNum:100,
                            url:bg4,
                            type:2,
                        },
                        {
                            date:"2017/07/21",
                            author:"南",
                            albumId:1,
                            name:"南七",
                            visited:300,
                            likeNum:300,
                            url:bg3,
                            type:2,
                        }
                    ]
                ],  
            }
        },

        beforeCreate:function(){
            var url="http://39.108.149.106:8080/login.html";
            $.ajax({
                type:"GET",
                async:true,
                url:url,
                dataType:"jsonp",
                success:function(data){
                    console.log("success");
                    console.log(data);
                },
                error:function(){
                    console.log("error");
                }

            });
        }, 

        methods:{

            selectItem_ad:function(){
                this.collages[this.coord_y][this.offset[this.coord_y]*4 + this.coord_x].type = 2;
                this.coord_y++;
                if(this.coord_y >= this.collagesName.length){
                    this.coord_y--;
                }else{
                    if(this.coord_x>this.collages[this.coord_y].length-this.offset[this.coord_y]*4-1){
                        this.coord_x = this.collages[this.coord_y].length-this.offset[this.coord_y]*4-1;
                    }
                }
                
                this.collages[this.coord_y][this.offset[this.coord_y]*4 + this.coord_x].type = 5;
            },
            selectItem_re:function(){
                this.collages[this.coord_y][this.offset[this.coord_y]*4 + this.coord_x].type = 2;
                this.coord_y--;
                if(this.coord_y < 0){
                    this.coord_y++;
                }else{
                    if(this.coord_x>this.collages[this.coord_y].length-this.offset[this.coord_y]*4-1){
                        this.coord_x = this.collages[this.coord_y].length-this.offset[this.coord_y]*4-1;
                    }
                }
                this.collages[this.coord_y][this.offset[this.coord_y]*4 + this.coord_x].type = 5;
            },
            select_ad:function(){
                this.collages[this.coord_y][this.offset[this.coord_y]*4 + this.coord_x].type = 2;
                this.coord_x++;
                if(this.coord_x>3||this.offset[this.coord_y]*4 + this.coord_x>=this.collages[this.coord_y].length){
                    if(this.offset[this.coord_y]*4 + this.coord_x>=this.collages[this.coord_y].length){
                        this.coord_x--;
                    }
                    else{
                        this.offset[this.coord_y] += 1;  
                        this.coord_x = 0;
                        this.toggle[this.coord_y] = !this.toggle[this.coord_y];
                    }
                }
                
                this.collages[this.coord_y][this.offset[this.coord_y]*4 + this.coord_x].type = 5;
            },
            select_re:function(){
                this.collages[this.coord_y][this.offset[this.coord_y]*4 + this.coord_x].type = 2;
                this.coord_x--;
                if(this.coord_x<0){
                    if(this.offset[this.coord_y]-1<0){
                        this.coord_x++;
                    }else{
                        this.offset[this.coord_y] -= 1;
                        this.coord_x = 3;
                        this.toggle[this.coord_y] = !this.toggle[this.coord_y];
                    }
                }

                this.collages[this.coord_y][this.offset[this.coord_y]*4 + this.coord_x].type = 5;
            },
            getCollage:function(index){
                let len = this.collages[index].length - this.offset[index]*4;
                if(len >=4){
                len = 4;
                }else if(len<=0){
                return [];
                }

                let collages_part = Array(len);
                for(let i=0;i<len;i++){
                collages_part[i] = this.collages[index][this.offset[index]*4+i];
                }

                return collages_part;
            },
        },
        computed:{
             
        },
    }
</script>


<style>
    body{
        font-family: "小米兰亭";
        color: #f1f1f1;
        background: url('../assets/collage/bg0.png');
    }
    #Collage{
        height: 1390px;
        overflow-x: hidden;
        overflow-y: scroll;
    } 
    #Collage::-webkit-scrollbar {
        display: none;
    }
    #Collage::-moz-scrollbar{
        display: none;
    }
    #Collage::-ms-scrollbar{
        display: none;
    }
    #searchBox{
        position: absolute;
        left: 0;
    }
    .btn{
        position: relative;
        left:160px;
    }

    .picDialog{
        position: relative;
        left:160px;
        height: 36vh;
        /* width: 87.05vw; */
        font-size: 2.96vh;
        overflow: hidden; 
        border-bottom: 3px solid rebeccapurple;    
    }
    .collageUl{
        position: relative;
        height: 36vh;
        /* background: rebeccapurple;             */
    }
    .collageName{
        position: absolute;
        top: 5px;
    }
    .collageUl li{
       margin-top: 40px; 
       display: inline-block;  
       position: relative; 
    }
    .collageUl > .noSelect{
        box-shadow: 0 0 0 rgba(0,0,0,0.7);
        width:19.5vw;
        height: 24vh;
        margin-right:1.7vw;
        vertical-align: top; 
        top:1.7vh;
        transition: all 0.4s
    }
    .collageUl > .select{
        box-shadow: 0 0 5vw rgba(0,0,0,0.7);
        width:21.5vw;
        height: 27.5vh;
        margin-right: 1vw;
        top:0;
        vertical-align: top; 
        transition: all 0.4s
    }

    .fade-enter-active, .fade-leave-active {
        transition: all 0.4s
    }
    .fade-enter, .fade-leave-to {
        opacity: 0
    } 

</style>
