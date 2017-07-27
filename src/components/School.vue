<template>
  <div id="School">
    {{msg}}
    <!-- <search></search> -->
    <picture-dialog  v-bind:like="like" v-bind:title="title" v-bind:visited="visited" class="pic"></picture-dialog>
  </div>
</template>

<script>
    export default {
        name:'School',
        data(){
            return {
                msg:'高校景观组件',
                title:"华南理工大学",
                like:100,
                visited:100,
            }
        }
    }
</script>


<style>
.pic{
    height:70vh;
    width: 30vw;
}
</style>
