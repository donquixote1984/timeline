function TimePeroid(){
	this.start_x =0 
}
function Career(){
	this.start = null
	this.start_YMD = null
	this.end = null
	this.end_YMD= null
	this.title=null
	this.end = null
	this.id = null
	this.bind_node =null
}
function Timeline(){

	this.timeline_container = null
	this.time_period = null
	this.time_spot = null
	this.time_period_control = null
	this.time_period_toggle = false
	this.time_period_content= null
	this.time_period_cursor =null
	this.time_period_start = false
	this.time_period_active_start_x = 0
	this.time_period_active = null
	this.now = new Date()
	this.career_list = []
	this.axis_list = []
	this.active_interval =8 
	this.width = 0
	this.interval_width =0 
	this.init = function(){
		this.id = "timeline"
		this.timeline_container = $("#"+this.id)
		this.time_period = this.timeline_container.find("#time-period")	
		this.time_spot = this.timeline_container.find("#time-spot")
		this.time_period_control = this.time_period.find(".control")
		this.time_period_cursor = this.time_period.find(".cursor")
		this.time_period_line = this.time_period.find(".line")
		this.time_period_content = this.time_period.find(".time-content")
		this.time_period_axis = this.time_period.find(".time-axis")
		this.init_control()
		this.width = this.time_period.width()
		this.interval_width = this.width/this.active_interval
		this.init_data()
	}
	this.init_data = function(){
		var _this = this
		$.getJSON("main/career.json",function(data){
			$.each(data,function(index,entry){
				var career = new Career()
				career.start= entry.start_time
				career.start_YMD = entry.start_time_YMD
				career.end = entry.end_time
				career.end_YMD = entry.end_time_YMD
				career.title = entry.title
				career.content= entry.content
				career.id = entry.id
				_this.career_list.push(career)
			})
			_this.init_time_axis()	
		})
	}
 	this.init_time_axis = function(){
 		var framewidth = this.time_period_content.width()
 		var scale_max = this.now.getFullYear()+1
 		var _this  = this
 		var index = 0
 		while(index<this.career_list.length){
 			var scale_node = $("<li class='scale'><div class='interval' id='year-interval-"+scale_max+"'>"+scale_max+"</div></li>")
 			this.time_period_content.find("ul").append(scale_node)
 			if(this.career_list.length>0){
 				this.career_list[index].start_YMD.year > scale_max
 				var career_node = $("<div class='career'>"+this.career_list[index].title+"</div>")
 				scale_node.append(career_node)
 				career_node.css({
 					"left": _this.time2offset(this.career_list[index]),
 					"width": _this.time2width(this.career_list[index])
 				})
 				index +=1
 			}
 			scale_max -=1

 		}
 	}
	this.init_control = function(){
		var time_button  = this.time_period_control.find(".time-button")
		var _this = this
		time_button.click(function(){
			if(time_button.attr("toggle")=="on"){
				time_button.attr("toggle","off")	
				time_button.removeClass("time-button-on")
				_this.time_period.find(".content").removeClass("markable")
				_this.time_peroid_toggle = false
			}
			else{
				time_button.attr("toggle","on")
				time_button.addClass("time-button-on")
				_this.time_period.find(".content").addClass("markable")
				_this.time_peroid_toggle = true
			}
			_this.refresh_event()
		}) 
	}
	this.refresh_event = function(){
		var _this  = this
		if(this.time_peroid_toggle){
			this.time_period_content.bind("mousemove",{"refer":_this},this.time_period_on_mouse_move)
			this.time_period_content.bind("mousedown",{"refer":_this},this.time_period_on_mouse_down)
			this.time_period_content.bind("mouseup",{"refer":_this},this.time_period_on_mouse_up)
		}
		else{
			this.time_period_content.bind("mousemove",this.time_period_off_mouse_move)
			this.time_period_content.bind("mousedown",this.time_period_off_mouse_down)
			this.time_period_content.bind("mouseup",this.time_period_off_mouse_up)			
		}
	}
	this.time2width = function(career){
		var start_time = career.start_YMD
		var end_time = career.end_YMD
		if(end_time == null){
			end_time = {
				year:this.now.getYear(),
				month:this.now.getMonth(),
				day:this.now.getDay()
			}
		}
		var m_width = this.interval_width/12
		return (end_time.year - start_time.year)*this.interval_width + (end_time.month - start_time.month)* m_width
	}	

	this.time2offset = function(career){
		return  career.start_YMD.month*100/12 + "%"
	}
	this.time_period_on_mouse_move = function(e){
		var _this = e.data.refer
		var x = e.clientX
		if(_this.time_period_start==false){
			_this.time_period_cursor.css({
				"left": x-10
			})
		}
		else{
			if(_this.time_period_active!=null){
				var x_start = _this.time_period_active_start_x
				var width = Math.abs(x - x_start)
				_this.time_period_active.css({
					"width":width
				})
				_this.time_period_active.css({
					"left":Math.min(x,x_start)
				})
			}
		}
	}

	this.time_period_on_mouse_down = function(e){
		var _this = e.data.refer
		var x = e.clientX
		_this.time_period_start = true
		_this.time_period_active_start_x = x
		_this.time_period_active = $("<div class='time_period_element'></div>")
		_this.time_period_active.css({
			"left":x
		})
		_this.time_period_content.append(_this.time_period_active)
	}


	this.time_period_on_mouse_up = function(e){
		var _this = e.data.refer
		var x = e.clientX
		_this.time_period_start = false
		_this.time_period_start_x = 0
	}

	this.init_time_period = function(){

	}
	this.init_time_period_toggle_on = function(){

	}


}