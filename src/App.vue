<template>
  <router-view> </router-view>
  <the-task v-if="this.$route.name == 'home'"></the-task>
</template>

<script>
import TheTask from './components/TheTask.vue'
export default {
  components: {
    TheTask,
  }
}
</script>