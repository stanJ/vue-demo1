import Vue from 'vue'
import Router from 'vue-router'
import AppHead from '@/views/AppHead'
import AppLeft from '@/views/AppLeft'
import ResourceManage from '@/views/ResourceManage'
import Login from '@/views/Login'
import Index from '@/views/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      components: {
      	default: Index,
      	appLeft: AppLeft,
      	appHead: AppHead
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/resource_manage',
      name: 'resource_manage',
      components: {
      	default: ResourceManage,
      	appLeft: AppLeft,
      	appHead: AppHead
      }
    },
  ]
})
