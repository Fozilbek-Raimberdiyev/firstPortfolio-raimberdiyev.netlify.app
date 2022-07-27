import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    movies: [],
    isOpen: false,
    search: '',
  },
  getters: {

  },
  mutations: {
    TOGGLE_IS_OPEN(state, val) {
      state.isOpen = val
    },

  },
  actions: {
  },
  modules: {
    
  }
})

export default store