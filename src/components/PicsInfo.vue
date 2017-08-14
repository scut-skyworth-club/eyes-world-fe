<template>
    <div class="info-container" v-on:click="showSize">
        <p :style="{fontSize:bigsize+'vh'}">{{photoName}}</p>
        <p :style="{fontSize:smallsize+'vh'}">{{createTime}}&nbsp&nbsp&nbsp@{{userName}} </p>
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
    .info-container {
        background-color: rgba(49, 71, 127, 1);
        color: #f1f1f1;
        font-family: font757;
    }
    
    
    
    .info-container>p {
        /* font-size: 40px;   */
        margin: 0.3vw 0.3vw;
    }
    
    .info-container>p {
        /* font-size: 23px; */
        margin-left: 0.3vw;
        margin-bottom: 0.3vw;
    }
</style>
