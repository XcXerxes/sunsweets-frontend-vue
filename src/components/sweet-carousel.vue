<template>
  <div class="sweet-swiper">
    <div class="swiper-wrapper">
      <template v-for="item in carouselList">
        <div class="swiper-slide">
          <img :src="computedImg(item.img)" class="swiper-lazy" />
        </div>
      </template>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import config from '@/config'
import Swiper from 'swiper'

export default {
  props: ['carouselList'],
  methods: {
    computedImg (img) {
      return config.orginImg + img
    },
    initSwiper () {
      if (this.swiper) {
        this.swiper.destroy({
          deleteInstance: false,
          cleanupStyles: true
        })
      }
      this.swiper = new Swiper('.sweet-swiper', {
        autoplay: 3000, // 可选选项，自动滑动，
        loop: true,
        lazyLoading: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        keyboardControl: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next'
      })
    }
  },
  updated () {
    this.initSwiper()
  },
  mounted () {
    this.initSwiper()
  }
}
</script>
<style>
.sweet-carousel {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.v-carousel-item {
  height: 100%;
}
</style>

