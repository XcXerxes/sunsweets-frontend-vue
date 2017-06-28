<template>
  <mu-col width="100" tablet="50" desktop="33">
    <mu-paper class="sweet-item" :zDepth="2">
      <img :src="data.thumb">
    </mu-paper>
  </mu-col>
</template>
<script>
  export default {
    props: ['data']
  }
</script>
<style scoped>
  .sweet-item {
    margin-bottom: 20px;
  }
  .sweet-item img {
    max-width: 100%;
    max-height: 100%;
  }
</style>

