<template>
  <div class="sweet-subTitle">
    <mu-icon :value="iconType" :color="iconColor || color"/>
    <span class="sweet-subTitle__text" :style="computedStyle">{{label}}</span>
    <!--<mu-flat-button :label="label" :icon="iconType" :color="color" :to="path" :style="computedStyle" />-->
  </div>  
</template>
<script>
  export default {
    props: ['label', 'color', 'size', 'iconType', 'path', 'iconColor'],
    computed: {
      computedStyle () {
        return {
          color: this.color || '#e4e4e4',
          fontSize: this.size || '24px'
        }
      }
    }
  }
</script>
<style scoped>
  .sweet-subTitle>i {
        text-shadow: 3px 2px 4px #b9b9b9;
  }
  .sweet-subTitle>span {
        text-shadow: 3px 2px 4px #b9b9b9;
  }
</style>

