<template>
  <div id="User">
    {{msg}}
    <button v-on:click="reverseMessage">进入</button>
    <input v-model="msg">
  </div>
</template>

<script>
    export default {
        name:'User',
        data(){
            return {
                msg:'用户管理组件'
            }
        },
        methods:{
            reverseMessage:function () {
                this.msg = this.msg.split('').reverse().join('')
            }
        }
    }
</script>


<style>

</style>
