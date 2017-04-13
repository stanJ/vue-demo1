<template>
	<div id="content-wrapper">
		<div class="bszk-breadcrumb-wrapper">
			<i class="bszk-icon-home"></i>
			<ul class="sui-breadcrumb">
			  <li><a href="#" data-href="index">首页</a></li>
			  <slot name="curTitle"></slot>
			</ul>
			<slot name="num"></slot>
		</div>
		<slot name="mainTitle">
			<div class="bszk-title">查询操作</div>
		</slot>
		
		<div class="sui-form form-horizontal">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>