<script>
import {defineComponent} from "vue";
import RegisterForm from "@/components/RegisterForm.vue";

export default defineComponent({
  components: {RegisterForm}
})
</script>

<template>
  <div class="router-page">
    <RegisterForm/>
    <div class="links">
      <RouterLink class="router-link" to="/login">Войти</RouterLink>
      <RouterLink class="router-link" to="/">На главную</RouterLink>
    </div>
  </div>
</template>
