import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    direction: "departure",
    items: {}
    // categories: [],
    // popup: false,
    // pages: []
  },
  mutations: {
    direction(state, item) {
      state.direction = item
    },
    items(state, item) {
      state.items = item
    },
    // categories(state, item) {
    //   // console.log()
    //   state.categories = item.sort((a, b) => a.order - b.order)
    // },
    // popup(state, item) {
    //   state.popup = item
    // },
    // pages(state, item) {
    //   state.pages = item
    // }
  }
})

export default store
