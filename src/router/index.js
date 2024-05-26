import { createRouter, createWebHistory } from 'vue-router'
import {usePathStore} from "@/stores/path.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/Index.vue')
    },
    {
      path: '/home1',
      name: 'home1',
      component: () => import('@/views/home/Index.vue')
    },
    {
      path: '/',
      name: 'home2',
      component: () => import('@/views/home/Index.vue')
    },
    {
      path: '/',
      name: 'home3',
      component: () => import('@/views/home/Index.vue')
    },
    {
      path: '/',
      name: 'home4',
      component: () => import('@/views/home/Index.vue')
    },
    {
      path: '/',
      name: 'home5',
      component: () => import('@/views/home/Index.vue')
    },
    {
      path: '/',
      name: 'home6',
      component: () => import('@/views/home/Index.vue')
    },
    {
      path: '/',
      name: 'home7',
      component: () => import('@/views/home/Index.vue')
    },
    {
      path: '/',
      name: 'home8',
      component: () => import('@/views/home/Index.vue')
    },
    {
      path: '/',
      name: 'home9',
      component: () => import('@/views/home/Index.vue')
    },
  ]
})

router.afterEach((to, from) => {
  const pathStore = usePathStore()
  pathStore.setPathName(to.name)
})

export default router
