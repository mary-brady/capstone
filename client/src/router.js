import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import Login from './views/Login.vue'
// @ts-ignore
import GoalDetail from './components/GoalDetail.vue'
// @ts-ignore
import Profile from './views/Profile.vue'
import Goal from './views/Goal.vue'
import Workout from './views/Workouts.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue')
    },
    {
      path: '/goal',
      name: 'goal',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "goal" */ './views/Goal.vue')
    },
    {
      ///creating temporary path for chart tests
      path: '/test',
      name: 'goalDetail',
      component: GoalDetail
    },
    {
      path: '/workouts',
      name: 'workouts',
      component: () => import(/* webpackChunkName: "profile" */ './views/Workouts.vue')
    }
  ]
})
