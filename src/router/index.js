import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dish from '../views/Dish.vue'
import SlTestCase from '../views/SlTestCase.vue'
import Sproutloud from '../views/Sproutloud.vue'
import Gess from '../views/Gess.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home',
        keepAlive: true
      }
    },
    {
      path: '/dish',
      name: 'Dish',
      component: Dish,
      meta: {
        title: 'Dish - Oskr Pabon',
        keepAlive: true
      }
    },
    {
      path: '/sproutloud',
      name: 'Sproutloud',
      component: Sproutloud,
      meta: {
        title: 'Sproutloud - Oskr Pabon',
        keepAlive: true
      }
    },
    {
      path: '/gess',
      name: 'Gess',
      component: Gess,
      meta: {
        title: 'Gess Tech. - Oskr Pabon',
        keepAlive: true
      }
    },
    {
      path: '/sl-test-case',
      name: 'Sproutloud Test Case',
      component: SlTestCase,
      meta: {
        title: 'Sproutloud Test Case - Oskr Pabon',
        keepAlive: true
      }
    },
    {
      path: '*',
      name: 'catchAll',
      component: Home
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
