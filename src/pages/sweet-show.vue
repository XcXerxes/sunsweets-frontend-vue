<template>
  <div class="sweet-show" ref="container">
    <div class="sweet-show__video">
      <div class="mask"></div>
      <show-video :src="mp4Src"></show-video>
    </div>
    <div class="sweet-container">
      <div class="sweet-main">
        <div class="sweet-container__list">
          <cate-list :activeClass="activeClass" :selected="currentCity" icon-type="location_city"
           icon-color="#7e57c2" :list="cityList" title="城市：" v-on:select-handle="citySelectHandle"></cate-list>
          <mu-divider />
          <cate-list :activeClass="activeClass" :selected="currentCate" icon-type="format_indent_increase"
           icon-color="#42a5f5" :list="allCate" title="分类：" v-on:select-handle="cateSelectHandle"></cate-list>
          <mu-divider />
          <cate-list :activeClass="activeClass" :selected="currentSort" icon-type="graphic_eq"
          icon-color="#ff4081" :list="orderList" title="排序：" v-on:select-handle="sortSelectHandle"></cate-list>
          <mu-divider  />
        </div>
        <div class="sweet-show__info">
          <show-sweet-list :data="sweetShowList" :loading="show_loading" />
          <mu-pagination :total="sweetShowTotal"
          :current="currentPage" :pageSize="limit"
          @pageChange="handlePage" class="sweet-pagination"></mu-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import orderConfig from '@/config/order-config'   // 排序的分类信息
  import cateList from '@/components/common/cate-list'
  import showSweetList from '@/components/show/show-sweet-list'
  import showVideo from '@/components/show/show-video'
  import {formatCity} from '@/utils'
  import {TweenLite, Power3} from 'gsap'
  import 'gsap/ScrollToPlugin'
  import {mapGetters} from 'vuex'

  export default {
    data () {
      return {
        mp4Src: require('../assets/media/bg.mp4'),
        activeClass: 'show-list-active',
        cityList: formatCity(),
        orderList: orderConfig,
        limit: 9,
        currentPage: 1
      }
    },
    computed: {
      ...mapGetters([
        'sweetShowTotal',
        'currentCity',
        'currentCate',
        'currentSort',
        'allCate',
        'sweetShowList',
        'show_loading'
      ])
    },
    methods: {
      dispatchSweetList ({currentPage, limit}) {
        this.$store.dispatch('fetchSweetShowList', {
          limit,
          currentPage
        }).then(data => {
          if (data && data.code === -200) {
            console.error(data.message)
          }
        }).catch(err => {
          console.error(err)
        })
      },
      handlePage (currentPage) {
        this.currentPage = currentPage
        this.dispatchSweetList({
          currentPage,
          limit: this.limit
        })
      },
      citySelectHandle (item) {
        this.$store.commit('figureCurrentArea', {area: item.value})
        this.dispatchSweetList({
          currentPage: this.currentPage,
          limit: this.limit
        })
      },
      cateSelectHandle (item) {
        this.$store.commit('figureCurrentCate', {sweetCateId: item.id})
        this.dispatchSweetList({
          currentPage: this.currentPage,
          limit: this.limit
        })
      },
      sortSelectHandle (item) {
        this.$store.commit('figureCurrentSort', {sort: item.value})
        this.dispatchSweetList({
          currentPage: this.currentPage,
          limit: this.limit
        })
      }
    },
    created () {
      this.$store.dispatch('fetchAllCate')
      this.dispatchSweetList({
        currentPage: this.currentPage,
        limit: this.limit
      })
    },
    mounted () {
      if (document.body.scrollTop > 100) {
        TweenLite.to(window, 1, {scrollTo: {y: 0}, ease: Power3.easeOut}, '-=0.25')
      }
    },
    components: {
      cateList,
      showVideo,
      showSweetList
    }
  }
</script>
<style scoped>
  .sweet-show__video {
    position: relative;
    margin-bottom: 3rem;
  }
  .sweet-show__video .mask {
    position: absolute;
    left:0;
    right: 0;
    top:0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .2);
  }
  .sweet-show__info {
    padding: .65rem;
    margin-top: 2rem;
    min-height: 500px;
    display: flex;
    flex-direction: column;
  }
  .sweet-pagination {
    justify-content: flex-end;
    margin-top:1.6rem;
  }
</style>

