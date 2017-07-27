<template> 
  <ul id="index">
    <li>
        <router-link to="/tourism"><Tourism class="section"></Tourism></router-link>
    </li>   
    <li>
        <router-link to="/school"><School class="section"></School></router-link>
    </li>  
    <li>
        <router-link to="/latest"><Latest class="section"></Latest></router-link>
    </li>  
    <li>
        <router-link to="/user"><User class="section"></User></router-link>
    </li>   
  </ul>   
</template>

<script>
  import Tourism from './Tourism'
  import User from './User'
  import Latest from './Latest'
  import School from './School'

  export default {
    name: 'index',
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
    },
    methods: {}
  }
</script>

<style lang="scss">
  #index{
      display: flex;
      > li{
          flex: 1;
          border: 1px solid black;
          height: 100vh;
          > a{
              display: inline-block;
              height: 100%;
              width: 100%;
          }
      }
  }
</style>

