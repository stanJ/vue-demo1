<template>
	<router-link
		class="left-menu-li"
		:to="href" 
		tag="li" 
		active-class="selected">
		<div class="left-menu-icon" :class="menu.class"></div>							
		<div class="left-menu-text">{{menu.text}}</div>	
	</router-link>
</template>

<script>
	import Util from '../lib/util/util.js'
	export default {
		props: ['menu','order'],
		name: 'left-menu',
		data () {
			return {
				selected: false,
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
				var str = "{name:'"+href+"'}";
				return str;
//				var obj = {
//					name: href
//				}
//				return JSON.stringify(obj);
			}
		}
	}
</script>

<style>
</style>