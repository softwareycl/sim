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
      path: '/student/login',
      component: resolve => require(['../components/StudentLogin.vue'], resolve)
    },
    {
      path: '/student/profile',
      component: resolve => require(['../components/StudentProfile.vue'], resolve)
    },
    {
      path: '/teacher/login',
      component: resolve => require(['../components/TeacherLogin.vue'], resolve)
    },
    {
      path: '/master/login',
      component: resolve => require(['../components/MasterLogin.vue'], resolve)
    },
    {
      path: '/master/profile',
      component: resolve => require(['../components/MasterProfile.vue'], resolve)
    },
    {
      path: '/master/class',
      component: resolve => require(['../components/MasterClass.vue'], resolve)
    },
    {
      path: '/master/organization',
      component: resolve => require(['../components/MasterOrganization.vue'], resolve)
    },
    {
      path: '/master/archive',
      component: resolve => require(['../components/MasterArchive.vue'], resolve)
    },
    {
      path: '/admin/login',
      component: resolve => require(['../components/AdminLogin.vue'], resolve)
    }
  ]
})
