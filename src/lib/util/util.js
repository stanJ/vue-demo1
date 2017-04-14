import $ from 'jquery'
export default {
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
}
