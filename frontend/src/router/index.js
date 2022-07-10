import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASEURL),
  routes: [
    {
      path: "/",
      name: "",
      component: Login,
      meta: { title: 'Login Page' }
    },
    {
      path: "/home",
      name: "",
      component: Home,
      meta: { title: 'Home Page' }
    },
  ]
})
export default router
