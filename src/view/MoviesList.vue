<template>
  <div>
    <nav class="navigation">
      <ul>
        <li>
          <router-link to="/search">Search</router-link>
        </li>
      </ul>
    </nav>
    <h1 class="title">Movies</h1>
    <div class="movies">
      <movie-card v-for="(movie,index) in moviesList" :key="index" :movie="movie" class="moviecard"></movie-card>
    </div>
  </div>
</template>

<script>
import MovieCard from '@/view/MovieCard.vue';
import {mapActions,mapGetters} from "vuex"
export default {
  components: {
    MovieCard
  },
data() {
  return {
    search : "",
  }
},
computed: {
  ...mapGetters(["moviesList"]),
},
methods: {
  ...mapActions(["fetchMovies"])
},
mounted() {
    this.fetchMovies()
    }
}
</script>

<style scoped>
.title {
    text-align: center;
    color: yellow;
    font-size: 2rem;
}
.movies {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem;
}

.navigation {
  text-align: right;
  margin-right: 3rem;
  padding-top: 5rem;
  padding-bottom: 2rem;
}
.navigation li {
  list-style: none;
}
.navigation a {
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  text-transform: uppercase;
  color: #000;
  background: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  border: 1px solid #000;
  box-shadow: 0 1px 4px 2px rgb(0 0 0 / 20%);
}

@media screen and (max-width: 400px) {
  .navigation {
  margin-right: 2rem;
}
.navigation a {
  font-size: 1rem;
}
}

</style>