<template>
  <mu-paper class="sweet-shop-item___home" :zDepth="2">
    <img v-lazy="data.thumb">
  </mu-paper>
</template>
<script>
  import {TweenMax} from 'gsap'
  export default {
    props: ['data'],
    mounted () {
      TweenMax.set('.sweet-shop-item___home img ', {
        y: 600
      })
    }
  }
</script>
<style>
  .sweet-shop-item___home {
    margin-bottom: 20px;
    opacity: 0;
  }
  .sweet-shop-item___home img {
    max-width: 100%;
    max-height: 100%;
    opacity: 0;
  }
</style>

