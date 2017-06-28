<template>
  <mu-row gutter>
    <template v-for="(item, index) in list">
      <sweet-item :key="index" :data="item"></sweet-item>
    </template>
  </mu-row>
</template>
<script>
import sweetItem from './sweet-item'
export default {
  props: ['list'],
  components: {
    sweetItem
  }
}
</script>
