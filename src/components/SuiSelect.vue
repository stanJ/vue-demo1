<template>
	<span class="sui-dropdown dropdown-bordered select">
		<span class="dropdown-inner">
			<a id="drop1" role="button" href="javascript:void(0);" class="dropdown-toggle">
				<input value="" name="category" type="hidden">
				<i class="caret"></i>
				<span>请选择</span>
			</a>
			<ul id="menu1" role="menu" aria-labelledby="drop1" class="sui-dropdown-menu">
				<li role="presentation">
					<a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a>
				</li>
				<li role="presentation" v-for="option in options">
					<a role="menuitem" tabindex="-1" href="javascript:void(0);" :value="option.id">{{option.text}}</a>
				</li>
			</ul>
		</span>
	</span>
</template>
	
<script>
	import Util from '../lib/util/util'
	var $ = require('jquery')
	window.jQuery = $;
	require('../lib/sui/sui.js')
	export default {
		name: 'sui-select',
		props:['options','value'],
		mounted:function(){
			
			var vm = this;
			$(this.$el).find('a.dropdown-toggle').dropdown();
			var input = $(this.$el).find('input');
			input.on('change',function(){
				vm.$emit('input',this.value);
			})
			Util.toSelect(input,this.value);
		},
		watch:{
			value:function(value){
				var input = $(this.$el).find('input');
				Util.toSelect(input,value);
				input.trigger('change');
			}
		},
		destroyed:function(){
			$(this.$el).off();
		}
	}
</script>

<style>
</style>