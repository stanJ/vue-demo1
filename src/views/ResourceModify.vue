<template>
	<app-content>
		<li slot="curTitle">
			<router-link to="/resource_manage">资源管理</router-link>
		</li>
		<li slot="curTitle" class="active">
			资源修改
		</li>
		<div slot="mainTitle" class="bszk-title">资源修改</div>
		<div slot="content" class="bszk-block clearfix">
			<div class="bszk-title-sm">基本信息</div>
			<el-form :inline="true" :model="expertForm" ref="expertForm" label-width="80px">
				<el-form-item label="专家名称" prop="name">
					<el-input v-model="expertForm.name"></el-input>
				</el-form-item>
				<el-form-item label="出生日期" prop="birth">
					<el-date-picker type="date" v-model="formattedBirth"></el-date-picker>
				</el-form-item>
				<el-form-item label="联系方式" prop="contact">
					<el-input v-model="expertForm.contact"></el-input>
				</el-form-item>
				<el-form-item label="居住地" prop="contact">
					<el-form-item prop="province">
						<el-select v-model="expertForm.province" placeholder="请选择">
							<el-option
								v-for="item in provinces"
								:label="item.value"
								:value="item.code"
								:key="item.code"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item prop="city">
						<el-select v-model="expertForm.city" placeholder="请选择">
							<el-option
								v-for="item in cities"
								:label="item.value"
								:value="item.code"
								:key="item.code"></el-option>
						</el-select>
					</el-form-item>
				</el-form-item>
			</el-form>
		
		</div>
	</app-content>
</template>

<script>
	import AppContent from '@/views/AppContent'
//	import QueryGroup from '@/components/QueryGroup'
//	import ControlGroup from '@/components/ControlGroup'
//	import SuiSelect from '@/components/SuiSelect'
//	import LabelGroup from '@/components/LabelGroup'
//	import TableColumn from '@/components/TableColumn'
	import { resourceService, publicService } from '@/services/Service'
//	import Util from '@/lib/util/util'
	export default {
		name:'resource-modify',
		data () {
			return {
				expertForm: {
					name: '',
					birth: '',
					contact: '',
					province: '',
					city: ''
				},
				provinces: [],
				cities: [],
			}
		},
		computed: {
			formattedBirth: {
				get () {
					var value = this.expertForm.birth
					var newVal = '';
					if(value){
						newVal = value.slice(0,10)
					}
					return newVal;
				},
				set (newVal) {
					var val = '';
					if(newVal){
						val = newVal + ' 00:00:00'
					}
					this.expertForm.birth = val;
				}
			}
		},
		created () {
			this.fetchData();
		},
		methods: {
			fetchData () {
				var vm = this;
				var jsonFilter = {
					search_EQ_tid:this.$route.params.tid,
				}
				resourceService.fetchExpert({
					jsonFilter: JSON.stringify(jsonFilter)
				})
				.then((res) => {
					if(res.success){
						vm.expertForm = res.data.object.content[0]
					}
				})
				publicService.fetchProvince()
				.then((res) => {
					if(res.success){
						vm.provinces = res.data
					}
				})
//				publicService.fetchCity(this.expertForm.province)
//				.then((res) => {
//					if(res.success){
//						vm.cities = res.data
//					}
//				})
			}
		},
		watch:{
			'expertForm.province':function(value){
				var vm = this;
				publicService.fetchCity(value)
				.then((res) => {
					if(res.success){
						vm.cities = res.data
					}
				})
			}
		},
		components: {
			AppContent,
//			QueryGroup,
//			ControlGroup,
//			SuiSelect,
//			LabelGroup,
//			TableColumn
		}
	}
</script>

<style>
	.el-input{
		width:130px
	}
	.el-date-editor.el-input{
		width: 130px;
	}
	.el-form--inline .el-form-item{
		    margin-right: 0px;
	}
</style>