<template>
	<el-table-column 
		:label="label" 
		:prop="prop" 
		:width="width"
		align="center"
		:show-overflow-tooltip="true">
		<slot></slot>
	</el-table-column>
</template>

<script>
	export default {
		name: 'table-column',
		props: ['label','prop','width']
	}
</script>

<style>
</style>