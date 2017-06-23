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
          fontSize: this.size || '18px'
        }
      }
    }
  }
</script>
