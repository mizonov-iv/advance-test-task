<template>
  <Navbar/>
  <div class="events-wrapper">
    <h2 class="orders-header">Все заказы</h2>
    <table v-if="eventsStore.allEvents.length">
      <tr class="table-head">
        <td>ID</td>
        <td>Имя</td>
        <td class="td-sortable" @click="sortByAddress(eventsStore.allEvents)">
          <p>Адресс</p>
          <svg class="sort-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5 5 1 1 5m0 6 4 4 4-4"/>
          </svg>
        </td>
        <td class="td-sortable" @click="sortByDate(eventsStore.allEvents)">
          <p>Дата</p>
          <svg class="sort-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5 5 1 1 5m0 6 4 4 4-4"/>
          </svg>
        </td>
        <td>Статус</td>
        <td>Комментарий</td>
        <td>Управление</td>
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
        <td>
          <EventsBtns
              v-if="usersStore.currentUser.role === 'ADMIN'"
              :event="event"
              @delete="openDeleteModal"
          />
        </td>
      </tr>
    </table>
    <h4 v-else>Активные заказы отсутсвуют</h4>

    <DeleteModal
        v-if="modal.show.value === true"
        @delete="handleDelete"
        :eventID="eventToDeleteID"
    />
  </div>

</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useEventsStore} from "../stores/eventsStore";
import {useUsersStore} from "../stores/usersStore";
import EventsBtns from "../components/EventsBtns.vue";
import Navbar from "../components/Navbar.vue";
import {useModal} from "../composables/modal";
import DeleteModal from "../components/DeleteModal.vue";
import {sortByAddress, sortByDate} from "../utils/sorting";

const eventsStore = useEventsStore();
const usersStore = useUsersStore();

const modal = useModal();
const eventToDeleteID = ref();

eventsStore.getAllEvents();

function openDeleteModal (eventID) {
  eventToDeleteID.value = eventID;
  modal.showModal();
}

function handleDelete (eventID) {
  eventsStore.deleteEvent(eventID)
  modal.hideModal()
}
</script>