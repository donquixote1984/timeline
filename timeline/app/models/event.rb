class Event < ActiveRecord::Base
	include UUIDHelper
	belongs_to :event_detail
	belongs_to :event_time
	belongs_to :event_type
	belongs_to :career
end
