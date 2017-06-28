const state = {
  list: []
}

const getters = {
  showHotList: state => state.list
}

const mutations = {
  getList (state) {
    state.list = [
      {
        thumb: require('../../assets/images/209432.jpeg'),
        title: '马卡龙'
      },
      {
        thumb: require('../../assets/images/cake.jpeg'),
        title: '巧克力蛋糕'
      },
      {
        thumb: require('../../assets/images/pexels-photo-236799.jpeg'),
        title: '起司'
      },
      {
        thumb: require('../../assets/images/pexels-photo-266642.jpeg'),
        title: '甜在心奶茶'
      },
      {
        thumb: require('../../assets/images/pexels.jpeg'),
        title: '巧克力蛋糕'
      },
      {
        thumb: require('../../assets/images/photo-226292.jpeg'),
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
