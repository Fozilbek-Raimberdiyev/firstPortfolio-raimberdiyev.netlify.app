import Vue from "vue"
import Router from "vue-router"
import MoviesList from "@/view/MoviesList"
import MovieInfo from "@/view/MovieInfo"
import searchMovie from "@/view/SearchMovie"
import channels from "@/view/ChannelList"
import video from "@/view/VideoPage"
import blog from "@/view/MyBlog"
import weather from "@/view/WheatherInfo"

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