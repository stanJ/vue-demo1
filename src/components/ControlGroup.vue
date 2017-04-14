<template>
	<li>
		<label class="control-label">
		  {{text}}
		</label>
		<div class="controls">
			<slot></slot>
		</div>
	</li>
</template>

<script>
	export default {
		props: ['text'],
		name: 'control-group'
	}
</script>

<style>
</style>