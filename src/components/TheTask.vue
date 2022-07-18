<template>
  <div class="task-wrapper">
    <div class="todo-card" v-for="i in getTodos" :key="i.id">
      <div class="todo-card-content">
        <button class="btn btn-tick" @click="taskCompleted(i.id)">
          <span v-if="i.complete">{{ completetaskFont }}
            </span>
             <span v-else>{{ incompletetaskFont }}
            </span>
        </button>
        <div class="todo-title" :class="i.complete ? taskCompletedClass : ''">{{ i.name }}</div>
        <div class="btn-group">
          <router-link
            class="btn btn-edit"
            :to="{ name: 'editTask', params: { id: i.id } }"
            >Edit</router-link
          >
          <button class="btn btn-delete" @click="deleteTask(i.id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      taskCompletedClass: null,
      taskComplete : false,
      incompletetaskFont: "☑️",
      completetaskFont: "✅",
    };
  },
  computed: {
    ...mapGetters(["getTodos"]),
    completed(){
      
    }
  },
  methods: {
    deleteTask(id){
        this.$store.dispatch('deleteTask', id);
    },
    taskCompleted(id) {
      const task = this.$store.state.todos.find((i) => i.id == id);
      if (task.complete == true) {
        const payload = {
          id: id,
          complete: false,
        };
        this.$store.dispatch("incompleteTask", payload);
        this.taskComplete = false;
      } else {
        const payload = {
          id: id,
          complete: true,
        };
        this.$store.dispatch("completeTask", payload);
        this.taskComplete = true;
        this.taskCompletedClass = "completed";
      }
    },
  },
};
</script>
