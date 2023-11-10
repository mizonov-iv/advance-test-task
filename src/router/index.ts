import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import {useUsersStore} from "../stores/usersStore";


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: HomeView,
            beforeEnter: () => {
                const usersStore = useUsersStore();
                if(!usersStore.currentUser) {
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