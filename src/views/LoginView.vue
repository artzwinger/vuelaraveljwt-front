<script>
import {defineComponent} from "vue";
import LoginForm from "@/components/LoginForm.vue";

export default defineComponent({
  components: {LoginForm}
})
</script>

<template>
  <div class="router-page">
    <LoginForm/>
    <div class="links">
      <RouterLink class="router-link" to="/register">Регистрация</RouterLink>
      <RouterLink class="router-link" to="/">На главную</RouterLink>
    </div>
  </div>
</template>
