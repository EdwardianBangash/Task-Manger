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
    editTask(state, payload) {
      const task = state.todos.find((t) => t.id == payload.id);
      task.complete = payload.complete;
      task.name = payload.name;
    },
    deleteTask(state, id) {
      state.todos = state.todos.filter((t) => t.id != id);
    },
    completeTask(state, payload) {
      const todos = state.todos.find(t => t.id === payload.id)
      todos.complete = payload.complete;
    },
    incompleteTask(state, payload) {
      const todos = state.todos.find(t => t.id === payload.id)
      todos.complete = payload.complete;
    }
  },
  actions: {
    addTask(context, payload) {
      context.commit("addTask", payload);
    },
    editTask(context, payload) {
      context.commit("editTask", payload);
    },
    deleteTask(context, payload) {
      context.commit("deleteTask", payload);
    },
    completeTask(context, payload) {
      context.commit("completeTask", payload);
    },
    incompleteTask(context, payload) {
      context.commit("incompleteTask", payload);
    },
  },
});

export default store;
