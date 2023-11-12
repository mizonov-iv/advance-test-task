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
    <p class="login-error">{{error}}</p>
    <button
        class="login-btn"
        type="submit"
        :disabled="isValid"
    >
      Log In
    </button>
  </form>

</template>

<script lang="ts" setup>
import {ref, computed} from "vue";
import {useUsersStore} from "../stores/usersStore";
import {NewUser} from "../constans/users";
import {lenght, required, validate} from "../utils/validation";

const usersStore = useUsersStore();

const username = ref('admin');
const usernameStatus = computed(() => {
  return validate(username.value, [required, lenght({min: 4, max: 10})])
})

const password = ref('123456789');
const passwordStatus = computed(() => {
  return validate(password.value, [required, lenght({min: 8, max:10})])
})

const isValid = computed(() => {
  return (!usernameStatus.value.valid || !passwordStatus.value.valid)
})

const error = computed(() => usersStore.authError)

const handleSubmit = () => {
  const user: NewUser = {
    username: username.value,
    password: password.value
  }
  usersStore.logIn(user);
}
</script>