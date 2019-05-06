class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.text :description
      t.integer :user_id, null:false
      t.timestamps
    end
    add_index :channels, :user_id
  end
end
