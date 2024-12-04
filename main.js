import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import experience from '../src/components/ExperienceGraph.vue'
import result from '../src/components/resultGraph.vue'
import rating from '../src/components/ratingGraph.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: experience
  },

  {
    path: "/result",
    component: result

  },

  {
    path: "/rating",
    component: rating
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
