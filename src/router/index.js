import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../views/Main.vue'
import page_unavailable from "../views/general/page_unavailable.vue"
import explore from "../views/explore.vue"
import interview from "../views/interview.vue"
import appframe from "../views/appframe.vue"
import about from "../views/about.vue"
import motivation from "../views/motivation.vue"

Vue.use(VueRouter)
const routes = [
  {
    path: '/explore',
    component: explore,
    meta: {
      title: "Explore",
      nav: 2
    }
  },
  {
    path: '/interview',
    component: interview,
    meta: {
      title: "Our Interview",
      nav: 3
    }
  },
  {
    path: '/motivation',
    component: motivation,
    meta: {
      title: "Our motivation",
      nav: 4
    }
  },
  {
    path: '/about',
    component: about,
    meta: {
      title: "About us",
      nav: 5
    }
  },
]


const meta = [
  {
    path: '/',
    component: main,
    meta: { title: "What's your identity?" }
  },
  {
    path: '/appframe',
    component: appframe,
    children: routes
  },
  {
    path: '*',
    component: page_unavailable,
    meta: { title: "Error" }
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: meta,
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
