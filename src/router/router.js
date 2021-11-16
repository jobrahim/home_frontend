import { createRouter, createWebHashHistory } from 'vue-router'
import Resumen from '../components/views/Resumen/Resumen.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Resumen
  },
  {
    path: '/queries',
    name: 'Consultas',
   
    component: () => import(/* webpackChunkName: "about" */ '../components/views/Queries/QueriesView.vue')
  },
  
  {
    path: '/summary',
    name: 'Resumen',
   
    component: () => import(/* webpackChunkName: "about" */ '../components/views/Resumen/Resumen.vue')
  },
  {
    path: '/operations',
    name: 'Operaciones',
   
    component: () => import(/* webpackChunkName: "about" */ '../components/views/Operaciones/Operaciones.vue')
  },
  {
    path: '/cordination',
    name: 'Cordinaciones',
   
    component: () => import(/* webpackChunkName: "about" */ '../components/views/Coordinations/Coordination.vue')
  },
  {
    path: '/tracking',
    name: 'Tracking',
   
    component: () => import(/* webpackChunkName: "about" */ '../components/views/Tracking/Tracking.vue')
  },
  {
    path: '/payment',
    name: 'Pagos',
   
    component: () => import(/* webpackChunkName: "about" */ '../components/views/Pagos/Pagos.vue')
  },
 
  {
    path: '/tracking',
    name: 'tracking',
   
    component: () => import(/* webpackChunkName: "about" */ '../components/views/Tracking/Tracking.vue')
  },
  {
    path: '/stats',
    name: 'Estadisticas',
   
    component: () => import(/* webpackChunkName: "about" */ '../components/views/Estadisticas/Estadisticas.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
