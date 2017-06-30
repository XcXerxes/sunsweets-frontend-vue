<template>
  <div class="sweet-info">
    <mu-circular-progress :size="50" class="sweet-info__progress"></mu-circular-progress>
    <mu-row gutter >
      <template v-for="(item,index) in data">
        <mu-col width="100" tablet="50" desktop="33" class="sweet-info__col" :key="index">
          <mu-card>
            <mu-card-media :title="item.title">
              <img v-lazy="computedThumb(item.thumb)">
            </mu-card-media>
            <mu-card-title :title="item.title"></mu-card-title>
            <mu-card-text>{{item.caption}}</mu-card-text>
          </mu-card>
        </mu-col>
      </template>
    </mu-row>
  </div>
</template>
<script>
  import {TweenMax, Power3} from 'gsap'
  import config from '@/config'
  export default {
    props: ['data'],
    methods: {
      computedThumb (thumb) {
        return config.orginImg + thumb
      },
      mouseenterHandle (event) {
        const sweetInfoSub = event.target.getElementsByClassName('sweet-info__sub')[0]
        TweenMax.to(sweetInfoSub, 0.3, {
          height: '68px',
          visibility: 'visible',
          ease: Power3.easeOut
        })
        console.log(event.target)
      },
      mouseleaveHandle (event) {
        const sweetInfoSub = event.target.getElementsByClassName('sweet-info__sub')[0]
        TweenMax.to(sweetInfoSub, 0.6, {
          height: 0,
          ease: Power3.easeIn
        })
        console.log(event)
      }
    }
  }
</script>
<style>
  .sweet-info {
    position: relative;
  }
  .sweet-info__progress {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% -50%);
  }
  .sweet-info__content {
    width: 100%;
    height: 240px;
    border: 1px solid #e4e4e4;
    position: relative;
    overflow: hidden;
  }
  .sweet-info__col {
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .sweet-info__sub {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0;
    background-color: rgba(0, 0, 0, .3);
  }
</style>

