<template>
  <div class="sweet-info">
    <mu-circular-progress v-if="loading" :size="50" class="sweet-info__progress"></mu-circular-progress>
    <h3 v-if="data && data.length===0" :style="{textAlign: 'center'}">暂时无数据</h3>
    <template v-else>
      <mu-row gutter class="sweet-info__row">
        <template v-for="(item,index) in data">
          <mu-col width="100" tablet="50" desktop="33" class="sweet-info__col" :key="index">
            <mu-card>
              <mu-card-media>
                <img v-lazy="computedThumb(item.thumb)" @click="openDetail(item.id)">
                <div class="sweet-card-media__text">
                  <icon-label icon-type="visibility" icon-color="#ec407a" :size="18" total="2"></icon-label>
                  <icon-label icon-type="favorite" icon-color="#ec407a" :size="18" total="2"></icon-label>
                </div>
              </mu-card-media>
              <mu-card-title :title="item.title"></mu-card-title>
              <mu-card-text>{{item.caption+ 'asddddddddddddddddddddddddddddddddddddddddddddddddddassssssssssssssssssssssssssssssssssssssssssasdsd'}}</mu-card-text>
            </mu-card>
          </mu-col>
        </template>
      </mu-row>
    </template>
  </div>
</template>
<script>
  import {TweenMax, Power3} from 'gsap'
  import config from '@/config'
  import iconLabel from '@/components/common/icon-label'
  export default {
    props: ['data', 'loading'],
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
    },
    components: {
      iconLabel
    }
  }
</script>
<style>
  .sweet-info {
    position: relative;
    flex: 1;
  }
  .sweet-info .mu-card-media-title .mu-card-title,
  .sweet-info .mu-card-title-container .mu-card-title {
    font-size: 18px;
  }
  .sweet-info .mu-card-title-container {
    padding: 0 16px;
  }
  .sweet-card-media__text {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 16px;
    background-color: rgba(0, 0, 0, 0.34);
    display: flex;
    justify-content: flex-end;
  }
  .sweet-card-media__text span {
    color: #fff;
  }
  .sweet-info .mu-card-text {
    word-wrap: break-word;
  }
  .sweet-info__row {
    align-items: flex-end;
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

