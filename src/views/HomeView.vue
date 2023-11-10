<template>
  <h2>Home View</h2>

  <table>
    <tr>
      <td>ID</td>
      <td>Имя</td>
      <td>Адресс</td>
      <td>Дата</td>
      <td>Статус</td>
      <td>Комментарий</td>
    </tr>
    <tr v-for="event in eventsStore.allEvents">
      <td>{{ event.id }}</td>
      <td>{{ event.name }}</td>
      <td>{{ event.address }}</td>
      <td>{{ event.date }}</td>
      <td>{{ event.status }}</td>
      <td>{{ event.comment }}</td>
    </tr>
  </table>

</template>

<script lang="ts" setup>
import {useEventsStore} from "../stores/eventsStore";

const eventsStore = useEventsStore();

eventsStore.getAllEvents();
</script>