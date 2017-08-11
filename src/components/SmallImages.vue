<template>
    <div 
        class="small-pics" 
        :style="{top:((index-1)%2)*31.48+'vh',left:(Math.floor((index-1)/2))*17.708+'vw'}"
        @click="detail">   
        <img :src="url" alt="1" class="image">
        <pics-info class="pics-information" :bigsize="titlesize" :smallsize="datesize"
         :create-time="createTime" :photo-name="photoName" :user-name="userName"></pics-info>
    </div>
</template>

<script>
    import bg1 from '../assets/favorite/visitedIcon.png'
    import PicsInfo from './PicsInfo'
    import router from '../router/index'
    export default {
        name: 'Collections',
        data() {
            return {
                
            }
        },
        props: ['titlesize', 'datesize', 'index', 'url', 'createTime', 'photoName', 'userName'],
        components: {
            PicsInfo
        },
        methods: {
            detail: function () {
                location.href = '/#/user/panorama';
                // console.log('hello');
            }
            
        }
    }
</script>
<style>
    .small-pics {
        width: 15.625vw;
        height: 27.78vh;
        position: absolute;
        transition: all 0.5s ease;
    }
    .small-pics:hover {
        transform: scale(1.133);
        position: absolute;
        box-shadow: 0 6px 20px #222222
    }
    .image {
        width: 100%;
        height: 100%;
    }
    .small-pics .pics-information {
        width: 100%;
        height: 7.407vh;
        position: absolute;
        bottom: 0;
        left: 0;
        display: none;
        z-index: 2;
        transition: all 0.5s ease;
    }
    .small-pics:hover .pics-information {
        display: block;
    }
</style>

