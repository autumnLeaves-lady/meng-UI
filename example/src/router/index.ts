import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: '首页' },
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/table',
      name: 'table',
      meta: { title: '表格' },
      component: () => import('../views/Table.vue')
    }
  ]
})

export default router
