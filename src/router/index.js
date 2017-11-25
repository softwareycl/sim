import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cover from '@/components/Cover'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cover',
      component: Cover
    },
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/student',
      children: [
        {
          path: '/profile',
          component: resolve => require(['../components/StudentProfile.vue'], resolve)
        }
      ]
    }
  ]
})
