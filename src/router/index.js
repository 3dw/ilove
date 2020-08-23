import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/facebook',
    name: 'Facebook',
    component: () => import('../views/Facebook.vue')
  },
  {
    path: '/sell',
    name: 'Sell',
    component: () => import('../views/Sell.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
