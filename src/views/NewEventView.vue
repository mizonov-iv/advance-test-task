<template>
  <h2>Добавить заказ</h2>
  <form class="login-form" @submit.prevent="handleSubmit">
    <div class="input-field">
      <input
          class="login-input"
          type="text"
          v-model="username"
          required
      >
      <label class="login-input__placeholder">Введите имя</label>
    </div>
    <div class="input-field">
      <input
          class="login-input"
          type="text"
          v-model="address"
          required
      >
      <label class="login-input__placeholder">Введите адресс</label>
    </div>
    <div class="input-field">
      <input
          class="login-input"
          type="text"
          v-model="comment"
          required
      >
      <label class="login-input__placeholder">Оставьте комментарий</label>
    </div>
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