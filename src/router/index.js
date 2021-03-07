import Vue from 'vue'
import VueRouter from 'vue-router'
import AppFrame from "../views/AppFrame.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/AppFrame',
    name: 'AppFrame',
    component: AppFrame
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
