<template>
	<span>
		<button class="sui-btn btn-primary btn-sm-round no-hover nomr"
			v-for="category in categoriesAry">
			{{categoryCN[category]}}
		</button>
		<button class="sui-btn btn-primary btn-sm-round no-hover nomr"
			v-if="otherCategory">
			{{otherCategory}}
		</button>
	</span>
</template>

<script>
	export default {
		name: 'label-group',
		props: ['categories','otherCategory','categoryCN'],
		computed: {
//			title () {
//				var title = '';
//				for(let i=0;i<this.categoriesAry.length;i++){
//					title += this.categoryCN[this.categoriesAry[i]] + ','
//				}
//				if(this.otherCategory){
//					title += this.otherCategory + ','
//				}
//				if(title){
//					title = title.slice(0,-1)
//				}
//				return title;
//			},
			categoriesAry () {
				var ary = []
				if(this.categories){
					ary = JSON.parse(this.categories)
				}
				return ary;
			}
		}
	}
</script>

<style>
</style>