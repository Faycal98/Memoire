import { createStore } from "vuex";

export default createStore({
  state: {
    isAuth: localStorage.getItem("userData") !== null,
  },
  getters: {},
  mutations: {
    UPDATE_AUTH(state,payload){
      localStorage.setItem("userData", payload);
      state.isAuth = localStorage.getItem("userData") !== null
    },
    REMOVE_AUTH(state){
      localStorage.removeItem("userData")
    }

  },
  actions: {
    login({commit},payload){
      commit("UPDATE_AUTH", payload);
    },
    logout({commit}){
      commit("REMOVE_AUTH");
    }
  },
  modules: {},
});
