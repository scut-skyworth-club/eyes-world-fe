<template>
  <div id="Collage">
    {{msg}}
    <!-- <search></search> -->
    <picture-dialog  class="first" :type="type" :date="date" :author="author" :pic_url="bg2" :like="like" :title="title" :visited="visited" ></picture-dialog>
    <picture-dialog  class="second" :type="type" :date="date" :author="author" :pic_url="bg2" :like="like" :title="title" :visited="visited" ></picture-dialog>
    <picture-dialog  class="third" :type="type" :date="date" :author="author" :pic_url="bg2" :like="like" :title="title" :visited="visited" ></picture-dialog>
  </div>
</template>

<script>
    import bg2 from '../assets/bg2.jpg'

    export default {
        name:'Collage',
        data(){
            return {
                date:'2017/07/21',
                author:'XXX',
                msg:'高校景观组件',
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

.first{
    height:60vh;
    width: 20vw;
}

.second{
    height:46.3vh;
    width: 75vw;
}

.third{
    height:62.96vh;
    width: 35.42vw;
}
</style>
