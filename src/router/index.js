import Vue from 'vue'
import Router from 'vue-router'
//import AppHead from '@/views/AppHead'
//import AppLeft from '@/views/AppLeft'
import Resource from '@/views/Resource'
import ResourceManage from '@/views/ResourceManage'
import ResourceModify from '@/views/ResourceModify'
import ResourceDetail from '@/views/ResourceDetail'

import Customer from '@/views/Customer'
import CustomerManage from '@/views/CustomerManage'
import CustomerModify from '@/views/CustomerModify'
import CustomerDetail from '@/views/CustomerDetail'

import NoticeManage from '@/views/NoticeManage'
import AccountManage from '@/views/AccountManage'
import PersonalWork from '@/views/PersonalWork'

import Login from '@/views/Login'
import Index from '@/views/Index'
import Home from '@/views/Home'

Vue.use(Router)
//function getComponents(component){
//	return {
//		appLeft: AppLeft,
//    	appHead: AppHead,
//    	default: component
//	}
//}
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
      	{
  		  path: 'index',
	      name: 'index',
	      component: Index,
	      alias: '/index'
      	},
      	{
	      path: 'resource',
	      component: Resource,
	      children: [
	      	{
	      		path: '',
	      		name: 'resource_manage',
	      		component: ResourceManage,
	      		alias: '/resource_manage'
	      	},
	      	{
	      		path: 'modify/:tid',
	      		name: 'resource_modify',
	      		component: ResourceModify,
	      		alias: '/resource_modify'
	      	},
	      	{
	      		path: 'detail',
	      		name: 'resource_detail',
	      		component: ResourceDetail,
	      		alias: '/resource_detail'
	      	},
	      ]
	    },
      	{
	      path: 'customer',
	      component: Customer,
	      children: [
	      	{
	      		path: '',
	      		name: 'customer_manage',
	      		component: CustomerManage,
	      		alias: '/customer_manage'
	      	},
	      	{
	      		path: 'modify',
	      		name: 'customer_modify',
	      		component: CustomerModify,
	      		alias: '/customer_modify'
	      	},
	      	{
	      		path: 'detail',
	      		name: 'customer_detail',
	      		component: CustomerDetail,
	      		alias: '/customer_detail'
	      	},
	      ]
	    },
	    {
	      path: 'notice_manage',
	      name: 'notice_manage',
	      component: NoticeManage,
	      alias: '/notice_manage'
	    },
	    {
	      path: 'account_manage',
	      name: 'account_manage',
	      component: AccountManage,
	      alias: '/account_manage'
	    },
	    {
	      path: 'personal_work',
	      name: 'personal_work',
	      component: PersonalWork,
	      alias: '/personal_work'
	    },
      ]
    },
    
//  {
//    path: '/index',
//    name: 'index',
//    components: getComponents(Index),
//  },
//  
//  {
//    path: '/resource_manage',
//    name: 'resource_manage',
//    components: getComponents(ResourceManage)
//  },
//  {
//    path: '/customer_manage',
//    name: 'customer_manage',
//    components: getComponents(CustomerManage)
//  },
    
  ]
})
