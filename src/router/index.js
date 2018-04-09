import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Vueechart from '@/pages/Vueechart'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
      path: 'Vueechart',
      name: 'Vueechart',
      component: Vueechart
    }]
  }]
})
