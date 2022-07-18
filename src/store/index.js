import { createStore } from "vuex";
// Create a new store instance.
const store = createStore({
  state() {
    return {
      todos: [],
    };
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
  },
  mutations: {
    addTask(state, payload) {
      state.todos.unshift(payload);
    },
  },
  actions: {
    addTask(context, payload) {
      context.commit("addTask", payload);
    },
  },
});

export default store;
