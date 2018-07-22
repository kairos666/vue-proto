import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Management from './views/Management.vue'
import Customers from './views/Customers.vue'
import Information from './views/Information.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/management',
      name: 'management',
      component: Management
    },
    {
      path: '/clients',
      name: 'clients',
      component: Customers
    },
    {
      path: '/information',
      name: 'information',
      component: Information
    }
  ]
})
