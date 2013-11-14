class AddEventDetailIdToEvent < ActiveRecord::Migration
  def change
    add_column :events, :event_detail_id, :string
  end
end
