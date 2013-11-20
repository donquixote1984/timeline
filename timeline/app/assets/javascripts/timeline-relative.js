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
function Career(){
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
}

function CenterNode(){
	this.bind_node  = null
	this.center_x = 0
	this.width =0
	this.left_pos = 0
	this.right_pos =0

	this.check = function(){
		if(this.center_x <this.left_pos||this.center_x>this.right_pos){
			return false
		}
		else{
			return true
		}
	}
	this.move = function(offset){
		this.center_x +=offset
	}
	this.getPercent= function(){
		return (this.center_x  - this.left_pos)/this.width
	}
}