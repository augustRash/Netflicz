import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "Search" */ '../views/search.vue'),
  },
  {
    path: '/details',
    name: 'details',
    component: () => import(/* webpackChunkName: "trendingList" */ '../views/details.vue')
  },
  {
    path: '/',
    name: 'treendingList',
    component: () => import(/* webpackChunkName: "trendingList" */ '../views/trendingList.vue'),
  },
  {
    path: '/person',
    name: 'personDetails',
    component: () => import(/* webpackChunkName: "personDetails" */ '../views/personDetails.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
