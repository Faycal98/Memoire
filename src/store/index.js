import { createStore } from "vuex";

export default createStore({
  state: {
    isLogged: false,
    user: null,
  },
  getters: {},
  mutations: {
    UPDATE_AUTH(state, payload) {
      localStorage.setItem("userData", JSON.stringify(payload));
      state.isLogged = true;
      state.user = payload;
    },
    REMOVE_AUTH(state) {
      localStorage.removeItem("userData");
    },
  },
  actions: {
    login({ commit }, payload) {
      commit("UPDATE_AUTH", payload);
    },
    logout({ commit }) {
      commit("REMOVE_AUTH");
    },
    updateUser({commit},payload){
      commit("UPDATE_AUTH", payload);
    }
  },
  modules: {},
});
