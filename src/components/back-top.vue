<template>
  <div @click="backTop">
    <mu-paper class="sweet-back__top" :zDepth="1">
      <mu-icon value="airplanemode_active" color="#7e57c2" :size="30"></mu-icon>
    </mu-paper>
  </div>
</template>

<script>
  import {TweenMax, Power3} from 'gsap'
  import 'gsap/ScrollToPlugin'
  export default {
    methods: {
      backTop () {
        TweenMax.to(window, 1, {scrollTo: {y: 0}, ease: Power3.easeOut}, '-=0.25')
      }
    },
    mounted () {
      TweenMax.set(this.$el, {opacity: 0})
      window.addEventListener('scroll', () => {
        const scrollTop = document.body.scrollTop
        if (scrollTop < 150) {
          TweenMax.to(this.$el, 1.6, {opacity: 0, ease: Power3.easeOut}, '-=0.25')
        } else {
          TweenMax.to(this.$el, 1.6, {opacity: 1, ease: Power3.easeOut}, '-=0.25')
        }
      }, false)
    }
  }
</script>
<style lang="less">
  .sweet-back__top {
    position: fixed;
    right: 3rem;
    bottom: 3rem;
    width: 48px;
    height: 48px;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
</style>

