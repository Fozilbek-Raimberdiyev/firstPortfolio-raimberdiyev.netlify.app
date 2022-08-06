import Vue from "vue";
import Vuex from "vuex"
import movieState from "@/store/movies/movieStore"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movieState
  }
})