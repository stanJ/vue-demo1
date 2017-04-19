import $ from 'jquery'
export default {
	pageConfig:{
		pageNum: 8,
		pageNumMax: 1000,
	},
	isAry:function(obj){
		return Object.prototype.toString.call(obj) === '[object Array]'; 
	},
	toSelect:function(input,value){
		var a = $(input).parent(".dropdown-toggle");
		var ul = a.siblings(".sui-dropdown-menu");
		if(value){
			var a1 = ul.children("li").children("a[value="+value+"]");
			var li = a1.parent("li");
			var text = a1.text();
			a.children("input").val(value);
			a.children("span").text(text);
			ul.children("li").removeClass("active");
			li.addClass("active");
		}else{
			var a1 = ul.children("li").children("a[value='']");
			var li = a1.parent("li");
			var text = a1.text();
			a.children("input").val(value);
			a.children("span").text(text);
			ul.children("li").removeClass("active");
			li.addClass("active");
		}
	},
	formatQueryParams:function(params){
		var obj = {
			nextPage:0,
			pageSize:this.pageConfig.pageNum,
			status:1,
			sortData:"[{property:'modifyTime',direction:'DESC'}]",		
			jsonFilter:"{}"
		}
		return $.extend({},obj,params);
	},
	formatSelectData:function(params){
		var id = params.id;
		var text = params.text;
		var data = params.data;
		return $.map(data,function(d){
			var obj = {};
			obj.id = d[id];
			obj.text = d[text];
			return obj;
		})
	},
	getCategoryCN (data) {
		var obj = {};
		$.each(data,function(i,val){
			obj[val.tid] = val.name;
		})
		return obj;
	}
}
