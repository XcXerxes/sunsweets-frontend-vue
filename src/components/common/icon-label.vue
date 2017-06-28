<template>
  <div class="sweet-icon-label">
    <mu-icon :value="iconType" :color="iconColor" :size="size"></mu-icon>
    <span>{{total}}</span>
  </div>
</template>
<script>
  export default {
    props: ['iconType', 'iconColor', 'size', 'total']
  }
</script>
<style scoped>
  .sweet-icon-label {
    display: inline-block;
    margin: 0 6px;
  }
  .sweet-icon-label i {
    vertical-align: text-bottom;
    margin-right: 4px;
  }
</style>

