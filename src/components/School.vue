<template>
  <div id="School">
    {{msg}}
    <!-- <search></search> -->
    <picture-dialog  :isFoucs="isFoucs" :date="date" :author="author" :pic_url="bg2" :like="like" :title="title" :visited="visited" :width="width" :height="height" class="pic"></picture-dialog>
  </div>
</template>

<script>
    import bg2 from '../assets/bg2.jpg'

    export default {
        name:'School',
        data(){
            return {
                date:'2017/7/21',
                author:'作者',
                msg:'高校景观组件',
                title:"华南理工大学",
                like:100,
                visited:100,
                isFoucs:true,
                bg2:bg2,
                width:300,
                height:300,
            }
        }
    }
</script>


<style>
</style>
