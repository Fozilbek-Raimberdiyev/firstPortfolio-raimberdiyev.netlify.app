export default {
  state: {
    movies: [],
    name: "Fozil"
  },
  actions: {
    async fetchMovies(context) {
    let response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=fa61e6fa7724edd99048bc5f0b11ae72");
    let jsonData = await response.json();
    context.commit("updateMovies",jsonData.results)
    }
  },
  getters: {
    moviesList(state) {
        return state.movies
    }
  },
  mutations: {
    updateMovies(state, value) {
        state.movies = value
    }
  },
  
}