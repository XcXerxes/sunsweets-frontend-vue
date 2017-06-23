<template>
  <div class="sweet-learnMore">
    <mu-flat-button :label="label" :icon="iconType" :color="color" :to="path" labelPosition="before"/>
  </div>  
</template>
<script>
  export default {
    props: ['label', 'iconType', 'iconColor', 'color', 'path']
  }
</script>
