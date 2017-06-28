<template>
  <mu-appbar class="header-appbar header-scroll" ref="headerBar">
    <mu-flat-button label="首页" slot="left" to="/" activeClass="active" exact />
    <mu-flat-button label="甜品SHOW" to="/show" slot="left" activeClass="active" />
    <div class="header-paper">
      <img :src="require('../assets/images/sm_logo.png')" />
    </div>
    <mu-flat-button label="甜品驿站" slot="right" to="/shop"  activeClass="active"  />
    <mu-flat-button href="333" label="关于我们" slot="right" to="/about" activeClass="active"/>
  </mu-appbar>
</template>
<script>
  // *:class="showBg ? 'header-scroll' : 'header-noScroll' "
  import {TweenMax, Power4} from 'gsap'
  export default {
    data () {
      return {
        showBg: false
      }
    },
    watch: {

    },
    methods: {
      setScroll () {
        const {scrollTop} = document.body
        if (scrollTop > 100) {
          if (!this.isScroll) {
            this.showBg = true
            this.isScroll = true
          }
        } else {
          if (this.isScroll) {
            this.showBg = false
            this.isScroll = false
          }
        }
      }
    },
    beforeUpdate () {
      console.log('update')
    },
    mounted () {
      TweenMax.to(this.$el, 0.3, { left: 0, opacity: 1, ease: Power4.easeIn })
      /*
      this.isScroll = false
      window.addEventListener('scroll', (event) => {
        this.setScroll()
      }, false)
      */
    }
  }
</script>
<style>
.header-paper {
  height: 64px;
  line-height: 64px;
}

.header-paper img {
  width: inherit;
  height: 50px;
  margin-top: 7px;
}

.mu-appbar.header-appbar {
  justify-content: center;
  color:#7e57c2;
  font-weight: 500;
  height: 52px;
  line-height: 52px;
  left:-600px;
  position: fixed;
  opacity: 0;
}
.mu-appbar.header-appbar.header-scroll {
  background-color: #f9f9f9;
  top:0;
  transition: all .6s ease;
  box-shadow: 0 2px 6px #e4e4e4;
}

.mu-appbar.header-appbar.header-noScroll {
  background-color: transparent;
  top:20px;
  transition: all .6s ease;
}

.header-appbar .mu-appbar-title {
  flex: 0 1 200px;
  display: flex;
  justify-content: center;
}

.header-appbar  .mu-flat-button {
  margin: 0 .875rem;
}

.header-appbar  .mu-flat-button:hover {
  background-color: #f3e5f5;
}

.header-appbar  .mu-flat-button.active {
  background-color: rgba(126,87,194,.7);
  color: #fff;
  border-radius: 0;
}
</style>

