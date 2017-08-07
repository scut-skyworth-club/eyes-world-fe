<template>
  <div id="Latest">
    {{msg}}
    <!-- <picture-dialog></picture-dialog> -->
  <picture-dialog  :type="type" :date="date" :author="author" :pic_url="bg2" :like="like" :title="title" :visited="visited" :width="width" :height="height" class="pic"></picture-dialog>  
 <picture-dialog  :type="type" :date="date" :author="author" :pic_url="bg2" :like="like" :title="title" :visited="visited" :width="width" :height="height" class="pic"></picture-dialog> 
 <picture-dialog  :type="type" :date="date" :author="author" :pic_url="bg2" :like="like" :title="title" :visited="visited" :width="width" :height="height" class="pic"></picture-dialog> 
 <picture-dialog  :type="type" :date="date" :author="author" :pic_url="bg2" :like="like" :title="title" :visited="visited" :width="width" :height="height" class="pic"></picture-dialog> 
    <div>轮播图</div>
    <button>返回</button>
  </div>
</template>

<script>
    import bg2 from '../assets/bg2.jpg'
    export default {
        name:'Latest',
        data(){
            return {
                date:'2017/07/21',
                author:'XXX',
                msg:'最新推荐组件',
                title:"海心沙",
                like:100,
                visited:100,
                bg2:bg2,
                type:2,
                width:20,
                height:60,
                // width:75,
                // height:46.3,
                // width:35.42,
                // height:62.96,
                // width:17.71,
                // height:31.48,
            }
        }
    }
</script>


<style>

</style>
