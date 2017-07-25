<template>
  <div id="app">
     <!-- <div class="info">
      {{msg}}
      星期{{today.day}} | {{today.hour}}时{{today.minute}}分
    </div>  -->

    <Tourism class="section"></Tourism>
    <School class="section"></School>
    <Latest class="section"></Latest>
    <User class="section"></User>
  </div>
</template>

<script>
  import Tourism from './components/Tourism'
  import User from './components/User'
  import Latest from './components/Latest'
  import School from './components/School'

  export default {
    name: 'app',
    components: {
      Tourism,
      User,
      Latest,
      School
    },
    data() {
      return {
        msg: '这里是首页'
      }
    },
    computed: {
      today: function () {
        let mydate = new Date()
        let day = mydate.getDay()
        let hour = mydate.getHours()
        let minute = mydate.getMinutes()
        let temp = {
          day, hour, minute
        }
        return temp
      }
    },
    methods: {}
  }
</script>

<style lang="scss">
  body {
    width: 100vw;
    height: 100vh;
  }
  #app{
    display: flex;

  }
  .section{
    border: 1px solid red;
    flex: 1;
    height: 100vh;
  }
</style>

