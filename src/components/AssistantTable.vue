<template>
	<div>
		<div class="bszk-title-sm">助手信息</div>
		<div class="bszk-btn-group">
			<button class="sui-btn btn-primary btn-sm mr_btn" 
				@click="add">添加</button>
			<button class="sui-btn btn-danger btn-sm"
				@click="deleteSelected">删除</button>
		</div>
		<el-table :data="assistantData" border class="table-wrapper" >
			<el-table-column 
				label="助手姓名" 
				prop="name" 
				width="137px"
				align="center"
				:show-overflow-tooltip="true"> 
			</el-table-column>
			<el-table-column 
				label="出生日期" 
				prop="birth"
				align="center"
				:show-overflow-tooltip="true">
			</el-table-column>
			<el-table-column label="联系方式" 
				prop="contact"
				align="center"
				:show-overflow-tooltip="true"> 
			</el-table-column>
			<el-table-column label="微信" 
				prop="wechat"
				align="center"
				:show-overflow-tooltip="true"> 
			</el-table-column>
			<el-table-column label="性别" 
				prop="converted_gender"
				align="center"
				:show-overflow-tooltip="true"> 
			</el-table-column>
			<el-table-column label="证件号" 
				prop="certificate"
				align="center"
				:show-overflow-tooltip="true"> 
			</el-table-column>
			<el-table-column label="邮箱" 
				prop="email"
				align="center"
				:show-overflow-tooltip="true"> 
			</el-table-column>
			<el-table-column 
				label="操作" 
				width="200px"
				align="center">
				<template scope="scope">
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
	</div>
</template>

<script>
	
	import { resourceService } from '@/services/Service'
	
	export default {
		name: 'assistant-table',
		props: ['assistantData'],
//		data () {
//			return {
//				
//			}
//		},
		methods: {
			add () {
				
			},
			deleteSelected () {
				
			},
			modify () {
				
			},
			deleteRow (index,row) {
				var vm = this;
				this.$confirm('请确认是否删除该助手？','提示',{
					type: 'warning'
				})
				.then(() => {
					resourceService.deleteAssistant(row.tid)
					.then((res) => {
						if(res.success){
							this.$message({
								type: 'success',
								message: '删除成功!'
							})
						}
						vm.$emit('deleteRow')
					})
				})
			}
		}
	}
</script>

<style>
</style>