<template>
  <mu-row gutter>
    <template v-for="(item, index) in list">
      <mu-col width="100" tablet="50" desktop="33">
        <sweet-show-item :key="index" :data="item" type="show"></sweet-show-item>
      </mu-col>
    </template>
  </mu-row>
</template>
<script>
import sweetShowItem from './sweet-show-item'
export default {
  props: ['list'],
  components: {
    sweetShowItem
  }
}
</script>
