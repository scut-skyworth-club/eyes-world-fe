<template>
    <div class="small-pics" :style="{top:(((index-1)%2)*31.48-yoffset)+'vh',
    
        left:((Math.floor((index-1)/2))*17.708-xoffset)+'vw'}" v-on:mouseover="enlarge" v-on:mouseleave="shrink">
    
        <img :src="url" alt="1" class="image" v-on:click="clickme">
    
        <pics-info class="pics-information" :bigsize="titlesize" :smallsize="datesize" :date="date" :photo-name="photoName" :author="author"></pics-info>
    
    </div>
</template>

<script>
    import bg1 from '../assets/favorite/visitedIcon.png'
    
    import PicsInfo from './PicsInfo'
    
    export default {
    
        name: 'Collections',
    
        data() {
    
            return {
    
                msg: 'hello',
    
                bgs: [bg1],
    
                xoffset: 0,
    
                yoffset: 0
    
            }
    
        },
    
        props: ['titlesize', 'datesize', 'index', 'url', 'date', 'photoName', 'author'],
    
        components: {
    
            PicsInfo
    
        },
    
        methods: {
    
            clickme: function() {
    
                console.log(bigsize + 'vw');
    
            },
    
            enlarge: function() {
    
                this.xoffset = 1.042,
    
                    this.yoffset = 1.852
    
            },
    
            shrink: function() {
    
                this.xoffset = 0,
    
                    this.yoffset = 0
    
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
    
        width: 17.708vw;
    
        height: 31.48vh;
    
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

