<template>
  <div class="weather-container">
    <div>
        <div class="search-form">
        <input type="search" placeholder="Enter your region" v-model="place">
        <button @click="getWheather()" type="button" class="btn">Search</button>
    </div>
    <!-- <p style="color: #fff">{{wheatherData}}</p> -->
    <div class="result" v-if="isGet">
        <p class="region-title">City: <span>{{wheatherData?.name}}</span>, <span>{{wheatherData?.sys?.country}}</span></p>
        <p class="deg">Temperature: <span>{{Math.round(wheatherData?.main?.temp)}}C</span></p>
        <p class="description" v-for="(data,index) in wheatherData?.weather" :key="index">Description: 
        <span>{{data?.description}}</span>
        </p>
        <p class="wind">Wind speed: <span>{{wheatherData?.wind?.speed}}</span></p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
           place : "",
           wheatherData : {},
           isGet: false
        }
    },
    methods : {
        async getWheather() {
            try{
                this.isGet = false
                let apiKey = "b5a12c9a0d8e01e38389d6b2a7c5b622";
                let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.place}&mode=json&units=metric&appid=${apiKey}`)
                let jsonData = await response.json();
                this.wheatherData = jsonData;
                this.isGet = true
            } 
            catch(e){
                console.log(e)
            }
        },
    }
}
</script>

<style scoped>

.weather-container >  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10rem 5rem;
    position: relative;
    z-index: 1;
    /*  */
}
.weather-container > div::after {
    background: url("../../assets/pikwizard-sun-sunset-sky.jfif");
    background-repeat: no-repeat;
    background-size:  100%;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;   
    content: "";
    min-height: 100vh;
}
.search-form {
    flex-basis: 50%;
}
.result {
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
  color: #000;
  background: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #000;
  box-shadow: 0 1px 4px 2px rgb(0 0 0 / 20%);
}
.result p {
    color: #fff;
    margin: 1rem 5rem;
    font-size: 1.5rem;
}
.result p:first-child{
    margin-top: 0;
}
.result p span {
    color: rgb(252, 233, 206);
    font-style: italic;
}
</style>