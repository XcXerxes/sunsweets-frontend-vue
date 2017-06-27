<template>
  <div class="sweet-shop">
    <shop-cover :coverInfo="coverInfo" />
    <section class="sweet-container"></section>
  </div>
</template>
<script>
  import shopCover from '@/components/shop/shop-cover'

  export default {
    data () {
      return {
        coverInfo: {
          coverImg: require('../assets/images/shop_small.jpg')
        }
      }
    },
    components: {
      shopCover
    }
  }
</script>
