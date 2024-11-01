import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/user/LoginView.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    // redirect: '/home',
    component: () => import('@/views/workbenches/index.vue')
  }
]
