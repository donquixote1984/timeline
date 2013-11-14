class AddColorToCareer < ActiveRecord::Migration
  def change
    add_column :careers, :color, :string
  end
end
