<template>
	<div>
		<h1>{{msg}}</h1>
	</div>
</template>
<script>
	export default {
		name: 'bar',
		data (){
			return {
				msg:'bar你妹'
			}
		}
	}
</script>
<style scoped>
	h1{
		color:lightblue;
	}
</style>