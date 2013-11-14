class CreateEventTypes < ActiveRecord::Migration
  def change
    create_table :event_types do |t|
      t.string :type_string

      t.timestamps
    end
  end
end
