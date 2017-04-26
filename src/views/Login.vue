<template>
	<div class="page-wrapper">
		<div class="background-left">
			<div class="bszk-logo-wrapper">
				<div class="bszk-logo"></div>
				<div class="bszk-logo-text">贝尚智库公司资源管理系统</div>
			</div>
			<div class="bszk-logo-text-sm">北京贝尚智库文化传播有限公司
				<a href="http://www.miitbeian.gov.cn" target="_blank" style="color: #fff;text-decoration: none;">Copyright@2017 www.bj-shthinktank.com All Right Reserved.沪ICP备17011440号-1</a>
			</div>
		</div>
		<div class="login-right">
			<div class="login-wrapper">
				<div class="login-text">登录</div>				
				<form class="sui-form fs16" id="form-login" @submit.prevent>
				  <div class="control-group login-input clearfix">
				  	<label class="control-label"></label>
					<div class="input-wrapper login-account">
						<input type="text" placeholder="账号" class="fs16" v-model="loginForm.account" name="account">
					</div>
				    	
				  </div>
				  <div class="control-group login-input clearfix">
				  	<label class="control-label"></label>
				  	<div class="input-wrapper login-pw">
				    		<input type="password" placeholder="密码" class="fs16" v-model="loginForm.pw" name="pw">
				    	</div>
				  </div>
				  <div class="control-group login-input clearfix yzm-group" >
				  	<label class="control-label"></label>
				  	<div class="input-wrapper login-yzm" style="display: none;">
				    		<input type="text" placeholder="验证码" class="fs16 novalidate" style="width: 58.5%;" name="yzm">
				    		<div class="yzm-btn"><img src="" alt="验证码" /></div>
				    </div>
				  </div>
				  <div class="control-group">
				    <label class="control-label"></label>
				    <div class="controls">
				      <button type="submit" class="sui-btn btn-primary login-btn btn-login">登录</button>
				    </div>
				  </div>
				</form>
			</div>
			<div class="login-bg-sm"></div>
		</div>
	</div>
</template>

<script>
	
	(() => {
		console.log('11')
	})()
	const sleep = (timeoutMS) => new Promise((resolve) => {
		setTimeout(resolve, timeoutMS);
	})
	console.log('22');
	(async () => {
		for (var i = 0; i < 5; i++) {
			await sleep(1000);
			console.log(new Date, i);
		}
		
		await sleep(1000);
		console.log(new Date, i);
	})()
	console.log('33');
	import router from '@/router'
	import { loginService } from '@/services/Service'
	var $ = require('jquery')
	window.jQuery = $;
	require('@/lib/sui/sui.js')
	export default {
		name: 'login',
		data () {
			return {
				loginForm: {
					account: '',
					pw: ''
				},
				isValid:false
			}
		},
		mounted () {
			this.validate();
			
		},
		methods: {
			toIndex () {
				router.push('/')
			},
			validate () {
				var vm = this;
				$("#form-login").validate({
					rules:{
						account:{
							required:true,
						},
						pw:{
							required:true,
							password:true,
						},
						yzm:{
							required:true,
						},
					},
					success:function(){
						vm.isValid = true;
						return false;
					},
				})
			},
			signIn () {
				loginService.signIn({
					j_username:this.loginForm.account,
					j_password:this.loginForm.pw,
				})
				.then((res) => {
					if(!res.success) return false;
					var response = res.data;
					if(response.authentication.authenticated==false){
						return;
					}
					sessionStorage.setItem('t',response.token);
					sessionStorage.setItem('userinfo',JSON.stringify(response));
					router.push('/')
				})
			}
		},
		watch: {
			isValid (value) {
				if(value){
					this.signIn();
				}
				this.isValid = false;
			}
		}
	}
</script>

<style src="@/assets/css/login.css" scoped>
</style>