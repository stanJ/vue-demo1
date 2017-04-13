<template>
	<app-content>
		<li slot="curTitle" class="active">资源管理</li>
		<div slot="num" class="head-num-wrapper"><span class="head-text">资源总数:</span><span class="head-num"></span><span>个</span></div>
		<div slot="content" class="bszk-block clearfix no-pb">
			<ul class="query-group clearfix" id="query-expert">
				<li>
					<label class="control-label">
					  专家名称
					</label>
					<div class="controls">
						<input type="text" class="input-medium" name="name">
					</div>
				</li>
				<li>
					<label class="control-label">
					  专家类别
					</label>
					<div class="controls">
						<span class="sui-dropdown dropdown-bordered select">
								<span class="dropdown-inner">
									<a id="drop4" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle">
										<input value="" name="category" type="hidden" class="">
										<i class="caret"></i><span>请选择</span>
									</a>
									<ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu">
										<li role="presentation" class="">
											<a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a>
										</li>
									</ul>
								</span>
						</span>
					</div>
				</li>
				
				<li>
					<label class="control-label">
					  居住地
					</label>
					<div class="controls">
						<span class="sui-dropdown dropdown-bordered select">
								<span class="dropdown-inner">
									<a id="drop4" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle">
										<input value="" name="province" type="hidden" class="">
										<i class="caret"></i><span>请选择</span>
									</a>
									<ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu">
										<li role="presentation" class="">
											<a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a>
										</li>
									</ul>
								</span>
						</span>
						<span class="sui-dropdown dropdown-bordered select">
								<span class="dropdown-inner">
									<a id="drop4" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle">
										<input value="" name="city" type="hidden" class="">
										<i class="caret"></i><span>请选择</span>
									</a>
									<ul id="menu4" role="menu" aria-labelledby="drop4" class="sui-dropdown-menu">
										<li role="presentation" class="">
											<a role="menuitem" tabindex="-1" href="javascript:void(0);" value="">请选择</a>
										</li>
									</ul>
								</span>
						</span>
					</div>
				</li>
				<li>
					<button type="button" class="sui-btn btn-primary" style="margin-left:17px;" id="btn_query1">查询</button>
				</li>
				<li class="fr addbtn" style="display: none;">
					<button type="button" class="sui-btn btn-primary" style="margin-left:22px;" id="btn_add1">添加</button>
				</li>
		  </ul>
		</div>
	</app-content>
</template>

<script>
	import AppContent from '@/views/AppContent'
	export default {
		name:'resource-manage',
		components: {
			AppContent
		}
	}
</script>

<style>
</style>