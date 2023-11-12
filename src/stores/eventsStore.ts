import {defineStore} from "pinia";
import axios from "axios";
import {router} from "../router";

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
        },
        completeEvent(eventID) {
            const completedEvent = this.allEvents.find(event => event.id === eventID);
            completedEvent.status = 'Выполнен';
            axios.put('http://localhost:8000/events', completedEvent)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        deleteEvent(eventID) {
            axios.delete('http://localhost:8000/events', eventID)
                .then(response => {
                    this.allEvents = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        addNewEvent(newEvent) {
            axios.post('http://localhost:8000/events', newEvent)
                .then(response => {
                    this.allEvents = response.data;
                    router.push("/")
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
})