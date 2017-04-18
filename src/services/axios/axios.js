import axios from 'axios'
import {api} from './config'
import router from '@/router'
require('es6-promise').polyfill();

var noToken = {
	'/j_spring_security_check':"",
	'/dict/constant':"",
	'/m/cmsuser/validataUser':"",
	'/m/userExtend/verifyVeriPic':"",
};
var instance = axios.create({
	baseURL:api.baseUrl,
	
})
instance.interceptors.request.use(function (config) {
	if(noToken[config.url]==undefined){
		if(!sessionStorage.getItem("t")){
			sessionStorage.setItem("message","登录过期,请重新登录");
			router.push('/login')
			return false;
		}else{
			if(!config.params){
				config.params = {};
			}
			config.params.token = sessionStorage.getItem("t") 
		}
	}
	return config;
}, function (error) {
	return Promise.reject(error)
})
instance.interceptors.response.use(function (response) {
	var data = response.data;
	if(data && data.code==0 && data.message){
		if(data.message.indexOf('已失效')!=-1 || data.message.indexOf('无效')!=-1){
			sessionStorage.setItem("message","登录过期,请重新登录");
//			utilObj.navigate("login");
		}else if(data.object && data.object=="22001"){
//			utilObj.alert("输入的文字过长");
			console.log('输入的文字过长')
		}else{
//			utilObj.alert(data.message);
			console.log(data.message)
		}
	}
	if(data.code==0){
		response.success = false;
	}else{
		response.success = true;
	}
	return response;
}, function (error) {
	console.log(error)
	return Promise.reject(error);
})
export default instance