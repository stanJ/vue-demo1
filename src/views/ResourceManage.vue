<template>
	<app-content>
		<li slot="curTitle" class="active">资源管理</li>
		<div slot="num" class="head-num-wrapper"><span class="head-text">资源总数:</span><span class="head-num"></span><span>个</span></div>
		<div slot="content" class="bszk-block clearfix no-pb">
			<query-group id="query-expert">
				<control-group text="专家名称">
					<input type="text" class="input-medium" v-model="queryParams.name">
				</control-group>
				<control-group text="专家类别">
					<sui-select :options="categories" v-model="queryParams.category"></sui-select>
				</control-group>
				<control-group text="居住地">
					<sui-select :options="provinces" v-model="queryParams.province"></sui-select>
					<sui-select :options="cities" v-model="queryParams.city"></sui-select>
				</control-group>
				<li>
					<button type="button" class="sui-btn btn-primary" style="margin-left:17px;" id="btn_query1">查询</button>
				</li>
				<li class="fr addbtn" style="display: none;">
					<button type="button" class="sui-btn btn-primary" style="margin-left:22px;" id="btn_add1">添加</button>
				</li>
			</query-group>
		</div>
	</app-content>
</template>

<script>
	import AppContent from '@/views/AppContent'
	import QueryGroup from '@/components/QueryGroup'
	import ControlGroup from '@/components/ControlGroup'
	import SuiSelect from '@/components/SuiSelect'
	import { resourceService, publicService } from '@/services/Service'
	import Util from '@/lib/util/util'
	export default {
		name:'resource-manage',
		data () {
			return {
				categories:[],
				provinces:[],
				cities:[],
				queryParams:{
					name:'',
					category:'',
					province:'',
					city:'',
				}
			}
		},
		created () {
			this.fetchData();
		},
		methods: {
			fetchData () {
				var vm = this;
				resourceService.fetchCategoryList()
				.then((res) => {
					if(res.success){
						var d = res.data.object;
						vm.categories = Util.formatSelectData({
							id:'tid',
							text:'name',
							data:d.content,
						});
					}
				})
				
				publicService.fetchProvince()
				.then((res) => {
					if(res.success){
						vm.provinces = Util.formatSelectData({
							id:'code',
							text:'value',
							data:res.data,
						});
					}
				})
			},
		},
		watch:{
			'queryParams.province':function(value){
				var vm = this;
				publicService.fetchCity(value)
				.then((res) => {
					if(res.success){
						vm.cities = Util.formatSelectData({
							id:'code',
							text:'value',
							data:res.data,
						});
					}
				})
				this.queryParams.city = '';
			}
		},
		components: {
			AppContent,
			QueryGroup,
			ControlGroup,
			SuiSelect
		}
	}
</script>

<style>
</style>