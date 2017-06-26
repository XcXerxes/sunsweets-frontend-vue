<template>
  <div>
    <sweet-header></sweet-header>
    <router-view></router-view>
    <sweet-footer></sweet-footer>
  </div>
</template>
<script>
  import sweetHeader from '@/components/sweet-header'
  import sweetFooter from '@/components/sweet-footer'

  export default {
    components: {
      sweetHeader,
      sweetFooter
    }
  }
</script>
