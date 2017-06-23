<template>
  <mu-row gutter>
    <template v-for="(index, item) in list">
      <sweet-item></sweet-item>
    </template>
  </mu-row>
</template>
<script>
import sweetItem from './sweet-item'
var list = [
  {
    name: 1
  },
  {
    name: 1
  },
  {
    name: 1
  },
  {
    name: 1
  },
  {
    name: 1
  },
  {
    name: 1
  }
]
export default {
  data () {
    return {
      list: list
    }
  },
  components: {
    sweetItem
  }
}
</script>
