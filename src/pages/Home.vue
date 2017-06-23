<template>
  <div>
    <sweet-header />
    <sweet-carousel :carouselList="carouselList" />
    <div class="sweet-container">
      <div class="sweet-show">
        <sweet-subTitle label="甜品 SHOW"  icon-type="polymer" color="#ff4081" />
        <sweet-more label="更多" icon-type="chevron_right" icon-color="#e4e4e4" /> 
        <sweet-list/>
      </div>
    </div>
    <div class="sweet-container">
      <div class="sweet-shop">
        <sweet-subTitle label="甜品驿站" icon-type="account_balance" color="#7e57c2" /> 
        <sweet-list/>
      </div>
    </div>
  </div>
</template>

<script>
  import sweetHeader from '@/components/sweet-header'
  import sweetCarousel from '@/components/home/sweet-carousel'
  import sweetList from '@/components/home/sweet-show'
  import sweetSubTitle from '@/components/home/sweet-subTitle'
  import sweetMore from '@/components/home/sweet-more'
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
      sweetCarousel,
      sweetList,
      sweetSubTitle,
      sweetMore
    }
  }
</script>
