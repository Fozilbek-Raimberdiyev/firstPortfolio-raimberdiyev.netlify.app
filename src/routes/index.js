import Vue from "vue"
import Router from "vue-router"
import MoviesList from "../components/MoviesList"
import MovieInfo from "../components/MovieInfo"
import searchMovie from "@/components/SearchMovie"
import channels from "@/components/pages/ChannelList"
import video from "@/components/pages/VideoPage"
import blog from "@/components/pages/MyBlog"
import weather from "@/components/pages/WheatherInfo"

Vue.use(Router)

const routes = [
    {
        path: "/",
        component: MoviesList,
        name: "MoviesList"
    },
    {
        path: "/movie",
        component : MoviesList,
        name : "MoviesList" 
    },
    {
        path: "/movie/:id",
        component : MovieInfo,
        name : "MovieInfo"
    },
    {
        path: "/search",
        component : searchMovie,
        name: "resultSearch"
    },
    {
        path : "/channels",
        component : channels,
        name: "ChannelList"
    },
    {
        path : "/video",
        component : video,
        name : "video"
    },
    {
        path : "/blog",
        component : blog,
        name : "Blog"
    },
    {
        path : "/weather",
        component : weather,
        name : "Weather"
    }
]

const router = new Router({
    routes : routes,
    mode : "history"
})
export default router