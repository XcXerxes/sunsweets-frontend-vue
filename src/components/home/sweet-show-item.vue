<template>
  <mu-paper class="sweet-show-item" :zDepth="2">
    <img v-lazy="data.thumb">
  </mu-paper>
</template>
<script>
  import {TweenMax} from 'gsap'
  export default {
    props: ['data'],
    mounted () {
      TweenMax.set('.sweet-show-item img', {
        x: 700,
        opacity: 0
      })
      /*
      TweenMax.staggerTo('.sweet-show-item', 0.8, {
        opacity: 1
      }, 0.5)
      */
      /*
      TweenMax.staggerTo('.sweet-show-item img', 0.8, {
        x: 0,
        display: 'block',
        opacity: 1,
        ease: Power4.easeOut
      }, 0.5)
      */
    }
  }
</script>
<style scoped>
  .sweet-show-item {
    margin-bottom: 20px;
    opacity: 0;
  }
  .sweet-show-item img {
    max-width: 100%;
    max-height: 100%;
  }
</style>

