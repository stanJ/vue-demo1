export default {
	isAry:function(obj){
		return Object.prototype.toString.call(obj) === '[object Array]'; 
	},
}
