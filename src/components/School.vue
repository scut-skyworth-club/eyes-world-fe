<template>
  <div id="School">
    {{msg}}
    <!-- <search></search> -->
    <picture-dialog  :pic_url="bg1" :like="like" :title="title" :visited="visited" class="pic"></picture-dialog>
  </div>
</template>

<script>
    import bg1 from '../assets/bg1.jpg'

    export default {
        name:'School',
        data(){
            return {
                msg:'高校景观组件',
                title:"华南理工大学",
                like:100,
                visited:100,
                bg1:bg1,
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
