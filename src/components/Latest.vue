<template>
  <div id="Latest">
    {{msg}}
    <picture-dialog></picture-dialog>
    <picture-dialog></picture-dialog>
    <picture-dialog></picture-dialog>
    <picture-dialog></picture-dialog>
    <div>轮播图</div>
    <button>返回</button>
  </div>
</template>

<script>
    export default {
        name:'Latest',
        data(){
            return {
                msg:'最新推荐组件'
            }
        }
    }
</script>


<style>

</style>
