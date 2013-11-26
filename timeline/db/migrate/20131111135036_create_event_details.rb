class CreateEventDetails < ActiveRecord::Migration
  def up
    create_table :event_details, :id=>false  do |t|
	  t.string :id, :primary=>true
      t.integer :event_category_id
      t.text :title
      t.text :data
      t.text :content
      t.text :c1
      t.text :c2
      t.text :c3
      t.text :c4
      t.timestamps
    end

    execute "ALTER TABLE event_details ADD PRIMARY KEY (id);"
  end

  def down
  	drop_table :event_details
  end
end
