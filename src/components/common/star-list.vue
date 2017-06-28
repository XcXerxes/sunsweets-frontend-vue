<template>
  <div class="sweet-start__list">
    <span>{{'推荐'}}</span>
    <mu-icon v-for="n in 5" :key="n" :value="computedVal(n)" :size="14" color="#ff1744"></mu-icon>
  </div>
</template>
<script>
  export default {
    props: ['level'],
    methods: {
      computedVal (n) {
        if (+(this.level) >= n) {
          return 'star'
        }
        return 'star_border'
      }
    }
  }
</script>
<style scoped lang="less">
  .sweet-start__list {
    display: inline-flex;
    align-items: center;
    >span {
      margin-right: 6px; 
    }
    >i {
      margin-right: 2px;
    }
  }
</style>

