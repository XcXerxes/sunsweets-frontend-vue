<template>
  <div @click="backTop">
    <mu-paper class="sweet-back__top" :zDepth="1">
      <mu-icon value="airplanemode_active" color="#7e57c2" :size="30"></mu-icon>
    </mu-paper>
  </div>
</template>

<script>
  import {TweenLite} from 'gsap/ScrollToPlugin'
  import {Power2} from 'gsap'
  
  export default {
    methods: {
      backTop () {
        if (TweenLite) {
          TweenLite.to(window, 2, {scrollTo: {y: 0}, ease: Power2.easeOut})
        }
      }
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

