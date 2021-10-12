import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/queries',
    name: 'Consultas',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Queries/QueriesView.vue')
  },
  {
    path: '/summary',
    name: 'Resumen',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Resumen/Resumen.vue')
  },
  {
    path: '/operations',
    name: 'Operaciones',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Operaciones/Operaciones.vue')
  },
  {
    path: '/cordination',
    name: 'Cordinaciones',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Cordinaciones/Cordinacion.vue')
  },
  {
    path: '/tracking',
    name: 'Tracking',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Tracking/Tracking.vue')
  },
  {
    path: '/payment',
    name: 'Pagos',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Pagos/Pagos.vue')
  },
 
  {
    path: '/tracking',
    name: 'tracking',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/stats',
    name: 'Estadisticas',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Estadisticas/Estadisticas.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
