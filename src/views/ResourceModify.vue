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
				<el-form-item label="居住地">
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
				<el-form-item label="性别" prop="gender">
					<el-select v-model="expertForm.gender" placeholder="请选择">
						<el-option
							v-for="item in sex"
							:label="item.value"
							:value="item.code"
							:key="item.code"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="证件号" prop="certificate">
					<el-input v-model="expertForm.certificate"></el-input>
				</el-form-item>
				<el-form-item label="邮箱" prop="email">
					<el-input v-model="expertForm.email"></el-input>
				</el-form-item>
				<el-form-item label="微信" prop="wechat">
					<el-input v-model="expertForm.wechat"></el-input>
				</el-form-item>
				<el-form-item label="专家类别" prop="category" class="category">
					<button-group v-model="expertForm.category"></button-group>
				</el-form-item>
				<el-form-item label="其他" prop="otherCategory">
					<el-input v-model="expertForm.otherCategory"></el-input>
				</el-form-item>
				<el-form-item label="社会职务" prop="socialFunction">
					<input-group v-model="expertForm.socialFunction"></input-group>
				</el-form-item>
			</el-form>
		
		</div>
	</app-content>
</template>

<script>
	import moment from 'moment'
	import AppContent from '@/views/AppContent'
	import ButtonGroup from '@/components/ButtonGroup'
	import InputGroup from '@/components/InputGroup'
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
					city: '',
					gender: '',
					certificate: '',
					email: '',
					wechat: '',
					category: '',
					otherCategory: '',
					socialFunction: '',
				},
				provinces: [],
				cities: [],
				sex: {},
			}
		},
		computed: {
			formattedBirth: {
				get () {
					var value = this.expertForm.birth
					if(value){
						value = value.slice(0,10)
					}else{
						value = ''
					}
					return value;
				},
				set (newVal) {
					if(newVal){
						newVal = moment(newVal).format('YYYY-MM-DD') + ' 00:00:00'
					}else{
						newVal = ''
					}
					this.expertForm.birth = newVal;
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
				publicService.fetchConstant()
				.then((res) => {
					if(res.success){
						vm.sex = res.data.object.dict.SEX
					}
				})
			},
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
			ButtonGroup,
			InputGroup,
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
<style>
	.el-form-item.category .el-form-item__label{
		display: table-cell;
	}
	.el-form-item.category .el-form-item__content{
		display: table-cell;
	}
</style>