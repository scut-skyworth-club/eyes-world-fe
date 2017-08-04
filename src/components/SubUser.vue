<template>
    <div class="box" :style="{left:((index-1)*18.75-xoffset)+'vw',top:yoffset+'vh'}" v-on:mouseover="enlarge" v-on:mouseleave="shrink" v-on:click="choose">
    
        <div>
    
            <img :src="url" alt="2">
    
        </div>
    
        <p class="item-title">{{title}}</p>
    
    </div>
</template>
<script>
    // import Favorite from './Favorite'
    
    // import Works from './Works'
    
    import User from './User'
    
    
    
    export default {
    
        data() {
    
            return {
    
                xoffset: 0,
    
                yoffset: 0
    
            }
    
        },
    
    
    
        props: ['title', 'url', 'index'],
    
        comments: {
    
            //   Favorite,
    
            //   Works
    
        },
    
        methods: {
    
            enlarge: function() {
    
                this.xoffset = 1.5625;
    
                this.yoffset = -5.556;
    
            },
    
            shrink: function() {
    
                this.xoffset = 0;
    
                this.yoffset = 0;
    
            },
    
            choose: function() {
    
                switch (this.index) {
    
                    case 1:
    
                        location.href = 'http://localhost:8080/#/user/works/hello';
    
                        break;
    
                    case 2:
    
                        location.href = 'http://localhost:8080/#/user/favorite/456';
    
                        break;
    
                    case 3:
    
                        alert("hello.....");
    
                        break;
    
                    default:
    
                        return;
    
                }
    
            }
    
        }
    
    }
</script>

<style>
    .box {
    
        width: 15.625vw;
    
        height: 55.556vh;
    
        margin: 0;
    
        position: absolute;
    
        background: url('../assets/user/bt_bg3.png') no-repeat center center;
    
        transition: all 0.7s;
    
    }
    
    
    
    .box:hover {
    
        cursor: pointer;
    
        width: 18.75vw;
    
        height: 66.67vh;
    
        position: absolute;
    
        box-shadow: 0px 10px 50px #444444;
    
    }
    
    
    
    .box div {
    
        width: 9.48vw;
    
        height: 18.89vh;
    
        text-align: center;
    
        margin: 93px auto;
    
        transition: all 0.7s ease;
    
    }
    
    
    
    .box:hover div {
    
        width: 11.376vw;
    
        height: 22.668vh;
    
    }
    
    
    
    .box div img {
    
        width: 100%;
    
    }
    
    
    
    .item-title {
    
        border: none;
    
        background: none;
    
        font-family: font757;
    
        font-size: 30px;
    
        color: #f1f1f1;
    
        text-align: center;
    
        margin: 20px auto;
    
        transition: 0.7s;
    
    }
    
    
    
    .box:hover p {
    
        font-size: 36px;
    
    }
</style>
