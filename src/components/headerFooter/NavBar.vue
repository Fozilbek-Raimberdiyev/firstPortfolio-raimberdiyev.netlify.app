<template>
  <div>
    <nav class="navigation">
    <ul>
        <li><router-link to="/movie">Movies</router-link></li>
        <li><router-link to="/tv">Tv</router-link></li>
        <li><router-link to="/music">Music</router-link></li>
        <!-- <li><router-link to="/blog">News</router-link></li> -->
        <li><router-link to="/wheather">Weather</router-link></li>
    </ul>
  </nav>
  </div>
</template>

<script>
export default {
    name: "App"
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
}
.navigation {
    margin: 0 auto;
    padding: 1.5rem; 
    background: rgba(0, 0, 0, 0.9);
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
}

.navigation ul {
    display: flex;
    align-items: center;
    list-style: none;
}
.navigation ul li {
    margin: 0 1rem;
    
}
.navigation ul li a{
    color: aliceblue;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    font-size: 18px;
}
img {
    width: 64px;
    margin-right: 5px;
}
.router-link-exact-active{
    color: yellow !important;
}
@media screen and (max-width: 400px){
    .navigation ul li a {
        font-size: 1rem;
    }
}
</style>