import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

// 路由白名单
const whiteList = new Set(['/login'])

router.beforeEach((to, from, next) => {
  if (whiteList.has(to.path)) return next()

  next()
})

export default router
