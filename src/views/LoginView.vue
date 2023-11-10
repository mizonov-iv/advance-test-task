<template>
  <h2>Log In</h2>

  <form class="login-form" @submit.prevent="handleSubmit">
    <input
        class="login-input"
        type="text"
        placeholder="enter username"
        v-model="username"
    >
    <input
        class="login-input"
        type="password"
        placeholder="enter password"
        v-model="password"
    >
    <button class="login-btn" type="submit">Log In</button>
  </form>

</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useUsersStore} from "../stores/usersStore";
import {NewUser} from "../constans/users";

const username = ref('admin');
const password = ref('123456789');

const usersStore = useUsersStore();

const handleSubmit = () => {
  const user: NewUser = {
    username: username.value,
    password: password.value
  }
  usersStore.logIn(user);
}
</script>