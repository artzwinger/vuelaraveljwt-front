<script>
import {authStore} from "@/store/auth";
import router from "@/router";
import axios from "axios";

export default {
  data() {
    return {
      profile: null,
    };
  },

  methods: {
    getData() {
      axios.get(
          import.meta.env.VITE_BACKEND_BASE_URL + import.meta.env.VITE_BACKEND_PROFILE_PATH,
          {
            headers: {
              "Authorization": 'Bearer ' + authStore.state.jwt
            }
          }
      ).then((response) => {
        this.profile = response.data
      }).catch((reason) => {
        // router.push({path: '/login'})
      })
    },
    logOut() {
      authStore.commit('setJwt', null)
      router.push({path: '/login'})
    }
  },
  created() {
    console.log('loading data')
    if (!authStore.state.jwt) {
      router.push({path: '/login'})
      return
    }
    this.getData();
  },
};
</script>

<template>
  <div class="profile-page">
    <div v-if="this.profile">
      Привет, {{ profile.first_name }}
      <div class="button" @click="this.logOut">
        Выйти
      </div>
    </div>
    <div v-if="this.profile === null">
      Загрузка...
    </div>
    {{ this.profile }}
  </div>
</template>

<style scoped>
.profile-page {
  @apply flex flex-col;
}
</style>
