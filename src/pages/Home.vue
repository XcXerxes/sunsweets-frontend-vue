<template>
  <div>
    <sweet-header />
    <sweet-carousel :carouselList="carouselList" />
  </div>
</template>

<script>
  import sweetHeader from '@/components/sweet-header'
  import sweetCarousel from '@/components/sweet-carousel'
  import {mapGetters} from 'vuex'

  export default {
    data () {
      return {

      }
    },
    computed: {
      ...mapGetters([
        'carouselList'
      ])
    },
    created () {
      this.$store.dispatch('fetchCarouselList', {
        currentPage: 1,
        limit: 5
      })
    },
    components: {
      sweetHeader,
      sweetCarousel
    }
  }
</script>
