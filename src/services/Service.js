import axios from './axios/axios'
import Util from '@/lib/util/util'

class ResourceService {
	fetchCategoryList () {
		return axios({
			url: '/m/expertCategory/findExpertCategoryEQStatusPage',
			method: 'post',
			params: Util.formatQueryParams({
				pageSize: Util.pageConfig.pageNumMax
			})
		})
	}
	fetchExpert (params) {
		return axios({
			url: '/m/expert/findExpertEQStatusPage',
			method: 'post',
			params: Util.formatQueryParams(params)
		})
	}
	deleteExpert (tid) {
		return axios({
			url: '/m/expert/operateExpertById',
			method: 'post',
			params: {
				modelId:tid,
				status:3
			}
		})
	}
	updateExpert (params) {
		return axios({
			url: '/m/expert/updateExpert',
			method: 'post',
			params: params
		})
	}
	fetchAssistant (params) {
		return axios({
			url: '/m/assistant/findAssistantEQStatusPage',
			method: 'post',
			params: Util.formatQueryParams(params)
		})
	}
	deleteAssistant (tid) {
		return axios({
			url: '/m/assistant/operateAssistantById',
			method: 'post',
			params: {
				modelId:tid,
				status:3
			}
		})
	}
}

class PublicService {
	fetchProvince () {
		return axios({
			url: '/dict/PROVINCE',
			method: 'get',
		})
	}
	fetchCity (value) {
		return axios({
			url: '/dict/code/'+value+'?key=CITY',
			method: 'get',
		})
	}
	fetchConstant () {
		return axios({
			url: '/dict/constant',
			method: 'get',
		})
	}
}

class LoginService {
	signIn (params) {
		return axios({
			url: '/j_spring_security_check',
			method: 'post',
			params: params,
			headers: {
				"X-Ajax-call": "true"
			}
		})
	}
}
var resourceService = new ResourceService();
var publicService = new PublicService();
var loginService = new LoginService();
export {
	resourceService,
	publicService,
	loginService
}
