class Career < ActiveRecord::Base
	include UUIDHelper
    #accepts_nested_attributes_for :events
    has_many :events, :order => 'start_time DESC'
    accepts_nested_attributes_for :events
end
