// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import 'muse-components/styles/base.less' // 加载基础的样式
import App from './App'
import router from './router'
import 'flickity/dist/flickity.min.css'
import appBar from 'muse-components/appBar'
import paper from 'muse-components/paper'
import flatButton from 'muse-components/flatButton'

Vue.component(appBar.name, appBar)
Vue.component(paper.name, paper)
Vue.component(flatButton.name, flatButton)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
