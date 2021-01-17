import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dish from '../views/Dish.vue'
import Sproutloud from '../views/Sproutloud.vue'
import Gess from '../views/Gess.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dish',
    name: 'Dish',
    component: Dish
  },
  {
    path: '/sproutloud',
    name: 'Sproutloud',
    component: Sproutloud
  },
  {
    path: '/gess',
    name: 'Gess',
    component: Gess
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
