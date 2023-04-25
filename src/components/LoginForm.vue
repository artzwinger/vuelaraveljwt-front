<script setup>
import {loginFormSchema} from "@/formSchema/login";
</script>

<template>
  <div class="login-form">
    <FormKitSchema :schema="loginFormSchema"/>
  </div>
</template>

<style scoped>
.login-form {
  @apply flex flex-col;
}
</style>
