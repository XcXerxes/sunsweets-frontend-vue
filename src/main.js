// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import 'muse-components/styles/base.less' // 加载基础的样式
import 'swiper/dist/css/swiper.css'
import App from './App'
import router from './router'
import './assets/less/public.less'
import 'muse-components/grid/grid.less'
import VueLazyload from 'vue-lazyload'  // img lazyload

import appBar from 'muse-components/appBar'
import paper from 'muse-components/paper'
import flatButton from 'muse-components/flatButton'
import iconButton from 'muse-components/iconButton'
import subHeader from 'muse-components/subHeader'
import gridList from 'muse-components/gridList/gridList'
import gridTile from 'muse-components/gridList/gridTile'
import row from 'muse-components/grid/row'
import col from 'muse-components/grid/col'
import icon from 'muse-components/icon'
import textField from 'muse-components/textField'
import raisedButton from 'muse-components/raisedButton'
import popup from 'muse-components/popup'
import divider from 'muse-components/divider'
import pagination from 'muse-components/pagination'
import circularProgress from 'muse-components/circularProgress'
import card from 'muse-components/card/card'
import cardMedia from 'muse-components/card/cardMedia'
import cardTitle from 'muse-components/card/cardTitle'
import cardText from 'muse-components/card/cardText'
import cardHeader from 'muse-components/card/cardHeader'
import cardActions from 'muse-components/card/cardActions'

Vue.component(appBar.name, appBar)
Vue.component(paper.name, paper)
Vue.component(flatButton.name, flatButton)
Vue.component(row.name, row)
Vue.component(col.name, col)
Vue.component(subHeader.name, subHeader)
Vue.component(gridList.name, gridList)
Vue.component(gridTile.name, gridTile)
Vue.component(iconButton.name, iconButton)
Vue.component(icon.name, icon)
Vue.component(textField.name, textField)
Vue.component(raisedButton.name, raisedButton)
Vue.component(popup.name, popup)
Vue.component(divider.name, divider)
Vue.component(pagination.name, pagination)
Vue.component(circularProgress.name, circularProgress)
Vue.component(card.name, card)
Vue.component(cardMedia.name, cardMedia)
Vue.component(cardTitle.name, cardTitle)
Vue.component(cardText.name, cardText)
Vue.component(cardHeader.name, cardHeader)
Vue.component(cardActions.name, cardActions)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
