import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
    {
      path: 'aboutUs',
      component: () => import ('../views/About/AboutUs.vue')
    }
    ]
  },
  {
    path: '/products',
    name: 'Products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: Home
  },
  {
    path: '/social_responsibilities',
    name: 'SocialResponbilities',
    component: Home
  },
  {
    path: '/investment_services',
    name: 'InvestmentServices',
    component: Home,
  },
  {
    path: '/management',
    name: 'Management',
    component: Home
  },
  {
    path: '/hr',
    name: 'HumanResources',
    component: Home
  },
  {
    path: '/staff',
    name: 'Staff',
    component: Home
  }
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

export default router
