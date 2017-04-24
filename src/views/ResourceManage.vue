<template>
	<app-content>
		<li slot="curTitle" class="active">资源管理</li>
		<div slot="num" class="head-num-wrapper">
			<span class="head-text">资源总数:</span>
			<span class="head-num">{{pagination.totalElements}}</span>
			<span>个</span>
		</div>
		<div slot="content" class="sui-form form-horizontal">
			<div class="bszk-block clearfix no-pb">
				<query-group id="query-expert">
					<control-group 
						text="专家名称">
						<input type="text" class="input-medium" 
							v-model="queryParams.name">
					</control-group>
					<control-group 
						text="专家类别">
						<sui-select 
							:options="categories" 
							v-model="queryParams.category">
						</sui-select>
					</control-group>
					<control-group 
						text="居住地">
						<sui-select 
							:options="provinces" 
							v-model="queryParams.province">
						</sui-select>
						<sui-select 
							:options="cities" 
							v-model="queryParams.city">
						</sui-select>
					</control-group>
					<li>
						<button type="button" class="sui-btn btn-primary" style="margin-left:17px;" id="btn_query1"
							@click="search" 
							:disabled="isDisabled">
							查询
						</button>
					</li>
					<li class="fr addbtn" style="display: none;">
						<button type="button" class="sui-btn btn-primary" style="margin-left:22px;" id="btn_add1">添加</button>
					</li>
				</query-group>
			</div>
		
		</div>
		
		<div class="bszk-block">
			<el-table :data="tableData" border class="table-wrapper" >
				<el-table-column 
					label="专家名称" 
					prop="name" 
					width="137px"
					align="center"
					:show-overflow-tooltip="true"> 
				</el-table-column>
				<el-table-column 
					label="专家类别" 
					prop="category"
					align="center"
					:show-overflow-tooltip="true">
					<template scope="scope">
						<label-group
							:categories="scope.row.category"
							:otherCategory="scope.row.otherCategory"
							:categoryCN="categoryCN"></label-group>
					</template>
				</el-table-column>
				<el-table-column label="创建人" 
					prop="converted_createUser"
					align="center"
					:show-overflow-tooltip="true"> 
				</el-table-column>
				<el-table-column 
					label="操作" 
					width="200px"
					align="center">
					<template scope="scope">
						<el-button 
							@click="check(scope.$index,scope.row)" 
							type="text" 
							class="bs-default">
							查看
						</el-button>
						<el-button 
							@click="modify(scope.$index,scope.row)" 
							type="text">
							修改
						</el-button>
						<el-button 
							@click="deleteRow(scope.$index,scope.row)" 
							type="text" class="bs-danger">
							删除
						</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination
				@current-change="handleCurChange"
				:current-page="pagination.curPage"
				:page-size="pagination.pageSize"
				layout="total,prev,pager,next,jumper"
				:total="pagination.totalElements">
			</el-pagination>
		</div>
	</app-content>
</template>

<script>
	import AppContent from '@/views/AppContent'
	import QueryGroup from '@/components/QueryGroup'
	import ControlGroup from '@/components/ControlGroup'
	import SuiSelect from '@/components/SuiSelect'
	import LabelGroup from '@/components/LabelGroup'
	import TableColumn from '@/components/TableColumn'
	import { resourceService, publicService } from '@/services/Service'
	import Util from '@/lib/util/util'
	import router from '@/router'
	export default {
		name:'resource-manage',
		data () {
			return {
				categories:[],
				originCategories: [],
				provinces:[],
				cities:[],
				queryParams:{
					name:'',
					category:'',
					province:'',
					city:'',
				},
				tableData:[],
				isDisabled: false,
				pagination:{
					curPage: 1,
					totalElements: 0,
					pageSize: Util.pageConfig.pageNum
				}
			}
		},
		computed: {
			categoryCN () {
				return Util.getCategoryCN(this.originCategories)
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
						vm.originCategories = d.content;
						vm.loadExpertList()
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
			loadExpertList () {
				var vm = this;
				var jsonFilter = {
					search_LIKE_name:this.queryParams.name,
					search_LIKE_category:this.queryParams.category,
					search_EQ_province:this.queryParams.province,
					search_EQ_city:this.queryParams.city,
				}
				resourceService.fetchExpert({
					jsonFilter: JSON.stringify(jsonFilter),
					nextPage: this.pagination.curPage*1-1
				})
				.then((res) => {
					if(res.success){
						vm.tableData = res.data.object.content
						vm.pagination.totalElements = res.data.object.totalElements
					}
					vm.isDisabled = false
				}).catch(() => vm.isDisabled = false)
			},
			search () {
				this.isDisabled = true;
				this.pagination.curPage = 1;
				this.loadExpertList()
			},
			check (index,row) {
				console.log(index)
				console.log(row)
			},
			modify (index,row) {
				router.push({
					name: 'resource_modify',
					params: {
						tid: row.tid
					}
				})
			},
			deleteRow (index,row) {
				var vm = this;
				this.$confirm('请确认是否删除该专家？','提示',{
					type: 'warning'
				})
				.then(() => {
					resourceService.deleteExpert(row.tid)
					.then((res) => {
						if(res.success){
							this.$message({
								type: 'success',
								message: '删除成功!'
							})
						}
						vm.loadExpertList()
					})
				})
				
			},
			handleCurChange (val) {
				this.pagination.curPage = val;
       			this.loadExpertList();
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
			SuiSelect,
			LabelGroup,
			TableColumn
		}
	}
</script>

<style>
	.el-pagination{
		text-align: center;
		margin: 18px 0;
	}
	.bs-danger{
		color: #ea4a36
	}
	.bs-danger:hover,.bs-danger:focus{
		color: #ea4a36
	}
	.bs-default{
		color: #000
	}
	.bs-default:hover,.bs-default:focus{
		color: #000
	}
	/*.el-table .cell{
		text-align: center;
		white-space: nowrap;
	}*/
</style>