class MainController < ApplicationController
  def index
    @server_date =Time.now.strftime("%Y/%m/%d") 
  end

  def career
    @year_history = APP_CONFIG["year_history"]
    @careers = Career.order("start_time desc").limit(@year_history)
    respond_to do |format|
      format.json { render json: custom_json_for(@careers)}
    end
  end

  private
   def custom_json_for(value)
      list = value.map do |client|
        { :id => " #{client.id}",
          :start_time => client.start_time,
          :start_time_YMD=>{
            :year=>client.start_time.year,
            :month=>client.start_time.month,
            :day =>client.start_time.day
          },
          :end_time=>client.end_time,
          :end_time_YMD=>{
            :year=>client.end_time.year,
            :month=>client.end_time.month,
            :day=>client.end_time.day
          },
          :title=>client.title,
          :content=>client.content,
          :color=>client.color,
          :events =>custom_json_for_events(client),
          :link => client.c1,
          :name => client.c3
        }
      end
      list.to_json
   end

   def custom_json_for_events(career)
      events = career.events
      if events.size>0
        list = events.map do |client|{
           :id =>client.id,
          :start_time => client.start_time,
          :start_time_YMD => {
            :year=>client.start_time.year,
            :month=>client.start_time.month,
            :day=>client.start_time.day
          },
          :end_time=>client.end_time,
          :end_time_YMD=>{
            :year=>client.end_time.year,
            :month=>client.end_time.month,
            :day=>client.end_time.day
          },
          :data=>client.event_detail.data,
          :content=>client.event_detail.content,
          :category=>client.event_detail.event_category.category,
          :title=>client.event_detail.title
        } 
        end
    end
 end

end
=begin
         
  
=end