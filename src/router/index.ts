import {createRouter, createWebHistory} from "vue-router";
import {useUsersStore} from "../stores/usersStore";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import NewEventView from "../views/NewEventView.vue";


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
        },
        {
            path: "/addEvent",
            component: NewEventView,
            beforeEnter: () => {
                const usersStore = useUsersStore();
                if(!usersStore.currentUser) {
                    return {
                        path: "/login"
                    }
                }
            }
        }
    ]
})