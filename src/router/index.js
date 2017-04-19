import Vue from 'vue'
import Router from 'vue-router'
import AppHead from '@/views/AppHead'
import AppLeft from '@/views/AppLeft'
import ResourceManage from '@/views/ResourceManage'
import CustomerManage from '@/views/CustomerManage'
import NoticeManage from '@/views/NoticeManage'
import AccountManage from '@/views/AccountManage'
import PersonalWork from '@/views/PersonalWork'
import Login from '@/views/Login'
import Index from '@/views/Index'

Vue.use(Router)
function getComponents(component){
	return {
		appLeft: AppLeft,
      	appHead: AppHead,
      	default: component
	}
}
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      components: getComponents(Index),
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/resource_manage',
      name: 'resource_manage',
      components: getComponents(ResourceManage)
    },
    {
      path: '/customer_manage',
      name: 'customer_manage',
      components: getComponents(CustomerManage)
    },
    {
      path: '/notice_manage',
      name: 'notice_manage',
      components: getComponents(NoticeManage)
    },
    {
      path: '/account_manage',
      name: 'account_manage',
      components: getComponents(AccountManage)
    },
    {
      path: '/personal_work',
      name: 'personal_work',
      components: getComponents(PersonalWork)
    },
  ]
})
