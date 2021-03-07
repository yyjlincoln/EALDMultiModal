import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../views/main.vue'
import page_unavailable from "../views/general/page_unavailable.vue"
import explore from "../views/explore.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: main,
    meta: { title: "Nowaskme" }
  },
  {
    path: '/explore',
    component: explore,
    meta: {
      title: "Explore"
    }
  },
  {
    path: '*',
    component: page_unavailable,
    meta: { title: "Error" }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

router.afterEach((to) => {
  // Wait for the next DOM update cycle
  Vue.nextTick(() => {
    document.title = to.meta.title ? to.meta.title + " - EALD Multimodal" : "Content - EALD Multimodal"
  })
})

export default router
