class CreateCareers < ActiveRecord::Migration

  def up 
    create_table :careers,:id=>false do |t|
	    t.string :id,  :null=>false, :primary_key => true
      t.date :start
      t.date :end
      t.string :title
      t.text :content
      t.string :c1
      t.integer :c2
      t.string :c3
      t.string :c4

      t.timestamps
    end
    execute "ALTER TABLE careers ADD PRIMARY KEY (id);"
  end

  def down
    drop_table :careers
  end
end
