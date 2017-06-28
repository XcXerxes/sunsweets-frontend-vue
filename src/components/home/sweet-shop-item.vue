<template>
  <mu-paper class="sweet-shop-item" :zDepth="2">
    <img :src="data.thumb">
  </mu-paper>
</template>
<script>
  import {TweenMax, Power3} from 'gsap'
  export default {
    props: ['data'],
    mounted () {
      TweenMax.set('.sweet-shop-item', {
        y: 600
      })
      TweenMax.staggerTo('.sweet-shop-item', 1.2, {
        delay: 3,
        y: 0,
        display: 'block',
        opacity: 1,
        ease: Power3.easeOut
      }, 0.5)
    }
  }
</script>
<style scoped>
  .sweet-shop-item {
    margin-bottom: 20px;
    display: none;
    opacity: 0;
  }
  .sweet-shop-item img {
    max-width: 100%;
    max-height: 100%;
  }
</style>

