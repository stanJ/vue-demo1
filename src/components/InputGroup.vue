<template>
	<div>
		<div v-for="(item,index) in socialFunctionAry"
			:key="index">
			<span>{{index+1}}</span>
			<el-input v-model="item.value"></el-input>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'input-group',
		props: ['value',],
		data () {
			return {
				socialFunctionAry: []
			}
		},
		methods: {
		},
		watch: {
			socialFunctionAry (val) {
				console.log(val)
				var str = JSON.stringify(val.map(function(x){
					return x.value
				}))
				this.$emit('input',str)
			},
			value (val) {
				if(val){
					this.socialFunctionAry = JSON.parse(val).map(function(x){
						return {
							value: x
						}
					})
				}
			}
		},

	}
</script>

<style>
</style>