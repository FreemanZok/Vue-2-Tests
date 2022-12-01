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
    path: '/test/Scheduler',
    name: 'Scheduler-test',
    component: () => import('../views/Tests/Scheduler-test.vue')
  },
  {
    path: '/test/button',
    name: 'Button',
    component: () => import('../views/Tests/my-button.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
