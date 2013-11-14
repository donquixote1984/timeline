class CreateEventTimes < ActiveRecord::Migration
  def up
    create_table :event_times, :id=>false  do |t|
	  t.string :id, :primary=>true
      t.datetime :time
      t.integer :year
      t.integer :month
      t.integer :day
      t.text :content

      t.timestamps
    end

    execute "ALTER TABLE event_times ADD PRIMARY KEY (id);"

  end

  def down
    drop_table :event_times
  end
end
