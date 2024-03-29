import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeViewComponent from '@/views/Home.vue'
import DefaultLayoutComponent from '@/layouts/default.vue'

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
