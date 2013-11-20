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


	this.time_month_max=0
	this.time_month_min = 10000000

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
			var framewidth = _this.time_period_content.width()
	 		_this.max_time_width = _get_max_time_width(framewidth)
	 		_this.min_time_width = framewidth/6
			_this.init_time_axis()	
			//_this.init_events()
		})
	}
	this.init_range = function(){
		var framewidth = this.time_period_content.width()
		for(var i =0;i<120;i++){
			range[i] = 
		}
	}
	this._get_max_time_width(framewidth){
		if(this.time_month_max>60){
			return framewidth/2
		}
		else if(this.time_month_max>36&&max<60){
			return framewidth/3
		}
		else {
			return framewidth/4
		}
	}
	this._get_time_width(month){
		return (month - this.time_month_min)/(this.time_month_max - this.time_month_min) * (this.max_time_width - this.min_time_width) + this.min_time_width
	}

	this.init_time_axis = function(){
 		var framewidth = this.time_period_content.width()
 		var _this  = this
 		var index = 0
 		var offset  = 0	
 		var scale_ruler= 0

 		for(var i = 0;i<this.career_list.length;i++){
 			var career = this.career_list[i]
 			var career_dom_width = this._get_time_width(career.monthes)
 			var career_node =  $("<li class='v-career' style='width:"+career_dom_width+"px;background:"+career.color+"' id='career-"+career.id+"' start='"+career.start_YMD.year+"/"+career.start_YMD.month+"'>"+
 				"<div class='v-career-left-time'>"+career.start_YMD.year+"/"+career.start_YMD.month+"</div>"+
 				"<div class='v-career-right-time'>"+career.start_YMD.year+"/"+career.start_YMD.month+"</div>"+
 				"<div class='v-career-content'>"+
 				"</div>"+
 			"</li>")
 			career_node.disableTextSelect()
 			this.time_period_content.find("ul").append(scale_node)
 		}
 	}

}