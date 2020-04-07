import Vue from "vue"
import Router from "vue-router"

import Home from "./views/Home.vue"
import About from "./views/About.vue"
import Error from "./views/Error.vue"
import MonedaDetalle from "./views/MonedaDetalle.vue"

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/coin/:id",
            name: "coin-detail",
            component: MonedaDetalle
        },
        {
            path: "/*",
            name: "error",
            component: Error
        }
    ]
})