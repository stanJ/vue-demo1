<template>
	<div id="left-menu-wrapper">			
		<ul class="left-menu-list clearfix">
			<!--<li class="left-menu-li" :class="{selected:selected.selected}" @click="select" :data-href="menu.url | url" v-for="menu in menuData">							
				<div class="left-menu-icon" :class="menu.class"></div>							
				<div class="left-menu-text">{{menu.text}}</div>						 
			</li>-->
			<left-menu :menu="menu" :key="$index" :order="$index" v-for="(menu,$index) in menuData"></left-menu>
			<!--<li class="left-menu-li" data-href="customer_manage">							
				<div class="left-menu-icon customer-icon"></div>							
				<div class="left-menu-text">客户管理</div>						 
			</li>
			<li class="left-menu-li" data-href="notice_manage">							
				<div class="left-menu-icon notice-icon"></div>							
				<div class="left-menu-text">公告管理</div>						 
			</li>
			<li class="left-menu-li" data-href="account_manage">							
				<div class="left-menu-icon account-icon"></div>							
				<div class="left-menu-text">账号管理</div>						 
			</li>
			<li class="left-menu-li" data-href="personal_work">							
				<div class="left-menu-icon personal-icon"></div>							
				<div class="left-menu-text">个人办公</div>						 
			</li>-->
		</ul>			
		<div class="left-menu-mask"></div>		
	</div>
</template>

<script>
	var config = require('../config.json')
	import LeftMenu from '@/components/LeftMenu'
	export default {
		name: 'app-left',
		data () {
			return {
				menuData: config.menuData,
			}
		},
		components: {
			LeftMenu
		}
		
	}
</script>

<style>
</style>