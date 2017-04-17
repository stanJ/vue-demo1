var envValue = 1;
var apiObj = {};
switch(envValue){
	case 0:
		apiObj.baseUrl = 'http://192.168.2.211:8080/xa-blackcat-web';
		apiObj.picUrl = 'http://test.3tichina.com:8026';
		break;
	case 1:
		apiObj.baseUrl = 'http://jkjy.3tichina.com:81/xa-blackcat-web';
		apiObj.picUrl = 'http://jkjy.3tichina.com';
		break;
	case 2:
		apiObj.baseUrl = 'http://www.bj-shthinktank.com/xa-blackcat-web';
		apiObj.picUrl = 'http://www.bj-shthinktank.com:81';
		break;
		
}
export {apiObj as api} 