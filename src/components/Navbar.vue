<template>
  <nav>
    <ul class="nav-list">
      <li v-for="item in navItems" :key="item.name">
        <RouterLink class="nav-list-item" :to="item.path">{{ item.name }}</RouterLink>
      </li>
    </ul>
    <p class="nav-username">{{usersStore.currentUser.name}}</p>
    <RouterLink class="nav-list-item nav-username" to="/login">Выйти</RouterLink>
  </nav>
</template>

<script lang="ts" setup>
import {useUsersStore} from "../stores/usersStore";

const usersStore = useUsersStore();

const navItems = [
  {
    name: 'Все заказы',
    path: '/'
  },
  {
    name: 'Добавить заказ',
    path: '/addEvent'
  }
]
</script>