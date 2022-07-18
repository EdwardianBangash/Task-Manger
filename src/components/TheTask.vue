<template>
  <div class="task-wrapper">
    <div class="todo-card" v-for="i in getTodos" :key="i.id">
      <div class="todo-card-content">
        <div class="todo-title">{{ i.name }}</div>
        <div class="btn-group">
          <router-link class="btn btn-edit" :to="{name:'edit',params:{id:i.id}}">Edit</router-link>
          <button class="btn btn-Delete">Delete</button>
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
      taskCompleted: null,
    };
  },
  computed: {
    ...mapGetters(["getTodos"]),
  },
  methods: {
    // editTask(id){
    //     this.$store.dispatch('editTask', id);
    // }
  },
};
</script>
