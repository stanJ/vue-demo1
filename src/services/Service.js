import axios from './axios/axios'
import Util from '@/lib/util/util'
class ResourceService {
	fetchCategoryList (jsonFilter) {
		return axios({
			url: '/m/expertCategory/findExpertCategoryEQStatusPage',
			method: 'post',
			params: Util.formatQueryParams({
				pageSize: Util.pageConfig.pageNumMax
			})
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
}
var resourceService = new ResourceService();
var publicService = new PublicService();
export {
	resourceService,
	publicService,
}
