<template>
  <div class="wrapper">
    <form @submit.prevent="editTask">
      <h2>Edit Task</h2>
      <div class="form-group">
        <label for="task">Edit Task</label>
        <input type="text" class="form-control" v-model="todo" />
      </div>
      <div class="form-group">
        <label for="complete">Complete</label>
        <input type="checkbox" v-model="check" />
      </div>
      <button type="submit" class="btn btn-submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: "",
      check: "",
    };
  },
  mounted() {
    const task = this.$store.state.todos.find(
      (i) => i.id == this.$route.params.id
    );
    this.todo = task.name;
  },
  methods: {
    editTask() {
      const task = {
        id: this.$route.params.id,
        name: this.todo,
        complete: this.check,
      };
      this.$store.dispatch("editTask", task);
      this.$router.push({name:'home'})
    },
  },
};
</script>
