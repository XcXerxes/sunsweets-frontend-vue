<template>
  <div class="sweet-shop__cover">
    <div class="mask"></div>
    <div>
      <img  :src="coverInfo.coverImg" :alt="coverInfo.coverImg" />
    </div>
    <div class="shop-cover__content">
      <p>learn more</p>
      <p>learn more learn more learn more learn more learn more</p>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['coverInfo']
  }
</script>
<style scoped>
  
</style>

