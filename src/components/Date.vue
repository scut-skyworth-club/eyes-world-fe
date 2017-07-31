<template>
  <div class="date">
    {{date}}
  </div>
</template>

<<script>
export default {

  methods:{
    showMyDate:function () {
      var now = new Date();
      var seperator1 = "|";
      var seperator2 = ":";
      var space = "  "
      var dayNames = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
      var currentDate = dayNames[now.getDay()]+space+seperator1+now.getHours()+seperator2+now.getMinutes();
      return currentDate;
    }
  },
  
  data () {
    return {
      date:"星期四  |  10:00"
    }
  },
}
</script>

<style>
  .date {
    font-family: font757;
    font-size: 20px;
    color: #f1f1f1;
    letter-spacing: 1px;
    position: absolute;
    top: 6.481vh;
    right: 6.25vw;
}
</style>


