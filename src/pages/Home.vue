<template>
  <div>
    <sweet-header></sweet-header>
    <sweet-carousel :carouselList="carouselList" ></sweet-carousel>
    <div class="sweet-container">
      <div class="sweet-show">
        <sweet-subTitle label="甜品 SHOW"  icon-type="polymer" color="#ff4081" ></sweet-subTitle>
        <sweet-more label="更多" icon-type="chevron_right" icon-color="#e4e4e4" ></sweet-more>
        <sweet-list></sweet-list>
      </div>
    </div>
    <div class="sweet-container">
      <div class="sweet-shop">
        <sweet-subTitle label="甜品驿站" icon-type="account_balance" color="#7e57c2"></sweet-subTitle>
        <sweet-more label="更多" icon-type="chevron_right" icon-color="#e4e4e4" ></sweet-more>
        <sweet-list></sweet-list>
      </div>
    </div>
    <div class="sweet-container">
      <div class="sweet-about">
        <sweet-subTitle label="关于我们" icon-type="dashboard" color="#42a5f5" ></sweet-subTitle>
        <div class="sweet-about__content" v-html="content">
        </div>
      </div>
    </div>
    <div class="sweet-container">
      <div class="sweet-contact">
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
  import sweetHeader from '@/components/sweet-header'
  import sweetCarousel from '@/components/home/sweet-carousel'
  import sweetList from '@/components/home/sweet-show'
  import sweetSubTitle from '@/components/home/sweet-subTitle'
  import sweetMore from '@/components/home/sweet-more'
  import callForm from '@/components/home/call-form'
  import aboutContent from '@/utils/about-config'
  import {mapGetters} from 'vuex'

  export default {
    data () {
      return {
        content: aboutContent.content,
        topPopup: false
      }
    },
    computed: {
      ...mapGetters([
        'carouselList'
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
      sweetMore,
      callForm
    }
  }
</script>
<style lang="" scoped>
  .sweet-about__content{
    text-align: center;
  }
  .sweet-about__content p{
    font-size:1.8rem;
    color:#eee;
  }
  .sweet-show,
  .sweet-shop,
  .sweet-about,
  .sweet-contact
  {
    margin-bottom:2.4rem;
  }
</style>
