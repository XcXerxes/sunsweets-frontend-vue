<template>
  <div class="sweet-show-list">
    <div class="sweet-show-label">
      <mu-icon value="home" color="#e4e4e4" :size="20"></mu-icon>
      <span>{{title}}</span>
    </div>
    <div class="sweet-show-list__content"></div>
    <template v-for="(item, index) in list">
      <mu-flat-button  :key="index" @click="selectLabel(item.label)"
      :label="item.label" :primary="item.primary || false" :secondary="item.secondary || false" 
      :activeClass="activeClass"></mu-flat-button> 
    </template>
  </div>
</template>

<script>
  export default {
    props: ['title', 'icon-type', 'icon-color', 'list', 'activeClass'],
    name: 'show-sub-list',
    methods: {
      selectLabel (label) {

      }
    },
    created () {
      console.group(this.list)
    }
  }
</script>
<style scoped>
  .sweet-show-list {
    display: flex;
    justify-content: flex-start;
    margin: .875rem 0;
  }
  .sweet-show-label {
    flex: 0 1 80px;
    display: flex;
    align-items: center;
  }
  .sweet-show-label>span {
    margin-left: 6px;
    font-weight: 600;
  }
  .sweet-show-list__content {
  }
</style>

