import { createRouter, createWebHashHistory } from 'vue-router'
import Calendar from '../views/Calendar.vue'
import Events from '../views/Events.vue'
import Join from '../views/Join.vue'
import Settings from '../views/Settings.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import { auth } from '../firebase/firebase.js'

const routes = [
  {
    path: '/',
    name: 'Calendar',
    component: Calendar,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/events',
    name: 'Events',
    component: Events,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/join',
    name: 'Join',
    component: Join,
    children: [
      {
        path: '/join/login',
        name: 'Login',
        component: Login,
      },
      {
        path: '/join/register',
        name: 'Register',
        component: Register,
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  base: process.env.BASE_URL,
  routes
})

// Navigation guard to check for logged in users
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    console.log('User not signed in, redirecting to Login page.')
    next('/join/login')
  } else {
    next()
  }
})

export default router
