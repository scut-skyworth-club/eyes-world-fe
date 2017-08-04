<template>
    <div class="info-container" v-on:click="showSize">
    
        <h2 :style="{fontSize:bigsize+'px'}">{{photoName}}</h2>
    
        <p :style="{fontSize:smallsize+'px'}">{{date}} {{author}} </p>
    
    </div>
</template>

<script>
    var info = {};
    
    export default {
    
    
    
        props: ["bigsize", "smallsize", "photoName", "date", "author"],
    
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
    
    
    
    h2 {
    
        /* font-size: 40px;   */
    
    }
    
    
    
    p {
    
        /* font-size: 23px; */
    
    }
</style>
