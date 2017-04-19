<template>
	<div id="header-wrapper">
		<div class="logo logo-frame" @click="toIndex"></div>
		<div class="header-text">贝尚智库公司资源管理系统</div>
		<div class="header-menu">
			<div class="aboutus">superadmin</div>
			<div class="signout">
				<button class="sui-btn signout-btn" @click="signOut">注销</button></div>
		</div>
		<div class="header-mask"></div>
	</div>
</template>
<script>
	import router from '@/router'
	export default {
		name: 'app-head',
		methods: {
			signOut () {
				sessionStorage.clear()
				router.push('/login')
			},
			toIndex () {
				router.push('/')
			}
		}
	}
</script>
<style>

</style>
