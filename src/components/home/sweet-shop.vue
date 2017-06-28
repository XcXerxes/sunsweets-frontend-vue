<template>
  <mu-row gutter>
    <template v-for="(item, index) in list">
      <mu-col width="100" tablet="100" desktop="100">
        <sweet-shop-item :key="index" :data="item"></sweet-shop-item>
      </mu-col>
    </template>
  </mu-row>
</template>
<script>
import sweetShopItem from './sweet-shop-item'
export default {
  props: ['list'],
  components: {
    sweetShopItem
  }
}
</script>
