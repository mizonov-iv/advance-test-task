import {defineStore} from "pinia";
import axios from "axios";
import {NewUser} from "../constans/users";
import {router} from "../router";

export const useUsersStore = defineStore('usersStore', {
    state: () => {
        return {
            currentUser: undefined,
        }
    },
    actions: {
        logIn(user: NewUser) {
            console.log(user)

            axios.post("http://localhost:8000/auth/", user)
                .then(response => {
                    if(response.status == 200) {
                        console.log(response)
                        this.currentUser = response.data;
                        router.push({path: "/"});
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
})