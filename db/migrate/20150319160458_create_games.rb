class CreateGames < ActiveRecord::Migration
  def change
  	create_table :games do |t|
  		t.float :time_taken
  		t.boolean :done, :default => false
  		t.timestamps null:false
  	end
  end
end
