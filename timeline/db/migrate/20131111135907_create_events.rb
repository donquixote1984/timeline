class CreateEvents < ActiveRecord::Migration
  def up
    create_table :events, :id=>false  do |t|
	  t.string :id, :primary_key=>true
      t.date :start_time
      t.date :end_time
      t.timestamps
    end
    execute "ALTER TABLE events ADD PRIMARY KEY (id);"
  end

  def down
  	drop_table :events
  end
end
