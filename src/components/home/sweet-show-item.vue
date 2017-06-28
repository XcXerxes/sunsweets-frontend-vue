<template>
  <mu-paper class="sweet-show-item" :zDepth="2">
    <img :src="data.thumb">
  </mu-paper>
</template>
<script>
  import {TweenMax, Power3} from 'gsap'
  export default {
    props: ['data'],
    mounted () {
      TweenMax.set('.sweet-show-item', {
        x: 700
      })
      TweenMax.staggerTo('.sweet-show-item', 0.8, {
        x: 0,
        display: 'block',
        opacity: 1,
        ease: Power3.easeOut
      }, 0.5)
    }
  }
</script>
<style scoped>
  .sweet-show-item {
    margin-bottom: 20px;
    display: none;
    opacity: 0;
  }
  .sweet-show-item img {
    max-width: 100%;
    max-height: 100%;
  }
</style>

