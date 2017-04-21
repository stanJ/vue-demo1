<template>
	<div id="content-wrapper">
		<div class="bszk-breadcrumb-wrapper">
			<i class="bszk-icon-home"></i>
			<ul class="sui-breadcrumb">
			  <li>
			  	<router-link to="/">首页</router-link>
			  </li>
			  <slot name="curTitle"></slot>
			</ul>
			<slot name="num"></slot>
		</div>
		<slot name="mainTitle">
			<div class="bszk-title">查询操作</div>
		</slot>
		<slot name="content"></slot>
		<slot></slot>
	</div>
</template>

<script>
</script>

<style>
</style>