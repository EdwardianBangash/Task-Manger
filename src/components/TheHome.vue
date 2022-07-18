<template>
    <div class="wrapper">
        <form @submit.prevent="addTask">
            <h2>Add Task</h2>
            <div class="form-group">
                <label for="task">Add Task</label>
                <input type="text" class="form-control" v-model="todo">
            </div>
            <button type="submit" class="btn btn-submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            todo: null
        }
    },
    methods: {
        addTask(){
            const task = {
                id: new Date().getTime() * Math.random() * 100000,
                name: this.todo
            }
            this.$store.dispatch('addTask', task)
            this.todo = ''
        }
    }
}
</script>