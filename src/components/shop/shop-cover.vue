<template>
  <div class="sweet-shop__cover">
    <div class="mask"></div>
    <div>
      <img :src="coverInfo.coverImg" :alt="coverInfo.coverImg" />
    </div>
    <div class="shop-cover__content" ref="coverContent">
      <p>{{coverInfo.title}}</p>
      <p>{{coverInfo.caption}}</p>
    </div>
  </div>
</template>
<script>
import { TweenMax, Power3, Power4 } from 'gsap'
export default {
  props: ['coverInfo'],
  mounted () {
    const p1 = this.$refs.coverContent.children[0]
    const p2 = this.$refs.coverContent.children[1]
    /*
    TweenMax.to(this.$refs.coverContent, 1, {
      left: '50%',
      opacity: 1,
      ease: Power3.easeOut
    })
    */
    TweenMax.from(p1, 1, {
      x: -400,
      opacity: 0,
      ease: Power4.easeOut
    })
    TweenMax.from(p2, 1.3, {
      x: -600,
      opacity: 0,
      ease: Power4.easeOut
    })
    TweenMax.to(p1, 1.8, {
      x: 0,
      opacity: 1,
      'letter-spacing': '0.4rem',
      ease: Power4.easeOut
    })
    TweenMax.to(p2, 2.2, {
      x: 100,
      opacity: 1,
      ease: Power3.easeOut
    })
  }
}
</script>
<style scoped>
.sweet-shop__cover {
  position: relative;
}

.mask {
  position: absolute;
  background-color: rgba(0, 0, 0, .3);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.shop-cover__content {
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 1;
  transform: translate(-50%, -50%);
}

.shop-cover__content p {
  font-size: 3.4rem;
  color: #fff;
  letter-spacing: normal;
  text-shadow: 2px 4px 6px #1d1d1d;
  -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.shop-cover__content p:nth-of-type(2) {
  font-size: 2.8rem;
}
</style>

