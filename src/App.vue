<template>
 <div class="q-pa-md q-gutter-md">
    <div class="row justify-between">

    <q-parallax
      src="https://cdn.quasar.dev/img/parallax2.jpg"
    >
      <h1 class="text-white">Basic</h1>
    </q-parallax>

    </div>
  </div>
</template>

<script>
// import NavBar from '@/view/headerFooter/NavBar.vue'
import {mapMutations,mapState} from "vuex"
export default {
 components: {
  // NavBar
},
data() {
  return {
    
  }
},
computed : {
  ...mapState("movieState", ["isOpen"])
},
watch : {
  // isOpen(newValue) {
  //   if(newValue==true) {
  //     this.closeMenu()
  //   }
  // }
},
methods : {
  close() {
    if(this.isOpen) {
      this.closeMenu(false)
    }
  },
  ...mapMutations("movieState",["closeMenu"])
},
created() {
  location.replace('https://fozilbek.netlify.app')
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
  /* user-select: none; */
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
