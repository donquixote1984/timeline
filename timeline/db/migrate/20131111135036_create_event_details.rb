class CreateEventDetails < ActiveRecord::Migration
  def up
    create_table :event_details, :id=>false  do |t|
	  t.string :id, :primary=>true
      t.integer :event_category_id
      t.text :title
      t.text :data
      t.text :content

      t.timestamps
    end

    execute "ALTER TABLE event_details ADD PRIMARY KEY (id);"
  end

  def down
  	drop_table :event_details
  end
end
