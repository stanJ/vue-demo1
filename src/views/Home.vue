<template>
	<div>
		<app-head></app-head>
		<app-left></app-left>
		<router-view></router-view>
	</div>
	
</template>

<script>
	import AppHead from '@/views/AppHead'
	import AppLeft from '@/views/AppLeft'
	export default {
		name: 'home',
		components: {
			AppHead,
			AppLeft
		}
	}
</script>

<style>
</style>