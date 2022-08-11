<template>
  <div class="wrapper" :class="{close : !isOpen}">
    <div class="top">
        <div class="title">
            <i class="bi bi-bag"></i>
            <h1>My Portfolio</h1>
        </div>
        <span class="btns">
        <i @click="updateOpen(!isOpen)" :class="[isOpen ? 'bi bi-x' : 'bi bi-filter-left']"></i>
    </span>
    </div>
    <nav class="navigation">
    <ul :class="{open : isOpen}">
        <li><router-link @click="close()" to="/movie">Movies</router-link></li>
        <li><router-link @click="close()" to="/tv">Tv</router-link></li>
        <li><router-link @click="close()" to="/video">Video</router-link></li>
        <!-- <li><router-link to="/blog">News</router-link></li> -->
        <li><router-link @click="close()" to="/wheather">Weather</router-link></li>
    </ul>
  </nav>
  </div>
</template>

<script>
import {mapState, mapMutations} from "vuex"
export default {
    name: "App",
    data() {
        return {
            // isOpen: false
        }
    },
    computed: {
        ...mapState("movieState",["isOpen", "name"])
    },
    watch : {
        
    },
    methods : {
        ...mapMutations("movieState",["updateOpen","closeMenu"]),
        close() {
            if(this.isOpen==true) {
                this.closeMenu(false)
            }
        }
    },
    mounted() {
       
    }
}
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");
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
.btns i {
    color: #fff;
    font-size: 2rem;
    position: fixed;
    right: 1rem;
    cursor: pointer;
    top: 5px;
}
.btns i:hover {
    color: yellow;
}
.top  {
    display: flex;
    position: fixed;
    z-index: 9999;
    top: 7px;
    left: 1rem;
    visibility: hidden;
}
.title {
    display: flex;
    align-items: center;
    color: #fff;
}
.title h1 {
    font-size: 1.5rem;
    font: optional;
    margin: 0 5px;
}
@media screen and (max-width: 400px){
    .wrapper.close ul {
        left: -100%;
    }
    .navigation ul li a {
        font-size: 1rem;
    }
    .navigation ul {
        position: absolute;
        top: 3rem;
        display: block;
        background: #111;
        width: 100%;
        transition: all ease .4s;
    }
    .navigation a {
        margin: 6px 0;
    }
    ul.open {
        left: 0;
    }
    .top {
        visibility: visible;
    }
}
</style>