<script setup>
import {registerFormSchema} from "@/formSchema/register";
</script>

<template>
  <div class="register-form">
    <FormKitSchema :schema="registerFormSchema"/>
  </div>
</template>

<style scoped>
.register-form {
  @apply flex flex-col;
}
</style>
