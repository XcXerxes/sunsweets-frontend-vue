<template>
  <section class="sweet-about__content">
    <p>本网站旨在收集世界的各种甜品，帮助吃货们了解甜品的做法。</p>
    <p>向大家推荐各种好吃的餐厅，让大家都能吃到最美味的甜品。</p>
    <p>有任何需要可以联系邮箱 <a href="https://mail.aliyun.com/">xcxerxes@aliyun.com</a>。</p>
  </section>
</template>
<script>
  import {TweenMax} from 'gsap'
  import 'gsap/TextPlugin'

  export default {
    mounted () {
      TweenMax.set('.sweet-about__content p', {
        opacity: 0,
        x: -600
      })
    }
  }
</script>
<style scoped>
  .sweet-about__content {
    text-align: center;
  }
  .sweet-about__content p {
    font-size: 1.8rem;
    letter-spacing: .15rem;
  }
</style>
