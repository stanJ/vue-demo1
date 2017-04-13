<template>
	<li class="left-menu-li" :class="{selected:selected}" @click="select">							
		<router-link :to="href">
			<div class="left-menu-icon" :class="menu.class"></div>							
			<div class="left-menu-text">{{menu.text}}</div>	
		</router-link>
							 
	</li>
</template>

<script>
	import Store from '../store'
	import Util from '../lib/util/util.js'
	export default {
		props: ['menu','order'],
		name: 'left-menu',
		data () {
			return {
				selected: false,
			}
		},
		methods: {
			select () {
				this.selected = true;
				Store.vm1.$emit('li-selected',this.order)
			}
		},
		computed: {
			href () {
				var value = this.menu.url;
				var href = '';
				if(Util.isAry(value)){
					href = value[0];
				}else{
					href = value;
				}
				return href;
			}
		},
		filters: {
			url: function(value){
				var href = '';
				if(Util.isAry(value)){
					href = value[0];
				}else{
					href = value;
				}
				return href;
			}
		},
		created: function(){
			var vm = this;
			Store.vm1.$on('li-selected',function (order) {
				if(vm.order != order){
					vm.selected = false;
				}
			})
		}
	}
</script>

<style scoped>
	a {
		color: inherit;
		text-decoration: inherit;
	}
	a:hover,a:focus {
		color: inherit;
		text-decoration: inherit;
	}
</style>