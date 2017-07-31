<template>
  <div class="info-container">
      <h2>{{picName}}</h2>
      <p>{{date}}</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            picName:"允儿",
            date:"2017/07/25 @Archie"
        }
    }
}
</script>

<style>
    .info-container { 
        background-color: rgba(49,71,127,1);
        color: #f1f1f1;
        font-family: font757;
    }
    h2{
        font-size: 40px;  
    }
    p{
        font-size: 23px;
    }
</style>
