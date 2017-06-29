import { TweenMax, Power4 } from 'gsap'

const tweenEaseIn = (element, time, options, delay) => {
  return TweenMax.staggerTo(element, time, options, delay)
}
// 首页 甜品 show
const showEaseIn = () => {
  tweenEaseIn('.sweet-show-item', 1.2, {
    opacity: 1
  }, 0.5)
  tweenEaseIn('.sweet-show-item img', 1.2, {
    opacity: 1,
    x: 0,
    ease: Power4.easeOut
  }, 0.5)
}

// 首页  shop
const shopEaseIn = () => {
  tweenEaseIn('.sweet-shop-item___home', 1.2, {
    opacity: 1
  }, 0.5)
  tweenEaseIn('.sweet-shop-item___home img', 1.2, {
    opacity: 1,
    y: 0,
    ease: Power4.easeOut
  }, 0.8)
}

// 首页 about
const aboutEaseIn = () => {
  tweenEaseIn('.sweet-about__content p', 1.6, {
    x: 0,
    opacity: 1,
    ease: Power4.easeOut
  }, 0.5)
}

// 首页 call-form
const callFormEaseIn = () => {
  tweenEaseIn('.sweet-contact__item', 1.2, {
    x: 0,
    opacity: 1,
    ease: Power4.easeOut
  }, 0.5)
}

window.addEventListener('scroll', () => {
  const scrollTop = document.body.scrollTop
  if (scrollTop > 150) {
    showEaseIn()
  }
  if (scrollTop > 800) {
    shopEaseIn()
  }
  if (scrollTop > 3100) {
    aboutEaseIn()
  }
  if (scrollTop > 3400) {
    callFormEaseIn()
  }
}, false)
