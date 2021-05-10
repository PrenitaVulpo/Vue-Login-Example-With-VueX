import { createStore } from "vuex";

export default createStore({
  state: {
    authenticaded: false,
  },
  mutations: {
    setAuthentication(store, status: boolean) {
      store.authenticaded = status;
    },
  },
  actions: {},
  modules: {},
});
