<template>
  <div class="sweet-show" ref="container">
    <div class="sweet-show__video">
      <div class="mask"></div>
      <show-video :src="mp4Src"></show-video>
    </div>
    <div class="sweet-container">
      <div class="sweet-main">
        <div class="sweet-container__list">
          <cate-list :activeClass="activeClass" icon-type="location_city" icon-color="#7e57c2" :list="list" title="城市："></cate-list>
          <mu-divider />
          <cate-list :activeClass="activeClass" icon-type="room" icon-color="#66bb6a" :list="list" title="片区："></cate-list>
          <mu-divider  />
          <cate-list :activeClass="activeClass" icon-type="format_indent_increase" icon-color="#42a5f5" :list="list" title="分类："></cate-list>
          <mu-divider />
          <cate-list :activeClass="activeClass" icon-type="graphic_eq" icon-color="#ff4081" :list="orderList" title="排序："></cate-list>
          <mu-divider  />
        </div>
        <div class="sweet-show__info">
          <show-sweet-list />
          <mu-pagination :total="total" :pageSizeOption="[10, 15, 20]"
          :current="currentPage" :pageSize="limit"
          @pageSizeChange="handlePageSize" @pageChange="handlePage" class="sweet-pagination"></mu-pagination>
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
  export default {
    data () {
      return {
        mp4Src: require('../assets/media/bg.mp4'),
        activeClass: 'show-list-active',
        list: [
          {
            label: '北京'
          },
          {
            label: '上海'
          },
          {
            label: '广州'
          },
          {
            label: '深圳'
          }
        ],
        orderList: orderConfig,
        total: 300,
        limit: 9,
        currentPage: 1
      }
    },
    methods: {
      handlePageSize (limit) {

      },
      handlePage (currentPage) {

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
    max-height: 600px;
    height: 600px;
    background-color: rgba(0, 0, 0, .2);
  }
  .sweet-show__info {
    padding: .65rem;
    margin-top: 2rem;
  }
  .sweet-pagination {
    justify-content: flex-end;
    margin-top:1.6rem;
  }
</style>

