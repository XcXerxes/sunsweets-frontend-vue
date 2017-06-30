<template>
  <div class="sweet-show-list">
    <div class="sweet-show-label">
      <mu-icon :value="iconType" :color="iconColor" :size="20"></mu-icon>
      <span>{{title}}</span>
    </div>
    <div class="sweet-show-list__content">
      <template v-for="(item, index) in list">
        <mu-flat-button  :key="index" @click="selectLabel(item)"
        :label="item.title" :secondary="item.value === selected ? true : false"></mu-flat-button>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title', 'iconType', 'iconColor', 'list', 'activeClass', 'selected'],
    name: 'show-sub-list',
    methods: {
      selectLabel (item) {
        this.$emit('select-handle', item)
      },
      watch: {
        selectedIndex: function (oldVal, val) {
          if (oldVal !== val) {
            this.name = ''
          }
        }
      }
    },
    created () {
      console.log('current==========' + this.selected)
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
    flex:1;
  }
</style>

