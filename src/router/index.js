import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dish from '../views/Dish.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    return new Promise(resolve => {
      const position = (function() {
        if (savedPosition) {
          return savedPosition;
        } else {
          if (to.hash) {
            return {
              selector: to.hash
            };
          }
        }
      })();
      router.app.$root.$once("triggerScroll", () => {
        router.app.$nextTick(() => resolve(position));
      });
    });
  }
})

export default router
