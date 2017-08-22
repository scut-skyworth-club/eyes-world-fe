<template>
  <div class="date">
    {{getDay}}&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp{{time}}
  </div>
</template>

<script>

  export default {
    
    data () {
      return {
        time: '10:00',
      }
    },
    created: function (){
      setInterval(this.getTime,1000);
    },
    methods:{
      getTime: function (){
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        if (hours<10) {
          hours='0'+hours;
        }
        if (minutes<10) {
          minutes='0'+minutes;
        }
        this.time = hours+':'+minutes;
      }
    },
    computed:{
      getDay: function () {
        var dayNames = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
        return dayNames[(new Date()).getDay()];
      },
    }
  }
</script>

<style>
  .date {
    font-family: '小米兰亭';
    font-size: 2.963vh;
    color: #f1f1f1;
    letter-spacing: 1px;
    position: absolute;
    top: 6.481vh;
    right: 6.25vw;
}
</style>


