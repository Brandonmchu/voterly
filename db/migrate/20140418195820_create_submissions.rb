class CreateSubmissions < ActiveRecord::Migration
  def change
    create_table :submissions do |t|
      t.decimal :income
      t.integer :ans_one
      t.integer :ans_two
      t.integer :ans_three

      t.timestamps
    end
  end
end
