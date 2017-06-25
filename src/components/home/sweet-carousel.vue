<template>
  <div class="sweet-swiper">
    <div class="swiper-wrapper">
      <template v-for="item in carouselList">
        <div class="swiper-slide">
          <div class="swiper-mask"></div>
          <img :src="computedImg(item.img)" class="swiper-lazy" :style="{width:'100%', height: '760px'}" />
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
.sweet-swiper{
  position: relative;
}
.swiper-mask {
  width: 100%;
  height: 100%;
  position: absolute;
}

.swiper-pagination-bullet {
  width: 11px;
  height: 11px;
}
</style>

