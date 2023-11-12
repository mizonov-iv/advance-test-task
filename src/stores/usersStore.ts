import {defineStore} from "pinia";
import axios from "axios";
import {NewUser} from "../constans/users";
import {router} from "../router";

export const useUsersStore = defineStore('usersStore', {
    state: () => {
        return {
            currentUser: undefined,
            authError: '',
        }
    },
    actions: {
        logIn(user: NewUser) {
            axios.post("http://localhost:8000/auth/", user)
                .then(response => {
                    if(response.status == 200) {
                        this.currentUser = response.data;
                        router.push({path: "/"});
                    }
                })
                .catch(error => {
                    console.log(error)
                    this.authError = "Неверное имя пользователя или пароль"
                })
        }
    }
})