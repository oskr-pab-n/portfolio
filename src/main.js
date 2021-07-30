import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueSmoothScroll from 'vue2-smooth-scroll'
import AOS from 'aos';
import 'aos/dist/aos.css';

Vue.use(vueSmoothScroll)
Vue.config.productionTip = false

new Vue({
  router,
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
