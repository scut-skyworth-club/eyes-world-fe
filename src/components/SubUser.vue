<template>
    <div class="box" :style="{left:(index-1)*18.75+'vw'}" 
     v-on:click="choose">  
        <div class="icon-container">
            <div class="img-container">
                <img :src="url" alt="2">
            </div>
        </div>
        <div class="item-title-container">
            <p class="item-title">{{title}}</p>
        </div>
    </div>
</template>
<script>
    // import Favorite from './Favorite'
    
    // import Works from './Works'
    import router from '../router/index';
    import User from './User'
    export default {
        data() {
            return {
                
            }
        },
        props: ['title', 'url', 'index','aboutus'],
        comments: {
            //   Favorite,
            //   Works
        },
        methods: {
            choose: function() {
                switch (this.index) {
                    case 1:
                        router.push({
                            name: 'Works',
                            params: {
                                userName: 'Ice'
                            }
                        });
                        break;
                    case 2:
                        location.href = 'http://localhost:8080/#/user/favorite/456';
                        break;
                    case 3:
                        let data = true;
                        this.$emit('aboutus',data);
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
        transform: scale(1.2);
        position: absolute;
        box-shadow: 0px 10px 50px #444444;
    }
    .box .icon-container {
        width: 100%;
        height: 70%; 
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .box .icon-container .img-container {
        width: 45%;
        text-align: center;
        margin: 10vh auto;
        transition: all 0.7s ease;
    }
    .box:hover .icon-container .img-container {
        width: 54%;
    }
    .box div img {
        width: 100%;
    }
    .box .item-title-container {
        width: 100%;
        height: 30%;
        position: absolute;
        top: 70%;
        left: 0;
    }
    .box .item-title {
        border: none;
        background: none;
        font-family: font757;
        font-size: 4.444vh;
        color: #f1f1f1;
        text-align: center;
        margin: 0 auto;
        transition: 0.7s;
    }
    
    .box:hover p {
        font-size: 5.333vh;
    }
</style>
