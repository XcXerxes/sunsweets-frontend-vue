<template>
  <div id="sweet-carousel">
    <template v-for="item in carouselList">
      <div>
        <img :src="computedImg(item.img)" :alt="item.title">
      </div>
    </template>
  </div>
</template>
<script>
import Flickity from 'flickity'
import config from '@/config'

export default {
  props: ['carouselList'],
  methods: {
    computedImg (img) {
      return config.orginImg + img
    }
  },
  mounted () {
    this.flkty = new Flickity('#sweet-carousel', {
      contain: true,
      freeScroll: true,
      friction: 0.2,
      imagesLoaded: true,
      prevNextButtons: false,
      pageDots: false,
      wrapAround: true
    })
    this.flkty.reloadCells()
  },
  beforeUpdate () {
    console.log('update')
    if (this.flkty) {
      this.flkty.destroy()
    }
  },
  created () {
    console.log('aa')
    if (this.flkty) {
      this.flkty.destroy()
    }
  }
}
</script>
<style>
.sweet-carousel {
  width: 100vw;
  height: 460px;
}
</style>

