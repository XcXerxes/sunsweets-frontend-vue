const state = {
  list: []
}

const getters = {
  hotShopList: state => state.list
}

const mutations = {
  getHotShopList (state) {
    state.list = [
      {
        thumb: require('../../assets/images/pexels-photo.jpg'),
        title: '马卡龙'
      },
      {
        thumb: require('../../assets/images/pexels-photo-29682.jpg'),
        title: '巧克力蛋糕'
      },
      {
        thumb: require('../../assets/images/pexels-photo-92024.jpeg'),
        title: '起司'
      },
      {
        thumb: require('../../assets/images/pexels-photo-196410.jpeg'),
        title: '甜在心奶茶'
      },
      {
        thumb: require('../../assets/images/pexels-photo-213661.jpeg'),
        title: '巧克力蛋糕'
      },
      {
        thumb: require('../../assets/images/pexels-photo-260922.jpeg'),
        title: '巧克力蛋糕'
      }
    ]
  }
}

export default {
  state,
  getters,
  mutations
}
