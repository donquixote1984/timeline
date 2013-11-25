jQuery.fn.disableTextSelect = function() {
	return this.each(function() {
		$(this).css({
			'MozUserSelect':'none',
			'webkitUserSelect':'none'
		}).attr('unselectable','on').bind('selectstart', function() {
			return false;
		});
	});
};
Array.prototype.last = function(){
	return this[this.length-1]
}

function Career(){
	this.name = null
	this.start = null
	this.start_YMD = null
	this.end = null
	this.end_YMD= null
	this.title=null
	this.end = null
	this.id = null
	this.bind_node =null
	this.color = null
	this.events = []
}
function Event(){
	this.start = null
	this.start_YMD = null
	this.end = null
	this.end_YMD = null
	this.id = null
	this.color = null
	this.category = null
}

