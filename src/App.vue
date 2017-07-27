<template>
  <div id="app">
    <router-view></router-view>
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
</style>

