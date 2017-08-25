<template>
  <div class="sweet-shop" :style="{marginBottom: '600px'}">
    <shop-cover :coverInfo="coverInfo" />
    <section class="sweet-container">
      <div class="sweet-main">
        <div class="sweet-shop__cate">
          <cate-list :activeClass="activeClass" :selected="currentShopCity" icon-type="location_city"
           icon-color="#7e57c2" :list="cityList" title="城市：" v-on:select-handle="citySelectHandle"></cate-list>
          <mu-divider/>
          <cate-list :activeClass="activeClass" :selected="currentShopArea" icon-type="location_city"
           icon-color="#42a5f5" :list="areaList" title="区域：" v-on:select-handle="areaSelectHandle"></cate-list>
          <mu-divider />
          <cate-list :activeClass="activeClass" :selected="currentMonetary" icon-type="location_city"
           icon-color="#ef5350" :list="cityList" title="消费：" v-on:select-handle="monetarySelectHandle"></cate-list>
          <mu-divider />
          <cate-list :activeClass="activeClass" :selected="currentShopSort" icon-type="graphic_eq"
           icon-color="#ff4081" :list="sortList" title="排序：" v-on:select-handle="sortSelectHandle"></cate-list>

        </div>
        <div class="sweet-shop__content">
          <shop-card></shop-card>
          <mu-pagination :total="total" :pageSizeOption="[10, 15, 20]"
          :current="currentPage" :pageSize="limit"
          @pageSizeChange="handlePageSize" @pageChange="handlePage" class="shop-pagination"></mu-pagination>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import shopCover from '@/components/shop/shop-cover'
import cateList from '@/components/common/cate-list'
import shopCard from '@/components/shop/shop-card'
import {formatCity} from '@/utils'
import shopSortConfig from '@/config/shop-sort'
import {mapGetters} from 'vuex'
import {TweenMax, Power3} from 'gsap'
import 'gsap/ScrollToPlugin'

export default {
  data () {
    return {
      coverInfo: {
        coverImg: require('../assets/images/shop_small.jpg'),
        title: '食色性也，民以食为天',
        caption: '养生，保健，滋补，美丽只此一生'
      },
      activeClass: 'show-list-active',
      cityList: formatCity(),
      sortList: shopSortConfig,
      total: 36,
      currentPage: 1,
      limit: 8
    }
  },
  computed: {
    ...mapGetters([
      'currentShopCity',
      'currentShopArea',
      'currentMonetary',
      'currentShopSort',
      'sweetShopList',
      'sweetShopTotal',
      'sweetShopLoading',
      'areaList'
    ])
  },
  methods: {
    handlePageSize (limit) {
      this.limit = limit
    },
    handlePage (currentPage) {
      this.currentPage = currentPage
    },
    citySelectHandle (item) {
      this.$store.commit('figureShopCity', {city: item.value})
      /* this.dispatchSweetList({
        currentPage: this.currentPage,
        limit: this.limit
      }) */
    },
    areaSelectHandle (item) {
      this.$store.commit('figureShopArea', {area: item.value})
    },
    monetarySelectHandle () {

    },
    sortSelectHandle () {

    }
  },
  mounted () {
    if (document.body.scrollTop > 100) {
      TweenMax.to(window, 1, {scrollTo: {y: 0}, ease: Power3.easeOut}, '-=0.25')
    }
  },
  components: {
    shopCover,
    cateList,
    shopCard
  }
}
</script>
<style lang="less" scoped>
  .sweet-shop__content {
    padding: 15px;
  }
  .shop-pagination {
    justify-content: center;
    margin-top: 1.6rem;
  }
</style>

