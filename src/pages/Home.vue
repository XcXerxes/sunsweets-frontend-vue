<template>
  <div class="sweet-home">
    <sweet-carousel :carouselList="carouselList" ></sweet-carousel>
    <div class="sweet-container">
      <div class="sweet-home__show">
        <sweet-subTitle label="甜品 SHOW"  icon-type="polymer" color="#ff4081" ></sweet-subTitle>
        <sweet-more label="更多" icon-type="chevron_right" icon-color="#e4e4e4" ></sweet-more>
        <sweet-show :list="showHotList"></sweet-show>
      </div>
    </div>
    <div class="sweet-container">
      <div class="sweet-home__shop">
        <sweet-subTitle label="甜品驿站" icon-type="account_balance" color="#7e57c2"></sweet-subTitle>
        <sweet-more label="更多" icon-type="chevron_right" icon-color="#e4e4e4" ></sweet-more>
        <sweet-shop :list="hotShopList"></sweet-shop>
      </div>
    </div>
    <div class="sweet-container">
      <div class="sweet-home__about">
        <sweet-subTitle label="关于我们" icon-type="dashboard" color="#42a5f5" ></sweet-subTitle>
        <sweet-about v-once></sweet-about>
      </div>
    </div>
    <div class="sweet-container">
      <div class="sweet-home__contact">
        <sweet-subTitle label="联系我们" icon-type="call" color="#66bb6a" ></sweet-subTitle>
        <call-form v-on:submit="submitHandle" ></call-form>
      </div>
    </div>
    <mu-popup position="top" :overlay="false" :open="topPopup" @close="close('top')">
       <mu-flat-button label="提交成功，客服会在第一时间回复您的" class="demo-flat-button" @click="close('top')" labelPosition="before" icon="close" secondary></mu-flat-button>
    </mu-popup>
  </div>
</template>

<script>
  import '@/utils/listenScroll'   // 监听滚动事件，实现 animation
  import sweetCarousel from '@/components/home/sweet-carousel'
  import sweetShow from '@/components/home/sweet-show'
  import sweetShop from '@/components/home/sweet-shop'
  import sweetSubTitle from '@/components/home/sweet-subTitle'
  import sweetMore from '@/components/home/sweet-more'
  import callForm from '@/components/home/call-form'
  import sweetAbout from '@/components/home/sweet-about'
  import {mapGetters} from 'vuex'
  import {TweenLite, Power3} from 'gsap'
  import 'gsap/ScrollToPlugin'

  export default {
    data () {
      return {
        topPopup: false
      }
    },
    computed: {
      ...mapGetters([
        'carouselList',
        'showHotList',
        'hotShopList'
      ])
    },
    watch: {
      topPopup (val) {
        if (val) {
          setTimeout(() => {
            this.topPopup = false
          }, 2500)
        }
      }
    },
    methods: {
      close (position) {
        this[position + 'Popup'] = false
      },
      // 提交留言信息
      submitHandle (info) {
        this.topPopup = true
        Object.assign(info, {
          name: '',
          contact: '',
          content: ''
        })
      }
    },
    created () {
      this.$store.commit('getList')
      this.$store.commit('getHotShopList')
      this.$store.dispatch('fetchCarouselList', {
        currentPage: 1,
        limit: 5
      })
    },
    mounted () {
      if (document.body.scrollTop > 100) {
        TweenLite.to(window, 1, {scrollTo: {y: 0}, ease: Power3.easeOut}, '-=0.25')
      }
    },
    components: {
      sweetCarousel,
      sweetShow,
      sweetShop,
      sweetSubTitle,
      sweetMore,
      callForm,
      sweetAbout
    }
  }
</script>
<style lang="" scoped>
  .sweet-about__content p{
    font-size:1.8rem;
    color:#eee;
  }
  .sweet-home__show,
  .sweet-home__shop,
  .sweet-home__about,
  .sweet-home__contact
  {
    margin-bottom:2.4rem;
  }
</style>
