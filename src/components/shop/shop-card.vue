<template>
  <mu-row gutter>
    <mu-col width="100" tablet="50" desktop="50" v-for="n in 8" :key="n">
      <div class="sweet-shop__card">
        <div class="shop-card__left">
          <img />
        </div>
        <div class="shop-card__right">
          <div class="shop-card__heading">
            <h2>learn more</h2>
          </div>
          <div class="shop-card__body">
            <p>learn more</p>
          </div>
          <div class="shop-card__footer">
            <icon-label icon-type="visibility" icon-color="rgba(126, 87, 194,.6)" :size="18" total="2"></icon-label>
            <span :style="{color:'#a4a4a4'}" >|</span>
            <icon-label icon-type="favorite" icon-color="#ec407a" :size="18" total="2"></icon-label>
            <span :style="{color:'#a4a4a4'}" >|</span>
            <star-list level="4"></star-list>
          </div>
        </div>
      </div>
    </mu-col>
  </mu-row>
</template>
<script>
  import iconLabel from '@/components/common/icon-label'
  import starList from '@/components/common/star-list'

  export default {
    components: {
      iconLabel,
      starList
    }
  }
</script>
<style lang="less" scoped>
  .sweet-shop__card {
    display: flex;
    margin-bottom: 15px;
    .shop-card__left {
      flex: 0 1 250px;
      min-height:180px;
      border: 1px solid #ccc; 
    }
    .shop-card__right {
      padding:0 1rem;
      padding-bottom: 1rem;
      display: flex;
      flex-direction: column;
    }
  }
  .shop-card__body {
    flex-grow: 1;
  }
</style>

