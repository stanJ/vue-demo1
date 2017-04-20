<template>
	<app-content>
		<li slot="curTitle">
			<router-link to="/resource_manage">资源管理</router-link>
		</li>
		<li slot="curTitle" class="active">
			资源修改
		</li>

		<div>{{$route.params.tid}}</div>
	</app-content>
</template>

<script>
	import AppContent from '@/views/AppContent'
//	import QueryGroup from '@/components/QueryGroup'
//	import ControlGroup from '@/components/ControlGroup'
//	import SuiSelect from '@/components/SuiSelect'
//	import LabelGroup from '@/components/LabelGroup'
//	import TableColumn from '@/components/TableColumn'
//	import { resourceService, publicService } from '@/services/Service'
//	import Util from '@/lib/util/util'
	export default {
		name:'resource-modify',
		data () {
			return {
				
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
	/*.el-pagination{
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
	}*/
</style>