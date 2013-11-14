class AddCareerIdToEvent < ActiveRecord::Migration
  def change
    add_column :events, :career_id, :string
  end
end
