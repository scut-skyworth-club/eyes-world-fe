<template>
  <div class="sub-work" :style="{left:(index*27.083+6.25)+'vw'}">
      <div class="time-container" :create-time="parseDate">
        <p>{{createTime}}</p>
      </div>
      <div class="camera-container">
        <div>
            <img src="../assets/works/cameraIcon.jpg" alt="1">
        </div> 
      </div>
      <hr class="line" v-if="!(index+1==amount)"/>
      <div class="work-img"
       :style="{transform:'scale('+xScale+','+yScale+')',
       boxShadow:shadow}" 
       :xScale="calculteSize" 
       :yScale="calculteSize"
       :newUrl="parseUrl"
       :photo-name="parseName">
           <img :src="newUrl" alt="2"> 
           <div>
             <p :style="{fontSize:size+'vh'}" :size="calculteSize">{{photoName}}</p>
           </div>
      </div>
  </div>
</template>
<script>

export default {
    data () {
        return {
           xScale: 1,
           yScale: 1,
           shadow: 'none',
           size: 2.963, 
           newUrl: "",
           photoName: "",
           createTime: 0,
        }
    },
    methods:{
        getMoreInfo:function () {
            alert("查看图片详细信息");
        },
        uploadPhoto: function () {
            alert("上传图片");
        },
    },
    computed:{
        calculteSize: function (){
            if (this.index===this.counter-1) {//如果focus到图片上就变大
                this.xScale = 1.1;
                this.yScale = 1.083;
                this.size = 3.333;
                this.shadow = '0 0 40px #222222';
            }else {
                this.xScale = 1;
                this.yScale = 1;
                this.size = 2.963;
                this.shadow = 'none';
            }
        },
        parseUrl: function (){
            this.newUrl = "http://39.108.149.106"+this.url+"thumbnail"; //对传过来的url进行解析
        },
        parseName: function (){
            let str = "-";
            this.photoName = this.title.split(str)[0];
        },
        parseDate: function (){
            // this.createTime = new Date(parseInt(this.date)).toLocaleString().substr(0,18);
            // function formatDate(time) {
            //     if (time<10) {
            //         time = '0'+time;
            //     }
            //     return time;
            // }
            let newDate = new Date(parseInt(this.date));
            let year = newDate.getFullYear();
            let month = newDate.getMonth()+1;
            let day = newDate.getDate();
            let hours = newDate.getHours();
            let minutes = newDate.getMinutes();
            let seconds = newDate.getSeconds();
            // formatDate(month);
            // formatDate(day);
            // formatDate(hours);
            // formatDate(minutes);
            // formatDate(seconds);
            if (month<10) {
                month = '0'+month;
            }
            if (day<10) {
                day = '0'+day;
            }
            if (hours<10) {
                hours = '0'+hours;
            }
            if (minutes<10) {
                minutes = '0'+minutes;
            }
            if (seconds<10) {
                seconds = '0'+seconds;
            }
            this.createTime = year+'-'+month+'-'+day+' '+hours+':'+minutes+':'+seconds;
        },
    },
    props:['index','date','url','title','amount','counter']
}
</script>
<style>
    .sub-work {
        width: 20.833vw;
        height: 54.833vh;
        position: absolute;
        top: 26.648vh;
    }
    .sub-work>.time-container {
        width: 100%;
        position: absolute;
        height: 4vh;
        z-index: 5;
    }
    .sub-work>.time-container>p {
        font-family: '小米兰亭';
        color: #f1f1f1;
        font-size: 2.222vh;
        text-align: center;
        padding: 0 auto;
        z-index: 5;
    }
    .sub-work>.camera-container {
        width: 100%;
        height: 6.389vh;
        position: absolute;
        z-index: 4;
        margin-top: 4vh;
    }
    .sub-work>.camera-container>div {
        margin-left: 8.594vw;
        width: 3.597vw;
        height: 100%;
        position: absolute;
        z-index: 4;
    }
    .sub-work>.camera-container>div>img {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 4;
    }
    .sub-work>.work-img {
        width: 100%;
        height: 44.444vh;
        position: absolute;
        z-index: 2;
        margin-top: 10.389vh;
        transition: all 0.7s ease;
        /* border: 1px solid red; */
        /* background: url(../assets/favorite/bg1.jpg) no-repeat center center; */
    }
    .sub-work>.work-img>img {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
    } 
    .sub-work>.work-img>div {
        width: 100%;
        height: 7.407vh;
        position: absolute;
        z-index: 2;
        bottom: 0;
        font-family: '小米兰亭';
        color: #f1f1f1;
        letter-spacing: 0.4vh;
        background-color: #31477f;
        opacity: 1;
        transition: all 0.7s ease
    }
    .sub-work>.work-img>div>p {
        position: absolute;
        width: 100%;
        z-index: 2;
        text-align: center;
        margin: 1.852vh auto;
    }
    .sub-work>.line {
        width: 27.083vw;
        height: 0.185vh;
        position: absolute;
        left: 10.417vw;
        top: 7.195vh;
        z-index: 1;
        border: none;
        border-top: 0.093vh solid #f1f1f1;
    }
</style>

