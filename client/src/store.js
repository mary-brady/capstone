import Vue from 'vue';
import Vuex from 'vuex';
import Axios from "axios";
import router from "./router"

Vue.use(Vuex)

let auth = Axios.create({
  baseURL: "//localhost:3000/auth/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    //AUTH
    register({ commit }, newUser) {
      auth.post("register", newUser).then(res => {
        commit("setUser", res.data);
        router.push({ name: "profile" });
      });
    },
    authenticate({ commit }) {
      auth.get("authenticate").then(res => {
        commit("setUser", res.data);
        router.push({ name: "profile" });
      });
    },
    login({ commit }, creds) {
      auth.post("login", creds).then(res => {
        commit("setUser", res.data);
        router.push({ name: "profile" });
      });
    },
    logout({ commit }) {
      auth.delete("logout").then(() => {
        commit("clearUser");
        router.push({ name: "login" });
      });
    }
  }
})
