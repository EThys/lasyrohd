import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomePageView from '@/views/HomePageView.vue'
import TeamComponent from '@/components/team/TeamComponent.vue'
import LogicielComponent from '@/components/logiciel/LogicielComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePageView,
    },
    {
      path: '/accueil', 
      name: 'home-alt', 
      component: HomePageView,
    },
    {
      path: '/team',
      name: 'team',
      component: TeamComponent,
    },
    {
      path: '/software',
      name: 'software',
      component: LogicielComponent,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
