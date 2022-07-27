<template>
  <div class="wrapper">
    <div class="search-form">
      <input type="search" placeholder="Search" v-model="search" class="search-input">
      <button @click="getSearchedMovies()" type="buttton">Search</button>
      
    </div>
    <h1 class="title" v-if="isPressed">Qidiruv natijalari</h1>
    <div class="info-container" v-for="(result,index) in results" :key="index">
    <div class="movie-info" v-if="results.length">
      <div class="movie-img">
        <img :src="`https://image.tmdb.org/t/p/w500//${result.backdrop_path}`" alt="movie-img">
      </div>
      <div class="movie-data">
        <p class="movie-title">{{result.title}}</p>
        <p class="movie-release-year">Release date: <span>{{result.release_date}}</span></p>
        <p class="movie-genre">Genre: 
        <span v-for="(genre,index) in result.genres" :key="index">{{genre.name}}</span>
        </p>
        <p class="movie-vote">Vote average: <span>{{result.vote_average}}</span></p>
      </div>
    </div>
    <div class="bottom-info">
      <p>{{result.overview}}</p>
    </div>
    <hr>
  </div>
  <div class="error" v-if="isPressed && !results.length">Hech narsa toplimadi!</div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      search : "",
      results : [],
      isPressed: false
    }
  },
  methods : {
    async getSearchedMovies() {
      this.isPressed =true
      const apiKey = "fa61e6fa7724edd99048bc5f0b11ae72";
      let res = (
        await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.search.toLowerCase()}`
        )
      );
      this.results = (await res.json()).results;
    },
  },
  watch : {

  },

}
</script>

<style scoped>
* {
  font-family: "Gilroy";
}
.title {
  text-align: center;
  margin: 2rem 0;
  color: azure;
}
.search-form {
  display: block;
  margin: 0 auto;
  background: #111;
  padding: 5rem;
}
.search-input {
  width: 55%;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid rgb(0 0 0 / 20%);
  box-shadow: 0 1px 4px 2px rgb(0 0 0 / 20%);
  outline: none;
  display: inline-block;
  margin: 0 1rem;
}
.search-form button {
  cursor: pointer;
  margin: 0 0.5rem;
  display: inline-block;
  font-size: 18px;
  text-transform: uppercase;
  color: #000;
  background: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #000;
  box-shadow: 0 1px 4px 2px rgb(0 0 0 / 20%);
}
.info-container {
  width: 800px;
  margin: 0 auto;
  background: #111;
  padding: 1rem;
}
  .movie-info {
    display: flex;
    margin-top: 2rem;
  }
  .movie-img {
    flex-basis: 75%;
  }
  .movie-img img {
    width: 100%;
    height: 350px;
    margin: 1rem;
    margin-left: 0;
    border-radius: 5px;
  }
  img[type=alt] {
    color: #fff;
  }
  .movie-data {
    margin: 2rem;
  }
  .movie-data p {
    font-size: 1.2rem;
    margin: 1rem;
    color: #fff;
  }
  .movie-data p span {
    color: #f90;
  }
  .movie-title {
    font-size: 2rem !important;
    font-weight: 600;
    margin-bottom: 1.5rem !important;
    color: #fff !important;
  }
  .movie-title.active {
    background: yellow;
  }
  .movie-genre span {
    margin-right: 0.5rem;
    color: #f90;
  }
  .bottom-info {
    margin-bottom: 2rem;
  }
  .bottom-info p {
    font-size: 1.3rem;
    line-height: 2rem;
    color: aliceblue;
  }
  .error {
    text-align: center;
    font-size: 18px;
    margin-top: 3rem;
    color: azure;
  }
  @media screen and (max-width: 400px) {
    .wrapper {
      background: #111;
      min-height: 100vh;
    }
    .info-container {
      padding: 0;
    }
    .search-form {
      width: 100%;
      text-align: center;
    }
    .search-input {
      width: 100%;
      margin: 0;
    }
    .search-form button {
      font-size: 1rem;
    }
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
  .movie-title {
    margin-left: 0;
  }
  }
</style>