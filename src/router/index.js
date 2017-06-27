import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component (resolve) {
        require(['@/pages/routes'], resolve)
      },
      children: [
        {
          path: '/',
          component (resolve) {
            require(['@/pages/Home'], resolve)
          }
        },
        {
          path: '/home',
          name: 'home',
          component (resolve) {
            require(['@/pages/Home'], resolve)
          }
        },
        {
          path: '/show',
          name: 'sweetShow',
          component (resolve) {
            require(['@/pages/sweet-show'], resolve)
          }
        },
        {
          path: '/shop',
          name: 'sweetShop',
          component (resolve) {
            require(['@/pages/sweet-shop'], resolve)
          }
        }
      ]
    }
  ]
})
