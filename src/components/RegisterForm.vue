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
    registerUser: ({first_name, last_name, email, passwords, accept_rules}) => {
      axios.post(import.meta.env.VITE_BACKEND_BASE_URL + import.meta.env.VITE_BACKEND_REGISTER_PATH, {
        first_name,
        last_name,
        email,
        password: passwords.password,
        password_confirmation: passwords.password_confirmation,
        accept_rules
      }, {
        headers: {
          Accept: "application/json"
        }
      }).then(async (result) => {
        console.log(result)
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
  <div class="register-form">
    <FormKit type="form" @submit="registerUser">
      <FormKit
          type="text"
          name="first_name"
          id="first_name"
          validation="required"
          label="Имя"
      />
      <FormKit
          type="text"
          name="last_name"
          id="last_name"
          validation="required"
          label="Фамилия"
      />
      <FormKit
          type="text"
          name="email"
          id="email"
          validation="required|email"
          label="E-Mail"
      />
      <FormKit type="group" name="passwords">
        <FormKit
            type="password"
            name="password"
            label="Пароль"
            validation="required"
        />
        <FormKit
            type="password"
            name="password_confirmation"
            label="Повторите пароль"
            validation="required|confirm:password"
        />
      </FormKit>
      <FormKit
          type="checkbox"
          name="accept_rules"
          id="accept_rules"
          validation="accepted"
          label="Даю согласие на обработку персональных данных"
      />
    </FormKit>
  </div>
</template>

<style scoped>
.register-form {
  @apply flex flex-col;
}
</style>
