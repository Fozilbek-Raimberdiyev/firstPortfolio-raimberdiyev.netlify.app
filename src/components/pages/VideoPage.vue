<template>
  <div class="video-container">
    <div>
        <div class="search-form">
        <input type="search" placeholder="Enter your region" v-model="videoSearch">
        <button @click="getWheather()" type="button" class="btn">Search</button>
        </div>
    </div>
            <div class="videos" v-if="videoData?.data?.length">
                <div class="video" v-for="(element,index) in videoData.data" :key="index">
                <embed :src="element.player_embed_url" class="embed" width="350px" height="300px">
                <p class="title">{{element.name}}</p>
            </div>
            
            </div>
            <div class="loading" v-if="loading">Yuklanmoqda...</div>
            <div class="error" v-else-if="!videoData?.data?.length && isEnd">Ma'lumot topilmadi!</div>
    
  </div> 
</template>

<script>
export default {
    data() {
        return {
           videoSearch : "",
           videoData : {},
           loading: false,
           isEnd: false
        }
    },
    methods : {
        async getWheather() {
            try{
                this.isStartedSearch = true
                this.loading = true;
                let response = await fetch(`https://v1.nocodeapi.com/fozilbek/vimeo/uMfgwCsKVArVjIzp/search?q=${this.videoSearch}`)
                let jsonData = await response.json();
                this.videoData = jsonData;
                // this.isEnd = true
            } 
            catch(e){
                console.log(e)
            }
            finally{
                this.loading = false
                this.isEnd = true
                
            }
        },
    }
}
</script>

<style scoped>
.video-container >  div {
    padding: 10rem 5rem;
    padding-bottom: 2rem;
    position: relative;
}
.search-form {
    width: 700px;
    margin: 0 auto;
}
.search-form input {
    margin: 0 auto;
    width: 80%;
    text-align: center;
}
.videos {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.video {
    flex-basis: 32%;
    margin: 0 0.5rem;
}

.title {
    min-height: 50px;
    color: #fff;
    font-size: 18px;
    margin-left: 0.5rem;
}
.search-form {
    flex-basis: 50%;
}
input {
  width: 65%;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid rgb(0 0 0 / 20%);
  box-shadow: 0 1px 4px 2px rgb(0 0 0 / 20%);
  outline: none;
}
.btn {
  cursor: pointer;
  margin: 0 0.5rem;
  display: inline-block;
  font-size: 18px;
  text-transform: uppercase;
  color: #fff;
  background: blue;
  border: 1px solid #516552;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 4px 2px rgb(0 0 0 / 20%);
}
.loading{
    display: flex;
    flex-direction: column;
    font-size: 22px;
    color: #fff;
    align-items: center;
}
.error {
    display: flex;
    flex-direction: column;
    font-size: 22px;
    color: #fff;
    align-items: center;
}

@media screen and (max-width: 400px){
    .video-container >  div  {
        margin: 5rem 0;
        padding: 0;
    }
    .search-form {
    width: 330px;
    text-align: center;
    }
    .search-form input {
        width: 90%;
        margin: 0 auto;
        display: block;
    }
    .videos {
        flex-direction: column;
    }
    .video {
        flex-basis: 95%;
        margin: 1rem 0;
    }
}
</style>