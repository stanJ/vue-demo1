<template>
	<div>
		<button type="button" class="sui-btn btn-bordered btn-sm-round"
			v-for="(item,index) in categoryAll" 
			:class="{'bszk-btn-selected': isSelected(item.tid)}"
			@click="toggle(item.tid,index)">
			{{item.name}}
		</button>
	</div>
</template>

<script>
	import { resourceService } from '@/services/Service'
	export default {
		name: 'button-group',
		props: ['value',],
		data () {
			return {
				categoriesAry: [],
				categoryAll: [],
			}
		},
		methods: {
			isSelected (tid) {
				if(this.categoriesAry.includes(tid)){
					return true
				}else{
					return false
				}
			},
			toggle (tid,index) {
				if(this.isSelected(tid)){
					this.categoriesAry.splice(this.categoriesAry.indexOf(tid),1)
				}else{
					if(this.categoriesAry.length>=5){
						this.$alert('最多选择5个专家类别','提示',{
							confirmButtonText: '确定',
						})
					}else{
						this.categoriesAry.push(tid)
					}
					
				}
			}
		},
		watch: {
			categoriesAry (val) {
				var str = JSON.stringify(val)
				this.$emit('input',str)
			},
			value (val) {
				if(val){
					this.categoriesAry = JSON.parse(val)
				}
			}
		},
		created () {
			var vm = this;
			resourceService.fetchCategoryList()
			.then((res) => {
				if(res.success){
					var d = res.data.object;
					vm.categoryAll = d.content
				}
			})
		},

	}
</script>

<style>
</style>