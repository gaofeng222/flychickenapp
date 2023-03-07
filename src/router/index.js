import { createRouter, createWebHistory } from 'vue-router'

const Recommend = () => import('@/views/recommend' /* webpackChunkName: "recommend" */)
const Singer = () => import('@/views/singer' /* webpackChunkName: "recommend" */)
const Search = () => import('@/views/search' /* webpackChunkName: "recommend" */)
const TopList = () => import('@/views/top-list' /* webpackChunkName: "recommend" */)
const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/top-list',
    component: TopList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
