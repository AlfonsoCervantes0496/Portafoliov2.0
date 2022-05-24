import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/acerca',
    name: 'acerca',
  
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/cv',
    name: 'cv',
  
    component: () => import( '../views/cvView.vue')
  },
  {
    path: '/skills',
    name: 'sk',
  
    component: () => import( '../views/skills.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
  
    component: () => import( '../views/contacto.vue')
  }
  ,
  {
    path: '/proyectos',
    name: 'proyectos',
  
    component: () => import( '../views/Proyectos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
