import Vue from 'vue'
import Router from 'vue-router'
import ResourceManage from '@/views/ResourceManage'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/resource_manage',
      name: 'resource_manage',
      component: ResourceManage
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo
    },
    {
      path: '/bar',
      name: 'Bar',
      component: Bar
    }
  ]
})
