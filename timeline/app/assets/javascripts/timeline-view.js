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
	this.width_range = {}

	this.max_time_width = 0
	this.min_time_width = 0 

	this.max_interval_width = 50 
	this.min_interval_width = 0
	this.time_month_max=0
	this.time_month_min = 10000000
	this.time_interval_max  = 0
	this.time_interval_min = 0

	this.time_period_scroll_x = 0
	this.time_period_scroll_left_x =0

	this.center_node = null
	this.content_width = 0
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
		//this.refresh_event()
		//this.init_control()

	}
	this._get_month_between = function(career){
		var year1 = career.start_YMD.year
		var month1 = career.start_YMD.month
		var year2,month2
		if(career.end_YMD == null){
			year2 = this.now.getFullYear()
			month2 = this.now.getMonth()+1
		}
		else{
			year2 = career.end_YMD.year
			month2 = career.end_YMD.month			
		}

		return (year2-year1)*12 + month2-month1
	}

	this._get_month_between_careers = function(career2,career1){
		var y1 = career1.end_YMD.year
		var m1 = career1.end_YMD.month
		var y2 = career2.start_YMD.year
		var m2 = career2.start_YMD.month
		return (y2-y1)*12 + m2-m1
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
				career.monthes = _this._get_month_between(career)
				career.interval_monthes = 0
				if(index>0||_this.career_list.last()!=null){
					var interval_month  =_this._get_month_between_careers(_this.career_list.last(), career)
					_this.career_list.last().interval_monthes =  interval_month
					if(interval_month > _this.time_interval_max){
						_this.time_interval_max = interval_month
					}
				}
				if(career.monthes>_this.time_month_max){
					_this.time_month_max = career.monthes
				}
				if(career.monthes<_this.time_month_min){
					_this.time_month_min = career.monthes
				}
				
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
			var framewidth = _this.time_period.width()
	 		_this.max_time_width = _this._get_max_time_width(framewidth)
	 		_this.min_time_width = framewidth/6
			_this.init_time_axis()	
			_this.init_controls()
			_this.init_career_events()
		})
	}

	this._get_max_time_width = function(framewidth){
		if(this.time_month_max>60){
			return framewidth/2
		}
		else if(this.time_month_max>30&&this.time_month_max<60){
			return framewidth/3
		}
		else {
			return framewidth/4
		}
	}
	this._get_time_width = function(month){
		return (month - this.time_month_min)/(this.time_month_max - this.time_month_min) * (this.max_time_width - this.min_time_width) + this.min_time_width
	}
	this._get_interval_width = function(month){
		return (month - this.time_interval_min)/(this.time_interval_max - this.time_interval_min) * (this.max_interval_width - this.min_interval_width) + this.min_interval_width
	}
	this.init_time_axis = function(){
 		var framewidth = this.time_period_content.width()
 		var _this  = this
 		var index = 0
 		var offset  = 0	
 		var scale_ruler= 0
 		var ruler  =0 
 		for(var i = 0;i<this.career_list.length;i++){
 			var career = this.career_list[i]
 			var career_dom_width = this._get_time_width(career.monthes)
 			ruler+=career_dom_width
 			var career_node =  $("<li class='v-timeline-period v-career' style='width:"+career_dom_width+"px;background:"+career.color+"' id='career-"+career.id+"' start='"+career.start_YMD.year+"/"+career.start_YMD.month+"'>"+
 				"<div class='v-career-left-time'>"+career.start_YMD.year+"/"+career.start_YMD.month+"</div>"+
 				"<div class='v-career-right-time'>"+career.end_YMD.year+"/"+career.end_YMD.month+"</div>"+
 				"<div class='v-career-content'>"+
 				"</div>"+
 			"</li>")
 			this.career_list[i].bind_node = career_node
 			career_node.index = i
 			career_node.right_pos = ruler

 			ruler+=career_dom_width

 			career_node.left_pos = ruler

 			career_node.disableTextSelect()
 			this.time_period_content.find("ul").append(career_node)
 			this.time_period_content.width(this.time_period_content.width()+career_node.width())
 			if(i==0){
 				continue
 			}
 			else{

 				var monthes = this.career_list[i].interval_monthes
 				var career_interval_dom_width = this._get_interval_width(monthes)
 				ruler+=career_interval_dom_width
 				var interval_node = $("<li class='v-timeline-period v-interval' style='width:"+career_interval_dom_width+"px;'>"+
 					"</li>")
 				this.time_period_content.find("ul").append(interval_node)
 				this.time_period_content.width(this.time_period_content.width()+interval_node.width())

 			}

 			this.career_node_list.push(career_node)
 		}

 		this.content_width = this.time_period_content.width()
 	}
 	this.init_controls = function(){
 		var _this  = this
		this.time_period_content.bind("mousemove",{"refer":this},this.time_period_mouse_move)
		this.time_period_content.bind("mousedown",{"refer":this},this.time_period_mouse_down)
		this.time_period_content.bind("mouseup",{"refer":this},this.time_period_mouse_up)			
		this.time_period_content.bind("mouseleave",{"refer":this},this.time_period_mouse_out)
 	}


	this.time_period_mouse_down = function(e){
		var _this = e.data.refer
		var x = e.clientX
		_this.time_period_scroll_on = true
		_this.time_period_scroll_x = x
		_this.time_period_scroll_left_x = _this.time_period_content.offset().left
		
	}
	this.time_period_mouse_out = function(e){
		var _this = e.data.refer
		_this.time_period_scroll_on = false
	}
	this.time_period_mouse_up = function(e){
		var _this = e.data.refer
		_this.time_period_scroll_on = false
	}
	this.time_period_mouse_move = function(e){
		var _this = e.data.refer
		var x = e.clientX
			//_this.time_period_content_container.scrollLeft(_this.time_period_scroll_left_x+_this.time_period_scroll_x-x)
		var left = _this.time_period_content.offset().left
		var offset = _this.time_period_scroll_x-x
		if(_this.time_period_scroll_on){
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
			_this.sync_events(_this.time_period_content.offset().left, this.content_width)
		}
		
	}

	this.sync_events = function(offset,width){
		this.relocate_center_node(offset,width)
	}
	this.check_range = function(offset,width,career_node){
		var current_offset = width-offset
			//return percentage
		return (current_offset - career_node.right_pos)/career_node.width()
	}
	this.relocate_center_node = function(offset,width){
		var current_offset = width-offset	
		if(current_offset>this.center_node.right_pos && current_offset<=this.center_node.left_pos){
			return
		}
		var index = this.center_node.index
		if(index == null){
			return
		}
		this.center_node = null
		if(current_offset < this.center_node.right_pos){
			for(var i =1;i<6;i++)	{
				if(index-i>0){
					var range_checker = check_range(this.career_node_list[index-i])
					// check interval
					if(range_checker>=0&&range_checker<1){
						//bingo
						this.center_node = this.career_node_list[index-i]
					}
				}
				else{
					break
				}
				
			}
		}
		else if(current_offset >= this.center_node.left_pos){
			for(var i =1;i<6;i++){
				if(index+i<this.career_node_list.lengh){
					var range_checker = check_range(this.career_node_list[index-i])
					// check interval
					if(range_checker>=0&&range_checker<1){
						//bingo
						this.center_node = this.career_node_list[index-i]
					}
				}
				else{
					break
				}
			}
		}
	}
	this.init_career_events = function(){
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



}