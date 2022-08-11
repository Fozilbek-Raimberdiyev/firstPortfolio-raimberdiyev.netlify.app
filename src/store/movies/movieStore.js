export default {
  namespaced: true,
  state: {
    movies: [],
    name: "Fozil",
    isOpen : false
  },
  actions: {
    async fetchMovies({commit}) {
    let response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=fa61e6fa7724edd99048bc5f0b11ae72");
    let jsonData = await response.json();
    commit("updateMovies",jsonData.results)
    }
  },
  getters: {
    moviesList(state) {
        return state.movies
    },
    forMovieCard(state) {
        return state.movies.map(el => el)
    }
  },
  mutations: {
    updateMovies(state, value) {
        state.movies = value
    },
    updateOpen(state,value) {
      state.isOpen = value
    },
    closeMenu(state,value) {
      state.isOpen = value
    }
  },
  
}