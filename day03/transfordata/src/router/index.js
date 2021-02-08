import Vue from 'vue'
import VueRouter from 'vue-router'
import Father from '../components/Father.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Father
  }
]

const router = new VueRouter({
  routes
})

export default router
