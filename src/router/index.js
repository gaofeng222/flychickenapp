import { createRouter, createWebHistory } from 'vue-router'

const Recommend = () => import('@/views/recommend' /* webpackChunkName: "recommend" */)
const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
