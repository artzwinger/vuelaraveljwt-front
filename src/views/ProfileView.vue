<script>
import {defineComponent} from "vue";
import RegisterForm from "@/components/RegisterForm.vue";
import Profile from "@/components/Profile.vue";

export default defineComponent({
  components: {Profile}
})
</script>

<template>
  <div class="router-page">
    <Profile/>
    <div class="links">
      <RouterLink class="router-link" to="/">На главную</RouterLink>
    </div>
  </div>
</template>
