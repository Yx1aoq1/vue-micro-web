import { createRouter , createWebHistory } from 'vue-router'
import MainLayout from '@/layout/MainLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
  }
]


const routerInstance = createRouter({
  history: createWebHistory(),
  routes
})

const cachedModules = new Set()
const modules = window.modules

// 拦截处理
routerInstance.beforeEach(async (to, from, next) => {
  next()
})

export default routerInstance