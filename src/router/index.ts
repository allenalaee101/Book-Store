import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth.strore'
// Use local simple types for the navigation guard parameters to avoid
// mismatches with the installed `vue-router` type exports.
type RouteLike = { meta?: Record<string, any> }
type FromLike = any
type NextLike = (to?: string | false | void) => void
const routes = [
  {
    path: '/login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/dashboard',
    component: () => import('@/views/DashBoard.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const authGuard = (to: RouteLike, _from: FromLike, next: NextLike) => {
  const auth = useAuthStore()

  if ((to.meta as any)?.requiresAuth && !auth.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
}

router.beforeEach(authGuard)



export default router
