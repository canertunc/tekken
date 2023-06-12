import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/views/HomePage.vue"
import CharactersPage from "@/views/CharactersPage.vue"

const routes = [

    {
        path : "/",
        component : HomePage,

    },
    {
        path : "/characters",
        component : CharactersPage,

    },

    
]

const router = createRouter({
    routes : routes,
    history : createWebHistory(),

})

export default router