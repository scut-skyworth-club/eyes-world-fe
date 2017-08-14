<template>
  <div class="date">
    {{getDay}}&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp{{getDate}}
  </div>
</template>

<<script>
// var date = "";
// function getDate() {
//   var now = new Date();
//   var seperator1 = "|";
//   var seperator2 = ":";
//   var space = "  "
  
//   date = dayNames[now.getDay()]+space+seperator1+space+now.getHours()+seperator2+now.getMinutes();
//   return date;
// }
// var time = "10:00";
function getTime() {
  return (new Date()).getHours()+':'+(new Date()).getMinutes();
}
setTimeout(getTime, 1000);

export default {

  methods:{
    
  },
  
  data () {
    return {
      time:getTime()
    }
  },
  computed:{
    getDay: function () {
      var dayNames = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
      return dayNames[(new Date()).getDay()];
    },
    getDate: function () {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      if (hours<10) {
        hours='0'+hours;
      }
      if (minutes<10) {
        minutes='0'+minutes;
      }
      return hours+':'+minutes;
    }
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


