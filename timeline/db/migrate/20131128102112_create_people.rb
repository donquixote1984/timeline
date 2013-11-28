class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people, :id=>false do |t|
      t.string :id, :null=>false, :primary_key => true
      t.string :name
      t.string :icon
      t.integer :age
      t.string :mail
      t.text :detail
      t.string :city
      t.text :address
      t.text :c1
      t.text :c2
      t.string :c3
      t.string :c4

      t.timestamps
    end
    execute "ALTER TABLE people ADD PRIMARY KEY (id);"
  end
end
