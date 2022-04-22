import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/Registraion',
    name: 'Registraion',
    component: () => import('../components/Registraion.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
