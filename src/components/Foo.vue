<template>
	<div>
		<h1>{{msg}}</h1>
	</div>
</template>
<script>
	export default {
		name: 'foo',
		data (){
			return {
				msg:'foo你哥'
			}
		}
	}
</script>
<style scoped>
	h1{
		color:red;
	}
</style>