<template>
    <router-link :to="`movie/${movie.id}`" class="moviecard">
          <img :src="`https://image.tmdb.org/t/p/w500//${movie.backdrop_path}`" alt="movie-img">
          <p class="movie-title">{{movie.title}}</p>
    </router-link>
</template>

<script>
export default {
props: ["movie"]
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
.moviecard {
  flex-basis: 30%;
  margin: 1rem;
}

.moviecard img {
  width: 100%;
  height: 250px;
  transition: all ease-in-out .3s;
  border-radius: 0.2rem;
  padding: 0.5rem;
  border-radius: 3px;
  height: 320px;
}
.moviecard img:hover {
  transform: scale(1.03);
}
.movie-title {
  font-size: 1.5rem;
  margin: 0.5rem 0;
  color: antiquewhite;
  min-height: 50px;
}
@media screen and (max-width: 400px){
  .moviecard {
    flex-basis: 95%;
    margin: 1rem;
  }
  .moviecard img {
    height: 200px
  }
}
</style>