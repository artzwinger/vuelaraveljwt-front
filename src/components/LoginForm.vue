<script>
import axios from "axios";
import {authStore} from "@/store/auth";
import router from "@/router";

export default {
  data() {
    return {
      error: null,
    };
  },
  methods: {
    loginUser: ({email, password}) => {
      axios.post(import.meta.env.VITE_BACKEND_BASE_URL + import.meta.env.VITE_BACKEND_LOGIN_PATH, {
        email, password
      }).then((response) => {
        if (response.data.access_token) {
          authStore.commit('setJwt', response.data.access_token)
          router.push({path: '/profile'})
        }
      })
    }
  },
  created() {
    if (authStore.state.jwt) {
      router.push({path: '/profile'})
    }
  }
};
</script>

<template>
  <div class="login-form">
    <FormKit type="form" @submit="this.loginUser">
      <FormKit
          type="text"
          name="email"
          id="email"
          validation="required|email"
          label="E-Mail"
      />
      <FormKit
          type="password"
          name="password"
          label="Пароль"
          validation="required"
      />
    </FormKit>
  </div>
</template>

<style scoped>
.login-form {
  @apply flex flex-col;
}
</style>
