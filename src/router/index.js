import { createRouter, createWebHistory } from 'vue-router'

// Vistas (las crearemos después)
const HomeView = () => import('@/views/HomeView.vue')
const DetailView = () => import('@/views/DetailView.vue')
const SettingsView = () => import('@/views/SettingsView.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView,
      props: true
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    }
  ]
})

export default router