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

	this.init = function(){
		this.id = "timeline"
		this.timeline_container = $("#"+this.id)
		this.time_period = this.timeline_container.find("#time-period")	
		this.time_spot = this.timeline_container.find("#time-spot")
		this.time_period_control = this.time_period.find(".control")
		this.time_period_cursor = this.time_period.find(".cursor")
		this.time_period_line = this.time_period.find(".line")
		this.time_period_content = this.time_period.find(".content")
		this.init_control()
	}

	this.init_control = function(){
		var time_button  = this.time_period_control.find(".time-button")
		var _this = this
		time_button.click(function(){
			if(time_button.attr("toggle")=="on")	{
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


	this.time_period_mouse_move = function(e){
		var content = this.time_period.find(".content")
		var _this= this
		content.mousemove(function(e){
			var x = e.clientX
			_this.time_period_cursor.left(x)
		})
	}
	this.time_period_mouse_down = function(){
		var content = this.time_period.find(".content")
		content.mousedown(function(e){

		})
	}
	this.init_time_period = function(){
		var content = this.time_period.find(".content")

	}
	this.init_time_period_toggle_on = function(){

	}


}