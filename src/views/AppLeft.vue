<template>
	<div id="left-menu-wrapper">			
		<ul class="left-menu-list clearfix">
			<left-menu :menu="menu" :key="$index" :order="$index" v-for="(menu,$index) in menuData"></left-menu>
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