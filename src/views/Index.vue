<template>
	<div id="content-wrapper">
		<div class="bszk-breadcrumb-wrapper">
			<i class="bszk-icon-home"></i>
			<ul class="sui-breadcrumb">
			  <li class="active">首页</li>
			</ul>
		</div>
		<div class="bszk-block">
			<div class="bszk-logo-sm"></div>
			<div class="bszk-companyname">北京贝尚智库文化传媒有限公司</div>
		</div>
		<div class="sy-wrapper">
			<div class="sy-info-wrapper">
				<div class="bszk-title">最新消息</div>
				<div class="bszk-block clearfix" style="height: 609px;overflow-y: auto;box-sizing: border-box;">
					<ul class="sy-info-ul top-news">
					</ul>
				</div>
			</div>
			<div class="sy-show-wrapper">
				<div class="sy-show-half fl">
					<div class="sy-show-top show-top-1" data-href="resource_manage">
						<div class="icon-lg-wrapper">
							<div class="bszk-icon-lg icon-lg-resource"></div>
							<div class="icon-lg-text">资源系统</div>
						</div>
					</div>
					<div class="sy-show-bottom">
						<div class="bszk-title sy-title">公司简介</div>
						<div class="bszk-block clearfix sy-block sy-intro">
							<div class="bottom-info-wrapper">
								<ul class="intro-ul">
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="sy-show-half fr">
					<div class="sy-show-top show-top-2" data-href="customer_manage">
						<div class="icon-lg-wrapper">
							<div class="bszk-icon-lg icon-lg-customer"></div>
							<div class="icon-lg-text">客户系统</div>
						</div>
					</div>
					<div class="sy-show-bottom">
						<div class="bszk-title sy-title">公告栏</div>
						<div class="bszk-block clearfix sy-block sy-block-notice">
							<div class="sy-notice-wrapper">
								<div class="sy-notice-half border-right">
									<span class="bszk-label label-radius"><span class="ayear"></span><span>年</span></span>
									<div class="sy-notice-text">已成交<span class="sy-notice-num yearOrders"></span>单</div>
								</div>
								<div class="sy-notice-half">
									<span class="bszk-label label-radius"><span class="byear"></span><span>年</span><span class="bmonth"></span>月</span>
									<div class="sy-notice-text">已成交<span class="sy-notice-num monthOrders"></span>单</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'index'
	}
</script>

<style>
</style>