import {defineStore} from "pinia";
import axios from "axios";

export const useEventsStore = defineStore("eventsStore", {
    state: () => {
        return {
            allEvents: undefined
        }
    },
    actions: {
        getAllEvents() {
            axios.get("http://localhost:8000/events")
                .then(response => {
                    this.allEvents = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
})