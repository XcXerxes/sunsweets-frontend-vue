<template>
  <video ref="bgVideo" class="sweet-video" loop muted></video>
</template>
<script>
  import Bideo from '@/utils/bideo'

  export default {
    props: ['mp4Src'],
    mounted () {
      const bv = new Bideo()
      bv.init({
        // Video element
        videoEl: this.$refs.bgVideo,

        // Container element
        container: document.body,

        // Resize
        resize: true,

        autoplay: true,

        isMobile: window.matchMedia('(max-width: 768px)').matches,

        // Array of objects containing the src and type
        // of different video formats to add
        src: [
          {
            src: this.mp4Src,
            type: 'video/mp4'
          }
        ],

        // What to do once video loads (initial frame)
        onLoad: function () {
          // document.querySelector('#video_cover').style.display = 'none';
        }
      })
    }
  }
</script>
<style>
  .sweet-video {
    object-fit:fill;
    width: 100%;
    max-height: 600px;
  }
</style>

