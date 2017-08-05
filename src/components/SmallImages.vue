<template>
    <div class="small-pics" :style="{top:((index-1)%2)*31.48+'vh',
        left:(Math.floor((index-1)/2))*17.708+'vw'}">   
        <img :src="url" alt="1" class="image">
        <pics-info class="pics-information" :bigsize="titlesize" :smallsize="datesize"
         :date="date" :photo-name="photoName" :author="author"></pics-info>
    </div>
</template>

<script>
    import bg1 from '../assets/favorite/visitedIcon.png'
    import PicsInfo from './PicsInfo'
    export default {
        name: 'Collections',
        data() {
            return {
                
            }
        },
        props: ['titlesize', 'datesize', 'index', 'url', 'date', 'photoName', 'author'],
        components: {
            PicsInfo
        },
        methods: {
            
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

