<template>
    <div class="pics-info-container" v-on:click="showSize" :date="parseDate">
        <p :style="{fontSize:bigSize+'vh'}" class="photo-name">{{photoName}}</p>
        <p :style="{fontSize:smallSize+'vh'}" class="time-and-user">{{date}}&nbsp&nbsp&nbsp@{{userName}} </p>
        <div>
            <img :src="visitedIcon" class="visited-icon">
            <p class="visited-amount">100</p>
        </div>
        <div>
            <img :src="likeIcon" class="like-icon">
            <p class="like-amount">100</p>
        </div>
    </div>
</template>

<script>
    import likeIcon from '../assets/panorama/liked.png'
    import visitedIcon from '../assets/panorama/visited_icon.png'
    export default {
        props: ["bigSize", "smallSize", "photoName", "createTime", "userName"],
        methods: {
            showSize: function() {
                console.log(this.firstPicInfo);
            },
        },
        data() {
            return {
                likeIcon: likeIcon,
                visitedIcon: visitedIcon,
                date:"",
            }
        },
        computed: {
            parseDate: function (){
                let newDate = new Date(parseInt(this.createTime));
                let year = newDate.getFullYear();
                let month = newDate.getMonth();
                let day = newDate.getDay();
                
                if (month<10) {
                    month = '0'+month;
                }
                if (day<10) {
                    day = '0'+day;
                }
                
                this.date = year+'/'+month+'/'+day;
            }
        }
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
        
        margin-top: 0.9vh;
        margin-bottom: 0.6vh;
        margin-left: 0.47vw;
        letter-spacing: 0.18vw;
    }
    
    .pics-info-container>.time-and-user {
        /* font-size: 23px; */
        margin-top: 0.9vh;
        margin-left: 0.47vw;
        letter-spacing: 0.1vw;
    }
    .pics-info-container .visited-icon {
        width: 1.458vw;
        height: 1.667vh;
        position: absolute;
        bottom: 0.7vh;
        right: 5vw;
    }
    .pics-info-container .visited-amount {
        font-family: "小米兰亭";
        font-size: 1.852vh;
        color: #f1f1f1;
        position: absolute;
        bottom: 0.7vh;
        right: 5vw;
    }
    .pics-info-container .like-icon {
        width: 1.042vw;
        height: 1.667vh;
        position: absolute;
        bottom: 0.7vh;
        right: 2.5vw;
    }
    .pics-info-container .like-amount {
        font-family: "小米兰亭";
        font-size: 1.852vh;
        color: #f1f1f1;
        position: absolute;
        bottom: 0.7vh;
        right: 2.5vw;
    }
</style>
