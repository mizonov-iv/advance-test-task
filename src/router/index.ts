import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: HomeView,
            beforeEnter: () => {
                if(1 > 0) {
                    return {
                        path: "/login"
                    }
                }
            }
        },
        {
            path: "/login",
            component: LoginView,
        }
    ]
})