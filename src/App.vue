<template>
 <div>
  <nav-bar></nav-bar>
  <router-view></router-view>
 </div>
</template>

<script>
import NavBar from './components/headerFooter/NavBar.vue'
export default {
 components: {
  NavBar
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
body {
  background: #222
}
@media screen and (max-width: 400px) {
    .container {
      width: 100%;
      margin: 0 auto;
    }
    body {
      overflow-x: hidden;
    }
}
</style>
