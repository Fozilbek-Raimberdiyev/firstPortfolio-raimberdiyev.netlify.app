<template>
 <div class="container">
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
  background: rgba(0, 0, 0, 0.5);
}
.container {
  width: 1150px;
  margin: 0 auto;
  background: #222;
  box-shadow: 0 1px 4px 2px rgb(0 0 0 / 20%);
  min-height: 100vh;
}
</style>
