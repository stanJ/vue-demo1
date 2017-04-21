import Vue from 'vue'

Vue.filter('date', function (value) {
	if(value){
		value = value.slice(0,10)
	}
	return value;
})
