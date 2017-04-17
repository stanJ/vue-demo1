import Vue from 'vue'
import Router from 'vue-router'
import ResourceManage from '@/views/ResourceManage'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
      	
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/resource_manage',
      name: 'resource_manage',
      component: ResourceManage
    },
  ]
})
