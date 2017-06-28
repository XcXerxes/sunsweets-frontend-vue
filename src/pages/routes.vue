<template>
  <div class="sweet">
    <sweet-header></sweet-header>
    <router-view></router-view>
    <back-top></back-top>
    <sweet-footer></sweet-footer>
  </div>
</template>
<script>
  import sweetHeader from '@/components/sweet-header'
  import sweetFooter from '@/components/sweet-footer'
  import backTop from '@/components/back-top'

  export default {
    components: {
      sweetHeader,
      sweetFooter,
      backTop
    }
  }
</script>
