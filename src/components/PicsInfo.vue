<template>
    <div class="pics-info-container" v-on:click="showSize">
        <p :style="{fontSize:bigsize+'vh'}" class="photo-name">{{photoName}}</p>
        <p :style="{fontSize:smallsize+'vh'}" class="time-and-user">{{createTime}}&nbsp&nbsp&nbsp@{{userName}} </p>
    </div>
</template>

<script>
    export default {
        props: ["bigsize", "smallsize", "photoName", "createTime", "userName"],
        // props:{
        //     date:"",
        //     url:"",
        //     photoId:0,
        //     photoName:"",
        //     albumId:0,
        //     albumName:""
        // },
        methods: {
            showSize: function() {
                console.log(this.firstPicInfo);
            },
        },
        data() {
            return {
                picName: "允儿",
            }
        },
    }
    
    // info = firstPicInfo;
</script>

<style>
    .pics-info-container {
        background-color: rgba(49, 71, 127, 1);
        color: #f1f1f1;
        font-family: "小米兰亭";
    }
    
    
    
    .pics-info-container>.photo-name {
        
        margin: 0.3vw 0.2vh;
    }
    
    .info-container>.time-and-user {
        /* font-size: 23px; */
        margin-left: 0.3vw;
        margin-bottom: 0.2vh;
    }
</style>
