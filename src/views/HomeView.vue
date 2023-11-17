<template>
  <Navbar/>
  <h2>Все заказы</h2>
  <table v-if="eventsStore.allEvents.length">
    <tr>
      <td>ID</td>
      <td>Имя</td>
      <td>Адресс</td>
      <td>Дата</td>
      <td>Статус</td>
      <td>Комментарий</td>
    </tr>
    <tr
        v-for="event in eventsStore.allEvents"
        :key="event.id"
        :class="{completed: event.status === 'Выполнен'}"
    >
      <td>{{ event.id }}</td>
      <td>{{ event.name }}</td>
      <td>{{ event.address }}</td>
      <td>{{ event.date }}</td>
      <td>{{ event.status }}</td>
      <td>{{ event.comment }}</td>
      <EventsBtns
          v-if="usersStore.currentUser.role === 'ADMIN'"
          :event="event"
          @delete="openDeleteModal"
      />
    </tr>
  </table>
  <h4 v-else>Активные заказы отсутсвуют</h4>

  <DeleteModal
      v-if="modal.show.value === true"
      @delete="handleDelete"
      :eventID="eventID"
  />

</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useEventsStore} from "../stores/eventsStore";
import {useUsersStore} from "../stores/usersStore";
import EventsBtns from "../components/EventsBtns.vue";
import Navbar from "../components/Navbar.vue";
import {useModal} from "../composables/modal";
import DeleteModal from "../components/DeleteModal.vue"

const eventsStore = useEventsStore();
const usersStore = useUsersStore();

const modal = useModal();
const eventID = ref();

eventsStore.getAllEvents();

function openDeleteModal (eventID) {
  console.log(typeof(eventID), eventID)
  // eventID.value = eventID;
  modal.showModal();
}

function handleDelete (eventID) {
  eventsStore.deleteEvent(eventID)
}
</script>