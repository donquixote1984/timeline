$(function(){
     var now = null
     var server_date = $("#now").text()
     if(server_date == null){
        now = new Date()
     }
     else{
        now = new Date(Date.parse(server_date))
        if(isNaN(now.getTime())){
            now = new Date()
        }
     }
	var timeline = new Timeline()
     timeline.now = now
	timeline.init()
})