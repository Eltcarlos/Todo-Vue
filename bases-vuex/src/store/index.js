import { createStore } from "vuex";

export default createStore({
  state: {
    count: 1,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    async incrementRandomInt(context) {
      context.commit("increment");
    },
  },
  getters: {
    squareCount(state) {
      return state.count * state.count;
    },
  },
});
