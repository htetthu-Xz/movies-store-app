import { createRouter,createWebHistory } from "vue-router";
import Movie from "../views/Movie.vue"
import Details from "../views/Details.vue"
import Popular from "../views/Popular.vue"
import DramaSeries from "../views/DramaSeries"
import K_Drama from "../views/K_Drama.vue"
import Comedy from "../views/Comedy.vue"
import OnTv from "../views/OnTv.vue"
import axios from "axios";
import NProgress from "nprogress";

const routes = [
    {
        path: "/",
        name: "home",
        component: Movie
    },
    {
        path: "/details/:id",
        name: "details",
        component: Details
    },
    {
        path: "/popular",
        name: "popular",
        component: Popular
    },
    {
        path: "/drama-series",
        name: "drama-series",
        component: DramaSeries
    },
    {
        path: "/k_drama",
        name: "k_drama",
        component: K_Drama
    },
    {
        path: "/comedy",
        name: "comedy",
        component: Comedy
    },
    {
        path: "/on_tv",
        name: "on_tv",
        component: OnTv
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
  })

router.beforeResolve((to, from, next) => {
    if (to.path) {
      NProgress.start()
    }
    next()
});
router.afterEach(() => {
    NProgress.done()
});
axios.interceptors.request.use(function (config) {
    NProgress.start();
    return config;
  }, function (error) {
    return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
    NProgress.done();
    return response;
}, function (error) {
    return Promise.reject(error);
});
export default router;