import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
// import LogoutView from '../views/LogoutView.vue'
import SignupView from '../views/SignupView.vue'
import TodoView from '../views/TodoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView //normal loading
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LoginView //normal loading
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignupView //normal loading
    },
    {
      path: '/task',
      name: 'Task',
      component: TodoView //normal loading
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue') //lazy loading
    }
  ]
})

export default router
