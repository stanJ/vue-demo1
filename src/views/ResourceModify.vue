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
			<el-form :inline="true" :model="expertForm" :rules="rules" ref="expertForm" label-width="85px">
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
				<el-form-item label="社会职务" prop="socialFunction" class="item-social-function">
					<input-group v-model="expertForm.socialFunction"></input-group>
				</el-form-item>
				<el-form-item label="专家备注" prop="comment">
					<el-input v-model="expertForm.comment" type="textarea" :rows="4" style="width: 490px;"></el-input>
				</el-form-item>
				<el-form-item label="上传附件" class="item-file">
					<el-form-item prop="fileName">
						<el-input v-model="expertForm.fileName"></el-input>
					</el-form-item>
					<el-form-item prop="filePath">
						<el-upload 
							:action="baseUrl+'/m/userExtend/fileUpload'"
							:show-file-list="false"
							:on-success="handleSuccess"
							:on-error="handleError"
							:on-progress="handleProgress"
							:before-upload="handleBeforeUpload">
							<input type="hidden" v-model="expertForm.filePath"/>
							
							<el-button slot="trigger" size="small">点击上传</el-button>
							
						</el-upload>
					</el-form-item>
					<el-form-item>
						<el-progress type="circle" :percentage="percentage" :width="35" :stroke-width="2" :status="status" v-if="percentage>0"></el-progress>
					</el-form-item>
					<el-form-item>
						<el-button size="small" type="danger" @click="deleteFile">删除</el-button>
					</el-form-item>
					
				</el-form-item>
				<el-button type="primary" class="bs-btn" @click="submitForm('expertForm')">保存</el-button>
			</el-form>
		
		</div>
	</app-content>
</template>

<script>
	import moment from 'moment'
	import AppContent from '@/views/AppContent'
	import ButtonGroup from '@/components/ButtonGroup'
	import InputGroup from '@/components/InputGroup'
	import { resourceService, publicService } from '@/services/Service'
	import {api} from '@/services/axios/config'
	
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
					comment: '',
					fileName: '',
					filePath: '',
					tid: '',
				},
				provinces: [],
				cities: [],
				sex: {},
				baseUrl: api.baseUrl,
				percentage: 0,
				status: '',
				rules: {
					name: [
						{required: true,message: '请填写',trigger: 'blur'}
					]
				}
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
						for(var key in vm.expertForm){
							vm.expertForm[key] = res.data.object.content[0][key]
						}
//						vm.expertForm = res.data.object.content[0]
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
			handleSuccess (res,file,fileList) {
				this.expertForm.fileName = file.name;
				this.expertForm.filePath = res.object.filePath;
				this.status = 'success'
//				console.log(res)
//				console.log(file.name)
//				console.log(fileList)
			},
			handleError (err,file,fileList) {
//				console.log('err '+res)
//				console.log('err-file '+file)
//				console.log('err-fileList '+fileList)
			},
			handleBeforeUpload (file) {
//				console.log(file)
			},
			handleProgress (e,file,fileList) {
				this.percentage = parseInt(e.percent);
			},
			deleteFile () {
				this.expertForm.fileName = ''
				this.expertForm.filePath = ''
				this.percentage = 0
			},
			submitForm (formName) {
				var vm = this;
				this.$refs[formName].validate((valid) => {
					if(valid){
						var params = JSON.parse(JSON.stringify(vm.expertForm))
						resourceService.updateExpert(params)
						.then((res) => {
							if(res.success){
								vm.$message({
									message: '保存成功',
									type: 'success'
								})
							}
						})
					}else{
						return false;
					}
				})
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
	.el-form-item.item-social-function{
		display: block;
	}
	.el-form-item.item-social-function .el-form-item__content{
		display: block;
		margin-left: 73px;
	}
	.el-form-item.item-file{
		display: block;
	}
	.bs-btn{
		width: 132px;
		margin-left: 85px;
	}
	
</style>