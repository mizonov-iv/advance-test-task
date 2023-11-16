<template>
  <h2>Добавить заказ</h2>
  <form class="login-form" @submit.prevent="handleSubmit">
    <input
        class="login-input"
        type="text"
        placeholder="Введите имя"
        v-model="username"
    >
    <input
        class="login-input"
        type="text"
        placeholder="Введите адресс"
        v-model="address"
    >
    <input
        class="login-input"
        type="text"
        placeholder="Оставьте комментарий"
        v-model="comment"
    >
    <p class="login-error">{{error}}</p>
    <button
        class="login-btn"
        type="submit"
        :disabled="isValid"
    >
      Добавить
    </button>
  </form>
</template>

<script lang="ts" setup>
import {ref, computed} from 'vue';
import {useUsersStore} from "../stores/usersStore";
import {useEventsStore} from "../stores/eventsStore";
import {required, lenght, validate} from "../utils/validation";

const usersStore = useUsersStore();
const eventsStore = useEventsStore();

const username = ref(usersStore.currentUser.name);
const usernameStatus = computed(() => {
  return validate(username.value, [required])
})

const address = ref('');
const addressStatus = computed(() => {
  return validate(address.value, [required])
})

const comment = ref('');

function handleSubmit () {
  const newEvent = {
    name: username.value,
    address: address.value,
    status: "Новый",
    comment: comment.value
  }

  eventsStore.addNewEvent(newEvent)
}

const isValid = computed(() => {
  return (!usernameStatus.value.valid || !addressStatus.value.valid)
})

const error = ref('');
</script>