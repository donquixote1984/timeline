class CreateEvents < ActiveRecord::Migration
  def up
    create_table :events, :id=>false  do |t|
	  t.string :id, :primary_key=>true
      t.string :event_time_id
      t.integer :event_type_id
      t.timestamps
    end
    execute "ALTER TABLE events ADD PRIMARY KEY (id);"
  end

  def down
  	drop_table :events
  end
end
