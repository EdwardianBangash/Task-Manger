import {createRouter, createWebHistory} from 'vue-router';
import EditTask from '../components/EditTask.vue';
import TheHome from '../components/TheHome.vue';

const routes = [
    { 
        path: '/', 
        component: TheHome, 
        name: 'home'
    },
    { 
        path: '/editTask/:id', 
        component: EditTask,
        name: "editTask"
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;