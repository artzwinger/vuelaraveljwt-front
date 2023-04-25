import {createStore} from "vuex";

const state = {
    jwt: localStorage.getItem('jwt')
}
export const authStore = createStore({
    state: state,
    mutations: {
        setJwt(state, payload) {
            state.jwt = payload;
            localStorage.setItem('jwt', payload);
        }
    }
})