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
    <div class="profile" v-if="this.profile">
      <span>Привет, {{ profile.first_name }}</span>
      <div class="button" @click="this.logOut">
        Выйти
      </div>
    </div>
    <div v-if="this.profile === null">
      Загрузка...
    </div>
  </div>
</template>

<style lang="scss">
.profile-page {
  @apply flex flex-col;

  .profile {
    @apply flex flex-col gap-2 cursor-pointer pointer-events-none;
  }
}
</style>
