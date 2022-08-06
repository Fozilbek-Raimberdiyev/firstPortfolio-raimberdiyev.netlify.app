<template>
  <div class="info-container">
    <div class="movie-info">
      <div class="movie-img">
        <img :src="`https://image.tmdb.org/t/p/w500//${movie.backdrop_path}`" alt="movie-img">
      </div>
      <div class="movie-data">
        <p class="movie-title"><span>{{movie.title}}</span></p>
        <p class="movie-release-year">Release date: <span>{{movie.release_date}}</span></p>
        <p class="movie-genre">Genre: 
        <span v-for="(genre,index) in movie.genres" :key="index">{{genre.name}}</span>
        </p>
        <p class="movie-vote">Vote average: <span>{{movie.vote_average}}</span></p>
      </div>
    </div>
    <div class="bottom-info">
      <p>{{movie.overview}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: {},
    };
  },
  methods : {
       async getMovieById() {
      const apiKey = "fa61e6fa7724edd99048bc5f0b11ae72";
      let res = (
        await fetch(
          `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${apiKey}`
        )
      );
      this.movie = await res.json();
    },
  },
  mounted() {
    this.getMovieById();
  }
}
</script>
<style scoped>
* {
  font-family: "Gilroy";
}
.info-container {
  width: 800px;
  margin: 3rem auto;
}
  .movie-info {
    display: flex;
  }
  .movie-img {
    flex-basis: 45%;
  }
  .movie-img img {
    width: 100%;
    height: 350px;
    margin: 1rem;
    margin-left: 0;
    border-radius: 0.2rem;
  }
  .movie-data {
    margin: 2rem;
  }
  .movie-data .movie-release-year {
    font-size: 1.2rem;
    color: #f90;
  }
  .movie-data p {
    color: #f90;
    width: 100%;
  }
  .movie-data  span {
    color: #fff;
    margin-left: 1rem;
  }

  .movie-title {
    font-size: 2rem !important;
    font-weight: 600;
    margin-bottom: 1.5rem !important;
    color: yellow !important;
  }
  .movie-genre span {
    margin-right: 0.5rem;

  }
  .bottom-info p {
    font-size: 1.3rem;
    line-height: 2rem;
    color: #fff;
  }
  @media screen and (max-width: 400px) {
  .movie-info {
    flex-direction: column;
  }
  .movie-img {
    width: 350px;
    text-align: center;
    margin: 2.2rem 0;
  }
  .movie-img img{
    width: 80%;
    height: 250px;
  }
  .bottom-info {
    width: 320px;
    margin: 0 1rem;
    font-size: 16px;
    text-align: justify;
  }
  .movie-data {
    width: 350px;
  }
  .info-container {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    background: #222;
  }
  }
</style>