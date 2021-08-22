import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultLayoutComponent from '@/layouts/default.vue'
import HomeViewComponent from '@/views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {name: 'home'}
  },
  {
    path: '/',
    component: DefaultLayoutComponent,
    children: [{path: 'home', name: 'home', component: HomeViewComponent}]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
