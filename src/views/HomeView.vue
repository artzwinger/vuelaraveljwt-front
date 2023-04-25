<script>

import {authStore} from "@/store/auth";

export default {
  data() {
    return {
      authenticated: false,
    };
  },
  created() {
    if (authStore.state.jwt) {
      this.authenticated = true
    }
  }
};
</script>

<template>
  <div class="router-page">
    <RouterLink v-if="!this.authenticated" class="router-link" to="/register">Регистрация</RouterLink>
    <RouterLink v-if="!this.authenticated" class="router-link" to="/login">Войти</RouterLink>
    <RouterLink v-if="this.authenticated" class="router-link" to="/profile">Профиль</RouterLink>
    <RouterLink class="router-link" to="/about">Об авторе</RouterLink>
  </div>
</template>