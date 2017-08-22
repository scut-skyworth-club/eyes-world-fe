<template>
  <div id="album">


    {{provinceName }}
    {{cityName }}的景点
    景点里面的相册
    albumId:{{albumId}}
    photoId:{{photoId}}

    <button @click="add">增加</button>
    <button @click="decrease">减少</button>
  </div>
</template>

<script>
  import router from '../router/index'

  export default {
    name: 'album',
    data () {
      return {
        albumId: this.$route.params.albumId,
        photoId: this.$route.params.photoId,
        provinceName: this.$route.params.provinceName,
        cityName: this.$route.params.cityName
      }
    },
    methods: {
      add: function () {
        this.photoId++
        router.push(`/provinces/cities/${this.provinceName}/${this.cityName}/spots/${this.albumId}/${this.photoId}`)
      },
      decrease: function () {
        this.photoId--
        router.push(`/provinces/cities/${this.provinceName}/${this.cityName}/spots/${this.albumId}/${this.photoId}`)
      }
    }
  }
</script>


<style>

</style>
