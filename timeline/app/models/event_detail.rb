class EventDetail < ActiveRecord::Base
	include UUIDHelper
	belongs_to :event_category
end
