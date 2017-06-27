<template>
  <div class="sweet-shop" :style="{marginBottom: '600px'}">
    <shop-cover :coverInfo="coverInfo" />
    <section class="sweet-container">
      <div class="sweet-main">
        <div class="sweet-shop__cate">
          <cate-list icon-type="location_city" icon-color="#7e57c2" :list="list" title="城市："></cate-list>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import shopCover from '@/components/shop/shop-cover'
import cateList from '@/components/common/cate-list'

export default {
  data () {
    return {
      coverInfo: {
        coverImg: require('../assets/images/shop_small.jpg'),
        title: '食色性也，民以食为天',
        caption: '养生，保健，滋补，美丽只此一生'
      },
      list: [
        {
          title: '北京'
        },
        {
          title: '上海'
        },
        {
          title: '广州'
        },
        {
          title: '深圳'
        }
      ]
    }
  },
  components: {
    shopCover,
    cateList
  }
}
</script>
