
Array.prototype.last = function(){
	return this[this.length-1]
}
function TimePeroid(){
	this.start_x =0 
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

	this.time_spot =null
	this.time_spot_content =null
	this.now = new Date()
	this.career_list = []
	this.career_node_list = []
	this.axis_list = []
	this.active_interval =8 
	this.event_interval = 6 
	this.width = 0
	this.interval_width =0 
	this.time_period_scroll_on = false

	this.year_nodes= {}

	this.center_node = null
	this.offset_check_num = 10

	this.init_offset = 0
	this.min_career_width = 200
	this.init = function(){
		this.id = "timeline"
		this.timeline_container = $("#"+this.id)
		this.time_period = this.timeline_container.find("#time-period")	
		this.time_spot = this.timeline_container.find("#time-spot")
		this.time_period_control = this.time_period.find(".control")
		this.time_period_cursor = this.time_period.find(".cursor")
		this.time_period_line = this.time_period.find(".line")
		this.time_period_content = this.time_period.find(".time-content")
		this.time_period_content_container = this.time_period.find(".time-content-container")
		this.time_period_axis = this.time_period.find(".time-axis")

		this.time_spot_content =this.time_spot.find(".content-container") 

		this.width = this.time_period.width()
		this.interval_width = this.width/this.active_interval
		this.init_data()
		this.refresh_event()
		this.init_control()

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
				career.color = entry.color
				career.id = entry.id
				if(entry.events!=null){
					$.each(entry.events,function(i,e){
						var ev = new Event()
						ev.start = e.start_time
						ev.start_YMD = e.start_time_YMD
						ev.end = e.end_time
						ev.end_YMD = e.end_time_YMD
						ev.content = e.cotent
						ev.data = e.data
						ev.id  =e.id
						career.events.push(ev)
					})
				}
				_this.career_list.push(career)
			})
			_this.init_time_axis()	
			_this.init_events()
		})
	}
 	this.init_time_axis = function(){
 		var framewidth = this.time_period_content.width()
 		var scale_max = this.now.getFullYear()
 		var _this  = this
 		var index = 0
 		var offset  = 0	
 		var scale_ruler= 0
 		while(index<this.career_list.length){
 			var scale_node = $("<li class='scale' ><div class='interval' id='year-interval-"+scale_max+"' ><span>"+scale_max+"</span></div></li>")
 			scale_node.width(this.interval_width)
 			scale_node.disableTextSelect()
 			this.time_period_content.find("ul").append(scale_node)
 			this.year_nodes[scale_max]=scale_node
 			if(this.career_list.length>0){
 				while(this.career_list[index]!=null&&this.career_list[index].start_YMD.year >= scale_max)
 				{
 					var career_node = $("<div class='career'>"+this.career_list[index].title+"</div>")
 					_this.career_list[index].bind_node = career_node
	 				scale_node.prepend(career_node)
	 				var scale_left = _this.time2offset(_this.career_list[index])
	 				var scale_width = _this.time2width(_this.career_list[index])
	 				if(scale_width<_this.min_career_width){
	 					career_node.width(_this.min_career_width)
	 					var k = _this.min_career_width / scale_width
	 					scale_node.width(scale_node.width()*k)
	 				}
	 				career_node.css({
	 					"left": scale_left,
	 					"width": scale_width,
	 					"background":_this.career_list[index].color
	 				})
	 				if(this.career_node_list.last()!=null){
	 					career_node.previous_node = this.career_node_list.last()
	 					this.career_node_list.last().next_node = career_node
	 				}
	 				this.career_node_list.push(career_node)
	 				if(index==0){
	 					offset = _this.time2offset_end(this.career_list[index]).offset
	 				}
	 				index +=1
 				}
 				
 			}
 			scale_max -=1

 		}
 		this.time_period_content.find("ul").children().first().width(this.current_time2width())
 		this.time_period_content.width((this.now.getFullYear() - scale_max+5)*this.interval_width)
 		this.init_offset  = _this.time_period.width()/2-_this.time_period_content.width()
 	}

 	this.init_events = function(){
 		var odd = false
 		var framewidth = this.time_spot.width()
 		var event_width = framewidth/this.event_interval
 		for(var i = 0 ;i<this.career_list.length;i++){
 			var events = this.career_list[i].events
 			var events_node = $("<div class='events'  id='events-"+this.career_list[i].id+"'><ul></ul></div>")
 			var events_node_ul = events_node.find("ul")
 			for(var j =0;j<events.length;j++){
 				odd = !odd
 				var odd_class = odd?"odd":"even"
 				var event_node = $("<li class='event' style='width:"+event_width+"px;'><div class='event-slot "+odd_class+"'><div class='event_detail' style='border:1px solid "+this.career_list[i].color+"'>"+events[j].data+"</div></div></li>")
 				events_node_ul.append(event_node)
 			}
 			this.time_spot_content.append(events_node)
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
			this.time_period_content.bind("mousemove",{"refer":_this},this.time_period_off_mouse_move)
			this.time_period_content.bind("mousedown",{"refer":_this},this.time_period_off_mouse_down)
			this.time_period_content.bind("mouseup",{"refer":_this},this.time_period_off_mouse_up)			
			this.time_period_content.bind("mouseleave",{"refer":_this},this.time_period_off_mouse_out)
		}
	}
	this.time2width = function(career){
		var start_time = career.start_YMD
		var end_time = career.end_YMD
		if(end_time == null){
			end_time = {
				year:this.now.getYear(),
				month:this.now.getMonth()+1,
				day:this.now.getDay()
			}
		}
		var m_width = this.interval_width/12
		return (end_time.year - start_time.year)*this.interval_width + (end_time.month - start_time.month)* m_width
	}	
	this.current_time2width = function(){
		return (this.now.getMonth()+1)/12*this.interval_width
	}
	this.time2offset = function(career){
		return  career.start_YMD.month*100/12 + "%"
	}

	this.time2offset_end = function(career){
		var end_time = career.end_time
		if(end_time == null||end_time.getTime()>this.now.getTime()){
			end_time = {
				year:this.now.getYear(),
				month:this.now.getMonth()+1,
				day:this.now.getDay()
			}
		}

		var return_node =this.year_nodes[end_time.year]
		var return_offset = 1-end_time.month/12
		return {
			"node":return_node,
			"offset": return_offset
		}
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
	this.time_period_off_mouse_down = function(e){
		var _this = e.data.refer
		var x = e.clientX
		_this.time_period_scroll_on = true
		_this.time_period_scroll_x = x
		_this.time_period_scroll_left_x = _this.time_period_content.offset().left
		
	}
	this.time_period_off_mouse_out = function(e){
		var _this = e.data.refer
		_this.time_period_scroll_on = false

	}
	this.time_period_off_mouse_move = function(e){
		var _this = e.data.refer
		var x = e.clientX
		if(_this.time_period_scroll_on){
			//_this.time_period_content_container.scrollLeft(_this.time_period_scroll_left_x+_this.time_period_scroll_x-x)
			var left = _this.time_period_content.offset().left
			var offset = _this.time_period_scroll_x-x

			if(_this.time_period_scroll_left_x-offset < _this.time_period.width()/2-_this.time_period_content.width()){
				_this.time_period_content.offset(
					{
						left:_this.time_period.width()/2-_this.time_period_content.width()
					}
				)
			}
			else{
				_this.time_period_content.offset(
					{
						left:_this.time_period_scroll_left_x-offset
					}
				)
			}
		}
	}

	this.check_center = function(offset){
		this.center_node.move(offset)
		if(!this.center_node.check()){
			this.re_loc_center(offset)
		}
	}
	this.re_loc_center = function(offset){
		var current_node = this.center_node.bind_node
		if(offset<0){
			if(current_node.previous_node!=null){
				current_node.previous_node
			}
		}
	}

	this.current_offset= function(){
		this.time_period_content.offset().left - _this.init_offset
	}

	this.time_period_off_mouse_up = function(e){
		var _this = e.data.refer
		_this.time_period_scroll_on = false
	}

	this.init_time_period = function(){

	}
	this.init_time_period_toggle_on = function(){

	}


}