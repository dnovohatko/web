import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/calc',
    name: 'calc',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "calc" */ '../views/Calc.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import(/* webpackChunkName: "calc" */ '../views/Sign-in.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
